"use client";

import Script from "next/script";

/* ------------------------------------------------------------------ *
 * Provider-agnostic analytics.                                        *
 *                                                                     *
 * <Analytics /> injects whichever scripts are configured via env.     *
 * track() fans a single event out to every configured provider.       *
 * If nothing is configured, everything safely no-ops (and logs in dev *
 * so you can still see events firing).                                *
 * ------------------------------------------------------------------ */

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";

/** Canonical event names used across the site (GA4 / GTM taxonomy).
 *  Primary conversions (mark as Key Events in GA4): affiliate_click, lead_submit,
 *  quiz_complete, calculator_lead, newsletter_signup, phone_click.
 *  Everything else is a secondary / engagement event. */
export type AnalyticsEvent =
  // Primary conversions
  | "affiliate_click" // outbound click to a provider (revenue)
  | "lead_submit" // quote/match form completed
  | "lead_form_submit" // alias kept for back-compat
  | "quiz_complete" // quiz finished
  | "calculator_lead" // email captured from the calculator
  | "newsletter_signup"
  | "phone_click"
  | "email_click"
  // Secondary / engagement
  | "provider_cta_click"
  | "lead_form_start"
  | "lead_form_step"
  | "quiz_start"
  | "quiz_question_answered"
  | "calculator_start"
  | "calculator_completed"
  | "comparison_filter_used"
  | "comparison_sort_used"
  | "magnet_view" // lead-magnet capture form shown
  | "magnet_submit" // lead-magnet capture form completed (quiz/calculator)
  | "exit_intent_view" // exit-intent modal shown
  | "exit_intent_click" // exit-intent modal CTA clicked (→ fee calculator)
  | "exit_intent_dismiss" // exit-intent modal dismissed
  | "content_view" // guide / blog / review view
  | "quote_page_view"
  | "scroll_depth"
  | "phone_email_click"; // legacy alias

type Props = Record<string, string | number | boolean | undefined>;

export function track(event: AnalyticsEvent, props: Props = {}): void {
  if (typeof window === "undefined") return;

  // GTM dataLayer - primary route. GTM tags forward these to GA4 (and anywhere else).
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...props });

  // Plausible
  const plausible = (window as unknown as { plausible?: (e: string, o?: { props: Props }) => void }).plausible;
  if (plausible) plausible(event, { props });

  // GA4
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (gtag) gtag("event", event, props);

  // PostHog
  const posthog = (window as unknown as { posthog?: { capture: (e: string, p?: Props) => void } }).posthog;
  if (posthog) posthog.capture(event, props);

  if (!plausible && !gtag && !posthog && process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.info(`[analytics] ${event}`, props);
  }
}

export function Analytics() {
  return (
    <>
      {PLAUSIBLE_DOMAIN && (
        <Script
          defer
          data-domain={PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.tagged-events.js"
          strategy="afterInteractive"
        />
      )}

      {GA4_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');`}
          </Script>
        </>
      )}

      {POSTHOG_KEY && (
        <Script id="posthog-init" strategy="afterInteractive">
          {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('${POSTHOG_KEY}',{api_host:'${POSTHOG_HOST}'})`}
        </Script>
      )}

      {/* Klaviyo onsite is loaded by <CookieConsent> only after consent is granted. */}
    </>
  );
}
