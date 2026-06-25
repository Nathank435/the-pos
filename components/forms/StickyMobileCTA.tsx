import Link from "next/link";

/** Sticky bottom CTA on mobile for high-intent pages. */
export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-cream/95 p-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-2">
        <Link
          href="/compare-pos-systems"
          className="flex-1 rounded-xl border border-border bg-white py-3 text-center text-sm font-semibold text-navy"
        >
          Compare
        </Link>
        <Link
          href="/get-pos-quotes"
          className="flex-1 rounded-xl bg-accent py-3 text-center text-sm font-semibold text-white"
        >
          Get Quotes
        </Link>
      </div>
    </div>
  );
}
