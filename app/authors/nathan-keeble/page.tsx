import type { Metadata } from "next";
import Link from "next/link";
import { Linkedin, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";
import { SITE, AUTHOR, COMPANY } from "@/lib/site";
import { PROVIDERS } from "@/data/providers";

export const metadata: Metadata = pageMeta({
  title: "Nathan Keeble - Founder & Reviewer",
  description:
    "Nathan Keeble founds and writes The POS - independent UK card machine and POS comparisons. Background, methodology and every review he maintains.",
  path: "/authors/nathan-keeble",
});

export default function AuthorPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            name: AUTHOR.name,
            jobTitle: AUTHOR.role,
            description: AUTHOR.bio,
            url: `${SITE.url}/authors/nathan-keeble`,
            sameAs: [AUTHOR.linkedin],
            worksFor: { "@type": "Organization", name: COMPANY.legalName },
          },
        }}
      />
      <div className="border-b border-border bg-white">
        <Container className="py-8 sm:py-12">
          <Breadcrumbs items={[{ name: "Authors", path: "/authors/nathan-keeble" }]} />
          <div className="mt-5 flex items-start gap-5">
            <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-navy font-heading text-3xl font-bold text-white">
              NK
            </span>
            <div>
              <h1 className="font-heading text-3xl font-bold text-navy sm:text-4xl">{AUTHOR.name}</h1>
              <p className="mt-1 text-grey">{AUTHOR.role}</p>
              <a
                href={AUTHOR.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-deepblue hover:underline"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="max-w-3xl space-y-8">
            <section>
              <h2 className="font-heading text-xl font-bold text-navy">About Nathan</h2>
              <p className="mt-3 leading-relaxed text-grey">{AUTHOR.bio}</p>
              <p className="mt-3 leading-relaxed text-grey">
                The POS is operated by {COMPANY.legalName} (company no. {COMPANY.number}), registered in Sheffield.
                Every comparison is researched against providers&apos; published pricing and terms - see{" "}
                <Link href="/methodology" className="font-semibold text-deepblue hover:underline">
                  how we score providers
                </Link>{" "}
                and{" "}
                <Link href="/how-we-make-money" className="font-semibold text-deepblue hover:underline">
                  how we make money
                </Link>
                .
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold text-navy">Reviews Nathan maintains</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {[...PROVIDERS]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/reviews/${p.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm text-deepblue hover:underline"
                      >
                        {p.name} review <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
