import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Coffee,
  ShoppingBag,
  Scissors,
  Truck,
  ClipboardList,
  SlidersHorizontal,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Users,
} from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ProviderLogo } from "@/components/ui/ProviderLogo";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { GuideCard } from "@/components/content/GuideCard";
import { BlogCard } from "@/components/content/BlogCard";
import { InlineQuoteCTA } from "@/components/forms/InlineQuoteCTA";
import { PROVIDERS, getProvider } from "@/data/providers";
import { GUIDES } from "@/data/guides";
import { postsByDate } from "@/data/blog";

const BUSINESS_CHIPS = [
  { label: "Hospitality", icon: Coffee, href: "/pos-systems/restaurants" },
  { label: "Retail", icon: ShoppingBag, href: "/pos-systems/retail" },
  { label: "Salons", icon: Scissors, href: "/pos-systems/salons" },
  { label: "Mobile Businesses", icon: Truck, href: "/pos-systems/mobile-businesses" },
];

// Featured provider cards — short, curated summaries for the homepage shelf.
// (Full, sourced detail lives on each /reviews/[slug] page from data/providers.ts.)
const FEATURED = [
  { slug: "sumup", fee: "From 1.69%", hardware: "From £19", contract: "No contract", bestFor: "Small businesses & startups" },
  { slug: "mypos", fee: "From 1.20%", hardware: "From £29", contract: "No contract", bestFor: "Low-cost & mobile businesses" },
  { slug: "dojo", fee: "From 1.50%", hardware: "From £49", contract: "Flexible terms", bestFor: "Hospitality & high street" },
  { slug: "square", fee: "From 1.75%", hardware: "From £29", contract: "No contract", bestFor: "Retail & omnichannel" },
];

const STEPS = [
  { icon: ClipboardList, title: "Tell us about your business", body: "Answer a few quick questions about how you take payments." },
  { icon: SlidersHorizontal, title: "Compare your options", body: "We match you with the providers that actually fit." },
  { icon: CheckCircle2, title: "Choose the best-fit setup", body: "Pick with confidence — and start saving." },
];

const POPULAR = [
  { label: "Best POS for cafés", href: "/pos-systems/cafes" },
  { label: "Best card machine for market traders", href: "/pos-systems/market-stalls" },
  { label: "Best payment setup for salons", href: "/pos-systems/salons" },
];

const TRUST = [
  { icon: ShieldCheck, title: "Independent comparisons", body: "Verdicts that paid placements can't buy." },
  { icon: MapPin, title: "UK-focused", body: "Built around UK fees, contracts and providers." },
  { icon: Users, title: "Built for SMEs", body: "For hospitality, retail, salons and independents." },
];

const HOME_FAQS = [
  {
    q: "What's the best POS system for a UK small business?",
    a: "There's no single 'best' — it depends on your business. Square is the strongest free all-rounder, SumUp is best for cheap, simple card payments, and Dojo suits busy hospitality wanting fast payouts. Use our quiz or comparison to match your needs.",
  },
  {
    q: "Which card machine has no monthly fee?",
    a: "SumUp, Square and PayPal Zettle all offer pay-as-you-go card readers with no monthly fee — you buy the reader once and pay a percentage per transaction.",
  },
  {
    q: "How do you make money?",
    a: "We may earn commission when you click links or apply through certain providers. It doesn't cost you extra, and providers can't pay to change our verdicts. See 'How we make money' for the full picture.",
  },
];

