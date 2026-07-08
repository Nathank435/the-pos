import type { Provider } from "@/data/providers";

export type AffiliateContext = {
  pageType: "review" | "comparison" | "calculator" | "home" | "vs" | "hub" | "guide";
  position: "hero" | "table" | "card" | "sticky" | "verdict" | "row";
  slug?: string;
};

/** Outbound provider URL with a SubID for reconciling clicks against network reports.
 *  Falls back to the quote URL, then the review page, if no affiliate link exists. */
export function buildAffiliateUrl(provider: Provider, ctx: AffiliateContext): string {
  const raw = provider.affiliateUrl || provider.quoteUrl;
  if (!raw) return `/reviews/${provider.slug}`;
  try {
    const url = new URL(raw);
    // impact.com tracking domains (e.g. shopify.pxf.io) read subId1; others get a generic subid.
    const param = url.hostname.endsWith("pxf.io") ? "subId1" : "subid";
    url.searchParams.set(param, [ctx.pageType, ctx.slug ?? provider.slug, ctx.position].join("-"));
    return url.toString();
  } catch {
    return raw;
  }
}

/** Derive the analytics page_type from a legacy sourcePage string ("review-header",
 *  "compare-card-machines", …). Kept here so every CTA reports the same taxonomy. */
export function pageTypeFromSource(sourcePage: string): AffiliateContext["pageType"] {
  if (sourcePage.includes("compare")) return "comparison";
  for (const t of ["calculator", "home", "vs", "hub", "guide"] as const) {
    if (sourcePage.includes(t)) return t;
  }
  return "review";
}

/** One shape for every affiliate_click event - keeps GA4 params consistent
 *  across the CTA button, sticky bar and calculator rows. */
export function affiliateClickProps(provider: Provider, ctx: AffiliateContext) {
  return {
    provider: provider.slug,
    page_type: ctx.pageType,
    position: ctx.position,
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  };
}
