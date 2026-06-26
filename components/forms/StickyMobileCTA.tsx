import Link from "next/link";

/** Sticky bottom CTA on mobile for high-intent pages.
 *  Respects the iOS home-indicator safe area; the footer adds matching bottom
 *  padding so page content is never hidden behind it. */
export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-cream/95 px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-2">
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
      </div>
    </div>
  );
}
