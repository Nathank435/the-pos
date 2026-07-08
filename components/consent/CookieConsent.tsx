"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

/* Cookie consent banner (UK GDPR/PECR).
 * Works with Google Consent Mode v2 (defaults set in ConsentModeDefault):
 *  - Accept  -> gtag consent update = granted + load Klaviyo onsite
 *  - Reject  -> stays denied (non-essential cookies never fire)
 * Choice persisted in localStorage so it's restored on return visits.
 * Reject is as easy as Accept (one click), as required. */

const KEY = "tp_consent";
const KLAVIYO_COMPANY_ID = process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "xg9gtnydbm";

type Choice = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function applyConsent(choice: Choice) {
  const v = choice === "granted" ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v,
    analytics_storage: v,
  });
}

export function CookieConsent() {
  // null = undecided (show banner); otherwise the stored choice.
  const [choice, setChoice] = useState<Choice | null | undefined>(undefined);

  useEffect(() => {
    let stored: Choice | null = null;
    try {
      const v = localStorage.getItem(KEY);
      if (v === "granted" || v === "denied") stored = v;
    } catch {
      /* ignore */
    }
    setChoice(stored);
  }, []);

  function decide(next: Choice) {
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* ignore */
    }
    applyConsent(next);
    setChoice(next);
  }

  // Load Klaviyo onsite + Microsoft Clarity only once consent is granted.
  const consented = choice === "granted";
  const klaviyoEnabled = consented && Boolean(KLAVIYO_COMPANY_ID);
  const clarityEnabled = consented && Boolean(CLARITY_ID);

  return (
    <>
      {klaviyoEnabled && (
        <Script
          id="klaviyo-onsite"
          strategy="afterInteractive"
          src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_COMPANY_ID}`}
        />
      )}

      {clarityEnabled && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${CLARITY_ID}");`}
        </Script>
      )}

      {choice === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[70] border-t border-border bg-white px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 shadow-[0_-8px_30px_rgba(15,23,42,0.12)]"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-grey">
              We use cookies to run the site and, with your consent, to measure traffic and improve it. You can accept
              or reject non-essential cookies.{" "}
              <Link href="/cookie-policy" className="font-medium text-deepblue underline">
                Cookie policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={() => decide("denied")}
                className="rounded-md border border-border bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-cream"
              >
                Reject
              </button>
              <button
                onClick={() => decide("granted")}
                className="rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-hover"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
