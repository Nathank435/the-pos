import type { Metadata } from "next";
import { InfoPage } from "@/components/content/InfoPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "How We Make Money",
  description:
    "How The POS makes money - affiliate commissions and lead referrals, clearly disclosed. Providers cannot pay to change our editorial verdicts.",
  path: "/how-we-make-money",
});

export default function HowWeMakeMoneyPage() {
  return (
    <InfoPage
      title="How We Make Money"
      intro="Total transparency: here's exactly how The POS funds itself, and the lines we won't cross."
      crumbLabel="How we make money"
      path="/how-we-make-money"
      sections={[
        {
          paragraphs: [
            "The POS may earn commission when you click links or apply through certain providers. This does not cost you extra. We aim to keep comparisons fair, useful and clearly labelled.",
          ],
        },
        {
          heading: "Affiliate commissions",
          paragraphs: [
            "Some links to providers are affiliate links. If you click one and sign up, we may earn a commission from that provider. These links are marked and use rel=\"sponsored nofollow\" so search engines understand the relationship.",
          ],
        },
        {
          heading: "Lead referrals",
          paragraphs: [
            "When you ask us to find matches via our quote form, we may share your details with relevant providers or partners (with your consent) and may be paid a referral fee. We only ever do this with your explicit consent.",
          ],
        },
        {
          heading: "What commercial relationships do NOT do",
          bullets: [
            "They do not change our editorial ratings or verdicts.",
            "Providers cannot pay to appear as 'best' or to remove criticism.",
            "We include providers regardless of whether we have an affiliate deal with them.",
          ],
        },
        {
          heading: "Why disclose all this?",
          paragraphs: [
            "Because UK advertising rules (the ASA/CAP Code) require marketing to be obviously identifiable, and because you deserve to know. If a page can earn us money, we say so on that page.",
          ],
        },
      ]}
    />
  );
}
