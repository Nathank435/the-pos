"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Calculator as CalcIcon, ExternalLink, Mail } from "lucide-react";
import { calculate, type CalcInput } from "@/lib/calculator";
import { gbp } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Callout } from "@/components/ui/Callout";
import { buildAffiliateUrl } from "@/lib/affiliate";
import { PROVIDERS } from "@/data/providers";
import { track } from "@/lib/analytics";

const STORAGE_KEY = "thepos_calc_inputs";

function turnoverBand(n: number): string {
  if (n < 2000) return "Under £2,000";
  if (n < 10000) return "£2,000–£10,000";
  if (n < 30000) return "£10,000–£30,000";
  return "Over £30,000";
}

export function FeeCalculator() {
  const [input, setInput] = useState<CalcInput>({
    monthlyTurnover: 5000,
    avgTransaction: 12,
    monthlySoftwareFee: 0,
    contractMonths: 12,
  });
  const [touched, setTouched] = useState(false);
  const resultsViewed = useRef(false);

  // Restore last inputs (localStorage), then let ?turnover=&atv= deep-links win.
  useEffect(() => {
    let restored: Partial<CalcInput> = {};
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) restored = JSON.parse(saved);
    } catch {
      /* ignore */
    }
    const q = new URLSearchParams(window.location.search);
    const turnover = parseFloat(q.get("turnover") ?? "");
    const atv = parseFloat(q.get("atv") ?? "");
    if (Number.isFinite(turnover) && turnover > 0) restored.monthlyTurnover = turnover;
    if (Number.isFinite(atv) && atv > 0) restored.avgTransaction = atv;
    if (Object.keys(restored).length) setInput((prev) => ({ ...prev, ...restored }));
  }, []);

  const result = useMemo(() => calculate(input), [input]);

  // Results are free and immediate - log the first render of a full breakdown.
  useEffect(() => {
    if (result.cheapest && !resultsViewed.current) {
      resultsViewed.current = true;
      track("calc_results_view", { winner: result.cheapest.name });
    }
  }, [result.cheapest]);

  const update = (patch: Partial<CalcInput>) => {
    setInput((prev) => {
      const next = { ...prev, ...patch };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
    if (!touched) {
      setTouched(true);
      track("calculator_start", { turnover_band: turnoverBand(input.monthlyTurnover) });
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
          <Field htmlFor="calc-monthly-turnover" label="Monthly card turnover" hint="Total you take by card each month">
            <NumberInput
              id="calc-monthly-turnover"
              prefix="£"
              value={input.monthlyTurnover}
              min={0}
              step={100}
              onChange={(v) => update({ monthlyTurnover: v })}
            />
          </Field>

          <Field htmlFor="calc-avg-transaction" label="Average transaction value" hint="Your typical sale size">
            <NumberInput
              id="calc-avg-transaction"
              prefix="£"
              value={input.avgTransaction}
              min={1}
              step={1}
              onChange={(v) => update({ avgTransaction: v })}
            />
          </Field>

          <Field htmlFor="calc-software-fee" label="Extra monthly software fee" hint="If you pay for POS software on top">
            <NumberInput
              id="calc-software-fee"
              prefix="£"
              value={input.monthlySoftwareFee}
              min={0}
              step={5}
              onChange={(v) => update({ monthlySoftwareFee: v })}
            />
          </Field>

          <Field htmlFor="calc-contract-months" label="Contract length (months)" hint="Used to spread hardware cost">
            <NumberInput
              id="calc-contract-months"
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

      {/* Results - full table, no gate, no email required */}
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
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-border bg-cream/60 text-left text-xs uppercase tracking-wide text-grey">
                <th scope="col" className="p-3 font-semibold">Provider</th>
                <th scope="col" className="p-3 text-right font-semibold">Processing</th>
                <th scope="col" className="p-3 text-right font-semibold">Monthly total</th>
                <th scope="col" className="p-3 text-right font-semibold">Annual</th>
                <th scope="col" className="p-3 text-right font-semibold">All-in rate</th>
                <th scope="col" className="p-3 text-right font-semibold">
                  <span className="sr-only">Visit provider</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {result.rows.map((r, i) => {
                const provider = PROVIDERS.find((p) => p.slug === r.slug);
                const outbound = provider?.affiliateUrl || provider?.quoteUrl;
                return (
                  <tr key={r.slug} className={i === 0 ? "bg-accent-soft/30" : "hover:bg-cream/40"}>
                    <td className="p-3 font-medium text-navy">{r.name}</td>
                    <td className="tabular p-3 text-right text-grey">{gbp(r.monthlyProcessing, { decimals: true })}</td>
                    <td className="tabular p-3 text-right font-semibold text-navy">
                      {gbp(r.monthlyTotal, { decimals: true })}
                    </td>
                    <td className="tabular p-3 text-right text-grey">{gbp(r.annualTotal)}</td>
                    <td className="tabular p-3 text-right text-navy">{r.effectiveRate.toFixed(2)}%</td>
                    <td className="p-3 text-right">
                      {provider && outbound ? (
                        <a
                          href={buildAffiliateUrl(provider, { pageType: "calculator", position: "row" })}
                          target="_blank"
                          rel="sponsored nofollow noopener"
                          onClick={() =>
                            track("affiliate_click", {
                              provider: provider.slug,
                              page_type: "calculator",
                              position: "row",
                              page_path: "/card-machine-fee-calculator",
                            })
                          }
                          className="inline-flex items-center gap-1 whitespace-nowrap rounded-md bg-accent px-2.5 py-1.5 text-xs font-bold text-white hover:bg-[#1e3a8a]"
                        >
                          Visit <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        provider && (
                          <a
                            href={`/reviews/${provider.slug}`}
                            className="whitespace-nowrap text-xs font-semibold text-deepblue hover:underline"
                          >
                            Review
                          </a>
                        )
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-grey">
          Same price as going direct - the provider pays us, not you.
        </p>

        <EmailResultsCard
          turnoverBand={turnoverBand(input.monthlyTurnover)}
          cheapestProvider={result.cheapest?.name}
          estMonthlyFee={result.cheapest ? gbp(result.cheapest.monthlyTotal, { decimals: true }) : undefined}
        />

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

/** Optional post-results capture: email-only, split consent (GDPR). */
function EmailResultsCard({
  turnoverBand,
  cheapestProvider,
  estMonthlyFee,
}: {
  turnoverBand: string;
  cheapestProvider?: string;
  estMonthlyFee?: string;
}) {
  const [email, setEmail] = useState("");
  const [sendResults, setSendResults] = useState(true);
  const [tips, setTips] = useState(false);
  const [state, setState] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !sendResults || state === "submitting") return;
    setState("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          consent: true,
          marketingOptIn: tips,
          leadSource: "calculator",
          sourcePage: window.location.pathname,
          monthlyTurnover: turnoverBand,
          cheapestProvider,
          estMonthlyFee,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("done");
      track("calc_email_submit", { marketing_opt_in: tips });
      track("calculator_lead", { monthly_turnover: turnoverBand, cheapest_provider: cheapestProvider });
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="mt-4 rounded-lg border border-border bg-white p-4 text-sm text-navy">
        Done - your breakdown is on its way to <strong>{email}</strong>.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-4 rounded-lg border border-border bg-white p-4">
      <p className="flex items-center gap-2 font-heading text-sm font-bold text-navy">
        <Mail className="h-4 w-4 text-accent" /> Email me this breakdown
      </p>
      <p className="mt-0.5 text-xs text-grey">
        Optional - your results are already above. We&apos;ll send a copy and can alert you when these prices change.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourbusiness.co.uk"
          aria-label="Email address"
          className="w-full rounded-xl border border-border bg-cream px-3 py-2.5 text-sm text-navy outline-none focus:border-accent"
        />
        <button
          type="submit"
          disabled={state === "submitting"}
          className="shrink-0 rounded-md bg-accent px-4 py-2.5 text-sm font-bold text-white hover:bg-[#1e3a8a] disabled:opacity-60"
        >
          {state === "submitting" ? "Sending…" : "Send my results"}
        </button>
      </div>
      <div className="mt-2 space-y-1 text-xs text-grey">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={sendResults}
            onChange={(e) => setSendResults(e.target.checked)}
            required
            className="mt-0.5"
          />
          <span>Email me these results (required to send them).</span>
        </label>
        <label className="flex items-start gap-2">
          <input type="checkbox" checked={tips} onChange={(e) => setTips(e.target.checked)} className="mt-0.5" />
          <span>Also send occasional fee-saving tips and price-change alerts. Unsubscribe any time.</span>
        </label>
      </div>
      {state === "error" && <p className="mt-2 text-xs font-semibold text-red-600">Something broke - try again.</p>}
    </form>
  );
}

function Field({
  label,
  hint,
  htmlFor,
  children,
}: {
  label: string;
  hint?: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="block">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-navy">
        {label}
      </label>
      {hint && <span className="block text-xs text-grey">{hint}</span>}
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function NumberInput({
  value,
  onChange,
  prefix,
  min,
  step,
  id,
}: {
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  min?: number;
  step?: number;
  id?: string;
}) {
  return (
    <div className="flex items-center rounded-xl border border-border bg-cream focus-within:border-accent">
      {prefix && <span className="pl-3 text-sm font-medium text-grey">{prefix}</span>}
      <input
        id={id}
        name={id}
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
