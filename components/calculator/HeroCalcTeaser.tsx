"use client";

import { useState } from "react";
import { ArrowRight, Calculator } from "lucide-react";
import { track } from "@/lib/analytics";

/** Calculator teaser: two inputs, no maths on this page - it deep-links into
 *  the fee calculator with the visitor's numbers prefilled, so the first
 *  click already feels like progress. Presets let hub pages ask the question
 *  in the reader's own numbers ("what does a cafe actually pay?"). */
export function CalcTeaser({
  title = "What would you actually pay?",
  copy = "Two numbers. Every big UK provider, priced at your volume.",
  defaultTurnover = 5000,
  defaultAtv = 12,
  source = "calc_teaser",
  compact = false,
}: {
  title?: string;
  copy?: string;
  defaultTurnover?: number;
  defaultAtv?: number;
  source?: string;
  compact?: boolean;
}) {
  const [turnover, setTurnover] = useState(String(defaultTurnover));
  const [atv, setAtv] = useState(String(defaultAtv));

  function go() {
    const t = parseFloat(turnover) || defaultTurnover;
    const a = parseFloat(atv) || defaultAtv;
    track("calculator_start", { source, turnover_band: String(t) });
    window.location.href = `/card-machine-fee-calculator?turnover=${t}&atv=${a}`;
  }

  return (
    <div className={compact ? "rounded-lg border border-border bg-white p-5" : "rounded-lg border border-border bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)]"}>
      <p className={`flex items-center gap-2 font-heading font-bold text-navy ${compact ? "text-base" : "text-lg"}`}>
        <Calculator className={compact ? "h-4 w-4 text-accent" : "h-5 w-5 text-accent"} />
        {title}
      </p>
      <p className="mt-1 text-sm text-grey">{copy}</p>

      <form
        className={compact ? "mt-4 space-y-3" : "mt-5 space-y-4"}
        onSubmit={(e) => {
          e.preventDefault();
          go();
        }}
      >
        <label className="block">
          <span className="text-sm font-semibold text-navy">Monthly card takings</span>
          <div className="mt-1.5 flex items-center rounded-xl border border-border bg-cream focus-within:border-accent">
            <span className="pl-3 text-sm font-medium text-grey">£</span>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              step={100}
              value={turnover}
              onChange={(e) => setTurnover(e.target.value)}
              aria-label="Monthly card takings in pounds"
              className="tabular w-full bg-transparent px-3 py-3 text-base font-medium text-navy outline-none"
            />
          </div>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-navy">Average sale</span>
          <div className="mt-1.5 flex items-center rounded-xl border border-border bg-cream focus-within:border-accent">
            <span className="pl-3 text-sm font-medium text-grey">£</span>
            <input
              type="number"
              inputMode="numeric"
              min={1}
              step={1}
              value={atv}
              onChange={(e) => setAtv(e.target.value)}
              aria-label="Average sale in pounds"
              className="tabular w-full bg-transparent px-3 py-3 text-base font-medium text-navy outline-none"
            />
          </div>
        </label>

        <button
          type="submit"
          className={`flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 font-bold text-white transition-colors hover:bg-accent-hover ${compact ? "py-2.5 text-sm" : "py-3.5 text-base"}`}
        >
          See what I&apos;d actually pay <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      {!compact && (
        <p className="mt-3 text-center text-xs text-grey">
          Free · takes about ten seconds · every big UK provider
        </p>
      )}
    </div>
  );
}

/** Homepage hero variant - kept as a named export for clarity at the call site. */
export function HeroCalcTeaser() {
  return <CalcTeaser source="hero_teaser" />;
}
