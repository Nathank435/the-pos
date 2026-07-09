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
        title="Which card machine or POS actually fits your business?"
        intro="Answer a few quick questions about how you take payments and we'll point you toward the providers that genuinely fit - not just the one with the loudest sales team. No email needed to see your matches."
        crumbs={[{ name: "Get Quotes", path: "/get-pos-quotes" }]}
      >
        <div className="mt-5 flex flex-wrap gap-4 text-sm text-grey">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> No obligation</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-accent" /> Takes about a minute</span>
          <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4 text-accent" /> Built for UK small businesses</span>
        </div>
      </PageHero>

      {/* Two journeys, clearly separated: advice (quiz) vs commercial (quotes). */}
      <Section className="!py-8">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="#quiz"
              className="rounded-lg border-2 border-accent bg-accent-soft/40 p-5 transition-colors hover:bg-accent-soft"
            >
              <p className="font-heading text-lg font-bold text-navy">Just show me my matches</p>
              <p className="mt-1 text-sm text-grey">
                The 60-second quiz. Instant results, no email, no follow-up calls.
              </p>
            </a>
            <a
              href="#quotes"
              className="rounded-lg border border-border bg-white p-5 transition-colors hover:border-navy"
            >
              <p className="font-heading text-lg font-bold text-navy">Get quotes from providers</p>
              <p className="mt-1 text-sm text-grey">
                Tell us about your business and we&apos;ll arrange tailored quotes. This one does need your details.
              </p>
            </a>
          </div>
        </Container>
      </Section>

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
      <Section muted id="quotes">
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
