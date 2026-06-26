import type { Metadata } from "next";
import { InfoPage } from "@/components/content/InfoPage";
import { pageMeta } from "@/lib/seo";
import { SITE, COMPANY } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: "How The POS collects, uses and protects your personal data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      intro="This is a placeholder privacy policy. Have it reviewed by a qualified professional before launch to ensure UK GDPR/DPA 2018 compliance."
      crumbLabel="Privacy policy"
      path="/privacy-policy"
      lastUpdated="2026-06-25"
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            `${SITE.domain} (“${SITE.name}”) is operated by ${COMPANY.legalName}, a company registered in England & Wales under company number ${COMPANY.number}, with its registered office at ${COMPANY.addressOneLine}.`,
            `${COMPANY.legalName} is the data controller for personal data collected through this site. Contact: ${SITE.email}.`,
          ],
        },
        {
          heading: "What we collect",
          bullets: [
            "Information you submit via our quote and quiz forms (e.g. name, business name, email, phone, postcode, business details).",
            "Usage data via analytics (e.g. pages visited, device type), where you have consented.",
            "Marketing identifiers such as UTM parameters and click IDs to attribute referrals.",
          ],
        },
        {
          heading: "How we use it",
          bullets: [
            "To match you with relevant providers and respond to your enquiry.",
            "To improve the site and our content.",
            "To measure marketing performance.",
          ],
        },
        {
          heading: "Sharing your data",
          paragraphs: [
            "With your consent, we may share quote-form details with relevant providers or partners so they can contact you. We do not sell your personal data.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "Under UK GDPR you have rights to access, correct, delete and restrict the use of your data. To exercise them, email us.",
          ],
        },
        {
          heading: "Retention & security",
          paragraphs: [
            "We keep personal data only as long as necessary and take reasonable measures to protect it.",
          ],
        },
      ]}
    />
  );
}
