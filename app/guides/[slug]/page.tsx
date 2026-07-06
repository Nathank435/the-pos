import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { RelatedGuides } from "@/components/content/RelatedGuides";
import { AuthorBox } from "@/components/content/AuthorBox";
import { LastUpdated } from "@/components/content/LastUpdated";
import { InlineQuoteCTA } from "@/components/forms/InlineQuoteCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { GUIDES, getGuide } from "@/data/guides";
import { Clock } from "lucide-react";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMeta({ title: guide.title, description: guide.description, path: `/guides/${slug}`, type: "article" });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const path = `/guides/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: guide.title,
            description: guide.description,
            path,
            datePublished: guide.lastUpdated,
            dateModified: guide.lastUpdated,
          }),
        ]}
      />

      <div className="border-b border-border bg-white">
        <Container className="py-8 sm:py-12">
          <Breadcrumbs items={[{ name: "Guides", path: "/guides" }, { name: guide.title, path }]} />
          <h1 className="mt-4 max-w-3xl font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            {guide.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <LastUpdated date={guide.lastUpdated} />
            <span className="inline-flex items-center gap-1 text-xs font-medium text-grey">
              <Clock className="h-3.5 w-3.5" /> {guide.readMinutes} min read
            </span>
          </div>
        </Container>
      </div>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <article className="max-w-3xl">
            {guide.answer && (
              <div className="mb-6 rounded-lg border-l-4 border-accent bg-accent-soft/40 p-4">
                <p className="text-base leading-relaxed text-navy">
                  <strong className="font-semibold">In short:</strong> {guide.answer}
                </p>
              </div>
            )}
            <p className="text-lg leading-relaxed text-navy">{guide.intro}</p>

            {guide.sections.map((s, i) => (
              <section key={i} className="mt-8">
                {s.heading && <h2 className="font-heading text-2xl font-bold text-navy">{s.heading}</h2>}
                {s.paragraphs.filter(Boolean).map((p, j) => (
                  <p key={j} className="mt-3 leading-relaxed text-grey">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-3 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-grey">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /> {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {guide.faqs && guide.faqs.length > 0 && (
              <section className="mt-10">
                <h2 className="font-heading text-2xl font-bold text-navy">FAQs</h2>
                <div className="mt-4">
                  <FAQAccordion faqs={guide.faqs} />
                </div>
              </section>
            )}

            <div className="mt-10">
              <AuthorBox lastUpdated={guide.lastUpdated} />
            </div>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="font-heading text-base font-semibold text-navy">Useful next steps</h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                {guide.relatedLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-deepblue hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </Section>

      <Section muted>
        <Container className="space-y-10">
          <RelatedGuides slugs={guide.relatedGuides} />
          <InlineQuoteCTA />
        </Container>
      </Section>
    </>
  );
}
