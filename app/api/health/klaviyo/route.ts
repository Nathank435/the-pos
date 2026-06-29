import { NextResponse } from "next/server";

// Diagnostic only: reports which Klaviyo env vars the server runtime can see.
// Never returns the private key value — booleans + the (non-secret) list id.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    companyId: Boolean(process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID),
    privateKey: Boolean(process.env.KLAVIYO_PRIVATE_API_KEY),
    privateKeyPrefix: process.env.KLAVIYO_PRIVATE_API_KEY?.slice(0, 3) ?? null,
    listId: process.env.KLAVIYO_LEADS_LIST_ID ?? null,
  });
}
