import { SITE } from "@/lib/site";
import { LastUpdated } from "./LastUpdated";

export function AuthorBox({ lastUpdated }: { lastUpdated: string }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-white p-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy font-heading text-lg font-bold text-white">
        TP
      </span>
      <div className="min-w-0">
        <p className="font-heading text-sm font-semibold text-navy">The POS editorial team</p>
        <p className="text-xs leading-relaxed text-grey">
          Independent UK payments research. We test, read the small print and write it up in plain English.
        </p>
        <div className="mt-1">
          <LastUpdated date={lastUpdated} />
        </div>
      </div>
      <span className="sr-only">{SITE.publisher}</span>
    </div>
  );
}
