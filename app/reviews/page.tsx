import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { ProviderLogo } from "@/components/ui/ProviderLogo";
import { RatingStars } from "@/components/comparison/ProviderRating";
import { BestForTags } from "@/components/comparison/BestForTags";
import { InlineQuoteCTA } from "@/components/forms/InlineQuoteCTA";
import { pageMeta } from "@/lib/seo";
import { PROVIDERS, latestProviderUpdate } from "@/data/providers";

export const metadata: Metadata = pageMeta({
  title: "UK POS & Payment Provider Reviews",
  description:
    "Honest, plain-English reviews of UK POS systems and card machine providers - SumUp, Square, Zettle, Dojo, myPOS, Worldpay, Lightspeed and more.",
  path: "/reviews",
});

export default function ReviewsIndexPage() {
  return (
    <>
      <PageHero
        title="POS &amp; Payment Provider Reviews"
        intro="Plain-English reviews of the UK's main POS systems and card machine providers. Fees, hardware, contracts, payouts and who each one actually suits."
        crumbs={[{ name: "Reviews", path: "/reviews" }]}
        lastUpdated={latestProviderUpdate()}
      />
      <Section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...PROVIDERS]
              .sort((a, b) => b.editorialRating.overall - a.editorialRating.overall)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/reviews/${p.slug}`}
                  className="group flex flex-col rounded-lg border border-border bg-white p-5 transition-colors hover:border-navy"
                >
                  <div className="flex items-center gap-3">
                    <ProviderLogo name={p.name} slug={p.slug} />
                    <div>
                      <h2 className="font-heading font-bold text-navy group-hover:text-deepblue">{p.name}</h2>
                      <RatingStars value={p.editorialRating.overall} />
                    </div>
                  </div>
                  <p className="mt-3 line-clamp-3 text-sm text-grey">{p.summary}</p>
                  <div className="mt-3">
                    <BestForTags tags={p.bestFor.slice(0, 2)} />
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Read review <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
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
