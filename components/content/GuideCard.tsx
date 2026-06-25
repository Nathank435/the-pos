import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Guide } from "@/data/guides";

export function GuideCard({ guide }: { guide: Pick<Guide, "slug" | "title" | "description" | "category" | "readMinutes"> }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex flex-col rounded-lg border border-border bg-white p-5 transition-colors hover:border-navy"
    >
      <div className="flex items-center justify-between gap-2">
        <Badge tone="accent">{guide.category}</Badge>
        <span className="inline-flex items-center gap-1 text-xs text-grey">
          <Clock className="h-3.5 w-3.5" />
          {guide.readMinutes} min
        </span>
      </div>
      <h3 className="mt-3 font-heading text-base font-semibold text-navy group-hover:text-deepblue">
        {guide.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-grey">{guide.description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
