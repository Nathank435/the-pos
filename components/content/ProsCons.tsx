import { Check, X } from "lucide-react";

export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-lg border border-[#bfdbfe] bg-accent-soft/40 p-5">
        <h3 className="font-heading text-base font-semibold text-[#1e40af]">Pros</h3>
        <ul className="mt-3 space-y-2">
          {pros.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-navy">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-[#f3dca6] bg-[#fdf1d8]/40 p-5">
        <h3 className="font-heading text-base font-semibold text-[#9a6c12]">Watch out for</h3>
        <ul className="mt-3 space-y-2">
          {cons.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-navy">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
