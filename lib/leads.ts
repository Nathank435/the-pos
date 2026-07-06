/* Lead types + server-side persistence + Klaviyo sync.
 * Works with zero external services (writes to ./.leads/*.json + logs).
 * Wire Supabase / a webhook / Klaviyo via env vars - see .env.example. */

import { promises as fs } from "node:fs";
import path from "node:path";
import { klaviyoSubscribe, klaviyoTrack } from "./klaviyo";
import { normalizeBusiness, normalizeTurnover, normalizePriority, turnoverValue, recommendedProvider } from "./leadTaxonomy";

export type LeadSource = "quiz" | "calculator" | "quote-form";

export type LeadPayload = {
  // identity (always present)
  firstName: string;
  company: string;
  email: string;
  phone?: string;
  consent: boolean;
  leadSource: LeadSource;
  sourcePage: string;
  value: number; // estimated £ lead value
  // qualifying (quote form, optional)
  name?: string;
  businessType?: string;
  monthlyTurnover?: string;
  needsCardMachine?: boolean;
  needsFullPOS?: boolean;
  needsOnlinePayments?: boolean;
  locations?: string;
  currentProvider?: string;
  priority?: string;
  postcode?: string;
  // magnet context
  quizTopMatch?: string;
  cheapestProvider?: string;
  estMonthlyFee?: string;
  /** Split consent: true only if the optional marketing box was ticked. */
  marketingOptIn?: boolean;
  // attribution
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  gclid?: string;
};

export type LeadValidation = { ok: true; lead: LeadPayload } | { ok: false; errors: string[] };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Server-side validation. Handles both the quote form and the lighter magnets. */
export function validateLead(input: unknown): LeadValidation {
  const errors: string[] = [];
  const d = (input ?? {}) as Record<string, unknown>;

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const bool = (v: unknown) => v === true || v === "true" || v === "on";

  const fullName = str(d.name);
  const firstName = str(d.firstName) || fullName.split(/\s+/)[0] || "";
  const company = str(d.company) || str(d.businessName);
  const email = str(d.email);

  // Calculator capture is email-only (ungated results); other sources need full identity.
  const emailOnly = str(d.leadSource) === "calculator";
  if (!firstName && !emailOnly) errors.push("First name is required.");
  if (!company && !emailOnly) errors.push("Company name is required.");
  if (!EMAIL_RE.test(email)) errors.push("A valid email is required.");
  if (!bool(d.consent)) errors.push("Consent is required to proceed.");

  if (errors.length) return { ok: false, errors };

  const sourceRaw = str(d.leadSource);
  const leadSource: LeadSource =
    sourceRaw === "quiz" || sourceRaw === "calculator" ? sourceRaw : "quote-form";
  const monthlyTurnover = str(d.monthlyTurnover) || undefined;

  const lead: LeadPayload = {
    firstName,
    company,
    email,
    phone: str(d.phone) || undefined,
    consent: true,
    leadSource,
    sourcePage: str(d.sourcePage) || "unknown",
    value: turnoverValue(monthlyTurnover),
    name: fullName || undefined,
    businessType: str(d.businessType) || undefined,
    monthlyTurnover,
    needsCardMachine: bool(d.needsCardMachine),
    needsFullPOS: bool(d.needsFullPOS),
    needsOnlinePayments: bool(d.needsOnlinePayments),
    locations: str(d.locations) || undefined,
    currentProvider: str(d.currentProvider) || undefined,
    priority: str(d.priority) || undefined,
    postcode: str(d.postcode) || undefined,
    quizTopMatch: str(d.quizTopMatch) || undefined,
    cheapestProvider: str(d.cheapestProvider) || undefined,
    estMonthlyFee: str(d.estMonthlyFee) || undefined,
    marketingOptIn: d.marketingOptIn === undefined ? undefined : bool(d.marketingOptIn),
    utmSource: str(d.utmSource) || undefined,
    utmMedium: str(d.utmMedium) || undefined,
    utmCampaign: str(d.utmCampaign) || undefined,
    gclid: str(d.gclid) || undefined,
  };

  return { ok: true, lead };
}

