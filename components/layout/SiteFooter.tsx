import Link from "next/link";
import { FOOTER_NAV, SITE, DISCLOSURE, COMPANY } from "@/lib/site";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-navy text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" aria-label={SITE.name}>
              <BrandLogo reversed />
            </Link>
            <p className="mt-3 text-sm text-white/60">{SITE.tagline}</p>
          </div>

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

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-white/60">
          <strong className="text-white/80">Affiliate disclosure: </strong>
          {DISCLOSURE}
        </div>

        <div className="mt-6 space-y-2 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>
            {SITE.domain} is operated by <span className="text-white/70">{COMPANY.legalName}</span>, a company
            registered in England &amp; Wales (no. {COMPANY.number}). Registered office: {COMPANY.addressOneLine}.
          </p>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {COMPANY.legalName}. All prices and rates are indicative and may change — always check provider
              terms.
            </p>
            <p>Made for UK small businesses.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
