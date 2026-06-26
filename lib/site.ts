/** Central site configuration — edit brand strings, nav and URLs here. */

export const SITE = {
  name: "The POS",
  domain: "thepos.co.uk",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://thepos.co.uk",
  tagline: "Compare POS systems & card machines for UK businesses",
  description:
    "Find the right till, terminal and payment setup for your business. Compare UK POS systems, card machines, payment providers, fees and contracts in plain English — without the waffle.",
  // Editorial entity behind the reviews — used for Organization schema & author boxes.
  publisher: "The POS",
  email: "hello@thepos.co.uk",
  twitter: "@thepos_uk",
} as const;

/** Legal operating company — surfaced in the footer, legal pages and schema. */
export const COMPANY = {
  legalName: "Cracked Media Ltd",
  number: "13648057",
  addressLines: ["The Old Workshop", "1 Ecclesall Road South", "Sheffield", "South Yorkshire", "S11 9PA"],
  addressLocality: "Sheffield",
  addressRegion: "South Yorkshire",
  postalCode: "S11 9PA",
  country: "United Kingdom",
  get addressOneLine() {
    return this.addressLines.join(", ");
  },
} as const;

export const PRIMARY_NAV: { label: string; href: string }[] = [
  { label: "Compare POS Systems", href: "/compare-pos-systems" },
  { label: "Compare Card Machines", href: "/compare-card-machines" },
  { label: "By Business Type", href: "/pos-systems" },
  { label: "Reviews", href: "/reviews" },
  { label: "Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
];

/** Primary call-to-action label + destination, used in the header and CTAs. */
export const PRIMARY_CTA = { label: "Get Matched", href: "/get-pos-quotes" } as const;

export const FOOTER_NAV: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Compare",
    links: [
      { label: "POS systems", href: "/compare-pos-systems" },
      { label: "Card machines", href: "/compare-card-machines" },
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
      { label: "Get quotes", href: "/get-pos-quotes" },
    ],
  },
  {
    title: "Reviews",
    links: [
      { label: "SumUp", href: "/reviews/sumup" },
      { label: "Square", href: "/reviews/square" },
      { label: "Zettle", href: "/reviews/zettle" },
      { label: "Dojo", href: "/reviews/dojo" },
      { label: "myPOS", href: "/reviews/mypos" },
    ],
  },
  {
    title: "By business",
    links: [
      { label: "Cafés", href: "/pos-systems/cafes" },
      { label: "Restaurants", href: "/pos-systems/restaurants" },
      { label: "Retail", href: "/pos-systems/retail" },
      { label: "Market stalls", href: "/pos-systems/market-stalls" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
      { label: "Get matched", href: "/get-pos-quotes" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How we make money", href: "/how-we-make-money" },
      { label: "Methodology", href: "/methodology" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Editorial policy", href: "/editorial-policy" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Cookie policy", href: "/cookie-policy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export const DISCLOSURE =
  "The POS may earn commission when you click links or apply through certain providers. This does not cost you extra, and providers cannot pay to change our editorial verdicts. Our comparisons are based on publicly available pricing, product information and our own editorial criteria.";
