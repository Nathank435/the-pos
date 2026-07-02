import Link from "next/link";
import { FOOTER_NAV, SITE, DISCLOSURE, COMPANY } from "@/lib/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-navy text-white/80">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-28 sm:px-6 lg:pb-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          <div className="lg:w-72 lg:shrink-0">
            <Link href="/" aria-label={SITE.name} className="inline-block">
              <BrandLogo reversed />
            </Link>
            <p className="mt-3 max-w-64 text-sm text-white/60">{SITE.tagline}</p>
            <div className="mt-5">
              <h3 className="font-heading text-sm font-semibold text-white">
                Cut your card fees - get our tips
              </h3>
              <p className="mt-1 mb-3 max-w-72 text-sm text-white/55">
                Honest, independent advice on card machines and POS for UK small businesses.
              </p>
              <NewsletterForm source="footer" />
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {FOOTER_NAV.map((col) => (
              <div key={col.title}>
                <h3 className="font-heading text-sm font-semibold text-white">{col.title}</h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-white/60 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-white/60">
          <strong className="text-white/80">Affiliate disclosure: </strong>
          {DISCLOSURE}
        </div>

        <div className="mt-6 space-y-2 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>
            Questions or corrections? Email us at{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-white/80 underline hover:text-white">
              {SITE.email}
            </a>
            .
          </p>
          <p>
            {SITE.domain} is operated by <span className="text-white/70">{COMPANY.legalName}</span>, a company
            registered in England &amp; Wales (no. {COMPANY.number}). Registered office: {COMPANY.addressOneLine}.
          </p>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {COMPANY.legalName}. All prices and rates are indicative and may change - always check provider
              terms.
            </p>
            <p>Made for UK small businesses.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
