import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-grey">
      <JsonLd data={breadcrumbSchema(all)} />
      <ol className="flex flex-wrap items-center gap-1">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1">
              {last ? (
                <span className="font-medium text-navy">{c.name}</span>
              ) : (
                <Link href={c.path} className="hover:text-navy hover:underline">
                  {c.name}
                </Link>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5 text-border" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
