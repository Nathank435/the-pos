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
