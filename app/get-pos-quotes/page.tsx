import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { LeadForm } from "@/components/forms/LeadForm";
import { QuizForm } from "@/components/forms/QuizForm";
import { TrackView } from "@/components/analytics/TrackView";
import { pageMeta } from "@/lib/seo";
import { getProvider } from "@/data/providers";
import { ShieldCheck, Clock, Users } from "lucide-react";

export const metadata: Metadata = pageMeta({
  title: "Get POS & Card Machine Quotes (UK)",
  description:
    "Tell us how your business takes payments and we'll point you towards UK POS and card machine providers that actually fit - not just the loudest sales team.",
  path: "/get-pos-quotes",
});

export default async function GetQuotesPage({
  searchParams,
}: {
  searchParams: Promise<{ provider?: string }>;
}) {
  const { provider } = await searchParams;
  const prefilled = provider ? getProvider(provider)?.name : undefined;

  return (
    <>
      <TrackView event="quote_page_view" />
      <PageHero
        title="Find the right POS provider for your business."
        intro="Tell us how you take payments and we'll help point you towards providers that actually fit - not just the one with the loudest sales team."
        crumbs={[{ name: "Get Quotes", path: "/get-pos-quotes" }]}
      >
        <div className="mt-5 flex flex-wrap gap-4 text-sm text-grey">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> No obligation</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-accent" /> Takes about a minute</span>
          <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4 text-accent" /> Built for UK small businesses</span>
        </div>
      </PageHero>

      {/* Quiz */}
      <Section id="quiz">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-navy">Take the 60-second POS quiz</h2>
            <p className="mt-2 text-grey">
              Answer a few questions and we'll show your best matches instantly - no email required to see results.
            </p>
            <div className="mt-5">
              <QuizForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* Lead form */}
      <Section muted>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-navy">Prefer tailored quotes?</h2>
            <p className="mt-2 text-grey">
              Pop in a few details and we'll match you to providers that fit how you trade{prefilled ? `, starting with your interest in ${prefilled}` : ""}.
            </p>
            <div className="mt-5">
              <LeadForm defaultProvider={prefilled} />
            </div>
            <div className="mt-5">
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
