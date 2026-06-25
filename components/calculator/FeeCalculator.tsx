"use client";

import { useMemo, useState } from "react";
import { Calculator as CalcIcon } from "lucide-react";
import { calculate, type CalcInput } from "@/lib/calculator";
import { gbp } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Callout } from "@/components/ui/Callout";
import { track } from "@/lib/analytics";

export function FeeCalculator() {
  const [input, setInput] = useState<CalcInput>({
    monthlyTurnover: 5000,
    avgTransaction: 12,
    monthlySoftwareFee: 0,
    contractMonths: 12,
  });
  const [touched, setTouched] = useState(false);

  const result = useMemo(() => calculate(input), [input]);

  const update = (patch: Partial<CalcInput>) => {
    setInput((prev) => ({ ...prev, ...patch }));
    if (!touched) {
      setTouched(true);
      track("calculator_completed", { turnover: input.monthlyTurnover });
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
      {/* Inputs */}
      <div className="rounded-lg border border-border bg-white p-5">
        <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-navy">
          <CalcIcon className="h-5 w-5 text-accent" />
          Your numbers
        </h2>

        <div className="mt-4 space-y-4">
          <Field label="Monthly card turnover" hint="Total you take by card each month">
            <NumberInput
              prefix="£"
              value={input.monthlyTurnover}
              min={0}
              step={100}
              onChange={(v) => update({ monthlyTurnover: v })}
            />
          </Field>

          <Field label="Average transaction value" hint="Your typical sale size">
            <NumberInput
              prefix="£"
              value={input.avgTransaction}
              min={1}
              step={1}
              onChange={(v) => update({ avgTransaction: v })}
            />
          </Field>

          <Field label="Extra monthly software fee" hint="If you pay for POS software on top">
            <NumberInput
              prefix="£"
              value={input.monthlySoftwareFee}
              min={0}
              step={5}
              onChange={(v) => update({ monthlySoftwareFee: v })}
            />
          </Field>

          <Field label="Contract length (months)" hint="Used to spread hardware cost">
            <NumberInput
              value={input.contractMonths}
              min={1}
              step={1}
              onChange={(v) => update({ contractMonths: v })}
            />
          </Field>
        </div>

        <p className="mt-4 tabular text-sm text-grey">
          ≈ {result.transactionsPerMonth.toLocaleString("en-GB")} transactions / month
        </p>
      </div>

      {/* Results */}
      <div>
        {result.cheapest && (
          <div className="rounded-lg border border-[#bfdbfe] bg-accent-soft/50 p-5">
            <p className="text-sm font-semibold text-[#1e40af]">Lowest estimated monthly cost</p>
            <div className="mt-1 flex flex-wrap items-baseline gap-2">
              <span className="font-heading text-2xl font-bold text-navy">{result.cheapest.name}</span>
              <span className="tabular text-xl font-bold text-accent">
                {gbp(result.cheapest.monthlyTotal, { decimals: true })}/mo
              </span>
              <Badge tone="accent" mono>
                {result.cheapest.effectiveRate.toFixed(2)}% all-in
              </Badge>
            </div>
            <p className="mt-1 text-xs text-grey">{result.cheapest.note}</p>
          </div>
        )}

        {result.warnings.map((w, i) => (
          <Callout key={i} tone="warn" className="mt-3">
            {w}
          </Callout>
        ))}

        <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="border-b border-border bg-cream/60 text-left text-xs uppercase tracking-wide text-grey">
                <th className="p-3 font-semibold">Provider</th>
                <th className="p-3 text-right font-semibold">Processing</th>
                <th className="p-3 text-right font-semibold">Monthly total</th>
                <th className="p-3 text-right font-semibold">Annual</th>
                <th className="p-3 text-right font-semibold">All-in rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {result.rows.map((r, i) => (
                <tr key={r.slug} className={i === 0 ? "bg-accent-soft/30" : "hover:bg-cream/40"}>
                  <td className="p-3 font-medium text-navy">{r.name}</td>
                  <td className="tabular p-3 text-right text-grey">{gbp(r.monthlyProcessing, { decimals: true })}</td>
                  <td className="tabular p-3 text-right font-semibold text-navy">{gbp(r.monthlyTotal, { decimals: true })}</td>
                  <td className="tabular p-3 text-right text-grey">{gbp(r.annualTotal)}</td>
                  <td className="tabular p-3 text-right text-navy">{r.effectiveRate.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <ButtonLink href="/compare-pos-systems">Compare these providers</ButtonLink>
          <ButtonLink href="/get-pos-quotes" variant="outline">
            Get tailored quotes
          </ButtonLink>
        </div>

        <p className="mt-4 rounded-xl border border-border bg-white p-3 text-xs leading-relaxed text-grey">
          <strong className="text-navy">This calculator is an estimate.</strong> Actual rates can vary by card type,
          provider plan, contract and business profile. Quote-based providers (e.g. Dojo, Tyl) are shown with
          illustrative blended rates only. Always check provider terms before signing.
        </p>
      </div>
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-navy">{label}</span>
      {hint && <span className="block text-xs text-grey">{hint}</span>}
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function NumberInput({
  value,
  onChange,
  prefix,
  min,
  step,
}: {
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  min?: number;
  step?: number;
}) {
  return (
    <div className="flex items-center rounded-xl border border-border bg-cream focus-within:border-accent">
      {prefix && <span className="pl-3 text-sm font-medium text-grey">{prefix}</span>}
      <input
        type="number"
        inputMode="decimal"
        value={Number.isFinite(value) ? value : 0}
        min={min}
        step={step}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="tabular w-full bg-transparent px-3 py-2.5 text-sm font-medium text-navy outline-none"
      />
    </div>
  );
}
