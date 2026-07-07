import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProviderLogo } from "@/components/ui/ProviderLogo";
import { RatingStars, ProviderRating } from "@/components/comparison/ProviderRating";
import { BestForTags } from "@/components/comparison/BestForTags";
import { ProviderCTA } from "@/components/comparison/ProviderCTA";
import { ProsCons } from "@/components/content/ProsCons";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { MethodologyBox } from "@/components/content/MethodologyBox";
import { AuthorBox } from "@/components/content/AuthorBox";
import { LastUpdated } from "@/components/content/LastUpdated";
import { StickyMobileCTA } from "@/components/forms/StickyMobileCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { reviewSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { PROVIDERS, getProvider, getProviders } from "@/data/providers";
import { getReview } from "@/data/reviews";
import { VERSUS_PAGES } from "@/data/versusPages";
import { Check, X } from "lucide-react";

export function generateStaticParams() {
  return PROVIDERS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const provider = getProvider(slug);
  if (!provider) return {};
  return pageMeta({
    title: `${provider.name} Review UK (2026): Fees, Card Readers, Pros & Cons`,
    description:
      provider.metaDescription ??
      `${provider.name} review (2026): fees, hardware, contracts, payouts and who it suits in plain English.`,
    path: `/reviews/${slug}`,
    type: "article",
  });
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const provider = getProvider(slug);
  const review = getReview(slug);
  if (!provider || !review) notFound();

  const alternatives = getProviders(review.alternatives);
  const path = `/reviews/${slug}`;

  // Relevant versus pages that feature this provider.
  const versus = VERSUS_PAGES.filter((v) => v.a === slug || v.b === slug);

  return (
    <>
      <JsonLd
        data={[reviewSchema(provider, path)]}
      />

      {/* Header */}
      <div className="border-b border-border bg-white">
        <Container className="py-8 sm:py-12">
          <Breadcrumbs items={[{ name: "Reviews", path: "/reviews" }, { name: provider.name, path }]} />
          <div className="mt-5 flex flex-wrap items-start justify-between gap-5">
            <div className="flex items-start gap-4">
              <ProviderLogo name={provider.name} slug={provider.slug} size="lg" />
              <div>
                <h1 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
                  {provider.name} Review UK
                </h1>
                <p className="mt-1 text-grey">Fees, card readers, pros &amp; cons</p>
                {provider.verdict && (
                  <p className="mt-2 max-w-xl border-l-2 border-accent pl-3 text-sm font-medium italic text-navy">
                    {provider.verdict}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap items-center gap-4">
                  <RatingStars value={provider.editorialRating.overall} />
                  <LastUpdated date={provider.lastChanged} label="Updated" />
                </div>
              </div>
            </div>
            <ProviderCTA provider={provider} size="lg" sourcePage="review-header" position="hero" reassure />
          </div>
          <div className="mt-4">
            <BestForTags tags={provider.bestFor} />
          </div>
        </Container>
      </div>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Main column */}
          <article className="space-y-10">

            <section>
              <h2 className="font-heading text-2xl font-bold text-navy">Quick verdict</h2>
              <p className="mt-3 leading-relaxed text-grey">{review.quickVerdict}</p>
              {review.image && (
                <figure className="mt-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={review.image.src}
                    alt={review.image.alt}
                    width={640}
                    height={240}
                    loading="lazy"
                    className="w-full rounded-lg border border-border object-cover"
                  />
                  {review.image.caption && (
                    <figcaption className="mt-2 text-xs text-grey">{review.image.caption}</figcaption>
                  )}
                </figure>
              )}
            </section>

            <section className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[#bfdbfe] bg-accent-soft/40 p-5">
                <h3 className="font-heading text-base font-semibold text-[#1e40af]">Best for</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-navy">
                  {provider.bestFor.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-[#f3dca6] bg-[#fdf1d8]/40 p-5">
                <h3 className="font-heading text-base font-semibold text-[#9a6c12]">Not ideal for</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-navy">
                  {provider.notBestFor.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-amber" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-navy">Pricing</h2>
              <ul className="mt-3 space-y-2">
                {review.pricingDetail.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-grey">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /> {d}
                  </li>
                ))}
              </ul>
              <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Fact label="Monthly fee" value={provider.monthlyFeeFrom} />
                <Fact label="Transaction" value={provider.transactionFeeHeadline} />
                <Fact label="Reader from" value={provider.cardReaderCostFrom} />
                <Fact label="Payouts" value={provider.payoutSpeed} />
              </dl>
              {review.workedExample && (
                <div className="mt-4 rounded-lg border-l-4 border-accent bg-accent-soft/40 p-4 text-sm leading-relaxed text-navy">
                  <strong className="font-semibold">Worked example:</strong> {review.workedExample}{" "}
                  <Link href="/card-machine-fee-calculator" className="font-medium text-deepblue underline">
                    Run your own numbers
                  </Link>
                  .
                </div>
              )}
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-navy">Hardware</h2>
              <p className="mt-3 leading-relaxed text-grey">{review.hardwareNote}</p>
              {provider.hardware.length > 0 && (
                <ul className="mt-4 divide-y divide-border rounded-lg border border-border bg-white">
                  {provider.hardware.map((h) => (
                    <li key={h.name} className="flex items-center justify-between gap-3 p-4">
                      <div className="min-w-0">
                        <span className="font-semibold text-navy">{h.name}</span>
                        <span className="block text-xs text-grey">{h.note}</span>
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <span className="tabular font-semibold text-accent">{h.priceFrom}</span>
                        <ProviderCTA provider={provider} size="sm" label="Buy now" sourcePage="review-hardware" />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-navy">Features &amp; contract</h2>
              <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <Flag label="No monthly fee" on={provider.hasNoMonthlyFee} />
                <Flag label="No contract" on={provider.hasNoContractOption} />
                <Flag label="Restaurant features" on={provider.supportsRestaurants} />
                <Flag label="Retail" on={provider.supportsRetail} />
                <Flag label="Mobile selling" on={provider.supportsMobile} />
                <Flag label="Online payments" on={provider.supportsOnlinePayments} />
                <Flag label="Inventory" on={provider.supportsInventory} />
                <Flag label="Invoicing" on={provider.supportsInvoicing} />
                <Flag label="Virtual terminal" on={provider.supportsVirtualTerminal} />
                <Flag label="Tap to Pay" on={provider.supportsTapToPay} />
                <Flag label="Fast payouts" on={provider.fastPayouts} />
              </dl>
              <p className="mt-4 text-sm text-grey">
                <strong className="text-navy">Contract:</strong> {provider.contractLength}.{" "}
                <strong className="text-navy">Support:</strong> {review.supportNote}
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-navy">Real-world use cases</h2>
              <ul className="mt-3 space-y-2">
                {review.useCases.map((u) => (
                  <li key={u.who} className="rounded-xl border border-border bg-white p-4 text-sm">
                    <span className="font-semibold text-navy">{u.who}:</span> <span className="text-grey">{u.verdict}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-navy">Pros &amp; cons</h2>
              <div className="mt-3">
                <ProsCons pros={provider.pros} cons={provider.cons} />
              </div>
            </section>

            {alternatives.length > 0 && (
              <section>
                <h2 className="font-heading text-2xl font-bold text-navy">{provider.name} vs alternatives</h2>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {alternatives.map((alt) => (
                    <Link key={alt.slug} href={`/reviews/${alt.slug}`} className="rounded-lg border border-border bg-white p-4 transition-colors hover:border-navy">
                      <div className="flex items-center gap-2">
                        <ProviderLogo name={alt.name} slug={alt.slug} size="sm" />
                        <span className="font-semibold text-navy">{alt.name}</span>
                      </div>
                      <p className="mt-2 line-clamp-2 text-xs text-grey">{alt.summary}</p>
                    </Link>
                  ))}
                </div>
                {versus.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {versus.map((v) => {
                      const other = v.a === slug ? v.b : v.a;
                      const otherName = getProvider(other)?.name ?? other;
                      return (
                        <Link
                          key={v.slug}
                          href={`/compare/${v.slug}`}
                          className="rounded-full border border-border bg-white px-3 py-1.5 text-sm font-medium text-deepblue hover:border-accent"
                        >
                          {provider.name} vs {otherName}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </section>
            )}

            <section>
              <h2 className="font-heading text-2xl font-bold text-navy">Final verdict</h2>
              <div className="mt-3 rounded-lg border border-border bg-white p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="leading-relaxed text-grey">{provider.summary}</p>
                  <div className="text-center">
                    <RatingStars value={provider.editorialRating.overall} />
                  </div>
                </div>
                <div className="mt-4">
                  <ProviderCTA provider={provider} sourcePage="review-verdict" position="verdict" reassure />
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-navy">FAQs</h2>
              <div className="mt-4">
                <FAQAccordion faqs={review.faqs} />
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
            <ProviderRating rating={provider.editorialRating} />
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="font-heading text-base font-semibold text-navy">Sources</h3>
              <ul className="mt-2 space-y-1.5">
                {provider.sourceUrls.map((u) => (
                  <li key={u}>
                    <a href={u} target="_blank" rel="nofollow noopener" className="break-all text-xs text-deepblue underline">
                      {u}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3">
                <LastUpdated date={provider.lastChecked} label="Prices checked" />
              </div>
            </div>
            <MethodologyBox />
            <AuthorBox lastUpdated={provider.lastChanged} />
            <div className="rounded-lg border border-border bg-white p-4 text-sm">
              <p className="font-semibold text-navy">Keep comparing</p>
              <ul className="mt-2 space-y-1.5">
                <li><Link href="/compare-pos-systems" className="text-deepblue hover:underline">All POS systems</Link></li>
                <li><Link href="/card-machine-fee-calculator" className="text-deepblue hover:underline">Fee calculator</Link></li>
                <li><Link href="/get-pos-quotes" className="text-deepblue hover:underline">Get tailored quotes</Link></li>
              </ul>
            </div>
          </aside>
        </Container>
      </Section>

      <StickyMobileCTA provider={provider} />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-white p-3">
      <dt className="text-xs text-grey">{label}</dt>
      <dd className="mt-0.5 text-sm font-semibold text-navy">{value}</dd>
    </div>
  );
}

function Flag({ label, on }: { label: string; on: boolean }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-white p-2.5 text-sm">
      {on ? <Check className="h-4 w-4 text-accent" /> : <X className="h-4 w-4 text-border" />}
      <span className={on ? "text-navy" : "text-grey"}>{label}</span>
    </div>
  );
}
