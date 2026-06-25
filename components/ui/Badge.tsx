import { cn } from "@/lib/utils";

type Tone = "neutral" | "accent" | "amber" | "navy";

const tones: Record<Tone, string> = {
  neutral: "bg-cream text-grey",
  accent: "bg-accent-soft text-accent",
  amber: "bg-amber/15 text-[#9a6c12]",
  navy: "bg-navy text-white",
};

export function Badge({
  children,
  tone = "neutral",
  className,
  mono,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  mono?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-semibold",
        tones[tone],
        mono && "font-mono tabular-nums",
        className,
      )}
    >
      {children}
    </span>
  );
}
