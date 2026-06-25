import { CalendarCheck } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function LastUpdated({ date, label = "Last updated" }: { date: string; label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-grey">
      <CalendarCheck className="h-3.5 w-3.5 text-accent" />
      {label}: <time dateTime={date} className="tabular">{formatDate(date)}</time>
    </span>
  );
}
