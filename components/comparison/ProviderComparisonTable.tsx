"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SlidersHorizontal, ArrowUpDown } from "lucide-react";
import type { Provider } from "@/data/providers";
import { ProviderLogo } from "@/components/ui/ProviderLogo";
import { Badge } from "@/components/ui/Badge";
import { RatingStars } from "./ProviderRating";
import { ProviderCTA } from "./ProviderCTA";
import { LastUpdated } from "@/components/content/LastUpdated";
import { track } from "@/lib/analytics";
import { latestProviderUpdate } from "@/data/providers";
import { cn } from "@/lib/utils";

type FilterKey =
  | "hasNoMonthlyFee"
  | "hasNoContractOption"
  | "supportsRestaurants"
  | "supportsRetail"
  | "supportsMobile"
  | "supportsOnlinePayments"
  | "fastPayouts"
  | "supportsInventory"
  | "supportsInvoicing"
  | "supportsVirtualTerminal"
  | "supportsTapToPay";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "hasNoMonthlyFee", label: "No monthly fee" },
  { key: "hasNoContractOption", label: "No contract" },
  { key: "supportsRestaurants", label: "Restaurant suitable" },
  { key: "supportsRetail", label: "Retail suitable" },
  { key: "supportsMobile", label: "Mobile seller suitable" },
  { key: "supportsOnlinePayments", label: "Online payments" },
  { key: "fastPayouts", label: "Fast payouts" },
  { key: "supportsInventory", label: "Integrated inventory" },
  { key: "supportsInvoicing", label: "Invoicing" },
  { key: "supportsVirtualTerminal", label: "Virtual terminal" },
  { key: "supportsTapToPay", label: "Tap to Pay" },
];

type SortKey = "recommended" | "name" | "monthly";

