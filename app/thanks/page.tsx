import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { GuideCard } from "@/components/content/GuideCard";
import { ButtonLink } from "@/components/ui/Button";
import { pageMeta } from "@/lib/seo";
import { GUIDES } from "@/data/guides";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Thanks - we've got your details",
    description: "Thanks for your enquiry. We'll review your setup and point you towards providers that fit.",
    path: "/thanks",
  }),
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  const topGuides = GUIDES.slice(0, 3);
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-soft text-accent">
            <CheckCircle2 className="h-8 w-8" />
          </span>
          <h1 className="mt-5 font-heading text-3xl font-bold text-navy sm:text-4xl">Thanks - we've got your details.</h1>
          <p className="mt-3 text-lg text-grey">
            We'll review your setup and point you towards providers that fit your business. In the meantime, here's some
            reading that'll help you decide.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/compare-pos-systems">See the full comparison</ButtonLink>
            <ButtonLink href="/card-machine-fee-calculator" variant="outline">
              Try the fee calculator
            </ButtonLink>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topGuides.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-grey">
          Wrong details?{" "}
          <Link href="/get-pos-quotes" className="font-medium text-deepblue underline">
            Submit again
          </Link>
          .
        </p>
      </Container>
    </Section>
  );
}
