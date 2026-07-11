import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { ProviderComparisonTable } from "@/components/comparison/ProviderComparisonTable";
import { ProviderCard } from "@/components/comparison/ProviderCard";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { CalcTeaser } from "@/components/calculator/HeroCalcTeaser";
import { MethodologyBox } from "@/components/content/MethodologyBox";
import { AuthorBox } from "@/components/content/AuthorBox";
import { InlineQuoteCTA } from "@/components/forms/InlineQuoteCTA";
import { StickyMobileCTA } from "@/components/forms/StickyMobileCTA";
import { Callout } from "@/components/ui/Callout";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { pageMeta } from "@/lib/seo";
import { BUSINESS_TYPES, getBusinessType } from "@/data/businessTypes";
import { getProviders, latestProviderUpdate } from "@/data/providers";

export function generateStaticParams() {
  return BUSINESS_TYPES.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const biz = getBusinessType(slug);
  if (!biz) return {};
  return pageMeta({
    title: `${biz.h1} (2026)`,
    description: biz.seoDescription,
    path: `/pos-systems/${slug}`,
    type: "article",
  });
}

export default async function BusinessTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const biz = getBusinessType(slug);
  if (!biz) notFound();

  const providers = getProviders(biz.recommendedProviders);

  return (
    <>
      <PageHero
        title={biz.h1}
        intro={biz.intro}
        crumbs={[
          { name: "By Business Type", path: "/pos-systems" },
          { name: biz.name, path: `/pos-systems/${slug}` },
        ]}
        lastUpdated={latestProviderUpdate()}
      />

      <Section>
        <Container className="space-y-10">
          <EditorialImage
            src={biz.image ?? `/images/hubs/${biz.slug}.jpg`}
            alt={`${biz.name} taking card payments with a POS system in the UK`}
            label={biz.name}
            ratio="21 / 9"
            priority
          />

          <CalcTeaser
            title={`What ${biz.name.toLowerCase()} actually pay`}
            copy="Start from typical numbers for your trade - then make them yours."
            defaultTurnover={biz.calc?.turnover ?? 5000}
            defaultAtv={biz.calc?.atv ?? 12}
            source={`hub_${biz.slug}`}
          />


          <section>
            <h2 className="font-heading text-2xl font-bold text-navy">Our top picks for {biz.name.toLowerCase()}</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {providers.map((p) => (
                <ProviderCard key={p.slug} provider={p} sourcePage={`business-${slug}`} />
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy">What matters for {biz.name.toLowerCase()}</h2>
              <div className="mt-4 space-y-3">
                {biz.whatMatters.map((m) => (
                  <div key={m.title} className="rounded-lg border border-border bg-white p-4">
                    <h3 className="font-heading text-base font-semibold text-navy">{m.title}</h3>
                    <p className="mt-1 text-sm text-grey">{m.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy">Fees to watch</h2>
              <div className="mt-4 space-y-2">
                {biz.feesToWatch.map((f) => (
                  <Callout key={f} tone="warn">
                    {f}
                  </Callout>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-[#bfdbfe] bg-accent-soft/40 p-5">
                <h3 className="font-heading text-base font-semibold text-[#1e40af]">Recommended setup</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy">{biz.recommendedSetup}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-navy">Compare these providers</h2>
            <div className="mt-5">
              <ProviderComparisonTable providers={providers} sourcePage={`business-${slug}`} />
            </div>
          </section>
        </Container>
      </Section>

      <Section muted>
        <Container>
          <InlineQuoteCTA
            title={`Find the right POS for your ${biz.name.toLowerCase().replace(/s$/, "")}`}
            copy="Answer a few quick questions and we'll match you to providers that fit how you actually trade."
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">FAQs</h2>
            <div className="mt-5">
              <FAQAccordion faqs={biz.faqs} />
            </div>
          </div>
          <div className="space-y-5">
            <MethodologyBox />
            <AuthorBox lastUpdated={latestProviderUpdate()} />
          </div>
        </Container>
      </Section>

      <StickyMobileCTA />
    </>
  );
}
