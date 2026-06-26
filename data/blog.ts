/* Blog posts — /blog and /blog/[slug].
 * Body text supports inline markdown links: [label](/internal-path).
 * Keep internal links pointing at commercial pages (reviews, comparisons,
 * hubs, calculator, quotes) and other posts — that's the whole point. */

export type BlogSection = { heading?: string; paragraphs: string[]; bullets?: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Comparisons" | "Fees & saving" | "How-to" | "By business";
  author: string;
  date: string; // ISO yyyy-mm-dd
  readMinutes: number;
  featuredImage: string; // /images/blog/<slug>.jpg
  featuredAlt: string;
  intro: string;
  sections: BlogSection[];
  faqs?: { q: string; a: string }[];
  /** Other post slugs to cross-link. */
  relatedPosts: string[];
  /** Commercial/internal pages to link in the sidebar + CTA. */
  relatedLinks: { label: string; href: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "card-machine-mistakes",
    title: "5 Mistakes UK Businesses Make When Choosing a Card Machine",
    excerpt:
      "From chasing the lowest headline rate to ignoring the contract, here are the five traps that cost UK businesses money — and how to dodge them.",
    category: "How-to",
    author: "The POS editorial team",
    date: "2026-06-24",
    readMinutes: 6,
    featuredImage: "/images/blog/card-machine-mistakes.jpg",
    featuredAlt: "Close-up of a card machine on a shop counter",
    intro:
      "Picking a card machine looks simple until the first statement lands. Here are the five mistakes we see most often — and the quick checks that save you money.",
    sections: [
      {
        heading: "1. Chasing the lowest headline rate",
        paragraphs: [
          "A 1.5% rate with a £25 monthly fee can cost more than a 1.75% rate with no monthly fee — it depends entirely on your volume. Run your real numbers through our [card machine fee calculator](/card-machine-fee-calculator) before you sign anything.",
        ],
      },
      {
        heading: "2. Ignoring the contract",
        paragraphs: [
          "Pay-as-you-go providers like [SumUp](/reviews/sumup) and [Square](/reviews/square) have no contract. Quote-based providers can tie you in for years with exit fees. If you're not sure you'll stick around, favour a [no-contract option](/guides/no-contract-card-machines).",
        ],
      },
      {
        heading: "3. Forgetting about payout speed",
        paragraphs: [
          "If your cash flow is tight, waiting 2–3 days for your money hurts. Some providers settle next-day or even same-day — see our roundup of [same-day payout providers](/blog/same-day-payouts-providers).",
        ],
      },
      {
        heading: "4. Buying more POS than you need",
        paragraphs: [
          "A sole trader rarely needs a full till system. Match the kit to the job using our [POS vs card reader guide](/guides/pos-system-vs-card-reader), or compare the lot on the [main comparison page](/compare-pos-systems).",
        ],
      },
      {
        heading: "5. Not checking the hidden fees",
        paragraphs: [
          "Chargebacks, PCI charges, authorisation fees — the bits that don't make the homepage. We list them all in [hidden card machine fees](/guides/hidden-card-machine-fees).",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the most important thing when choosing a card machine?",
        a: "Your total cost at your real monthly volume — not the headline rate. A no-monthly-fee provider usually wins at lower volumes; a quote-based provider can win at higher ones. Use a fee calculator to check.",
      },
    ],
    relatedPosts: ["how-to-cut-card-processing-fees", "no-contract-card-machines-catch"],
    relatedLinks: [
      { label: "Compare card machines", href: "/compare-card-machines" },
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
      { label: "Get matched to a provider", href: "/get-pos-quotes" },
    ],
  },
  {
    slug: "sumup-vs-square-2026",
    title: "SumUp vs Square in 2026: Which Should Your Small Business Pick?",
    excerpt:
      "Two of the UK's most popular no-monthly-fee options, head to head. We break down fees, hardware and who each one actually suits.",
    category: "Comparisons",
    author: "The POS editorial team",
    date: "2026-06-20",
    readMinutes: 7,
    featuredImage: "/images/blog/sumup-vs-square-2026.jpg",
    featuredAlt: "Contactless card payment on a reader",
    intro:
      "SumUp and Square are the default picks for UK small businesses that want card payments without a contract. They look similar on the surface — here's how to choose.",
    sections: [
      {
        heading: "The short version",
        paragraphs: [
          "Choose [SumUp](/reviews/sumup) if you want the simplest, cheapest way to take a card. Choose [Square](/reviews/square) if you want a genuinely good free POS app with inventory, online ordering and room to grow. Our full [SumUp vs Square breakdown](/compare/sumup-vs-square) has the side-by-side table.",
        ],
      },
      {
        heading: "Fees",
        paragraphs: [
          "SumUp is 1.69% standard (from 0.99% on Payments Plus); Square is a flat 1.75% in person. Neither has a monthly fee on its standard plan. Which is cheaper depends on your volume — run it through the [fee calculator](/card-machine-fee-calculator).",
        ],
      },
      {
        heading: "Who each one suits",
        paragraphs: ["A rough rule of thumb:"],
        bullets: [
          "Market stall, tradesperson, mobile seller → SumUp (see [best for market stalls](/pos-systems/market-stalls))",
          "Café, small retail, service business → Square (see [best for cafés](/pos-systems/cafes))",
          "Selling online and in person → Square's free online store edges it",
        ],
      },
    ],
    faqs: [
      {
        q: "Is SumUp or Square better for a café?",
        a: "Square, usually — its free POS app handles menus, tipping and reporting better. SumUp is the better pick if you only need simple card payments with the lowest possible cost.",
      },
    ],
    relatedPosts: ["card-machine-mistakes", "cafe-overpaying-card-fees"],
    relatedLinks: [
      { label: "SumUp vs Square — full comparison", href: "/compare/sumup-vs-square" },
      { label: "SumUp review", href: "/reviews/sumup" },
      { label: "Square review", href: "/reviews/square" },
    ],
  },
  {
    slug: "how-to-cut-card-processing-fees",
    title: "How to Cut Your Card Processing Fees (Without Switching to a Worse Provider)",
    excerpt:
      "Seven practical ways UK businesses can shave money off card fees — from renegotiating to picking the right plan for your volume.",
    category: "Fees & saving",
    author: "Nathan Keeble",
    date: "2026-06-16",
    readMinutes: 6,
    featuredImage: "/images/blog/how-to-cut-card-processing-fees.jpg",
    featuredAlt: "Calculator and banknotes on a desk",
    intro:
      "Card fees quietly eat into every sale. The good news: most businesses are leaving money on the table, and fixing it doesn't mean dropping to a dodgy provider.",
    sections: [
      {
        heading: "Know your real effective rate",
        paragraphs: [
          "Add up everything you paid last month — transaction fees, monthly fees, hardware — and divide by your card turnover. That's your true cost. Our [fee calculator](/card-machine-fee-calculator) does it for you, and our [fees explained guide](/guides/card-machine-fees-explained) decodes the line items.",
        ],
      },
      {
        heading: "Match the plan to your volume",
        paragraphs: [
          "Low volume? A no-monthly-fee provider like [SumUp](/reviews/sumup) or [Zettle](/reviews/zettle) almost always wins. Doing serious volume? A quote-based provider like [Dojo](/reviews/dojo) may beat a flat rate — but only if the monthly fee and contract stack up.",
        ],
      },
      {
        heading: "The quick wins",
        paragraphs: [""],
        bullets: [
          "Avoid paying for instant payouts you don't need",
          "Buy your reader outright instead of renting where it's cheaper",
          "Watch premium/commercial card surcharges",
          "Re-compare every 12 months — see the [full comparison](/compare-pos-systems)",
        ],
      },
    ],
    relatedPosts: ["card-machine-mistakes", "same-day-payouts-providers"],
    relatedLinks: [
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
      { label: "Card machine fees explained", href: "/guides/card-machine-fees-explained" },
      { label: "Compare POS systems", href: "/compare-pos-systems" },
    ],
  },
  {
    slug: "best-card-readers-market-traders",
    title: "The Best Card Readers for Market Traders",
    excerpt:
      "Market stalls need a reader that works on mobile data, lasts all day and costs nothing when you're not trading. Here's what to look for.",
    category: "By business",
    author: "The POS editorial team",
    date: "2026-06-12",
    readMinutes: 5,
    featuredImage: "/images/blog/best-card-readers-market-traders.jpg",
    featuredAlt: "Customer paying with a bank card at a stall",
    intro:
      "On a market stall you want a reader in your apron, not a contract on your desk. Here's what actually matters when you trade outdoors.",
    sections: [
      {
        heading: "What to prioritise",
        paragraphs: ["For market trading, the order of importance is usually:"],
        bullets: [
          "Works on its own mobile data (don't rely on market WiFi)",
          "No monthly fee — you shouldn't pay for the weeks you don't trade",
          "All-day battery",
          "Cheap to buy outright",
        ],
      },
      {
        heading: "Our picks",
        paragraphs: [
          "The [SumUp](/reviews/sumup) Solo and [Zettle](/reviews/zettle) Terminal are standalone, SIM-connected and pay-as-you-go — ideal for stalls. If you want instant access to your takings, [myPOS](/reviews/mypos) is worth a look. See the full shortlist on our [best POS for market stalls](/pos-systems/market-stalls) page.",
        ],
      },
    ],
    faqs: [
      {
        q: "What card reader works without WiFi?",
        a: "Standalone readers with a built-in SIM — like the SumUp Solo, Zettle Terminal or myPOS Go — work on mobile data, so you don't need WiFi. Perfect for markets and events.",
      },
    ],
    relatedPosts: ["sumup-vs-square-2026", "tap-to-pay-iphone-worth-it"],
    relatedLinks: [
      { label: "Best POS for market stalls", href: "/pos-systems/market-stalls" },
      { label: "Compare card machines", href: "/compare-card-machines" },
      { label: "SumUp review", href: "/reviews/sumup" },
    ],
  },
  {
    slug: "tap-to-pay-iphone-worth-it",
    title: "Tap to Pay on iPhone: Is It Good Enough to Ditch the Card Machine?",
    excerpt:
      "Take contactless payments on your phone with no extra hardware. We look at who it suits — and where you'll still want a proper reader.",
    category: "How-to",
    author: "The POS editorial team",
    date: "2026-06-08",
    readMinutes: 5,
    featuredImage: "/images/blog/tap-to-pay-iphone-worth-it.jpg",
    featuredAlt: "Person tapping a phone on a payment terminal",
    intro:
      "Tap to Pay turns your phone into a contactless reader — no separate machine. It's brilliant for some businesses and not enough for others.",
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "With a supported app — [SumUp](/reviews/sumup), [Square](/reviews/square) and [Zettle](/reviews/zettle) all offer it — customers tap their card, phone or watch on your phone. There's nothing else to buy. Our [Tap to Pay guide](/guides/what-is-tap-to-pay) covers the basics.",
        ],
      },
      {
        heading: "Who it's great for",
        paragraphs: [
          "Tradespeople, mobile sellers and pop-ups love it as a zero-hardware option — see [best card readers for tradespeople](/pos-systems/tradesmen). It's also a handy backup even if you own a reader.",
        ],
      },
      {
        heading: "Where you'll still want a reader",
        paragraphs: [
          "Busy counters, tipping prompts and standalone use (no phone tied up) are still better on a dedicated machine. Compare both on the [card machine page](/compare-card-machines).",
        ],
      },
    ],
    relatedPosts: ["best-card-readers-market-traders", "no-contract-card-machines-catch"],
    relatedLinks: [
      { label: "What is Tap to Pay?", href: "/guides/what-is-tap-to-pay" },
      { label: "Best for tradespeople", href: "/pos-systems/tradesmen" },
      { label: "Compare card machines", href: "/compare-card-machines" },
    ],
  },
  {
    slug: "no-contract-card-machines-catch",
    title: "No-Contract Card Machines: What's the Catch?",
    excerpt:
      "No-contract sounds like a no-brainer — but there are trade-offs. Here's when pay-as-you-go wins and when a contract is genuinely cheaper.",
    category: "Fees & saving",
    author: "The POS editorial team",
    date: "2026-06-04",
    readMinutes: 5,
    featuredImage: "/images/blog/no-contract-card-machines-catch.jpg",
    featuredAlt: "Person reviewing costs with a calculator",
    intro:
      "Nobody enjoys being tied into a multi-year deal to take a card. But 'no contract' isn't automatically the cheapest — here's the honest trade-off.",
    sections: [
      {
        heading: "The no-contract options",
        paragraphs: [
          "[SumUp](/reviews/sumup), [Square](/reviews/square) and [Zettle](/reviews/zettle) all let you buy a reader and pay only per transaction. No monthly fee, no commitment. Our [no-contract guide](/guides/no-contract-card-machines) lists them all.",
        ],
      },
      {
        heading: "When a contract is actually cheaper",
        paragraphs: [
          "If you're high-volume, a quote-based provider like [Dojo](/reviews/dojo) might offer a low enough rate that even with a monthly fee, you come out ahead. Just check the maths with the [fee calculator](/card-machine-fee-calculator) and read the exit terms.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are no-contract card machines worth it?",
        a: "For low or variable volume, yes — you avoid commitment and only pay when you sell. For high, steady volume, a contracted provider with a lower rate can work out cheaper overall.",
      },
    ],
    relatedPosts: ["how-to-cut-card-processing-fees", "card-machine-mistakes"],
    relatedLinks: [
      { label: "No-contract card machines", href: "/guides/no-contract-card-machines" },
      { label: "Compare POS systems", href: "/compare-pos-systems" },
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
    ],
  },
  {
    slug: "cafe-overpaying-card-fees",
    title: "Why Your Café Might Be Overpaying on Card Fees",
    excerpt:
      "Lots of small coffees means lots of tiny transactions — and that's exactly where the wrong setup quietly costs you. Here's how to fix it.",
    category: "By business",
    author: "Nathan Keeble",
    date: "2026-05-30",
    readMinutes: 5,
    featuredImage: "/images/blog/cafe-overpaying-card-fees.jpg",
    featuredAlt: "Customer paying by card at a café counter",
    intro:
      "A café lives on small, frequent transactions — flat whites, not furniture. That changes which provider is cheapest for you.",
    sections: [
      {
        heading: "Why small tickets matter",
        paragraphs: [
          "Providers that charge a flat percentage suit cafés well; ones that add a fixed pence-per-transaction fee can sting when your average sale is £3. Check your effective rate with the [fee calculator](/card-machine-fee-calculator).",
        ],
      },
      {
        heading: "What works for cafés",
        paragraphs: [
          "[Square](/reviews/square) is the popular all-rounder — free POS, tipping and quick menus. [SumUp](/reviews/sumup) is great if you just want simple, cheap payments. The full shortlist is on [best POS for cafés](/pos-systems/cafes).",
        ],
      },
    ],
    relatedPosts: ["sumup-vs-square-2026", "how-to-cut-card-processing-fees"],
    relatedLinks: [
      { label: "Best POS for cafés", href: "/pos-systems/cafes" },
      { label: "Square review", href: "/reviews/square" },
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
    ],
  },
  {
    slug: "restaurant-pos-what-matters",
    title: "Restaurant POS in 2026: What Actually Matters",
    excerpt:
      "Tables, tabs, tips and a kitchen that's already on fire at 8pm. Here's what to prioritise in a restaurant POS — and what to ignore.",
    category: "By business",
    author: "The POS editorial team",
    date: "2026-05-26",
    readMinutes: 6,
    featuredImage: "/images/blog/restaurant-pos-what-matters.jpg",
    featuredAlt: "Customer paying at a restaurant counter",
    intro:
      "A restaurant POS has a harder job than a shop till. Reliability and speed beat shaving 0.1% off the rate — here's the priority order.",
    sections: [
      {
        heading: "What to prioritise",
        paragraphs: [""],
        bullets: [
          "Table and tab management that staff can learn fast",
          "Rock-solid reliability during service",
          "Fast payouts for cash flow",
          "Tipping and tronc-friendly reporting",
        ],
      },
      {
        heading: "Our picks",
        paragraphs: [
          "[Dojo](/reviews/dojo) is popular for reliable card machines and fast payouts; pair it with a hospitality POS for table service. See the full shortlist on [best POS for restaurants](/pos-systems/restaurants), or compare everything on the [main comparison](/compare-pos-systems).",
        ],
      },
    ],
    relatedPosts: ["same-day-payouts-providers", "switching-card-machine-checklist"],
    relatedLinks: [
      { label: "Best POS for restaurants", href: "/pos-systems/restaurants" },
      { label: "Dojo review", href: "/reviews/dojo" },
      { label: "Get matched", href: "/get-pos-quotes" },
    ],
  },
  {
    slug: "same-day-payouts-providers",
    title: "Getting Paid Faster: Which Providers Offer Same-Day Payouts?",
    excerpt:
      "Standard settlement is 1–2 working days. If cash flow is tight, here are the providers that get your money to you sooner.",
    category: "Comparisons",
    author: "The POS editorial team",
    date: "2026-05-20",
    readMinutes: 5,
    featuredImage: "/images/blog/same-day-payouts-providers.jpg",
    featuredAlt: "British pound banknotes",
    intro:
      "You took the payment — so where's the money? Settlement speed varies a lot, and faster payouts can be worth paying for when cash flow is tight.",
    sections: [
      {
        heading: "The fast movers",
        paragraphs: ["If quick access to funds matters, look at:"],
        bullets: [
          "[myPOS](/reviews/mypos) — instant settlement to a built-in account",
          "[Dojo](/reviews/dojo) — next-day, with as-fast-as same-day options",
          "[Square](/reviews/square) — next working day, instant transfer for a fee",
        ],
      },
      {
        heading: "Is it worth paying for?",
        paragraphs: [
          "If you rely on daily takings for stock or wages, yes. If not, standard free payouts are fine. Our guide on [how long card payments take to clear](/guides/how-long-do-card-payments-take-to-clear) has the detail, and you can filter for fast payouts on the [comparison page](/compare-pos-systems).",
        ],
      },
    ],
    relatedPosts: ["how-to-cut-card-processing-fees", "restaurant-pos-what-matters"],
    relatedLinks: [
      { label: "How long payments take to clear", href: "/guides/how-long-do-card-payments-take-to-clear" },
      { label: "myPOS review", href: "/reviews/mypos" },
      { label: "Compare POS systems", href: "/compare-pos-systems" },
    ],
  },
  {
    slug: "switching-card-machine-checklist",
    title: "Switching Card Machine Providers: A Stress-Free Checklist",
    excerpt:
      "Thinking of moving provider? Work through this checklist first so you don't get caught by exit fees, downtime or a worse rate.",
    category: "How-to",
    author: "Nathan Keeble",
    date: "2026-05-14",
    readMinutes: 6,
    featuredImage: "/images/blog/switching-card-machine-checklist.jpg",
    featuredAlt: "Writing a checklist on a notepad",
    intro:
      "Switching provider can save you real money — but only if you avoid the obvious traps. Run through this before you commit.",
    sections: [
      {
        heading: "Before you switch",
        paragraphs: [""],
        bullets: [
          "Check your current contract for notice periods and exit fees",
          "Work out your true effective rate with the [fee calculator](/card-machine-fee-calculator)",
          "Compare like-for-like on the [main comparison](/compare-pos-systems)",
          "Confirm the new provider supports how you actually trade",
        ],
      },
      {
        heading: "Making the move",
        paragraphs: [
          "Order the new reader before cancelling the old one to avoid downtime. If you're unsure which to pick, our [60-second quiz](/get-pos-quotes#quiz) narrows it down, or get [tailored quotes](/get-pos-quotes). For the full decision framework, see [how to choose a card machine](/guides/how-to-choose-a-card-machine).",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I switch card machine providers easily?",
        a: "Pay-as-you-go providers have no contract, so switching is simple. Contracted providers may have notice periods and exit fees — always check before you cancel, and order the new reader first to avoid downtime.",
      },
    ],
    relatedPosts: ["card-machine-mistakes", "no-contract-card-machines-catch"],
    relatedLinks: [
      { label: "Compare POS systems", href: "/compare-pos-systems" },
      { label: "How to choose a card machine", href: "/guides/how-to-choose-a-card-machine" },
      { label: "Get matched", href: "/get-pos-quotes" },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);

/** Newest first. */
export function postsByDate(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
}
