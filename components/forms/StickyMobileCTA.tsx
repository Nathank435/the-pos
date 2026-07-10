"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Star, X, ExternalLink } from "lucide-react";
import type { Provider } from "@/data/providers";
import { buildAffiliateUrl, affiliateClickProps } from "@/lib/affiliate";
import { track } from "@/lib/analytics";

/** Sticky bottom CTA on mobile for high-intent pages.
 *  Generic variant: Compare + Get Matched. Provider variant (reviews): name +
 *  rating + affiliate CTA, shown after 25% scroll and dismissible.
 *  Respects the iOS home-indicator safe area; the footer adds matching bottom
 *  padding so page content is never hidden behind it. */
export function StickyMobileCTA({ provider }: { provider?: Provider }) {
  const [visible, setVisible] = useState(!provider); // generic variant shows immediately
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!provider) return;
    const onScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
      if (scrolled > 0.25) setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [provider]);

  if (dismissed || !visible) return null;

  const outbound = provider && provider.affiliateUrl;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-cream/95 px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-2">
        {provider && outbound ? (
          <>
            <div className="flex min-w-0 items-center gap-1.5 pl-1">
              <span className="truncate text-sm font-bold text-navy">{provider.name}</span>
              <span className="flex items-center gap-0.5 text-xs font-semibold text-navy">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                {provider.editorialRating.overall.toFixed(1)}
              </span>
            </div>
            <a
              href={buildAffiliateUrl(provider, { pageType: "review", position: "sticky" })}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() => track("affiliate_click", affiliateClickProps(provider, { pageType: "review", position: "sticky" }))}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-md bg-accent py-3 text-center text-sm font-bold text-white"
            >
              See {provider.name}&apos;s prices <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              aria-label="Dismiss"
              onClick={() => setDismissed(true)}
              className="rounded p-2 text-grey hover:bg-white"
            >
              <X className="h-4 w-4" />
            </button>
          </>
        ) : (
          <>
            <Link
              href="/compare-pos-systems"
              className="flex-1 rounded-md border border-border bg-white py-3 text-center text-sm font-semibold text-navy"
            >
              Compare
            </Link>
            <Link
              href="/get-pos-quotes"
              className="flex-1 rounded-md bg-accent py-3 text-center text-sm font-bold text-white"
            >
              Get Matched
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
