import type { Metadata } from "next";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { InfoPage } from "@/components/content/InfoPage";
import { pageMeta } from "@/lib/seo";
import { SITE, COMPANY, AUTHOR } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "About The POS",
  description:
    "The POS is built in Sheffield by Nathan Keeble - plain-English UK card machine and POS comparisons, with prices checked and logged in the open.",
  path: "/about",
});

function FounderCard() {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-white p-5 sm:flex-row sm:items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={AUTHOR.photo}
        alt={AUTHOR.name}
        width={96}
        height={96}
        className="h-24 w-24 shrink-0 rounded-full object-cover"
      />
      <div>
        <p className="font-heading text-lg font-bold text-navy">
          {AUTHOR.name} <span className="font-sans text-sm font-normal text-grey">- {AUTHOR.role}</span>
        </p>
        <p className="mt-1 text-sm leading-relaxed text-grey">
          Built in Sheffield. Useful across the UK. Every review on this site is researched, written and maintained by
          a named person you can look up - not a content farm.
        </p>
        <div className="mt-2 flex flex-wrap gap-4 text-sm font-semibold">
          <a
            href={AUTHOR.linkedin}
            target="_blank"
            rel="me noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-deepblue hover:underline"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <Link href="/authors/nathan-keeble" className="text-deepblue hover:underline">
            About Nathan
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <InfoPage
      title="About The POS"
      intro="We're here to help UK business owners choose how to take payments - straight answers, no scripts."
      crumbLabel="About"
      path="/about"
      header={<FounderCard />}
      sections={[
        {
          heading: "Why this site exists",
          paragraphs: [
            "Nathan started The POS after watching too many small businesses get talked into the wrong payment setup: 'from 0.29%' headline rates that turned into something else on the statement, long terminal leases sold with a smile, and comparison sites whose 'best overall' badge went to whoever paid most that month.",
            "Choosing a card machine is a five-minute decision with a multi-year consequence. This site exists to make that five minutes honest: real fees, real contract terms, and a straight answer about who each provider suits - and who should walk away.",
          ],
        },
        {
          heading: "How we check prices",
          paragraphs: [
            "Every provider entry is verified against the provider's own published pricing and terms, and carries the date we last checked it. When something substantive changes - a rate, a contract term, our verdict - we log it publicly with the date and what changed. If a date hasn't moved, nothing material has changed; we don't re-date pages to look fresh.",
          ],
          bullets: [
            "Prices verified against provider pricing pages and T&Cs, with dates on every review",
            "Quote-based providers (e.g. Dojo, Worldpay) are marked as estimates - we say so rather than invent numbers",
            "Every substantive change is logged publicly on the price & review changelog",
          ],
        },
        {
          heading: "What happens when a provider complains",
          paragraphs: [
            "It happens. The policy is simple: if a provider shows us something factually wrong, we verify it, fix it and log the correction - fast. If a provider objects to a verdict because it's unflattering, the verdict stays. Commercial relationships (listed openly on the methodology page) never change a score - and the providers who currently rank highest aren't the ones who pay us, which tells you the rankings are doing their job.",
          ],
        },
        {
          heading: "How we make money",
          paragraphs: [
            "Some provider links pay us a commission when you sign up - it never costs you extra, and we name exactly which providers pay us on the methodology page. Several of the providers we rank highest pay us nothing at all.",
          ],
        },
        {
          heading: "A note on advice",
          paragraphs: [
            "We provide comparison guidance, not financial advice. Always check a provider's current terms before signing up.",
          ],
        },
        {
          heading: "Spotted something wrong?",
          paragraphs: [
            `Tell us at ${SITE.email} - corrections get verified, fixed and logged. ${SITE.domain} is operated by ${COMPANY.legalName}, a company registered in England & Wales (no. ${COMPANY.number}), registered office ${COMPANY.addressOneLine}.`,
          ],
        },
      ]}
    />
  );
}
