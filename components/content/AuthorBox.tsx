import Link from "next/link";
import { Linkedin } from "lucide-react";
import { AUTHOR } from "@/lib/site";
import { LastUpdated } from "./LastUpdated";

/** Named reviewer card - shown on reviews and guides (E-E-A-T). */
export function AuthorBox({ lastUpdated }: { lastUpdated: string }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-white p-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={AUTHOR.photo}
        alt={AUTHOR.name}
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0">
        <p className="font-heading text-sm font-semibold text-navy">
          Reviewed by{" "}
          <Link href="/authors/nathan-keeble" className="text-deepblue hover:underline">
            {AUTHOR.name}
          </Link>{" "}
          <span className="font-normal text-grey">- {AUTHOR.role}</span>
        </p>
        <p className="text-xs leading-relaxed text-grey">
          Independent UK payments research. We research the pricing, read the small print and write it up in plain
          English.
        </p>
        <div className="mt-1 flex items-center gap-3">
          <LastUpdated date={lastUpdated} />
          <a
            href={AUTHOR.linkedin}
            target="_blank"
            rel="me noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-deepblue hover:underline"
          >
            <Linkedin className="h-3 w-3" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
