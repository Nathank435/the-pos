import type { Metadata } from "next";
import { InfoPage } from "@/components/content/InfoPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About The POS",
  description: "Who we are and why we built The POS — a plain-English UK POS and card machine comparison site.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <InfoPage
      title="About The POS"
      intro="We're here to help UK business owners choose how to take payments — without the sales waffle."
      crumbLabel="About"
      path="/about"
      sections={[
        {
          paragraphs: [
            "The POS is an independent comparison site for UK POS systems, card machines and payment providers. We started it because choosing a card reader shouldn't mean wading through jargon, fake 'best overall' badges and hidden fees.",
          ],
        },
        {
          heading: "What we do",
          paragraphs: [
            "We compare providers on the things that actually matter to a café owner, shopkeeper, tradesperson or market trader: transaction fees, monthly costs, contracts, payout speed, hardware and whether the software fits how you really work.",
          ],
        },
        {
          heading: "How we keep it useful",
          bullets: [
            "Plain English, not fintech buzzwords",
            "Clear about fees, contracts and the catches providers bury",
            "Honest about who each provider suits — and who it doesn't",
            "Transparent about how we make money",
          ],
        },
        {
          heading: "A note on advice",
          paragraphs: [
            "We provide comparison guidance, not financial advice. Always check a provider's current terms before signing up.",
          ],
        },
      ]}
    />
  );
}
