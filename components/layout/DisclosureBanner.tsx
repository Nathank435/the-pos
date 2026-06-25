import { Info } from "lucide-react";
import { DISCLOSURE } from "@/lib/site";

/** Affiliate disclosure box for commercial pages (reviews, comparisons, versus). */
export function DisclosureBanner({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-start gap-3 rounded-xl border border-border bg-white p-4 text-sm text-grey ${className ?? ""}`}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-deepblue" />
      <p>{DISCLOSURE}</p>
    </div>
  );
}
