import type { Metadata } from "next";
import { InfoPage } from "@/components/content/InfoPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Editorial Policy",
  description: "The POS editorial policy: independence, accuracy, transparency and how commercial relationships are handled.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <InfoPage
      title="Editorial Policy"
      intro="The principles behind everything we publish."
      crumbLabel="Editorial policy"
      path="/editorial-policy"
      sections={[
        {
          heading: "Independence",
          paragraphs: [
            "Our editorial verdicts are independent. Providers cannot pay for a better rating, a higher position, or to remove criticism. Commercial relationships are disclosed but never influence our judgement.",
          ],
        },
        {
          heading: "Accuracy",
          paragraphs: [
            "We aim for accurate, up-to-date information and label every provider with a 'last checked' date and sources. Where pricing is quote-based or estimated, we make that clear.",
          ],
        },
        {
          heading: "Transparency",
          paragraphs: [
            "Affiliate links are marked and use rel=\"sponsored nofollow\". Any page that can earn us commission carries a visible disclosure, in line with ASA/CAP Code guidance that marketing must be obviously identifiable.",
          ],
        },
        {
          heading: "No unsupported claims",
          paragraphs: [
            "We avoid absolute claims like 'cheapest' unless our data supports them, and we date all pricing so readers can judge how current it is.",
          ],
        },
        {
          heading: "Fairness",
          paragraphs: [
            "We include providers on merit and suitability, regardless of whether we have a commercial arrangement with them.",
          ],
        },
      ]}
    />
  );
}
