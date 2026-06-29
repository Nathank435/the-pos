import { cn } from "@/lib/utils";

/**
 * Mono eyebrow label that sits above a heading, optionally with a section index.
 * The editorial "money-section" signature - e.g.  01 / COMPARE
 */
export function Kicker({
  children,
  index,
  className,
}: {
  children: React.ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <p className={cn("kicker flex items-center gap-2", className)}>
      {index && (
        <>
          <span className="index-num text-navy/40">{index}</span>
          <span aria-hidden className="h-px w-6 bg-accent" />
        </>
      )}
      <span>{children}</span>
    </p>
  );
}
