import type { Provider } from "@/data/providers";
import { ProviderLogo } from "@/components/ui/ProviderLogo";
import { RatingStars } from "./ProviderRating";
import { Check, X } from "lucide-react";

const ROWS: { label: string; get: (p: Provider) => string | boolean }[] = [
  { label: "Monthly fee", get: (p) => p.monthlyFeeFrom },
  { label: "Transaction fee", get: (p) => p.transactionFeeHeadline },
  { label: "Card reader from", get: (p) => p.cardReaderCostFrom },
  { label: "Contract", get: (p) => p.contractLength },
  { label: "Payout speed", get: (p) => p.payoutSpeed },
  { label: "No monthly fee", get: (p) => p.hasNoMonthlyFee },
  { label: "No contract option", get: (p) => p.hasNoContractOption },
  { label: "Restaurant features", get: (p) => p.supportsRestaurants },
  { label: "Inventory", get: (p) => p.supportsInventory },
  { label: "Online payments", get: (p) => p.supportsOnlinePayments },
  { label: "Tap to Pay", get: (p) => p.supportsTapToPay },
  { label: "Fast payouts", get: (p) => p.fastPayouts },
];

function val(v: string | boolean) {
  if (typeof v === "boolean")
    return v ? <Check className="mx-auto h-4 w-4 text-accent" /> : <X className="mx-auto h-4 w-4 text-border" />;
  return <span className="text-navy">{v}</span>;
}

export function VersusSummaryTable({ a, b }: { a: Provider; b: Provider }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-white">
      <table className="w-full min-w-[480px] text-sm">
        <thead>
          <tr className="border-b border-border bg-cream/60">
            <th className="p-3 text-left text-xs uppercase tracking-wide text-grey"></th>
            {[a, b].map((p) => (
              <th key={p.slug} className="p-3 text-center">
                <div className="flex flex-col items-center gap-1">
                  <ProviderLogo name={p.name} slug={p.slug} size="sm" />
                  <span className="font-heading font-bold text-navy">{p.name}</span>
                  <RatingStars value={p.editorialRating.overall} />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {ROWS.map((row) => (
            <tr key={row.label} className="hover:bg-cream/40">
              <td className="p-3 font-medium text-grey">{row.label}</td>
              <td className="p-3 text-center">{val(row.get(a))}</td>
              <td className="p-3 text-center">{val(row.get(b))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
