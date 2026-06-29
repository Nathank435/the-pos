import Link from "next/link";
import { VERSUS_PAGES } from "@/data/versusPages";
import { getProvider } from "@/data/providers";

/** Internal-link module: lists every head-to-head comparison page.
 *  Surfaces the /compare/[slug] pages from the hubs (SEO + navigation). */
export function VersusLinks({ heading = "Popular head-to-head comparisons" }: { heading?: string }) {
  if (VERSUS_PAGES.length === 0) return null;
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-navy">{heading}</h2>
      <p className="mt-2 text-grey">Straight, side-by-side verdicts on the matchups people ask about most.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {VERSUS_PAGES.map((v) => {
          const a = getProvider(v.a)?.name ?? v.a;
          const b = getProvider(v.b)?.name ?? v.b;
          return (
            <Link
              key={v.slug}
              href={`/compare/${v.slug}`}
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:border-accent"
            >
              <span className="font-heading font-semibold text-navy">
                {a} vs {b}
              </span>
              <span className="mt-1 block text-sm text-grey">Which is better for UK businesses?</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
