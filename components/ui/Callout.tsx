import { AlertTriangle, Info, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "warn" | "info" | "tip";

const styles: Record<Tone, { box: string; icon: string; Icon: typeof Info }> = {
  // The "catch-out" box from the brand guide: left-border amber, soft amber wash.
  warn: { box: "border-l-4 border-amber bg-amber/10 text-deepblue", icon: "text-amber", Icon: AlertTriangle },
  info: { box: "border-l-4 border-deepblue bg-deepblue/5 text-deepblue", icon: "text-deepblue", Icon: Info },
  tip: { box: "border-l-4 border-accent bg-accent-soft/50 text-navy", icon: "text-accent", Icon: Lightbulb },
};

export function Callout({
  children,
  tone = "warn",
  title,
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  title?: string;
  className?: string;
}) {
  const s = styles[tone];
  return (
    <div className={cn("flex items-start gap-3 rounded-r-lg p-4 font-sans text-sm", s.box, className)}>
      <s.Icon className={cn("mt-0.5 h-4 w-4 shrink-0", s.icon)} />
      <div>
        {title && <p className="font-semibold">{title}</p>}
        <div className={title ? "mt-1" : undefined}>{children}</div>
      </div>
    </div>
  );
}
