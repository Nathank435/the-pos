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
      intro="How we use cookies and similar technologies, and how you can control them (PECR/UK GDPR)."
      crumbLabel="Cookie policy"
      path="/cookie-policy"
      lastUpdated="2026-07-02"
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
            "Essential - required for the site to function (e.g. remembering your cookie choice).",
            "Analytics (Google Analytics via Google Tag Manager) - to measure traffic and improve content (only with your consent).",
            "Behaviour analytics (Microsoft Clarity) - anonymised heatmaps and session replays to understand how pages are used (only with your consent).",
            "Marketing/attribution (Klaviyo, Google) - to measure referrals, email sign-ups and ad performance (only with your consent).",
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
