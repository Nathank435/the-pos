/* Lead types + server-side persistence.
 * Works with zero external services (writes to ./.leads/*.json + logs).
 * Wire Supabase / a webhook / email by setting env vars — see .env.example. */

import { promises as fs } from "node:fs";
import path from "node:path";

export type LeadPayload = {
  businessType: string;
  monthlyTurnover: string;
  needsCardMachine: boolean;
  needsFullPOS: boolean;
  needsOnlinePayments?: boolean;
  locations?: string;
  currentProvider?: string;
  priority: string;
  name: string;
  businessName: string;
  email: string;
  phone?: string;
  postcode?: string;
  consent: boolean;
  sourcePage: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  gclid?: string;
};

export type LeadValidation = { ok: true; lead: LeadPayload } | { ok: false; errors: string[] };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Server-side validation. Mirrors the client form but never trusts it. */
export function validateLead(input: unknown): LeadValidation {
  const errors: string[] = [];
  const d = (input ?? {}) as Record<string, unknown>;

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const bool = (v: unknown) => v === true || v === "true" || v === "on";

  const name = str(d.name);
  const businessName = str(d.businessName);
  const email = str(d.email);
  const businessType = str(d.businessType);
  const priority = str(d.priority);

  if (!name) errors.push("Name is required.");
  if (!businessName) errors.push("Business name is required.");
  if (!EMAIL_RE.test(email)) errors.push("A valid email is required.");
  if (!businessType) errors.push("Business type is required.");
  if (!bool(d.consent)) errors.push("Consent is required to proceed.");

  if (errors.length) return { ok: false, errors };

  const lead: LeadPayload = {
    businessType,
    monthlyTurnover: str(d.monthlyTurnover),
    needsCardMachine: bool(d.needsCardMachine),
    needsFullPOS: bool(d.needsFullPOS),
    needsOnlinePayments: bool(d.needsOnlinePayments),
    locations: str(d.locations) || undefined,
    currentProvider: str(d.currentProvider) || undefined,
    priority,
    name,
    businessName,
    email,
    phone: str(d.phone) || undefined,
    postcode: str(d.postcode) || undefined,
    consent: true,
    sourcePage: str(d.sourcePage) || "unknown",
    utmSource: str(d.utmSource) || undefined,
    utmMedium: str(d.utmMedium) || undefined,
    utmCampaign: str(d.utmCampaign) || undefined,
    gclid: str(d.gclid) || undefined,
  };

  return { ok: true, lead };
}

/** Persist a lead through whatever sinks are configured. Never throws. */
export async function storeLead(lead: LeadPayload): Promise<{ stored: string[] }> {
  const record = { ...lead, receivedAt: new Date().toISOString() };
  const stored: string[] = [];

  // 1. Supabase (REST insert; no SDK dependency required)
  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify(record),
      });
      if (res.ok) stored.push("supabase");
    } catch (err) {
      console.error("[leads] supabase insert failed", err);
    }
  }

  // 2. Webhook (Google Sheets / Zapier / CRM)
  if (process.env.LEADS_WEBHOOK_URL) {
    try {
      const res = await fetch(process.env.LEADS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      if (res.ok) stored.push("webhook");
    } catch (err) {
      console.error("[leads] webhook post failed", err);
    }
  }

  // 3. Local file fallback (dev / no external services configured)
  if (stored.length === 0) {
    try {
      const dir = path.join(process.cwd(), ".leads");
      await fs.mkdir(dir, { recursive: true });
      const file = path.join(dir, `${Date.now()}-${slugify(lead.businessName)}.json`);
      await fs.writeFile(file, JSON.stringify(record, null, 2), "utf8");
      stored.push("local-file");
    } catch (err) {
      console.error("[leads] local file write failed", err);
    }
  }

  // Always log so a lead is never silently lost.
  console.info(`[leads] new lead from ${record.email} (${record.businessName}) → ${stored.join(", ") || "log-only"}`);

  return { stored };
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40) || "lead";
}