export function ProviderComparisonTable({
  providers,
  sourcePage = "comparison",
}: {
  providers: Provider[];
  sourcePage?: string;
}) {
  const [active, setActive] = useState<Set<FilterKey>>(new Set());
  const [sort, setSort] = useState<SortKey>("recommended");
  const [showFilters, setShowFilters] = useState(false);

  const toggle = (key: FilterKey) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
    track("comparison_filter_used", { filter: key, source: sourcePage });
  };

  const filtered = useMemo(() => {
    const list = providers.filter((p) => [...active].every((k) => p[k]));
    switch (sort) {
      case "name":
        return [...list].sort((a, b) => a.name.localeCompare(b.name));
      case "monthly":
        return [...list].sort(
          (a, b) => Number(b.hasNoMonthlyFee) - Number(a.hasNoMonthlyFee) || b.editorialRating.overall - a.editorialRating.overall,
        );
      default:
        return [...list].sort((a, b) => b.editorialRating.overall - a.editorialRating.overall);
    }
  }, [providers, active, sort]);

  return (
    <div>
      {/* Controls */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setShowFilters((v) => !v)}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 text-sm font-semibold text-navy hover:bg-cream"
          aria-expanded={showFilters}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {active.size > 0 && <Badge tone="accent">{active.size}</Badge>}
        </button>

        <label className="inline-flex items-center gap-2 text-sm text-grey">
          <ArrowUpDown className="h-4 w-4" />
          Sort:
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-lg border border-border bg-white px-2 py-1.5 text-sm font-medium text-navy"
          >
            <option value="recommended">Recommended</option>
            <option value="name">Name (A–Z)</option>
            <option value="monthly">No monthly fee first</option>
          </select>
        </label>
      </div>

      {/* Filter panel */}
      <div className={cn("mb-5 rounded-lg border border-border bg-white p-4", showFilters ? "block" : "hidden")}>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const on = active.has(f.key);
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => toggle(f.key)}
                aria-pressed={on}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                  on
                    ? "border-accent bg-accent text-white"
                    : "border-border bg-cream text-navy hover:border-accent",
                )}
              >
                {f.label}
              </button>
            );
          })}
          {active.size > 0 && (
            <button
              type="button"
              onClick={() => setActive(new Set())}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-deepblue underline"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-grey">
          Showing <span className="font-semibold text-navy">{filtered.length}</span> of {providers.length} providers
        </p>
        <LastUpdated date={latestProviderUpdate()} label="Prices last checked" />
      </div>

      {/* Desktop table */}
      <div className="hidden rounded-lg border border-border bg-white lg:block">
        <table className="w-full table-fixed text-[13px] leading-snug">
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "11%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "17%" }} />
            <col style={{ width: "11%" }} />
            <col style={{ width: "13%" }} />
            <col style={{ width: "11%" }} />
            <col style={{ width: "9%" }} />
          </colgroup>
          <thead>
            <tr className="border-b border-border bg-cream/60 text-left text-[11px] uppercase tracking-wide text-grey">
              <th scope="col" className="px-3 py-2.5 font-semibold">Provider</th>
              <th scope="col" className="px-3 py-2.5 font-semibold">Best for</th>
              <th scope="col" className="px-3 py-2.5 font-semibold">Monthly</th>
              <th scope="col" className="px-3 py-2.5 font-semibold">Transaction</th>
              <th scope="col" className="px-3 py-2.5 font-semibold">Reader from</th>
              <th scope="col" className="px-3 py-2.5 font-semibold">Contract</th>
              <th scope="col" className="px-3 py-2.5 font-semibold">Payouts</th>
              <th scope="col" className="px-3 py-2.5 font-semibold"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((p) => (
              <tr key={p.slug} className="align-top hover:bg-cream/40">
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <ProviderLogo name={p.name} slug={p.slug} size="sm" />
                    <div className="min-w-0">
                      <Link href={`/reviews/${p.slug}`} className="block truncate font-semibold text-navy hover:underline">
                        {p.name}
                      </Link>
                      <RatingStars value={p.editorialRating.overall} className="mt-0.5" />
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 text-grey">{p.bestFor[0]}</td>
                <td className="px-3 py-3 font-medium text-navy">{p.monthlyFeeFrom}</td>
                <td className="px-3 py-3 text-navy">{p.transactionFeeHeadline}</td>
                <td className="px-3 py-3 text-navy">{p.cardReaderCostFrom}</td>
                <td className="px-3 py-3 text-grey">{p.contractLength}</td>
                <td className="px-3 py-3 text-grey">{p.payoutSpeed}</td>
                <td className="px-2 py-3 text-right">
                  <ProviderCTA provider={p} size="sm" sourcePage={sourcePage} label="Visit" className="px-3" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="grid gap-4 lg:hidden">
        {filtered.map((p) => (
          <div key={p.slug} className="rounded-lg border border-border bg-white p-4">
            <div className="flex items-center gap-3">
              <ProviderLogo name={p.name} slug={p.slug} size="sm" />
              <div className="min-w-0 flex-1">
                <Link href={`/reviews/${p.slug}`} className="block font-heading font-bold text-navy">
                  {p.name}
                </Link>
                <RatingStars value={p.editorialRating.overall} className="mt-0.5" />
              </div>
            </div>
            <div className="mt-2">
              <Badge tone="accent">{p.bestFor[0]}</Badge>
            </div>
            <dl className="mt-3 divide-y divide-border/60">
              <Cell label="Monthly" value={p.monthlyFeeFrom} />
              <Cell label="Transaction" value={p.transactionFeeHeadline} />
              <Cell label="Reader from" value={p.cardReaderCostFrom} />
              <Cell label="Contract" value={p.contractLength} />
              <Cell label="Payouts" value={p.payoutSpeed} />
              <Cell label="Watch out for" value={p.avoidIf ?? p.cons[0]} warn />
            </dl>
            <div className="mt-4 flex items-center gap-3 border-t border-border pt-3">
              <ProviderCTA provider={p} size="sm" sourcePage={sourcePage} className="flex-1" />
              <Link href={`/reviews/${p.slug}`} className="text-sm font-semibold text-deepblue">
                Review
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="rounded-lg border border-dashed border-border bg-white p-8 text-center text-grey">
          No providers match all those filters. Try removing one.
        </p>
      )}
    </div>
  );
}

function Cell({ label, value, warn }: { label: string; value: string; warn?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2">
      <dt className="shrink-0 pt-px text-xs font-medium text-grey">{label}</dt>
      <dd className={cn("text-right text-sm font-semibold leading-snug", warn ? "text-amber" : "text-navy")}>
        {value}
      </dd>
    </div>
  );
}
