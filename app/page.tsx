import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Coffee,
  ShoppingBag,
  Scissors,
  Truck,
  Calculator,
  AlertTriangle,
  Check,
  Quote,
  Banknote,
} from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ProviderLogo } from "@/components/ui/ProviderLogo";
import { ProviderCTA } from "@/components/comparison/ProviderCTA";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { GuideCard } from "@/components/content/GuideCard";
import { BlogCard } from "@/components/content/BlogCard";
import { InlineQuoteCTA } from "@/components/forms/InlineQuoteCTA";
import { TrustStrip } from "@/components/content/TrustStrip";
import { PROVIDERS, getProvider, CARD_MACHINE_PROVIDERS } from "@/data/providers";
import { GUIDES } from "@/data/guides";
import { postsByDate } from "@/data/blog";
import { BUSINESS_PICKER, PROVIDER_TAKES, FEE_GOTCHAS, CHOOSE_STEPS, SCENARIOS } from "@/data/homepage";

export const metadata: Metadata = {
  title: { absolute: "Compare UK Card Machines & POS Systems (2026) | ThePOS.co.uk" },
  description:
    "Blunt, plain-English comparisons of UK card machines and POS systems for cafés, shops, salons, takeaways and market traders. Real fee notes, no sales waffle.",
  alternates: { canonical: "/" },
};

const PEOPLE = [
  { src: "/images/people/cafe-owner.jpg", alt: "Independent café and deli owner in her shop doorway", caption: "Cafés & delis", href: "/pos-systems/cafes" },
  { src: "/images/people/shop-worker.jpg", alt: "Shop assistant folding clothes in an independent store", caption: "Independent shops", href: "/pos-systems/retail" },
  { src: "/images/people/owner.jpg", alt: "Small business owner standing confidently", caption: "Salons, pubs & more", href: "/compare-pos-systems" },
];

const HOME_FAQS = [
  {
    q: "What's the best card machine for a UK small business?",
    a: "There's no single 'best' - it depends on your turnover and how you trade. SumUp is cheapest to start for low or occasional volume; Square is the easiest all-rounder with free POS software; Dojo suits busy hospitality that wants fast payouts. Use the fee calculator or quiz to match your numbers.",
  },
  {
    q: "Which card machine has no monthly fee?",
    a: "SumUp, Square and PayPal Zettle all do pay-as-you-go readers with no monthly fee - you buy the reader once and pay a percentage per sale. Best for lower or seasonal volume where a monthly rental wouldn't pay for itself.",
  },
  {
    q: "Is the cheapest card machine actually the cheapest?",
    a: "Not always. The cheapest card machine is rarely the cheapest once the fees start nibbling - a low headline rate with a monthly fee, PCI charge or contract can cost more than a slightly higher pay-as-you-go rate. Always compare the all-in monthly cost at your real turnover.",
  },
  {
    q: "How does ThePOS make money?",
    a: "We may earn a commission when you click through or sign up via some providers. It never costs you more, and providers can't pay for a better verdict. If something's great for cafés but rubbish for market traders, we'll say so.",
  },
];

const TYPE_ICONS = [Coffee, Truck, Banknote, Scissors, ShoppingBag, ShoppingBag, Truck, Coffee] as const;

