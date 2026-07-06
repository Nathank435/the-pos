import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { pageMeta } from "@/lib/seo";
import { PROVIDERS } from "@/data/providers";

export const metadata: Metadata = pageMeta({
  title: "Price & Review Changelog",
  description:
    "Every substantive change to our provider reviews and pricing data, dated and in the open - so you can see exactly how current our comparisons are.",
  path: "/changelog",
});

type Entry = { date: string; note: string; provider: string; slug: string };

export default function ChangelogPage() {
  const entries: Entry[] = PROVIDERS.flatMap((p) =>
    p.changelog.map((c) => ({ ...c, provider: p.name, slug: p.slug }))
  ).sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.provider.localeCompare(b.provider)));

  const byDate = new Map<string, Entry[]>();
  for (const e of entries) {
    const list = byDate.get(e.date) ?? [];
    list.push(e);
    byDate.set(e.date, list);
  }

  return (
    <>
      <PageHero
        title="Price & Review Changelog"
        intro="Every substantive change to our reviews and pricing data, in the open. If a date hasn't moved, nothing material has changed - we don't re-date pages to look fresh."
        crumbs={[{ name: "Changelog", path: "/changelog" }]}
      />
      <Section>
        <Container>
          <div className="max-w-3xl space-y-8">
            {[...byDate.entries()].map(([date, list]) => (
              <section key={date}>
                <h2 className="font-heading text-lg font-bold text-navy">
                  {new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </h2>
                <ul className="mt-3 space-y-2 border-l-2 border-accent/30 pl-4">
                  {list.map((e, i) => (
                    <li key={i} className="text-sm leading-relaxed text-grey">
                      <Link href={`/reviews/${e.slug}`} className="font-semibold text-deepblue hover:underline">
                        {e.provider}
                      </Link>
                      : {e.note}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            <p className="text-sm text-grey">
              Spotted a price we&apos;ve missed?{" "}
              <Link href="/contact" className="font-semibold text-deepblue hover:underline">
                Tell us
              </Link>{" "}
              and we&apos;ll verify and log the change.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
