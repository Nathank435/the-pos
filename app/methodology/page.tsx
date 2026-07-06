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
          heading: "How ratings work: the weights",
          paragraphs: [
            "Each provider gets an overall score out of 5, built from the five criteria with these weights: Value 30%, Ease of use 20%, Features 20%, Support 15%, Contract flexibility 15%. Cost carries the most weight because it's the thing you can't undo with training or patience.",
          ],
          bullets: [
            "A 5 on Value means transparent pricing that's competitive at typical small-business volumes with no gotcha fees. A 2 means opaque or quote-only pricing that regularly works out expensive.",
            "A 5 on Contract flexibility means genuinely no contract, cancel any time. A 2 means 12+ month terms, auto-renewal or meaningful exit fees.",
            "A 5 on Support means real humans on UK hours across phone and chat. A 2 means email-only or outsourced scripts.",
            "Scores reflect our editorial judgement against typical UK small-business needs - not paid placement.",
          ],
        },
        {
          heading: "Inclusion policy & commercial relationships",
          paragraphs: [
            "We cover the providers UK small businesses actually shortlist - by market share, search interest and reader questions. Being included is not a commercial arrangement, and no provider can pay to be added, removed or re-scored.",
            "For transparency: we currently have affiliate partnerships with SumUp, myPOS and Shopify POS. Square, Zettle, Dojo, Worldpay, Barclaycard, Tyl by NatWest, Lightspeed, Epos Now and TouchBistro are linked with no commercial relationship - those reviews are unpaid. This list changes as partnerships change, and we keep it current.",
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
