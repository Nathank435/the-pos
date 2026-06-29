/* Head-to-head comparison pages - /compare/[a]-vs-[b]. */

export type VersusPage = {
  slug: string; // "sumup-vs-square"
  a: string; // provider slug
  b: string; // provider slug
  /** Bespoke ≤155-char SEO meta description. */
  metaDescription?: string;
  quickVerdict: string;
  chooseA: string;
  chooseB: string;
  bestForBusiness: { type: string; winner: string; why: string }[];
  faqs: { q: string; a: string }[];
};

export const VERSUS_PAGES: VersusPage[] = [
  {
    slug: "sumup-vs-square",
    metaDescription:
      "SumUp vs Square (2026): which is better for your UK business? Compare fees, hardware, contracts and who each one suits. Plain-English verdict inside.",
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
    metaDescription:
      "SumUp vs Zettle (2026): which card reader wins for UK small businesses? Fees, hardware and who each one suits, compared. Plain-English verdict inside.",
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
    metaDescription:
      "SumUp vs Dojo (2026): pay-as-you-go simplicity vs fast-payout power for UK businesses. Fees, contracts and verdict compared in plain English.",
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
  {
    slug: "square-vs-zettle",
    metaDescription:
      "Square vs Zettle (2026): which card reader and POS wins for UK small businesses? Fees, payouts and who each suits, compared. Plain-English verdict.",
    a: "square",
    b: "zettle",
    quickVerdict:
      "Both are no-monthly-fee, no-contract readers at 1.75% in person. Square wins on POS software and ecosystem; Zettle makes most sense if you already live in PayPal and want takings in your PayPal balance.",
    chooseA:
      "Choose Square if you want the stronger free POS app - inventory, online store, invoices and loyalty - with room to grow into Square for Retail or Restaurants. Best for cafés, shops and service businesses.",
    chooseB:
      "Choose PayPal Zettle if you already use PayPal and want your card takings to flow straight into your PayPal balance, with a tidy reader and a simple free app. Great for pop-ups and PayPal-first sellers.",
    bestForBusiness: [
      { type: "Café / small retail", winner: "Square", why: "Better free POS, inventory and reporting." },
      { type: "PayPal seller", winner: "Zettle", why: "Funds flow into your PayPal balance." },
      { type: "Online + in-person", winner: "Square", why: "Free online store keeps stock in sync." },
      { type: "Pop-ups / occasional", winner: "Zettle", why: "Simple, cheap reader with no commitment." },
    ],
    faqs: [
      {
        q: "Are Square and Zettle the same price?",
        a: "Both charge 1.75% per in-person card transaction with no monthly fee on their standard plans. The differences come down to software, payouts and ecosystem rather than the headline rate.",
      },
      {
        q: "Which is better, Square or Zettle?",
        a: "For most UK small businesses Square is the stronger all-rounder thanks to its POS software and ecosystem. Zettle is the better pick if you're already invested in PayPal.",
      },
    ],
  },
  {
    slug: "dojo-vs-square",
    metaDescription:
      "Dojo vs Square (2026): fast-payout card machines vs the best free POS app for UK businesses. Fees, contracts and who each suits, compared. Verdict inside.",
    a: "dojo",
    b: "square",
    quickVerdict:
      "Different tools. Dojo is built for busy hospitality and higher-volume retail that want fast payouts and hands-on support (quote-based, with a contract). Square is the free, no-contract all-rounder for cafés, shops and service businesses.",
    chooseA:
      "Choose Dojo if you're a busy café, bar, restaurant or higher-volume shop that wants reliable card machines, next or same-day payouts and account management - and you're comfortable with a contract and quote-based pricing.",
    chooseB:
      "Choose Square if you want no monthly fee, no contract and genuinely good free POS software with inventory, online store and invoices. Ideal for independents starting out or keeping costs predictable.",
    bestForBusiness: [
      { type: "Busy hospitality", winner: "Dojo", why: "Fast payouts, reliability and hands-on support." },
      { type: "Café / small retail", winner: "Square", why: "Free POS, no contract, easy to run." },
      { type: "Higher-volume retail", winner: "Dojo", why: "Tailored rates can beat a flat 1.75%." },
      { type: "Online + in-person", winner: "Square", why: "Free online store and stock sync." },
    ],
    faqs: [
      {
        q: "Is Dojo cheaper than Square?",
        a: "It depends on volume. Square's flat 1.75% is simple and cheap at lower volumes; Dojo's quote-based rates can undercut it at higher turnover, but come with a contract. Run your numbers in our fee calculator.",
      },
      {
        q: "Does Square offer fast payouts like Dojo?",
        a: "Square pays out next working day as standard, with instant transfer for a fee. Dojo is known for next-day and even same-day payouts, which is why busy hospitality businesses favour it.",
      },
    ],
  },
  {
    slug: "sumup-vs-mypos",
    metaDescription:
      "SumUp vs myPOS (2026): two no-monthly-fee card readers for UK mobile sellers, compared on fees, payouts and features. Plain-English verdict inside.",
    a: "sumup",
    b: "mypos",
    quickVerdict:
      "Both are pay-as-you-go readers with no monthly fee. SumUp is the simplest, cheapest start; myPOS adds instant access to funds via a built-in business account, handy for cash flow and international payments.",
    chooseA:
      "Choose SumUp if you want the cheapest, simplest reader, the widest hardware range and a low entry rate (from 0.99% on Payments Plus). Ideal for market stalls, tradespeople and quieter sellers.",
    chooseB:
      "Choose myPOS if instant settlement matters - your takings land in a myPOS business account immediately - or you take international and European payments. Useful for mobile traders who need funds straight away.",
    bestForBusiness: [
      { type: "Market stall / mobile", winner: "SumUp", why: "Cheap, simple, widest reader range." },
      { type: "Instant access to funds", winner: "myPOS", why: "Money settles immediately to your account." },
      { type: "Lowest entry rate", winner: "SumUp", why: "Payments Plus from 0.99%." },
      { type: "International payments", winner: "myPOS", why: "Strong for European and multi-currency." },
    ],
    faqs: [
      {
        q: "Is myPOS or SumUp better for getting paid quickly?",
        a: "myPOS settles funds instantly to its built-in business account, whereas SumUp's standard payout is 1-2 working days. If same-moment access matters, myPOS leads.",
      },
      {
        q: "Which is cheaper, SumUp or myPOS?",
        a: "Both have no monthly fee on entry plans. SumUp starts from 0.99% (Payments Plus) or 1.69% standard; myPOS card-present starts around 1.10% + 7p on lower tiers. The cheapest depends on volume - check current terms.",
      },
    ],
  },
];

export function getVersus(slug: string): VersusPage | undefined {
  return VERSUS_PAGES.find((v) => v.slug === slug);
}

export const VERSUS_SLUGS = VERSUS_PAGES.map((v) => v.slug);
