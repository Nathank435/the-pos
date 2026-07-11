"use client";

import { useState } from "react";
import { ArrowRight, Calculator } from "lucide-react";
import { track } from "@/lib/analytics";

/** Homepage hero teaser: two inputs, no maths on this page - it deep-links
 *  into the fee calculator with the visitor's numbers prefilled, so the
 *  first click already feels like progress. Replaces the stock hero photo:
 *  the tool IS the hero. */
export function HeroCalcTeaser() {
  const [turnover, setTurnover] = useState("5000");
  const [atv, setAtv] = useState("12");

  function go() {
    const t = parseFloat(turnover) || 5000;
    const a = parseFloat(atv) || 12;
    track("calculator_start", { source: "hero_teaser", turnover_band: String(t) });
    window.location.href = `/card-machine-fee-calculator?turnover=${t}&atv=${a}`;
  }

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <p className="flex items-center gap-2 font-heading text-lg font-bold text-navy">
        <Calculator className="h-5 w-5 text-accent" />
        What would you actually pay?
      </p>
      <p className="mt-1 text-sm text-grey">
        Two numbers. Every big UK provider, priced at your volume.
      </p>

      <form
        className="mt-5 space-y-4"
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
          className="flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3.5 text-base font-bold text-white transition-colors hover:bg-accent-hover"
        >
          See what I&apos;d actually pay <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <p className="mt-3 text-center text-xs text-grey">
        Free · takes about ten seconds · every big UK provider
      </p>
    </div>
  );
}
