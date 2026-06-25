# The POS — thepos.co.uk

Compare UK POS systems without the sales waffle. A UK-focused POS, card machine
and payment-provider comparison site built for SEO and affiliate/lead conversion.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind v4**, static-first,
deploy-ready for Vercel.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000  (a separate Next app may hold 3000;
                     # use: npm run dev -- -p 3300 to pick another port)
npm run build        # production build
npm run typecheck    # tsc --noEmit
```

## Editing content (no component changes needed)

All provider data is the single source of truth — components never hardcode prices.

| What to edit | File |
| --- | --- |
| Providers, fees, ratings, hardware, **`lastChecked`**, `sourceUrls` | `data/providers.ts` |
| Business-type hub pages (cafés, retail, …) | `data/businessTypes.ts` |
| Head-to-head "vs" pages | `data/versusPages.ts` |
| Provider review prose | `data/reviews.ts` |
| Learning-hub guides | `data/guides.ts` |
| Fee-calculator estimate rates | `lib/calculator.ts` |
| Brand strings, nav, disclosure | `lib/site.ts` |
| Quiz scoring logic | `lib/recommendationEngine.ts` |

Add a new provider: append an entry to `PROVIDERS` in `data/providers.ts` and a matching
entry to `REVIEWS` in `data/reviews.ts`. It automatically appears in comparison tables,
the reviews index, the sitemap, and gets its own `/reviews/[slug]` page.

## Environment

Copy `.env.example` to `.env.local`. Everything is optional — the site runs with nothing set:

- **Analytics** (`NEXT_PUBLIC_PLAUSIBLE_DOMAIN` / `NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_POSTHOG_KEY`):
  the analytics layer no-ops until one is set, and logs events to the console in dev.
- **Leads**: with no env set, leads are written to `./.leads/*.json` and logged. Set
  `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` (REST insert into a `leads` table), and/or
  `LEADS_WEBHOOK_URL` (Google Sheets / Zapier / CRM) to persist for real.

## Conversion & compliance

- Affiliate links use `rel="sponsored nofollow"` and fire `affiliate_click` / `provider_cta_click`.
- Disclosure shown on every commercial page + footer. `lastChecked` dates on pricing.
- Lead capture: multi-step form → `POST /api/leads` (server-side validated) → `/thanks`.
- 60-second quiz (`/get-pos-quotes#quiz`) runs the recommendation engine client-side.

## Analytics events

`provider_cta_click`, `affiliate_click`, `lead_form_start`, `lead_form_submit`,
`quiz_start`, `quiz_complete`, `calculator_completed`, `comparison_filter_used`,
`quote_page_view`, `phone_email_click` — see `lib/analytics.tsx`.

## SEO

Dynamic metadata + canonicals (`lib/seo.ts`), JSON-LD for Organization, WebSite, Breadcrumb,
FAQ, Article and Review (`lib/schema.ts`), plus `app/sitemap.ts` and `app/robots.ts`.

## Deploy (Vercel)

Push to a Git repo, import into Vercel, set `NEXT_PUBLIC_SITE_URL=https://thepos.co.uk`
and any analytics/lead env vars. No other config required.
