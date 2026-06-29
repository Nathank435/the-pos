import { NextResponse } from "next/server";
import { klaviyoSubscribe, klaviyoTrack } from "@/lib/klaviyo";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Lightweight newsletter signup → Klaviyo (same list, tagged lead_source=newsletter).
 *  Flows are filtered to quiz/calculator lead_source, so newsletter signups don't
 *  enter lead nurture - segment on lead_source=newsletter for campaign sends. */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const d = (body ?? {}) as Record<string, unknown>;
  const email = typeof d.email === "string" ? d.email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 422 });
  }

  const firstName = typeof d.firstName === "string" ? d.firstName.trim() : undefined;
  const source = typeof d.source === "string" ? d.source.trim() : "footer";

  const subscribed = await klaviyoSubscribe({
    email,
    firstName: firstName || undefined,
    properties: { lead_source: "newsletter", signup_source: source },
  });
  if (subscribed) {
    await klaviyoTrack("Subscribed to Newsletter", email, { signup_source: source });
  }

  // Never fail the UX on a Klaviyo hiccup; log-only fallback lives in klaviyo.ts.
  console.info(`[newsletter] ${email} (${source}) → ${subscribed ? "klaviyo" : "log-only"}`);
  return NextResponse.json({ ok: true }, { status: 201 });
}
