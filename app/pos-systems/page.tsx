import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { InlineQuoteCTA } from "@/components/forms/InlineQuoteCTA";
import { pageMeta } from "@/lib/seo";
import { BUSINESS_TYPES } from "@/data/businessTypes";
import { getProvider } from "@/data/providers";

export const metadata: Metadata = pageMeta({
  title: "Best POS Systems by Business Type (UK)",
  description:
    "Find the best POS system and card machine for your type of business - cafés, restaurants, retail, salons, tradespeople, market stalls and more.",
  path: "/pos-systems",
});

export default function BusinessTypesIndex() {
  return (
    <>
      <PageHero
        title="Best POS Systems by Business Type"
        intro="What's brilliant for a busy restaurant is overkill for a one-person plumbing business. Pick your trade and we'll show you what fits."
        crumbs={[{ name: "By Business Type", path: "/pos-systems" }]}
      />
      <Section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BUSINESS_TYPES.map((b) => {
              const top = getProvider(b.recommendedProviders[0]);
              return (
                <Link
                  key={b.slug}
                  href={`/pos-systems/${b.slug}`}
                  className="group flex flex-col rounded-lg border border-border bg-white p-5 transition-colors hover:border-navy"
                >
                  <h2 className="font-heading text-lg font-bold text-navy group-hover:text-deepblue">{b.name}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-grey">{b.intro}</p>
                  {top && (
                    <p className="mt-3 text-sm text-grey">
                      Top pick: <span className="font-semibold text-navy">{top.name}</span>
                    </p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    See best for {b.name.toLowerCase()} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
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