export default function HomePage() {
  const latestGuides = GUIDES.slice(0, 3);
  const latestPosts = postsByDate().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <Section className="py-10 sm:py-14">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white via-white to-accent-soft/60 p-5 sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="relative">
                <h1 className="font-heading text-3xl font-extrabold leading-[1.08] text-navy sm:text-4xl lg:text-[2.85rem]">
                  Find the card machine that won&apos;t quietly rinse your margins
                </h1>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-grey sm:text-lg">
                  Compare UK POS systems, card readers and payment fees for cafés, shops, salons, takeaways and small
                  businesses that just want a straight answer.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ButtonLink href="/compare-card-machines" size="lg" className="w-full sm:w-auto">
                    Compare providers
                  </ButtonLink>
                  <ButtonLink href="/get-pos-quotes" variant="outline" size="lg" className="w-full sm:w-auto">
                    Find my best fit
                  </ButtonLink>
                </div>
                <p className="mt-5 text-sm font-medium text-grey">
                  Plain-English comparisons. Real fee notes. No sales waffle.
                </p>
                <TrustStrip className="mt-3" />
              </div>

              <EditorialImage
                src="/images/hero-pos.jpg"
                alt="Contactless card payment on a POS terminal"
                label="POS hardware"
                ratio="4 / 3"
                priority
                className="bg-white"
              />
            </div>
          </div>

          {/* Business-type selector */}
          <div className="mt-4 rounded-2xl border border-border bg-white p-4 sm:p-5">
            <span className="block text-sm font-semibold text-navy">What kind of business are you running?</span>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {BUSINESS_PICKER.map(({ label, href }, i) => {
                const Icon = TYPE_ICONS[i] ?? ShoppingBag;
                return (
                  <Link
                    key={label}
                    href={href}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm font-medium text-navy transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-accent" />
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Opinionated provider cards */}
      <Section className="py-10 sm:py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">
              The big UK card machine &amp; POS providers, minus the spin
            </h2>
            <p className="mt-2 text-grey">
              Who each one is genuinely good for - and who should walk the other way. No one opens a café because
              they&apos;re excited about merchant fees.
            </p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {PROVIDER_TAKES.map((t) => {
              const p = getProvider(t.slug);
              if (!p) return null;
              return (
                <article key={t.slug} className="flex flex-col rounded-xl border border-border bg-white p-5 transition-colors hover:border-accent">
                  <div className="flex items-center justify-between gap-3">
                    <ProviderLogo name={p.name} slug={p.slug} size="lg" />
                    <div className="text-right text-xs text-grey">
                      <div className="font-semibold text-navy">{t.fees}</div>
                      <div>{t.contract}</div>
                    </div>
                  </div>
                  <h3 className="sr-only">{p.name}</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div className="flex gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <div>
                        <dt className="font-semibold text-navy">Best for</dt>
                        <dd className="text-grey">{t.bestFor}</dd>
                      </div>
                    </div>
                    <div className="flex gap-2.5">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                      <div>
                        <dt className="font-semibold text-navy">Avoid if</dt>
                        <dd className="text-grey">{t.avoidIf}</dd>
                      </div>
                    </div>
                  </dl>
                  <p className="mt-4 border-l-2 border-accent bg-accent-soft/30 px-3 py-2 text-sm font-medium italic text-navy">
                    {t.verdict}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border pt-4">
                    <ProviderCTA provider={p} size="sm" label={`View ${p.name} deals`} sourcePage="home-provider-card" />
                    <Link href={`/reviews/${p.slug}`} className="inline-block py-1.5 text-sm font-semibold text-deepblue hover:underline">
                      Read the full review
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-7">
            <ButtonLink href="/compare-card-machines" variant="outline">
              Compare all {CARD_MACHINE_PROVIDERS.length} card machine providers <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* The fees that catch people out */}
      <Section muted className="py-10 sm:py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">
              The card machine fees that usually catch people out
            </h2>
            <p className="mt-2 text-grey">
              The cheapest card machine is not always the cheapest once these start nibbling. Know them before you sign.
            </p>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {FEE_GOTCHAS.map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-white p-4">
                <h3 className="font-heading text-sm font-bold text-navy">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-grey">{f.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-grey">
            Want the full breakdown? Read{" "}
            <Link href="/guides/hidden-card-machine-fees" className="font-semibold text-deepblue hover:underline">
              hidden card machine fees, explained
            </Link>{" "}
            - or skip the rental entirely with a{" "}
            <Link href="/card-readers-no-monthly-fee" className="font-semibold text-deepblue hover:underline">
              card reader that has no monthly fee
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* Fee calculator promo */}
      <Section className="py-6 sm:py-10">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-accent/30 bg-accent-soft/40 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-accent ring-1 ring-border">
                <Calculator className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-heading text-xl font-extrabold text-navy sm:text-2xl">Work out what you&apos;d actually pay</h2>
                <p className="mt-1 text-grey">
                  Pop in your turnover and average sale. See your real monthly cost and all-in rate across the main UK
                  providers - takes about 60 seconds.
                </p>
              </div>
            </div>
            <ButtonLink href="/card-machine-fee-calculator" size="lg" className="mt-4 w-full shrink-0 sm:mt-0 sm:w-auto">
              Show me the numbers
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* How to choose without getting mugged */}
      <Section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">
                How to choose without getting mugged by the small print
              </h2>
              <p className="mt-3 text-grey">
                Five checks that save you more than any single &quot;deal&quot;. Do these and you won&apos;t get caught out.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <ButtonLink href="/card-machine-fee-calculator" size="sm">Show me the cheapest options</ButtonLink>
                <ButtonLink href="/get-pos-quotes" variant="outline" size="sm">Compare without the sales call</ButtonLink>
              </div>
            </div>
            <ol className="space-y-3">
              {CHOOSE_STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-4 rounded-xl border border-border bg-white p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-navy">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-grey">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Which one would I pick? - scenarios */}
      <Section muted className="py-10 sm:py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">Which one would I pick?</h2>
            <p className="mt-2 text-grey">Real situations, straight answers. Here&apos;s what we&apos;d actually go for.</p>
          </div>
          <div className="mt-7 space-y-3">
            {SCENARIOS.map((sc) => (
              <div
                key={sc.situation}
                className="rounded-xl border border-border bg-white p-5 sm:flex sm:items-center sm:gap-6"
              >
                <div className="sm:flex-1">
                  <p className="flex items-start gap-2 font-heading text-base font-bold text-navy">
                    <Quote className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {sc.situation}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-grey">{sc.why}</p>
                </div>
                <div className="mt-4 flex shrink-0 flex-wrap gap-2 sm:mt-0">
                  {sc.picks.map((pick) => (
                    <Link
                      key={pick.slug}
                      href={`/reviews/${pick.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent-soft/40 px-3 py-2 text-sm font-semibold text-accent hover:bg-accent-soft"
                    >
                      {pick.name} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Built for businesses like yours - real faces */}
      <Section className="py-10 sm:py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">Built for businesses like yours</h2>
            <p className="mt-2 text-grey">
              Market stalls, cafés, salons, takeaways, shops. Real UK trade, not a SaaS demo.
            </p>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {PEOPLE.map((person) => (
              <Link
                key={person.src}
                href={person.href}
                className="group block overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.src}
                    alt={person.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-2 px-4 py-3 text-sm font-semibold text-navy">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {person.caption}
                  </span>
                  <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5" />
                </figcaption>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* How we make money */}
      <Section muted className="py-10 sm:py-14">
        <Container className="max-w-3xl">
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                <Banknote className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-navy">How ThePOS makes money</h2>
                <p className="mt-3 leading-relaxed text-grey">
                  Some links on this site may earn us a commission. That does not change the price you pay, and it
                  does not mean every provider gets a glowing review. If something is better for cafés but rubbish for
                  mobile traders, we&apos;ll say so.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-grey">
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> Providers can&apos;t pay for a better score or ranking.</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> Fees are based on publicly advertised UK pricing - and we date-stamp when we checked.</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> Recommendations are by business type and turnover, not by who pays most.</li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
                  <Link href="/how-we-make-money" className="text-deepblue hover:underline">How we make money</Link>
                  <Link href="/methodology" className="text-deepblue hover:underline">Our methodology</Link>
                  <Link href="/editorial-policy" className="text-deepblue hover:underline">Editorial policy</Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Lead CTA */}
      <Section>
        <Container>
          <InlineQuoteCTA />
        </Container>
      </Section>

      {/* Latest guides */}
      <Section className="py-10 sm:py-14">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-heading text-2xl font-extrabold text-navy">Latest guides</h2>
            <Link href="/guides" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
              All guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </Container>
      </Section>

      {/* From the blog */}
      <Section muted className="py-10 sm:py-14">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-heading text-2xl font-extrabold text-navy">From the blog</h2>
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
              All posts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section muted>
        <Container className="max-w-3xl">
          <h2 className="font-heading text-2xl font-extrabold text-navy">Common questions</h2>
          <div className="mt-5">
            <FAQAccordion faqs={HOME_FAQS} />
          </div>
        </Container>
      </Section>
    </>
  );
}
