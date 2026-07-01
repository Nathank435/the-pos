import { Star } from "lucide-react";
import type { EditorialRating } from "@/data/providers";
import { cn } from "@/lib/utils";

export function RatingStars({ value, className }: { value: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)} aria-label={`${value} out of 5`}>
      <span className="inline-flex gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < Math.round(value) ? "fill-amber text-amber" : "fill-border text-border",
            )}
          />
        ))}
      </span>
      <span className="tabular text-sm font-semibold text-navy">{value.toFixed(1)}</span>
    </span>
  );
}

const LABELS: { key: keyof EditorialRating; label: string }[] = [
  { key: "value", label: "Value" },
  { key: "easeOfUse", label: "Ease of use" },
  { key: "features", label: "Features" },
  { key: "support", label: "Support" },
  { key: "contractFlexibility", label: "Contract flexibility" },
];

export function ProviderRating({ rating }: { rating: EditorialRating }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-base font-semibold text-navy">Our rating</h3>
        <RatingStars value={rating.overall} />
      </div>
      <dl className="mt-4 space-y-2.5">
        {LABELS.map(({ key, label }) => (
          <div key={key} className="flex items-center gap-3">
            <dt className="w-36 shrink-0 text-sm text-grey">{label}</dt>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-cream">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${(rating[key] / 5) * 100}%` }}
              />
            </div>
            <dd className="tabular w-8 shrink-0 text-right text-sm font-semibold text-navy">
              {rating[key].toFixed(1)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
