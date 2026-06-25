import Link from "next/link";
import { ScrollText } from "lucide-react";

export function MethodologyBox({ className }: { className?: string }) {
  return (
    <div className={`rounded-lg border border-border bg-accent-soft/50 p-5 ${className ?? ""}`}>
      <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-navy">
        <ScrollText className="h-4 w-4 text-accent" />
        How we compare
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-grey">
        We compare providers using publicly available pricing, contract information, hardware costs, payout details,
        software features and suitability for different UK business types. Some links may earn us commission, but
        providers cannot pay to change our editorial verdicts.{" "}
        <Link href="/methodology" className="font-medium text-deepblue underline">
          Read our full methodology
        </Link>
        .
      </p>
    </div>
  );
}