const KLAVIYO_METRIC: Record<LeadSource, string> = {
  quiz: "Completed Quiz",
  calculator: "Used Fee Calculator",
  "quote-form": "Requested POS Quotes",
};

/** Persist a lead through whatever sinks are configured + sync to Klaviyo. Never throws. */
export async function storeLead(lead: LeadPayload): Promise<{ stored: string[] }> {
  const record = { ...lead, receivedAt: new Date().toISOString() };
  const stored: string[] = [];
  let persisted = false; // true once a durable store (supabase/webhook) succeeds

  // 1. Supabase
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
      if (res.ok) {
        stored.push("supabase");
        persisted = true;
      }
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
      if (res.ok) {
        stored.push("webhook");
        persisted = true;
      }
    } catch (err) {
      console.error("[leads] webhook post failed", err);
    }
  }

  // 3. Klaviyo - subscribe profile + track the source-specific metric.
  // Normalise to canonical taxonomy so quiz / quote-form / calculator all write
  // the SAME values: <field> = segment slug, <field>_label = friendly display.
  const biz = normalizeBusiness(lead.businessType);
  const turn = normalizeTurnover(lead.monthlyTurnover);
  const prio = normalizePriority(lead.priority);
  const rec = recommendedProvider({
    quizTopMatch: lead.quizTopMatch,
    cheapestProvider: lead.cheapestProvider,
    businessSlug: biz?.slug,
  });

  const subscribed = await klaviyoSubscribe({
    email: lead.email,
    firstName: lead.firstName,
    company: lead.company,
    properties: {
      company_phone: lead.phone,
      lead_source: lead.leadSource,
      marketing_opt_in: lead.marketingOptIn,
      // canonical slugs (segment on these)
      business_type: biz?.slug,
      business_category: biz?.category,
      monthly_turnover: turn?.slug,
      priority: prio?.slug,
      // friendly labels (use in email dynamic fields)
      business_type_label: biz?.label,
      monthly_turnover_label: turn?.label,
      priority_label: prio?.label,
      // personalised recommendation
      recommended_provider: rec?.name,
      recommended_provider_url: rec?.url,
      // flags + context
      needs_card_machine: lead.needsCardMachine,
      needs_full_pos: lead.needsFullPOS,
      current_provider: lead.currentProvider,
      quiz_top_match: lead.quizTopMatch,
      cheapest_provider: lead.cheapestProvider,
      est_monthly_fee: lead.estMonthlyFee,
      lead_value: lead.value,
      utm_source: lead.utmSource,
      utm_medium: lead.utmMedium,
      utm_campaign: lead.utmCampaign,
      gclid: lead.gclid,
    },
  });
  if (subscribed) {
    stored.push("klaviyo");
    await klaviyoTrack(KLAVIYO_METRIC[lead.leadSource], lead.email, {
      lead_source: lead.leadSource,
      business_type: biz?.slug,
      business_category: biz?.category,
      monthly_turnover: turn?.slug,
      priority: prio?.slug,
      recommended_provider: rec?.name,
      quiz_top_match: lead.quizTopMatch,
      cheapest_provider: lead.cheapestProvider,
      est_monthly_fee: lead.estMonthlyFee,
      value: lead.value,
    });
  }

  // 4. Local file fallback (only when no durable store is configured)
  if (!persisted) {
    try {
      const dir = path.join(process.cwd(), ".leads");
      await fs.mkdir(dir, { recursive: true });
      const file = path.join(dir, `${Date.now()}-${slugify(lead.company)}.json`);
      await fs.writeFile(file, JSON.stringify(record, null, 2), "utf8");
      stored.push("local-file");
    } catch (err) {
      console.error("[leads] local file write failed", err);
    }
  }

  console.info(`[leads] ${lead.leadSource} lead from ${record.email} (${record.company}) → ${stored.join(", ") || "log-only"}`);

  return { stored };
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40) || "lead";
}
