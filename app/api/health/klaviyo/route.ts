import { NextResponse } from "next/server";
import { klaviyoEnabled, klaviyoSubscribe } from "@/lib/klaviyo";

// Diagnostic only: reports which Klaviyo env vars the server runtime can see and
// (with ?test=1) attempts a real subscribe so we can see the module-level state.
// Never returns the private key value.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const test = new URL(request.url).searchParams.get("test") === "1";
  const out: Record<string, unknown> = {
    // process.env read at request time:
    runtime_companyId: Boolean(process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID),
    runtime_privateKey: Boolean(process.env.KLAVIYO_PRIVATE_API_KEY),
    runtime_listId: process.env.KLAVIYO_LEADS_LIST_ID ?? null,
    // module-level state from lib/klaviyo.ts (read when the module first loaded):
    module_klaviyoEnabled: klaviyoEnabled,
  };
  if (test) {
    out.subscribe_result = await klaviyoSubscribe({
      email: "health-check@thepos.co.uk",
      firstName: "Health",
      company: "Health Check",
      properties: { lead_source: "health-check" },
    });
  }
  return NextResponse.json(out);
}
