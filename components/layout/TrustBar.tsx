const DEFAULT_ITEMS = [
  "UK-focused",
  "Small-business friendly",
  "Fees explained clearly",
  "Affiliate links disclosed",
  "No fake-neutral waffle",
];

export function TrustBar({ items = DEFAULT_ITEMS }: { items?: string[] }) {
  return (
    <div className="border-y border-border bg-navy text-cream">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-2.5 sm:px-6">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-5">
            {i > 0 && <span aria-hidden className="hidden h-3 w-px bg-white/20 sm:block" />}
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-cream/75">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
