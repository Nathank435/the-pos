/* Fee calculator logic + editable estimate rates.
 * These are simplified, single-rate estimates for comparison only - real
 * pricing varies by card type, plan and contract. Edit rates here. */

export type CalcProvider = {
  slug: string;
  name: string;
  ratePercent: number; // in-person headline rate, %
  perTransactionPence: number; // fixed per-transaction fee, pence
  monthlyFee: number; // £/month
  hardwareCost: number; // £ one-off (illustrative)
  note: string;
};

/** Illustrative rates for the calculator. Keep roughly aligned with data/providers.ts. */
export const CALC_PROVIDERS: CalcProvider[] = [
  { slug: "sumup", name: "SumUp (standard)", ratePercent: 1.69, perTransactionPence: 0, monthlyFee: 0, hardwareCost: 19, note: "Payments Plus can be lower (from 0.99%)." },
  { slug: "square", name: "Square", ratePercent: 1.75, perTransactionPence: 0, monthlyFee: 0, hardwareCost: 19, note: "Flat rate, no monthly fee on standard." },
  { slug: "zettle", name: "PayPal Zettle", ratePercent: 1.75, perTransactionPence: 0, monthlyFee: 0, hardwareCost: 29, note: "No monthly fee for basic POS." },
  { slug: "mypos", name: "myPOS (lower tier)", ratePercent: 1.1, perTransactionPence: 7, monthlyFee: 0, hardwareCost: 19, note: "Varies by card type; instant settlement." },
  { slug: "dojo", name: "Dojo (est. blended)", ratePercent: 1.4, perTransactionPence: 5, monthlyFee: 15, hardwareCost: 0, note: "Quote-based - this is a rough estimate only." },
  { slug: "tyl-by-natwest", name: "Tyl by NatWest (est.)", ratePercent: 1.5, perTransactionPence: 0, monthlyFee: 15, hardwareCost: 0, note: "Quote-based plans; estimate only." },
];

export type CalcInput = {
  monthlyTurnover: number; // £
  avgTransaction: number; // £
  monthlySoftwareFee: number; // £ extra (optional)
  contractMonths: number; // for annualised hardware/total
};

export type CalcRow = {
  slug: string;
  name: string;
  note: string;
  monthlyProcessing: number;
  monthlyTotal: number; // processing + monthly fees + software
  annualTotal: number; // monthlyTotal * 12 + hardware amortised over contract (min 12m)
  effectiveRate: number; // % of turnover, all-in
};

export type CalcResult = {
  rows: CalcRow[];
  cheapest: CalcRow | null;
  transactionsPerMonth: number;
  warnings: string[];
};

export function calculate(input: CalcInput): CalcResult {
  const turnover = Math.max(0, input.monthlyTurnover);
  const avg = Math.max(0.01, input.avgTransaction);
  const txns = turnover > 0 ? Math.round(turnover / avg) : 0;

  const rows: CalcRow[] = CALC_PROVIDERS.map((p) => {
    const processing = turnover * (p.ratePercent / 100) + (txns * p.perTransactionPence) / 100;
    const monthlyFees = p.monthlyFee + input.monthlySoftwareFee;
    const monthlyTotal = processing + monthlyFees;
    const months = Math.max(12, input.contractMonths || 12);
    const annualTotal = monthlyTotal * 12 + (p.hardwareCost / months) * 12;
    const effectiveRate = turnover > 0 ? (monthlyTotal / turnover) * 100 : 0;
    return {
      slug: p.slug,
      name: p.name,
      note: p.note,
      monthlyProcessing: round2(processing),
      monthlyTotal: round2(monthlyTotal),
      annualTotal: round2(annualTotal),
      effectiveRate: round2(effectiveRate),
    };
  }).sort((a, b) => a.monthlyTotal - b.monthlyTotal);

  const cheapest = rows[0] ?? null;
  const warnings: string[] = [];

  // Warn when a monthly fee wipes out a lower-rate advantage at this volume.
  const noFeeBest = rows.filter((r) => CALC_PROVIDERS.find((c) => c.slug === r.slug)?.monthlyFee === 0)[0];
  if (cheapest && noFeeBest && cheapest.slug !== noFeeBest.slug) {
    const diff = round2(noFeeBest.monthlyTotal - cheapest.monthlyTotal);
    if (diff > 0 && diff < 10) {
      warnings.push(
        `${cheapest.name} only wins by about £${diff.toFixed(2)}/month at this volume - a no-monthly-fee option like ${noFeeBest.name} may be safer if your takings dip.`,
      );
    }
  }
  if (turnover > 0 && turnover < 2000) {
    warnings.push("At lower volumes, a no-monthly-fee, no-contract provider is usually the safest value.");
  }

  return { rows, cheapest, transactionsPerMonth: txns, warnings };
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
