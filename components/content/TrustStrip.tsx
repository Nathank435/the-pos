import Link from "next/link";
import { Check } from "lucide-react";
import { latestProviderUpdate, PROVIDERS } from "@/data/providers";

/** One-line reasons-to-believe strip for the homepage and commercial pages. */
export function TrustStrip({ className = "", count }: { className?: string; count?: number }) {
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
        <Check className="h-3.5 w-3.5 text-accent" /> {count ?? PROVIDERS.length} providers compared
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
