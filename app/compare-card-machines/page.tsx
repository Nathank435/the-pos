import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { ProviderComparisonTable } from "@/components/comparison/ProviderComparisonTable";
import { DisclosureBanner } from "@/components/layout/DisclosureBanner";
import { MethodologyBox } from "@/components/content/MethodologyBox";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { InlineQuoteCTA } from "@/components/forms/InlineQuoteCTA";
import { ProviderLogo } from "@/components/ui/ProviderLogo";
import { ProviderCTA } from "@/components/comparison/ProviderCTA";
import { StickyMobileCTA } from "@/components/forms/StickyMobileCTA";
import { pageMeta } from "@/lib/seo";
import { PROVIDERS, latestProviderUpdate } from "@/data/providers";

export const metadata: Metadata = pageMeta({
  title: "Best Card Machines UK: Compare Card Readers (2026)",
  description:
    "Compare the best UK card machines and card readers for small business — SumUp, Square, Zettle, Dojo, myPOS, Worldpay and more. Prices, fees and hardware compared.",
  path: "/compare-card-machines",
});

const FAQS = [
  {
    q: "What is the cheapest card machine in the UK?",
    a: "SumUp's Air reader (from £19 + VAT) is among the cheapest to buy, with no monthly fee. Square's reader is similarly priced. For the lowest per-transaction rate, SumUp's Payments Plus plan starts from 0.99% on domestic cards.",
  },
  {
    q: "What is the best card reader for a small business?",
    a: "For most small businesses, SumUp or Square offer the best balance of cheap hardware, no monthly fee and no contract. If you need a standalone device with mobile data, look at the SumUp Solo or Zettle Terminal.",
  },
  {
    q: "Do card machines work without WiFi?",
    a: "Standalone readers with a built-in SIM — like the SumUp Solo, Zettle Terminal and myPOS Go — work on mobile data, so they don't need WiFi. Phone-paired readers rely on your phone's connection.",
  },
];

// Providers that sell physical card machines (exclude software-only POS).
const HARDWARE_PROVIDERS = PROVIDERS.filter((p) => p.type !== "full-pos" || p.hardware.length > 1);

export default function CompareCardMachinesPage() {
  const withHardware = PROVIDERS.filter((p) => p.hardware.length > 0);

  return (
    <>
      <PageHero
        title="Compare Card Machines &amp; Readers"
        intro="The best UK card machines for small business, compared on price, fees and features. From £19 pocket readers to standalone terminals with their own SIM."
        crumbs={[{ name: "Card Machines", path: "/compare-card-machines" }]}
        lastUpdated={latestProviderUpdate()}
      />

      <Section>
        <Container>
          <DisclosureBanner className="mb-6" />
          <ProviderComparisonTable providers={HARDWARE_PROVIDERS} sourcePage="compare-card-machines" />
        </Container>
      </Section>

      {/* Hardware deep-dive */}
      <Section muted>
        <Container>
          <h2 className="font-heading text-2xl font-bold text-navy">The devices, by provider</h2>
          <p className="mt-2 max-w-2xl text-grey">Indicative prices — always check current offers, which often discount the first reader.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {withHardware.map((p) => (
              <div key={p.slug} className="rounded-lg border border-border bg-white p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <ProviderLogo name={p.name} slug={p.slug} size="sm" />
                    <h3 className="font-heading font-bold text-navy">{p.name}</h3>
                  </div>
                  <ProviderCTA provider={p} size="sm" sourcePage="card-machines-hardware" label="Visit" />
                </div>
                <ul className="mt-4 space-y-2">
                  {p.hardware.map((h) => (
                    <li key={h.name} className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-2 text-sm last:border-0">
                      <div>
                        <span className="font-semibold text-navy">{h.name}</span>
                        <span className="block text-xs text-grey">{h.note}</span>
                      </div>
                      <span className="tabular shrink-0 font-semibold text-accent">{h.priceFrom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Card machine FAQs</h2>
            <div className="mt-5">
              <FAQAccordion faqs={FAQS} />
            </div>
          </div>
          <div className="space-y-5">
            <MethodologyBox />
            <InlineQuoteCTA
              title="Not sure which device?"
              copy="Tell us how and where you sell and we'll suggest the right reader."
              secondary={undefined}
            />
          </div>
        </Container>
      </Section>

      <StickyMobileCTA />
    </>
  );
}
