import Link from "next/link";
import { Check } from "lucide-react";
import { latestProviderUpdate, PROVIDERS, PARTNER_SLUGS, topRatedProvider } from "@/data/providers";

/** One-line reasons-to-believe strip for the homepage and commercial pages. */
export function TrustStrip({ className = "", count, verb = "compared" }: { className?: string; count?: number; verb?: string }) {
  const date = new Date(latestProviderUpdate()).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <p className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-grey ${className}`}>
      <span className="inline-flex items-center gap-1">
        <Check className="h-3.5 w-3.5 text-accent" /> Prices checked {date}
      </span>
      <span className="inline-flex items-center gap-1">
        <Check className="h-3.5 w-3.5 text-accent" /> {count ?? PROVIDERS.length} providers {verb}
      </span>
      <span className="inline-flex items-center gap-1">
        <Check className="h-3.5 w-3.5 text-accent" />
        <Link href="/how-we-make-money" className="hover:text-navy hover:underline">
          Providers can&apos;t pay for rankings
        </Link>
      </span>
    </p>
  );
}

/** The blunt independence proof (roast item #2). Computed from data so it can
 *  never silently become untrue: the second sentence only renders while the
 *  top-ranked provider is NOT one of our affiliate partners. */
export function IndependenceProof({ className = "" }: { className?: string }) {
  const partners = PROVIDERS.filter((p) => PARTNER_SLUGS.includes(p.slug)).map((p) => p.name);
  const top = topRatedProvider();
  const topIsPartner = PARTNER_SLUGS.includes(top.slug);
  const names =
    partners.length > 1 ? `${partners.slice(0, -1).join(", ")} and ${partners[partners.length - 1]}` : partners[0];
  return (
    <p className={`text-sm leading-relaxed text-grey ${className}`}>
      <strong className="text-navy">We earn commission from {names}.</strong>{" "}
      {topIsPartner ? (
        <>Rankings are set by our published methodology - partners can&apos;t buy position.</>
      ) : (
        <>
          {top.name} still ranks top - they don&apos;t pay us a penny.
        </>
      )}
    </p>
  );
}
