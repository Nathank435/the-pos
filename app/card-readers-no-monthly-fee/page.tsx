import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { ProviderCard } from "@/components/comparison/ProviderCard";
import { Callout } from "@/components/ui/Callout";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { PROVIDERS, latestProviderUpdate } from "@/data/providers";

export const metadata: Metadata = pageMeta({
  title: "Best Card Readers With No Monthly Fee (UK, 2026)",
  description:
    "The best UK card readers with no monthly fee - SumUp, Square, Zettle and myPOS compared. Pay-as-you-go, no contract, no rental. Fees, verdicts and who to avoid.",
  path: "/card-readers-no-monthly-fee",
});

const FAQS = [
  {
    q: "Which card readers have no monthly fee in the UK?",
    a: "SumUp, Square, PayPal Zettle and entry myPOS plans all offer card readers with no monthly fee. You buy the reader once, then pay a percentage per transaction - nothing in the months you don't trade.",
  },
  {
    q: "Is a no-monthly-fee card reader actually the cheapest?",
    a: "Not always. No monthly fee is cheapest for lower or seasonal volume. Once you take serious volume, a provider with a monthly fee but a lower transaction rate can work out cheaper overall. Compare the all-in cost at your real turnover.",
  },
  {
    q: "What's the cheapest card reader with no monthly fee?",
    a: "SumUp's Air is one of the cheapest to buy (from £19 + VAT) with no monthly fee, and its Payments Plus plan starts from 0.99% on domestic cards. Square and Zettle readers are similarly priced at a flat 1.75%.",
  },
];

export default function NoMonthlyFeePage() {
  const providers = PROVIDERS.filter((p) => p.hasNoMonthlyFee).slice(0, 4);
  const path = "/card-readers-no-monthly-fee";

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Card Machines", path: "/compare-card-machines" },
            { name: "No monthly fee", path },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <PageHero
        title="Best Card Readers With No Monthly Fee (UK)"
        intro="Pay-as-you-go readers with no monthly rental - you buy the reader once and pay a percentage per sale, with nothing to pay in the weeks you don't trade. Best for lower or seasonal volume, where a monthly fee wouldn't pay for itself."
        crumbs={[
          { name: "Card Machines", path: "/compare-card-machines" },
          { name: "No monthly fee", path },
        ]}
        lastUpdated={latestProviderUpdate()}
      />

      <Section>
        <Container className="space-y-8">
          <Callout tone="warn" title="No monthly fee isn't the same as cheapest">
            If you take serious card volume, a provider with a monthly fee and a lower transaction rate can work out
            cheaper. Run your numbers through the{" "}
            <Link href="/card-machine-fee-calculator" className="font-semibold text-deepblue underline">
              fee calculator
            </Link>{" "}
            before you decide.
          </Callout>

          <div className="grid gap-4 md:grid-cols-2">
            {providers.map((p) => (
              <ProviderCard key={p.slug} provider={p} sourcePage="no-monthly-fee" />
            ))}
          </div>

          <div className="rounded-xl border border-border bg-white p-5">
            <h2 className="font-heading text-lg font-bold text-navy">Who a no-monthly-fee reader suits</h2>
            <p className="mt-2 text-sm leading-relaxed text-grey">
              Market traders, mobile sellers, salons, pop-ups, new businesses and anyone with quiet or seasonal months.
              You keep costs tied to sales, not a standing charge. Taking thousands a week? It&apos;s worth comparing a
              lower-rate plan too - and if you just want to dodge a long tie-in, see our{" "}
              <Link href="/guides/no-contract-card-machines" className="font-semibold text-deepblue hover:underline">
                no-contract card machines
              </Link>{" "}
              guide.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <ButtonLink href="/compare-card-machines" size="sm">Compare all card machines</ButtonLink>
              <ButtonLink href="/card-machine-fee-calculator" variant="outline" size="sm">Work out what you&apos;d pay</ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section muted>
        <Container className="max-w-3xl">
          <h2 className="font-heading text-2xl font-extrabold text-navy">No-monthly-fee card readers: FAQs</h2>
          <div className="mt-5">
            <FAQAccordion faqs={FAQS} />
          </div>
        </Container>
      </Section>
    </>
  );
}
