import { NextResponse } from "next/server";
import { klaviyoEnabled, klaviyoSubscribe } from "@/lib/klaviyo";

// Diagnostic only: reports which Klaviyo env vars the server runtime can see and
// (with ?test=1) attempts a real subscribe. ?raw=1 reports key shape + a direct
// auth test. Never returns the private key value.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const out: Record<string, unknown> = {
    runtime_companyId: Boolean(process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID),
    runtime_privateKey: Boolean(process.env.KLAVIYO_PRIVATE_API_KEY),
    runtime_listId: process.env.KLAVIYO_LEADS_LIST_ID ?? null,
    module_klaviyoEnabled: klaviyoEnabled,
  };

  if (params.get("raw") === "1") {
    const key = process.env.KLAVIYO_PRIVATE_API_KEY ?? "";
    out.key_len = key.length;
    out.key_trim_len = key.trim().length;
    out.key_has_whitespace = key !== key.trim();
    // Auth test with the RAW (untrimmed) key — reproduces what the lead pipeline hit.
    const r = await fetch("https://a.klaviyo.com/api/accounts/", {
      headers: { Authorization: `Klaviyo-API-Key ${key}`, revision: "2024-10-15", accept: "application/json" },
    });
    out.raw_auth_status = r.status;
    out.raw_auth_body = (await r.text()).slice(0, 200);
  }

  if (params.get("test") === "1") {
    out.subscribe_result = await klaviyoSubscribe({
      email: "health-check@thepos.co.uk",
      firstName: "Health",
      company: "Health Check",
      properties: { lead_source: "health-check" },
    });
  }
  return NextResponse.json(out);
}
