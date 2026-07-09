import { cn } from "@/lib/utils";

/** The POS wordmark + receipt-with-check icon (per the brand guide). */
export function BrandLogo({
  reversed,
  iconOnly,
  className,
}: {
  reversed?: boolean;
  iconOnly?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <BrandMark reversed={reversed} />
      {!iconOnly && (
        <span className="font-heading text-xl font-extrabold leading-none tracking-tight">
          <span className={reversed ? "text-white" : "text-navy"}>The </span>
          <span className={reversed ? "text-white" : "text-accent"}>POS</span>
        </span>
      )}
    </span>
  );
}

/** The receipt + check icon on its own. */
export function BrandMark({ reversed, className }: { reversed?: boolean; className?: string }) {
  const body = reversed ? "#ffffff" : "var(--color-accent)";
  const badge = reversed ? "var(--color-accent)" : "var(--color-accent)";
  const tick = reversed ? "#ffffff" : "#ffffff";
  return (
    <svg viewBox="0 0 32 32" className={cn("h-8 w-8", className)} fill="none" aria-hidden>
      {/* Receipt body */}
      <path
        d="M7 4.5h13.5a2 2 0 0 1 2 2V23l-2.4-1.5L17.7 23l-2.4-1.5L12.9 23l-2.4-1.5L8.1 23a2 2 0 0 1-1.1-1.8V6.5a2 2 0 0 1 2-2Z"
        fill={body}
        opacity={reversed ? 0.25 : 0.16}
      />
      <path
        d="M7 4.5h13.5a2 2 0 0 1 2 2V23l-2.4-1.5L17.7 23l-2.4-1.5L12.9 23l-2.4-1.5L8.1 23a2 2 0 0 1-1.1-1.8V6.5a2 2 0 0 1 2-2Z"
        stroke={body}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Receipt lines */}
      <path d="M10.5 9h8.5M10.5 12.5h8.5M10.5 16h5" stroke={body} strokeWidth="1.6" strokeLinecap="round" />
      {/* Check badge */}
      <circle cx="22.5" cy="22.5" r="6" fill={badge} stroke={reversed ? "#ffffff" : "var(--color-cream)"} strokeWidth="1.6" />
      <path d="M20 22.6l1.7 1.7 3-3.2" stroke={tick} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
