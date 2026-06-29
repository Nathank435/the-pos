import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { VersusSummaryTable } from "@/components/comparison/VersusSummaryTable";
import { ProviderLogo } from "@/components/ui/ProviderLogo";
import { ProviderCTA } from "@/components/comparison/ProviderCTA";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { MethodologyBox } from "@/components/content/MethodologyBox";
import { DisclosureBanner } from "@/components/layout/DisclosureBanner";
import { AuthorBox } from "@/components/content/AuthorBox";
import { StickyMobileCTA } from "@/components/forms/StickyMobileCTA";
import { pageMeta } from "@/lib/seo";
import { VERSUS_PAGES, getVersus } from "@/data/versusPages";
import { getProvider, latestProviderUpdate } from "@/data/providers";

export function generateStaticParams() {
  return VERSUS_PAGES.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const v = getVersus(slug);
  if (!v) return {};
  const a = getProvider(v.a);
  const b = getProvider(v.b);
  if (!a || !b) return {};
  return pageMeta({
    title: `${a.name} vs ${b.name} (2026): Which Is Better for UK Businesses?`,
    description:
      v.metaDescription ??
      `${a.name} vs ${b.name} (2026): fees, hardware, contracts and who each suits, compared in plain English.`,
    path: `/compare/${slug}`,
    type: "article",
  });
}

export default async function VersusPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = getVersus(slug);
  if (!v) notFound();
  const a = getProvider(v.a);
  const b = getProvider(v.b);
  if (!a || !b) notFound();

  return (
    <>
      <div className="border-b border-border bg-white">
        <Container className="py-8 sm:py-12">
          <Breadcrumbs items={[{ name: "Compare", path: "/compare-pos-systems" }, { name: `${a.name} vs ${b.name}`, path: `/compare/${slug}` }]} />
          <div className="mt-5 flex items-center justify-center gap-4 sm:gap-8">
            <div className="text-center">
              <ProviderLogo name={a.name} slug={a.slug} size="lg" />
              <p className="mt-2 font-heading font-bold text-navy">{a.name}</p>
            </div>
            <span className="font-heading text-2xl font-bold text-grey">vs</span>
            <div className="text-center">
              <ProviderLogo name={b.name} slug={b.slug} size="lg" />
              <p className="mt-2 font-heading font-bold text-navy">{b.name}</p>
            </div>
          </div>
          <h1 className="mt-5 text-center font-heading text-3xl font-bold text-navy sm:text-4xl">
            {a.name} vs {b.name}
          </h1>
        </Container>
      </div>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article className="space-y-10">
            <DisclosureBanner />

            <section>
              <h2 className="font-heading text-2xl font-bold text-navy">Quick verdict</h2>
              <p className="mt-3 leading-relaxed text-grey">{v.quickVerdict}</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-navy">Side by side</h2>
              <div className="mt-4">
                <VersusSummaryTable a={a} b={b} />
              </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-white p-5">
                <h3 className="font-heading text-lg font-bold text-navy">Choose {a.name} if…</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey">{v.chooseA}</p>
                <div className="mt-4">
                  <ProviderCTA provider={a} size="sm" sourcePage="versus-choose" />
                </div>
              </div>
              <div className="rounded-lg border border-border bg-white p-5">
                <h3 className="font-heading text-lg font-bold text-navy">Choose {b.name} if…</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey">{v.chooseB}</p>
                <div className="mt-4">
                  <ProviderCTA provider={b} size="sm" sourcePage="versus-choose" />
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-navy">Best for different businesses</h2>
              <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-white">
                <table className="w-full min-w-[420px] text-sm">
                  <thead>
                    <tr className="border-b border-border bg-cream/60 text-left text-xs uppercase tracking-wide text-grey">
                      <th className="p-3 font-semibold">Business</th>
                      <th className="p-3 font-semibold">Winner</th>
                      <th className="p-3 font-semibold">Why</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {v.bestForBusiness.map((row) => (
                      <tr key={row.type}>
                        <td className="p-3 font-medium text-navy">{row.type}</td>
                        <td className="p-3 font-semibold text-accent">{row.winner}</td>
                        <td className="p-3 text-grey">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-navy">FAQs</h2>
              <div className="mt-4">
                <FAQAccordion faqs={v.faqs} />
              </div>
            </section>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="font-heading text-base font-semibold text-navy">Read the full reviews</h3>
              <ul className="mt-2 space-y-1.5">
                <li><Link href={`/reviews/${a.slug}`} className="text-deepblue hover:underline">{a.name} review</Link></li>
                <li><Link href={`/reviews/${b.slug}`} className="text-deepblue hover:underline">{b.name} review</Link></li>
                <li><Link href="/compare-pos-systems" className="text-deepblue hover:underline">All POS systems</Link></li>
              </ul>
            </div>
            <MethodologyBox />
            <AuthorBox lastUpdated={latestProviderUpdate()} />
          </aside>
        </Container>
      </Section>

      <StickyMobileCTA />
    </>
  );
}
