# ThePOS.co.uk — Brand Guide

Clean, commercial, conversion-led. Helps UK businesses compare POS systems, card
machines and payment providers in one place. Built for hospitality, retail, salons and
independents. This file is the single reference; everything below is wired into the code.

---

## 1. Logo

`<BrandLogo />` renders the receipt-with-check mark + "**ThePOS**.co.uk" wordmark.
- **Primary:** icon in primary blue, "The" navy, "POS" blue, ".co.uk" slate.
- **Reversed:** `<BrandLogo reversed />` — white wordmark + white mark for dark/blue backgrounds (used in the footer).
- **Icon only:** `<BrandLogo iconOnly />` or `<BrandMark />`.

---

## 2. Colour

| Token | Hex | Tailwind | Use |
| --- | --- | --- | --- |
| Primary Blue | `#1D4ED8` | `accent` | CTAs, links, accents |
| Navy | `#0F172A` | `navy` | Headings, body ink |
| Sky Blue | `#60A5FA` | `sky` | Secondary accent, textures |
| Off White | `#F8FAFC` | `cream` | Page background |
| Slate Grey | `#64748B` | `grey` | Secondary text |
| Soft blue | `#DBEAFE` | `accent-soft` | Tints, chips, badges |
| Border | `#E2E8F0` | `border` | Hairlines, card borders |
| Blue 800 | `#1E40AF` | `deepblue` | Hover / deep link |
| Amber | `#F5B84B` | `amber` | Warning / catch-out boxes only |

Defined in `app/globals.css` under `@theme`. Edit there to re-skin the whole site.

---

## 3. Typography

| Role | Font | Where |
| --- | --- | --- |
| Headings | **Montserrat** (600/700/800) | `--font-montserrat` → `font-heading` |
| Body & UI | **Inter** | `--font-inter` → default `body` |
| Data / figures | **IBM Plex Mono** | `--font-mono` → `.tabular` |

Loaded via `next/font/google` in `app/layout.tsx`. Style: clean, readable, modern,
conversion-led.

---

## 4. Provider logos (data-driven)

Mapped by slug in `data/providers.ts` → `PROVIDER_LOGOS`. `<ProviderLogo>` renders the
SVG in a white tile with `mix-blend-multiply`, falling back to a navy initials tile if
missing or 404. UK brands point at `/public/assets/logos/<slug>.svg` — drop SVGs there.

---

## 5. Imagery

Clean lifestyle-tech: card machines & terminals, checkout counters, hospitality tills,
retail staff, dashboard UI mockups, mobile payments. Prioritise **clarity, trust and
real-world usability** over generic fintech clichés.

`<EditorialImage>` shows a branded placeholder until a real photo exists.
- **Hero product shot:** drop `/public/images/hero-pos.png` (POS terminals + phone).
- **Hub banners:** `/public/images/hubs/<slug>.jpg` (search hints in `data/businessTypes.ts`).

---

## 6. UI components

- **Buttons** — `<Button>` / `<ButtonLink>`: `primary` (blue), `secondary` (navy),
  `outline` (white + blue border/text), `ghost`.
- **Badge** — soft pill; `tone="accent"` (soft-blue), `neutral`, `amber`, `navy`.
- **Callout** — `tone="warn"` catch-out box (`border-l-4 border-amber`); also `info` / `tip`.
- **Cards** — `rounded-xl border border-border bg-white`, hover → `border-accent`.

---

## 7. Site structure

Home · Compare POS Systems · Compare Card Machines · By Business Type · Guides · Reviews ·
About · **Get Matched** (primary CTA → `/get-pos-quotes`).
Plus fee calculator, provider reviews, versus pages, and legal/trust pages.
_(Virtual Landline / business-comms vertical intentionally out of scope for now.)_

---

## 8. Tone of voice

Clear, commercial, no jargon. Useful and comparison-led. Built for busy business owners.
Independent, practical, trustworthy.
