/* Head-to-head comparison pages - /compare/[a]-vs-[b]. */

export type VersusPage = {
  slug: string; // "sumup-vs-square"
  a: string; // provider slug
  b: string; // provider slug
  quickVerdict: string;
  chooseA: string;
  chooseB: string;
  bestForBusiness: { type: string; winner: string; why: string }[];
  faqs: { q: string; a: string }[];
};

export const VERSUS_PAGES: VersusPage[] = [
  {
    slug: "sumup-vs-square",
    a: "sumup",
    b: "square",
    quickVerdict:
      "Both are no-monthly-fee, no-contract options. Choose SumUp if you want simple, low-commitment card payments. Choose Square if you want a stronger free POS app and more software features.",
    chooseA:
      "Choose SumUp if you only need a basic card reader, want to keep things minimal, and like the cheapest possible start. It's the classic pick for tradespeople, market stalls and mobile sellers.",
    chooseB:
      "Choose Square if you want free POS software with payments built in - inventory, online store, invoices and loyalty. It's especially good for cafés, small retail and service businesses that want room to grow.",
    bestForBusiness: [
      { type: "Market stall / mobile", winner: "SumUp", why: "Cheaper, simpler, standalone readers and Tap to Pay." },
      { type: "Café / small retail", winner: "Square", why: "Better free POS app, inventory and reporting." },
      { type: "Tradesperson", winner: "SumUp", why: "Cheap reader, invoices and pay-by-link, minimal fuss." },
      { type: "Online + in-person", winner: "Square", why: "Free online store keeps stock in sync." },
    ],
    faqs: [
      {
        q: "Is SumUp or Square cheaper?",
        a: "Both have no monthly fee on their standard plans. SumUp's standard rate is 1.69% and its Payments Plus rate starts from 0.99%, while Square is a flat 1.75% in person. The cheapest depends on your volume and plan - always check current terms.",
      },
      {
        q: "Which has the better POS software?",
        a: "Square. Its free POS app is more capable than SumUp's, with stronger inventory, an online store and more add-ons. SumUp is deliberately simpler.",
      },
    ],
  },
  {
    slug: "sumup-vs-zettle",
    a: "sumup",
    b: "zettle",
    quickVerdict:
      "Two simple, no-monthly-fee readers. SumUp edges it on hardware range and a lower entry rate; Zettle is the natural pick if you live in the PayPal ecosystem.",
    chooseA:
      "Choose SumUp if you want the widest range of cheap readers, the lowest entry rate (from 0.99% on Payments Plus) and simple invoicing - without needing a PayPal account.",
    chooseB:
      "Choose PayPal Zettle if you already use PayPal and want your takings to flow neatly into your PayPal balance, with a tidy reader and free basic POS app.",
    bestForBusiness: [
      { type: "PayPal seller", winner: "Zettle", why: "Money flows into your PayPal balance." },
      { type: "Lowest entry rate", winner: "SumUp", why: "Payments Plus rate starts from 0.99%." },
      { type: "Mobile / market", winner: "SumUp", why: "Standalone Solo reader with SIM." },
      { type: "Small retail", winner: "Zettle", why: "Decent free inventory and reporting." },
    ],
    faqs: [
      {
        q: "Is Zettle owned by PayPal?",
        a: "Yes - Zettle is PayPal's in-person payments product, so it integrates closely with your PayPal account.",
      },
      {
        q: "Which is cheaper, SumUp or Zettle?",
        a: "Zettle is 1.75% per card transaction. SumUp is 1.69% standard, with a Payments Plus rate from 0.99%. SumUp can be cheaper, but it depends on your plan and volume - check current terms.",
      },
    ],
  },
  {
    slug: "sumup-vs-dojo",
    a: "sumup",
    b: "dojo",
    quickVerdict:
      "Different leagues. SumUp is cheap, simple and contract-free for low volumes. Dojo is built for busier businesses that want fast payouts and hands-on support - at the cost of quote-based pricing and contracts.",
    chooseA:
      "Choose SumUp if you're low-volume, want no monthly fee or contract, and value simplicity. Ideal for sole traders, market stalls and quieter shops.",
    chooseB:
      "Choose Dojo if you're a busy café, bar, restaurant or higher-volume retailer that wants reliable card machines, fast (even same-day) payouts and account management - and you're comfortable with a contract.",
    bestForBusiness: [
      { type: "Low-volume / occasional", winner: "SumUp", why: "No monthly fee, no contract, cheap to start." },
      { type: "Busy hospitality", winner: "Dojo", why: "Fast payouts, reliability and support." },
      { type: "Higher-volume retail", winner: "Dojo", why: "Tailored rates can beat a flat rate at scale." },
      { type: "Tradesperson", winner: "SumUp", why: "Simple, portable, invoice-friendly." },
    ],
    faqs: [
      {
        q: "Is Dojo worth it over SumUp?",
        a: "For higher-volume businesses that value fast payouts and support, often yes. For low-volume or occasional sellers, SumUp's no-fee, no-contract model is usually the better value.",
      },
      {
        q: "Does Dojo have a contract?",
        a: "Dojo pricing is quote-based and typically involves a contract, unlike SumUp's pay-as-you-go model. Always check the term length and exit fees before signing.",
      },
    ],
  },
];

export function getVersus(slug: string): VersusPage | undefined {
  return VERSUS_PAGES.find((v) => v.slug === slug);
}

export const VERSUS_SLUGS = VERSUS_PAGES.map((v) => v.slug);
