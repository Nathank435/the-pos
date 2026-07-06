import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { TrustStrip } from "@/components/content/TrustStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { providerItemListSchema } from "@/lib/schema";
import { ProviderComparisonTable } from "@/components/comparison/ProviderComparisonTable";
import { VersusLinks } from "@/components/comparison/VersusLinks";
import { MethodologyBox } from "@/components/content/MethodologyBox";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { InlineQuoteCTA } from "@/components/forms/InlineQuoteCTA";
import { AuthorBox } from "@/components/content/AuthorBox";
import { StickyMobileCTA } from "@/components/forms/StickyMobileCTA";
import { pageMeta } from "@/lib/seo";
import { PROVIDERS, latestProviderUpdate } from "@/data/providers";

export const metadata: Metadata = pageMeta({
  title: "Compare UK POS Systems & Payment Providers (2026)",
  description:
    "Compare UK POS systems and payment providers side by side - fees, monthly costs, contracts, payout speed and features. Filter by what your business needs.",
  path: "/compare-pos-systems",
});

const FAQS = [
  {
    q: "What is the best POS system in the UK?",
    a: "It depends on your business. Square is the best free all-rounder, SumUp wins for cheap simple payments, Dojo for busy hospitality, and Lightspeed for serious multi-location retail. Use the filters above to match your needs.",
  },
  {
    q: "Which POS providers have no monthly fee?",
    a: "SumUp, Square, PayPal Zettle and entry myPOS plans have no monthly fee - filter by 'No monthly fee' above to see them all.",
  },
  {
    q: "Can I switch payment providers easily?",
    a: "Pay-as-you-go providers (SumUp, Square, Zettle) have no contract, so switching is simple. Quote-based providers may have a contract term and exit fees - check before signing.",
  },
];

export default function ComparePOSPage() {
  return (
    <>
      <JsonLd data={providerItemListSchema(PROVIDERS)} />
      <PageHero
        title="Compare UK POS Systems"
        intro="Every UK POS system and card machine, side by side - monthly fees, transaction rates, hardware, contracts and payout speed. Pick for how you actually trade, not the shiniest terminal."
        crumbs={[{ name: "Compare POS Systems", path: "/compare-pos-systems" }]}
        lastUpdated={latestProviderUpdate()}
      />

      <Section>
        <Container>
          <TrustStrip className="mb-6" />
          <ProviderComparisonTable providers={PROVIDERS} sourcePage="compare-pos-systems" />
        </Container>
      </Section>

      <Section muted>
        <Container>
          <InlineQuoteCTA
            title="Want it narrowed down for you?"
            copy="Answer a few questions and we'll point you towards the providers most likely to fit your business - with tailored quotes."
          />
        </Container>
      </Section>

      <Section muted>
        <Container>
          <VersusLinks />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Frequently asked</h2>
            <div className="mt-5">
              <FAQAccordion faqs={FAQS} />
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
