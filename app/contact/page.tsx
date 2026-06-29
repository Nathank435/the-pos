import type { Metadata } from "next";
import { InfoPage } from "@/components/content/InfoPage";
import { pageMeta } from "@/lib/seo";
import { SITE, COMPANY } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact The POS",
  description: "Get in touch with The POS - corrections, partnership enquiries and feedback.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <InfoPage
      title="Contact Us"
      intro="Corrections, partnership enquiries or just feedback - we'd like to hear from you."
      crumbLabel="Contact"
      path="/contact"
      sections={[
        {
          heading: "Email",
          paragraphs: [
            `The quickest way to reach us is by email at ${SITE.email}. We read everything, though we can't always reply individually.`,
          ],
        },
        {
          heading: "Registered office",
          paragraphs: [
            `${SITE.domain} is operated by ${COMPANY.legalName} (company no. ${COMPANY.number}).`,
            `${COMPANY.addressOneLine}.`,
          ],
        },
        {
          heading: "Corrections & updates",
          paragraphs: [
            "Spotted out-of-date pricing or an error in a review? Let us know which provider and what's changed, and we'll review and update it.",
          ],
        },
        {
          heading: "Providers & partnerships",
          paragraphs: [
            "If you're a provider and want to discuss a listing or partnership, get in touch - but note that commercial arrangements never change our editorial verdicts.",
          ],
        },
        {
          heading: "Looking for a recommendation?",
          paragraphs: [
            "If you want help choosing, the fastest route is our quote form or 60-second quiz, which match you to providers based on your answers.",
          ],
        },
      ]}
    />
  );
}
