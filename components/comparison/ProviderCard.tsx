import Link from "next/link";
import type { Provider } from "@/data/providers";
import { ProviderLogo } from "@/components/ui/ProviderLogo";
import { RatingStars } from "./ProviderRating";
import { BestForTags } from "./BestForTags";
import { ProviderCTA } from "./ProviderCTA";
import { Check, X } from "lucide-react";

export function ProviderCard({ provider, sourcePage }: { provider: Provider; sourcePage?: string }) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <ProviderLogo name={provider.name} slug={provider.slug} />
          <div>
            <h3 className="font-heading text-base font-bold text-navy">{provider.name}</h3>
            <RatingStars value={provider.editorialRating.overall} className="mt-0.5" />
          </div>
        </div>
      </div>

      <p className="mt-3 border-l-2 border-accent bg-accent-soft/30 px-3 py-2 text-sm font-medium italic text-navy">
        {provider.verdict ?? provider.summary}
      </p>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-grey">Best for</p>
        <div className="mt-1.5">
          <BestForTags tags={provider.bestFor.slice(0, 3)} />
        </div>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <div>
          <dt className="text-xs text-grey">Monthly fee</dt>
          <dd className="tabular font-semibold text-navy">{provider.monthlyFeeFrom}</dd>
        </div>
        <div>
          <dt className="text-xs text-grey">Transaction fee</dt>
          <dd className="font-semibold text-navy">{provider.transactionFeeHeadline}</dd>
        </div>
        <div>
          <dt className="text-xs text-grey">Contract</dt>
          <dd className="font-semibold text-navy">{provider.contractLength}</dd>
        </div>
        <div>
          <dt className="text-xs text-grey">Payouts</dt>
          <dd className="font-semibold text-navy">{provider.payoutSpeed}</dd>
        </div>
      </dl>

      <ul className="mt-4 space-y-1.5 text-sm">
        <li className="flex items-start gap-2 text-navy">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          {provider.pros[0]}
        </li>
        <li className="flex items-start gap-2 text-navy">
          <X className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
          <span>
            <span className="font-semibold">Avoid if:</span> {provider.avoidIf ?? provider.cons[0]}
          </span>
        </li>
      </ul>

      <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <ProviderCTA provider={provider} sourcePage={sourcePage} className="flex-1" />
        <Link
          href={`/reviews/${provider.slug}`}
          className="text-sm font-semibold text-deepblue hover:underline"
        >
          Read review
        </Link>
      </div>
    </div>
  );
}
