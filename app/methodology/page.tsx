import type { Metadata } from "next";
import { InfoPage } from "@/components/content/InfoPage";
import { pageMeta } from "@/lib/seo";
import { latestProviderUpdate } from "@/data/providers";

export const metadata: Metadata = pageMeta({
  title: "Our Methodology",
  description: "How The POS researches, rates and compares UK POS systems and card machine providers.",
  path: "/methodology",
});

export default function MethodologyPage() {
  return (
    <InfoPage
      title="Our Methodology"
      intro="How we research, rate and compare providers - so you can judge whether to trust our verdicts."
      crumbLabel="Methodology"
      path="/methodology"
      lastUpdated={latestProviderUpdate()}
      sections={[
        {
          paragraphs: [
            "We compare providers using publicly available pricing, contract information, hardware costs, payout details, software features and suitability for different UK business types. Some links may earn us commission, but providers cannot pay to change our editorial verdicts.",
          ],
        },
        {
          heading: "What we assess",
          bullets: [
            "Value - transaction rates, monthly fees and total cost of ownership",
            "Ease of use - setup, day-to-day operation and learning curve",
            "Features - POS software, inventory, hospitality tools, online payments",
            "Support - channels, responsiveness and account management",
            "Contract flexibility - commitment, exit terms and no-contract options",
          ],
        },
        {
          heading: "How ratings work",
          paragraphs: [
            "Each provider gets an overall score out of 5, built from the five criteria above. Scores reflect our editorial judgement against typical UK small-business needs - not paid placement.",
          ],
        },
        {
          heading: "Keeping data current",
          paragraphs: [
            "Every provider entry carries a 'last checked' date and links to our sources. Pricing changes often, and quote-based providers (e.g. Dojo, Worldpay) don't publish fixed rates - where we estimate, we say so. Always confirm current terms with the provider before signing.",
          ],
        },
        {
          heading: "Corrections",
          paragraphs: [
            "Spotted something out of date or wrong? Tell us via the contact page and we'll review and update it.",
          ],
        },
      ]}
    />
  );
}
