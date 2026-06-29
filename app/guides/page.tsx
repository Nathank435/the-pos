import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { GuideCard } from "@/components/content/GuideCard";
import { InlineQuoteCTA } from "@/components/forms/InlineQuoteCTA";
import { pageMeta } from "@/lib/seo";
import { GUIDES } from "@/data/guides";

export const metadata: Metadata = pageMeta({
  title: "POS & Card Machine Guides (UK)",
  description:
    "Plain-English guides to UK POS systems and card machines - fees explained, how to choose, no-contract options, Tap to Pay, virtual terminals and more.",
  path: "/guides",
});

export default function GuidesIndex() {
  const categories = ["Basics", "Choosing", "Fees", "Features"] as const;
  return (
    <>
      <PageHero
        title="POS &amp; Card Machine Guides"
        intro="No jargon, no fintech waffle. Just clear answers to the questions UK business owners actually ask before choosing how to take payments."
        crumbs={[{ name: "Guides", path: "/guides" }]}
      />
      <Section>
        <Container className="space-y-10">
          {categories.map((cat) => {
            const guides = GUIDES.filter((g) => g.category === cat);
            if (!guides.length) return null;
            return (
              <div key={cat}>
                <h2 className="font-heading text-2xl font-bold text-navy">{cat}</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {guides.map((g) => (
                    <GuideCard key={g.slug} guide={g} />
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </Section>
      <Section muted>
        <Container>
          <InlineQuoteCTA />
        </Container>
      </Section>
    </>
  );
}
