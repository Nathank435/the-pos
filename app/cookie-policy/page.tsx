import type { Metadata } from "next";
import { InfoPage } from "@/components/content/InfoPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Cookie Policy",
  description: "How The POS uses cookies and similar technologies.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <InfoPage
      title="Cookie Policy"
      intro="This is a placeholder cookie policy. Pair it with a consent banner and review before launch (PECR/UK GDPR)."
      crumbLabel="Cookie policy"
      path="/cookie-policy"
      lastUpdated="2026-06-25"
      sections={[
        {
          heading: "What are cookies?",
          paragraphs: [
            "Cookies are small files stored on your device. We use them, and similar technologies, to make the site work and to understand how it's used.",
          ],
        },
        {
          heading: "Cookies we use",
          bullets: [
            "Essential — required for the site to function.",
            "Analytics — to measure traffic and improve content (only with your consent).",
            "Marketing/attribution — to measure referrals and ad performance (only with your consent).",
          ],
        },
        {
          heading: "Managing cookies",
          paragraphs: [
            "You can control non-essential cookies via our consent banner (where enabled) and through your browser settings. Blocking some cookies may affect how the site works.",
          ],
        },
      ]}
    />
  );
}
