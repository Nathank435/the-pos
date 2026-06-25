import type { Metadata } from "next";
import { InfoPage } from "@/components/content/InfoPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use",
  description: "The terms governing your use of The POS website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <InfoPage
      title="Terms of Use"
      intro="This is a placeholder terms of use. Have it reviewed by a qualified professional before launch."
      crumbLabel="Terms"
      path="/terms"
      lastUpdated="2026-06-25"
      sections={[
        {
          heading: "Information, not advice",
          paragraphs: [
            "The POS provides comparison information and guidance, not financial, legal or professional advice. Always check a provider's current terms before signing up. Decisions you make are your own responsibility.",
          ],
        },
        {
          heading: "Accuracy",
          paragraphs: [
            "We work hard to keep information accurate and current, but pricing and terms change frequently and quote-based pricing varies. We make no warranty that all information is complete or error-free.",
          ],
        },
        {
          heading: "Affiliate links",
          paragraphs: [
            "Some links are affiliate links from which we may earn commission at no extra cost to you. See 'How we make money'.",
          ],
        },
        {
          heading: "Liability",
          paragraphs: [
            "To the extent permitted by law, we are not liable for any loss arising from reliance on information on this site or from your dealings with third-party providers.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: ["Content on this site is owned by The POS unless stated otherwise and may not be reproduced without permission."],
        },
      ]}
    />
  );
}
