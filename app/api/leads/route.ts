import { NextResponse } from "next/server";
import { validateLead, storeLead } from "@/lib/leads";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: ["Invalid request body."] }, { status: 400 });
  }

  const result = validateLead(body);
  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 422 });
  }

  const { stored } = await storeLead(result.lead);
  return NextResponse.json({ ok: true, stored }, { status: 201 });
}
