/* Learning hub guides - /guides/[slug].
 * Content lives as structured sections so it renders consistently and stays
 * easy to edit. Swap to MDX later without changing the page shell.        */

export type GuideSection = { heading?: string; paragraphs: string[]; bullets?: string[] };

export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: "Basics" | "Fees" | "Choosing" | "Features";
  readMinutes: number;
  lastUpdated: string; // ISO
  intro: string;
  sections: GuideSection[];
  faqs?: { q: string; a: string }[];
  /** Internal-linking targets (commercial pages get at least 3 links per guide). */
  relatedGuides: string[];
  relatedLinks: { label: string; href: string }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "card-machine-fees-explained",
    title: "Card Machine Fees Explained (UK)",
    description:
      "Transaction fees, monthly fees, hardware costs, payout charges and the sneaky extras - every card machine fee, explained in plain English.",
    category: "Fees",
    readMinutes: 7,
    lastUpdated: "2026-06-25",
    intro:
      "The headline rate a provider advertises is rarely the whole story. Here's every fee that can land on a UK card machine bill, what's normal, and where the catches hide.",
    sections: [
      {
        heading: "1. The transaction fee",
        paragraphs: [
          "This is the percentage (and sometimes a few pence) taken from every card sale. UK pay-as-you-go providers typically sit around 1.69%–1.75% for in-person payments, while quote-based acquirers can offer lower blended or interchange-plus rates at higher volumes.",
          "Watch for different rates by card type - premium, commercial and international cards often cost more than a standard UK debit card.",
        ],
      },
      {
        heading: "2. The monthly fee",
        paragraphs: [
          "Pay-as-you-go providers (SumUp, Square, Zettle) charge £0 a month - you only pay per transaction. Quote-based providers (Dojo, Worldpay, Barclaycard, Tyl) often charge a monthly fee plus terminal hire.",
          "A monthly fee isn't automatically bad: at higher volumes a lower transaction rate can more than pay for it. Our fee calculator works out where the crossover is.",
        ],
      },
      {
        heading: "3. Hardware cost",
        paragraphs: [
          "You either buy the reader outright (£19–£599 depending on the device) or hire/finance it monthly. Buying is usually cheaper long-term; hiring spreads the cost but can lock you into a term.",
        ],
      },
      {
        heading: "4. Payout / settlement charges",
        paragraphs: [
          "Standard payouts (1–2 working days) are usually free. Instant or same-day payouts often cost extra - a flat fee or a small percentage. If cash flow is tight, factor this in.",
        ],
      },
      {
        heading: "5. The fees providers prefer to bury",
        paragraphs: ["These are the ones that don't make the homepage:"],
        bullets: [
          "Chargeback fees when a customer disputes a payment",
          "PCI compliance fees or non-compliance charges (more common with traditional acquirers)",
          "Authorisation fees per transaction on some merchant accounts",
          "Early cancellation / exit fees on fixed contracts",
          "Minimum monthly service charges if you don't hit a turnover threshold",
        ],
      },
      {
        heading: "So what actually matters?",
        paragraphs: [
          "For low volumes, the transaction rate and zero monthly fee dominate - pay-as-you-go wins. For higher volumes, a slightly lower rate with a monthly fee can be cheaper overall, but only if there's no contract trap. Always check the total cost of ownership, not just the headline percentage.",
        ],
      },
    ],
    faqs: [
      {
        q: "What's a typical card machine transaction fee in the UK?",
        a: "Pay-as-you-go providers are usually around 1.69%–1.75% per in-person transaction. Quote-based acquirers may offer lower blended rates at higher volumes, but add monthly and hardware costs.",
      },
      {
        q: "Are there card machines with no monthly fee?",
        a: "Yes - SumUp, Square, Zettle and entry myPOS plans have no monthly fee. You buy the reader and pay a percentage per sale.",
      },
    ],
    relatedGuides: ["hidden-card-machine-fees", "no-contract-card-machines", "how-to-choose-a-card-machine"],
    relatedLinks: [
      { label: "Compare POS systems", href: "/compare-pos-systems" },
      { label: "Compare card machines", href: "/compare-card-machines" },
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
      { label: "Get tailored quotes", href: "/get-pos-quotes" },
    ],
  },
  {
    slug: "what-is-a-pos-system",
    title: "What Is a POS System? (Plain-English Guide)",
    description:
      "What 'POS' actually means, how a POS system differs from a card reader, and what features matter for UK small businesses.",
    category: "Basics",
    readMinutes: 5,
    lastUpdated: "2026-06-25",
    intro:
      "POS stands for 'point of sale' - the place and the kit where you take payment and record a sale. But the term covers everything from a £19 pocket reader to a full restaurant system, so let's untangle it.",
    sections: [
      {
        heading: "Card reader vs. full POS system",
        paragraphs: [
          "A card reader just takes payments - tap, chip, done. A full POS system does that and also rings up items, tracks stock, manages tables or appointments, and reports on sales.",
          "Most sole traders and market sellers only need a reader. Cafés, shops and restaurants usually want a fuller POS.",
        ],
      },
      {
        heading: "What a modern POS can do",
        paragraphs: ["Beyond taking a card, a POS system might include:"],
        bullets: [
          "Item/menu management and quick-sale buttons",
          "Inventory and stock tracking",
          "Table plans, tabs and tipping (hospitality)",
          "Appointments (salons) and customer records",
          "Online store and click-and-collect",
          "Sales reporting and staff management",
        ],
      },
      {
        heading: "Do you need one?",
        paragraphs: [
          "If you sell a few things and just need to take a card, a simple reader (SumUp, Square, Zettle) is plenty. If you carry stock, run tables, or want online and in-person to talk to each other, step up to a full POS like Square, Lightspeed or Epos Now.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does 'POS' mean the card machine or the software?",
        a: "Both, loosely. 'Point of sale' refers to where you take payment - which can mean just a card reader, or a full till system with software, hardware and payments combined.",
      },
    ],
    relatedGuides: ["pos-system-vs-card-reader", "how-to-choose-a-card-machine", "what-is-tap-to-pay"],
    relatedLinks: [
      { label: "Compare POS systems", href: "/compare-pos-systems" },
      { label: "Best POS by business type", href: "/pos-systems" },
      { label: "Get tailored quotes", href: "/get-pos-quotes" },
    ],
  },
  {
    slug: "pos-system-vs-card-reader",
    title: "POS System vs Card Reader: Which Do You Need?",
    description:
      "The difference between a simple card reader and a full POS system - and how to tell which one your UK business actually needs.",
    category: "Choosing",
    readMinutes: 5,
    lastUpdated: "2026-06-25",
    intro:
      "Plenty of businesses overspend on a full POS they don't need - or outgrow a basic reader and end up duct-taping spreadsheets together. Here's how to pick the right level.",
    sections: [
      {
        heading: "A card reader is enough if…",
        paragraphs: [""],
        bullets: [
          "You sell a small number of items or services",
          "You mainly need to take a card quickly",
          "You're mobile, occasional or low-volume",
          "You don't need stock tracking or table service",
        ],
      },
      {
        heading: "You want a full POS if…",
        paragraphs: [""],
        bullets: [
          "You carry real inventory and need stock control",
          "You run tables, tabs or appointments",
          "You sell online and want it synced with in-person",
          "You want detailed reporting and staff management",
        ],
      },
      {
        heading: "The middle ground",
        paragraphs: [
          "Square and Zettle blur the line: they start as simple readers but include free POS software you can grow into. That makes them a low-risk starting point if you're not sure which camp you're in.",
        ],
      },
    ],
    relatedGuides: ["what-is-a-pos-system", "how-to-choose-a-card-machine", "card-machine-fees-explained"],
    relatedLinks: [
      { label: "Compare POS systems", href: "/compare-pos-systems" },
      { label: "Compare card machines", href: "/compare-card-machines" },
      { label: "Take the 60-second quiz", href: "/get-pos-quotes" },
    ],
  },
  {
    slug: "how-to-choose-a-card-machine",
    title: "How to Choose a Card Machine (UK Checklist)",
    description: "A practical checklist for choosing a UK card machine: fees, contracts, payouts, hardware and features.",
    category: "Choosing",
    readMinutes: 6,
    lastUpdated: "2026-06-25",
    intro:
      "Cut through the sales pitch with this checklist. Score each provider against the points that actually affect your business, not the ones with the loudest marketing.",
    sections: [
      {
        heading: "The checklist",
        paragraphs: ["Run any provider through these questions before you commit:"],
        bullets: [
          "What's the all-in cost at my real monthly volume? (Use our calculator.)",
          "Is there a monthly fee or contract - and an exit fee?",
          "How fast do I get paid, and does instant payout cost extra?",
          "Do I need a standalone (SIM) device or is phone-paired fine?",
          "Do I need POS software (stock, tables, appointments) or just payments?",
          "What's the support like if it breaks mid-service?",
        ],
      },
      {
        heading: "Match it to your business",
        paragraphs: [
          "Low-volume or mobile? Prioritise no monthly fee and portability. Busy hospitality? Prioritise reliability and fast payouts. Retail with stock? Prioritise inventory and online sync.",
        ],
      },
    ],
    relatedGuides: ["card-machine-fees-explained", "pos-system-vs-card-reader", "no-contract-card-machines"],
    relatedLinks: [
      { label: "Compare card machines", href: "/compare-card-machines" },
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
      { label: "Get tailored quotes", href: "/get-pos-quotes" },
    ],
  },
  {
    slug: "hidden-card-machine-fees",
    title: "Hidden Card Machine Fees to Watch For",
    description: "The card machine fees that don't make the homepage - chargebacks, PCI, authorisation and exit fees.",
    category: "Fees",
    readMinutes: 5,
    lastUpdated: "2026-06-25",
    intro:
      "The advertised rate is the bit they want you to see. These are the charges that quietly turn up on the bill - and how to avoid being caught out.",
    sections: [
      {
        heading: "The usual suspects",
        paragraphs: [""],
        bullets: [
          "Chargeback fees (often £10–£20) when a payment is disputed",
          "PCI compliance or non-compliance fees on traditional merchant accounts",
          "Per-authorisation fees on top of the percentage",
          "Minimum monthly service charges below a turnover threshold",
          "Early termination fees on fixed contracts",
          "Higher rates on premium, commercial and international cards",
        ],
      },
      {
        heading: "How to protect yourself",
        paragraphs: [
          "Ask for the full fee schedule in writing, not just the headline rate. Favour no-contract providers if you're unsure, and check whether 'free' instant payouts are actually free.",
        ],
      },
    ],
    relatedGuides: ["card-machine-fees-explained", "no-contract-card-machines", "how-to-choose-a-card-machine"],
    relatedLinks: [
      { label: "Compare POS systems", href: "/compare-pos-systems" },
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
      { label: "Get tailored quotes", href: "/get-pos-quotes" },
    ],
  },
  {
    slug: "no-contract-card-machines",
    title: "No-Contract Card Machines in the UK",
    description: "Which UK card machines have no contract and no monthly fee - and when a contract is worth it anyway.",
    category: "Choosing",
    readMinutes: 4,
    lastUpdated: "2026-06-25",
    intro:
      "Not everyone wants to sign a multi-year deal to take a card. Here are the genuinely no-contract options, and when a contract might actually save you money.",
    sections: [
      {
        heading: "The no-contract, no-monthly-fee options",
        paragraphs: ["These let you buy a reader and pay only per transaction:"],
        bullets: ["SumUp", "Square", "PayPal Zettle", "myPOS (entry plans)"],
      },
      {
        heading: "When a contract is worth it",
        paragraphs: [
          "If you're high-volume, a quote-based provider (Dojo, Worldpay, Barclaycard) might offer a low enough rate that even with a monthly fee and contract, you come out ahead. Just make sure the maths works and the exit terms are reasonable.",
        ],
      },
    ],
    relatedGuides: ["card-machine-fees-explained", "how-to-choose-a-card-machine", "hidden-card-machine-fees"],
    relatedLinks: [
      { label: "Compare card machines", href: "/compare-card-machines" },
      { label: "No-monthly-fee filter on the comparison", href: "/compare-pos-systems" },
      { label: "Get tailored quotes", href: "/get-pos-quotes" },
    ],
  },
  {
    slug: "what-is-tap-to-pay",
    title: "What Is Tap to Pay (on Phone)?",
    description: "How Tap to Pay on iPhone and Android lets you take contactless payments with no card machine.",
    category: "Features",
    readMinutes: 4,
    lastUpdated: "2026-06-25",
    intro:
      "Tap to Pay turns your phone into a contactless card machine - no extra hardware. Here's how it works and who it suits.",
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "With a supported app (SumUp, Square, Zettle and others), customers tap their card, phone or watch directly on your phone. The payment runs through the app - no separate reader needed.",
        ],
      },
      {
        heading: "Who it's good for",
        paragraphs: [
          "Tradespeople, mobile sellers, pop-ups and anyone who wants a zero-hardware backup. It's ideal as a 'just in case' option even if you also own a reader.",
        ],
      },
    ],
    relatedGuides: ["what-is-a-pos-system", "how-to-choose-a-card-machine", "what-is-a-virtual-terminal"],
    relatedLinks: [
      { label: "Compare card machines", href: "/compare-card-machines" },
      { label: "Best for mobile businesses", href: "/pos-systems/mobile-businesses" },
      { label: "Get tailored quotes", href: "/get-pos-quotes" },
    ],
  },
  {
    slug: "what-is-a-virtual-terminal",
    title: "What Is a Virtual Terminal?",
    description: "How a virtual terminal lets you take card payments over the phone or by keying in card details.",
    category: "Features",
    readMinutes: 4,
    lastUpdated: "2026-06-25",
    intro:
      "A virtual terminal lets you take a payment without the card being present - handy for phone orders and remote sales.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "It's a secure web form where you key in a customer's card details to take payment - no physical card machine required. You log in, enter the amount and card number, and process the sale.",
        ],
      },
      {
        heading: "Who uses it",
        paragraphs: [
          "Tradespeople taking deposits over the phone, B2B sellers, and anyone with remote or mail/telephone-order sales. Note that card-not-present rates are usually a little higher.",
        ],
      },
    ],
    relatedGuides: ["what-is-tap-to-pay", "what-is-a-pos-system", "how-to-choose-a-card-machine"],
    relatedLinks: [
      { label: "Compare POS systems", href: "/compare-pos-systems" },
      { label: "Best for tradespeople", href: "/pos-systems/tradesmen" },
      { label: "Get tailored quotes", href: "/get-pos-quotes" },
    ],
  },
  {
    slug: "merchant-account-vs-payment-facilitator",
    title: "Merchant Account vs Payment Facilitator",
    description: "The difference between a traditional merchant account and a payment facilitator like SumUp or Square.",
    category: "Basics",
    readMinutes: 5,
    lastUpdated: "2026-06-25",
    intro:
      "Why can you start taking payments with SumUp in minutes, but a traditional merchant account takes days? It comes down to two different models.",
    sections: [
      {
        heading: "Payment facilitator (PayFac)",
        paragraphs: [
          "SumUp, Square and Zettle are payment facilitators. You sit under their master merchant account, so sign-up is fast and there's no separate underwriting. Trade-off: flat-rate pricing and less negotiation.",
        ],
      },
      {
        heading: "Traditional merchant account",
        paragraphs: [
          "Worldpay, Barclaycard and bank acquirers give you your own merchant account. Set-up involves underwriting and takes longer, but you can negotiate bespoke rates - better at higher volumes.",
        ],
      },
    ],
    relatedGuides: ["what-is-a-pos-system", "card-machine-fees-explained", "how-to-choose-a-card-machine"],
    relatedLinks: [
      { label: "Compare POS systems", href: "/compare-pos-systems" },
      { label: "Fee calculator", href: "/card-machine-fee-calculator" },
      { label: "Get tailored quotes", href: "/get-pos-quotes" },
    ],
  },
  {
    slug: "how-long-do-card-payments-take-to-clear",
    title: "How Long Do Card Payments Take to Clear?",
    description: "Payout and settlement times for UK card machines, and which providers pay out fastest.",
    category: "Basics",
    readMinutes: 4,
    lastUpdated: "2026-06-25",
    intro:
      "Took the payment - so where's the money? Settlement times vary by provider, and fast payouts can be worth paying for if cash flow is tight.",
    sections: [
      {
        heading: "Typical payout times",
        paragraphs: ["Standard settlement is usually 1–2 working days. Some providers are faster:"],
        bullets: [
          "myPOS - instant settlement to your myPOS account",
          "Dojo - next-day, with as-fast-as same-day options",
          "Square - next working day (instant transfer for a fee)",
          "SumUp / Zettle - typically 1–2 working days",
        ],
      },
      {
        heading: "Is fast payout worth it?",
        paragraphs: [
          "If you rely on daily takings for stock or wages, yes. If not, standard (free) payouts are fine and save you the instant-transfer fee.",
        ],
      },
    ],
    relatedGuides: ["card-machine-fees-explained", "how-to-choose-a-card-machine", "hidden-card-machine-fees"],
    relatedLinks: [
      { label: "Compare POS systems", href: "/compare-pos-systems" },
      { label: "Fast payouts filter", href: "/compare-pos-systems" },
      { label: "Get tailored quotes", href: "/get-pos-quotes" },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug);
