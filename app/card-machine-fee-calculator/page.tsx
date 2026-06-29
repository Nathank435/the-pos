import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FeeCalculator } from "@/components/calculator/FeeCalculator";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { MethodologyBox } from "@/components/content/MethodologyBox";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Card Machine Fee Calculator (UK)",
  description:
    "Estimate your monthly and annual card machine fees across UK providers. Enter your turnover and average transaction to see the cheapest likely option.",
  path: "/card-machine-fee-calculator",
});

const FAQS = [
  {
    q: "How accurate is this fee calculator?",
    a: "It's an estimate for comparison only. It uses each provider's headline in-person rate and known fees. Real pricing varies by card type, plan and contract - and quote-based providers (Dojo, Tyl) are shown with illustrative blended rates. Always confirm with the provider.",
  },
  {
    q: "Why does a no-monthly-fee provider sometimes win?",
    a: "At lower volumes, a monthly fee can outweigh a slightly lower transaction rate. The calculator flags when a no-fee option is the safer bet for your turnover.",
  },
  {
    q: "Does the calculator include hardware costs?",
    a: "It spreads the one-off reader cost across your contract length (minimum 12 months) in the annual figure, so you can compare total cost of ownership rather than just the rate.",
  },
];

export default function CalculatorPage() {
  return (
    <>
      <PageHero
        title="Card Machine Fee Calculator"
        intro="Plug in your numbers and see what you'd pay across the main UK providers - monthly, annually, and as an all-in effective rate."
        crumbs={[{ name: "Fee Calculator", path: "/card-machine-fee-calculator" }]}
      />
      <Section>
        <Container>
          <FeeCalculator />
        </Container>
      </Section>
      <Section muted>
        <Container className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Calculator FAQs</h2>
            <div className="mt-5">
              <FAQAccordion faqs={FAQS} />
            </div>
          </div>
          <MethodologyBox />
        </Container>
      </Section>
    </>
  );
}