export default function HomePage() {
  const latestGuides = GUIDES.slice(0, 3);
  const latestPosts = postsByDate().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <Section className="py-10 sm:py-14">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white via-white to-accent-soft/60 p-6 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute right-6 top-6 hidden h-32 w-40 opacity-50 lg:block"
              style={{
                backgroundImage: "radial-gradient(var(--color-sky) 1.5px, transparent 1.5px)",
                backgroundSize: "14px 14px",
              }}
            />
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="relative">
                <h1 className="font-heading text-4xl font-extrabold leading-[1.05] text-navy sm:text-5xl">
                  Compare POS Systems &amp; Card Machines for UK Businesses
                </h1>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-grey">
                  Find the right till, terminal and payment setup for your business — without the waffle.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href="/compare-pos-systems" size="lg">
                    Compare Providers
                  </ButtonLink>
                  <ButtonLink href="/pos-systems" variant="outline" size="lg">
                    See Top Picks
                  </ButtonLink>
                </div>
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
          <div className="mt-4 rounded-2xl border border-border bg-white p-3 sm:flex sm:items-center sm:gap-4 sm:px-5">
            <span className="block px-2 py-2 text-sm font-semibold text-navy sm:py-0">What type of business are you?</span>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-1 sm:justify-end">
              {BUSINESS_CHIPS.map(({ label, icon: Icon, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm font-medium text-navy transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
                >
                  <Icon className="h-4 w-4 text-accent" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Top providers */}
      <Section className="py-10 sm:py-14">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">Top POS &amp; Card Machine Providers</h2>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED.map(({ slug, fee, hardware, contract, bestFor }) => {
              const p = getProvider(slug);
              if (!p) return null;
              return (
                <div key={slug} className="flex flex-col rounded-xl border border-border bg-white p-5 transition-colors hover:border-accent">
                  <div className="flex justify-center">
                    <ProviderLogo name={p.name} slug={p.slug} size="xl" />
                  </div>
                  <h3 className="sr-only">{p.name}</h3>
                  <dl className="mt-4 space-y-2.5 text-sm">
                    <SummaryRow label="Fees" value={fee} />
                    <SummaryRow label="Hardware" value={hardware} />
                    <SummaryRow label="Contract" value={contract} />
                    <SummaryRow label="Best For" value={bestFor} />
                  </dl>
                  <Link
                    href={`/reviews/${p.slug}`}
                    className="mt-5 inline-flex items-center justify-center gap-1 border-t border-border pt-4 text-sm font-semibold text-accent hover:underline"
                  >
                    View Details <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="mt-7 text-center">
            <ButtonLink href="/compare-pos-systems" variant="outline">
              Compare all {PROVIDERS.length} providers <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section className="py-10 sm:py-14">
        <Container>
          <div className="rounded-2xl border border-border bg-accent-soft/40 p-6 sm:p-10">
            <h2 className="text-center font-heading text-2xl font-extrabold text-navy sm:text-3xl">How It Works</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {STEPS.map(({ icon: Icon, title, body }, i) => (
                <div key={title} className="relative flex flex-col items-center text-center">
                  <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white ring-1 ring-border">
                    <Icon className="h-7 w-7 text-accent" />
                    <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-accent text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold text-navy">{title}</h3>
                  <p className="mt-1.5 max-w-xs text-sm text-grey">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <ButtonLink href="/get-pos-quotes">Get Matched</ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* Popular comparisons + trust */}
      <Section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-xl font-extrabold text-navy">Popular Comparisons</h2>
              <ul className="mt-4 divide-y divide-border overflow-hidden rounded-xl border border-border bg-white">
                {POPULAR.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="flex items-center justify-between gap-3 px-4 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-accent-soft/50">
                      {c.label}
                      <ChevronRight className="h-4 w-4 text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-xl font-extrabold text-navy">Why Businesses Trust ThePOS.co.uk</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {TRUST.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="rounded-xl border border-border bg-white p-4 text-center">
                    <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-accent-soft text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 font-heading text-sm font-bold text-navy">{title}</h3>
                    <p className="mt-1 text-xs text-grey">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Lead CTA */}
      <Section muted>
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

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-2 last:border-0 last:pb-0">
      <dt className="font-semibold text-navy">{label}</dt>
      <dd className="text-right text-grey">{value}</dd>
    </div>
  );
}
