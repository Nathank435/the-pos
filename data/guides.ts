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
  /** 40-55 word direct answer, rendered as a boxed snippet target under the title. */
  answer?: string;
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


// --- Snippet answer blocks + extra FAQs (AI-drafted, editor-reviewed) ---
// Kept separate so the editorial entries above stay readable; merged into GUIDES below.
const GUIDE_EXTRAS: Record<string, { answer: string; faqs: { q: string; a: string }[] }> =
{
  "card-machine-fees-explained": {
    "answer": "UK card machine fees usually include a transaction fee (a percentage per sale, often around 1.75%), a monthly hardware or software cost, and sometimes an authorisation fee, terminal rental, PCI DSS compliance charge, and chargeback fees. Some providers, like SumUp and Square, charge per transaction only with no monthly fee.",
    "faqs": [
      {
        "q": "Do card machine fees include VAT?",
        "a": "It varies. Some providers quote fees excluding VAT, so a transaction rate or monthly cost can be higher than it first looks. Always check whether prices shown are inclusive or exclusive of VAT, as VAT-registered businesses can usually reclaim it on their return."
      },
      {
        "q": "Can I pass card machine fees on to customers in the UK?",
        "a": "You can add a surcharge to business and corporate cards, but UK rules ban surcharging on consumer debit and credit cards. For most small shops serving the public, that means you cannot legally charge customers extra for paying by card."
      },
      {
        "q": "Are card machine fees tax deductible?",
        "a": "Yes. Card machine transaction fees, rental and monthly costs are legitimate business expenses, so you can usually deduct them when working out taxable profit. Keep your provider statements as records for HMRC, as they show the fees taken from each payout."
      }
    ]
  },
  "what-is-a-pos-system": {
    "answer": "A POS (point of sale) system is the combination of hardware and software a business uses to take payments and run sales. It can include a till, card reader, receipt printer and software that tracks stock, sales and reports. A card reader alone just takes payments; a POS system does more.",
    "faqs": [
      {
        "q": "What does a POS system do besides take payments?",
        "a": "A typical POS system tracks stock levels, records every sale, manages staff and shifts, prints or emails receipts, and produces sales reports. Many also handle refunds, discounts, customer details and integrate with accounting software, giving small businesses a clearer view of trade."
      },
      {
        "q": "Do I need a POS system for a small shop?",
        "a": "Not always. A very small shop or market stall may only need a card reader and a simple till. A POS system makes more sense once you carry stock, employ staff, or want detailed reporting to manage the business day to day."
      },
      {
        "q": "How much does a POS system cost in the UK?",
        "a": "Costs vary widely. Entry-level setups can start from the price of a card reader plus a low monthly software fee, while full till systems with hardware run to several hundred pounds upfront plus ongoing charges. Always check transaction fees on top."
      }
    ]
  },
  "pos-system-vs-card-reader": {
    "answer": "A card reader simply takes card payments, usually via a small portable device paired with a phone or tablet. A POS system does that plus manages stock, sales reporting, staff and receipts. Choose a card reader if you only need to take payments; choose a POS system if you need to run the wider business.",
    "faqs": [
      {
        "q": "Can a card reader work without a POS system?",
        "a": "Yes. Most card readers work on their own through a free app on your phone or tablet, letting you take payments and send receipts without any full POS setup. This suits sole traders, market stalls and mobile businesses that mainly need to get paid."
      },
      {
        "q": "Is a POS system worth it for a small business?",
        "a": "It depends on how you trade. If you carry stock, have staff, or want detailed sales and tax reporting, a POS system saves time and reduces errors. If you just take occasional payments, a simple card reader is usually cheaper and enough."
      },
      {
        "q": "Can I upgrade from a card reader to a POS system later?",
        "a": "Usually yes. Many providers, such as SumUp, Square and Zettle, let you start with a card reader and add POS software or hardware as you grow. Staying with one provider often makes upgrading easier, as your sales data carries across."
      }
    ]
  },
  "how-to-choose-a-card-machine": {
    "answer": "To choose a UK card machine, compare transaction fees, any monthly or rental costs, and whether you are tied to a contract. Check payout speed, the hardware type (countertop, portable or mobile), and features like refunds, tipping and reporting. Match the machine to where and how you take payments.",
    "faqs": [
      {
        "q": "What should I look for in a card machine contract?",
        "a": "Check the contract length, any early exit fees, and whether the rate is fixed or can rise. Watch for separate charges like PCI DSS compliance, terminal rental and minimum monthly fees. No-contract providers avoid most of this but may charge a higher transaction rate."
      },
      {
        "q": "Which card machine is best for a mobile business?",
        "a": "For mobile traders, a portable card reader that connects over mobile data or a phone hotspot works best, as it takes payments anywhere with signal. Look for long battery life, contactless and Apple Pay or Google Pay support, and pay-as-you-go pricing with no fixed contract."
      },
      {
        "q": "Do card machines need wifi or a SIM?",
        "a": "It depends on the type. Many small readers connect through your phone's app over wifi or mobile data. Standalone portable terminals often include a SIM or use wifi directly. Countertop machines usually plug into broadband. Check the connection method suits where you trade."
      }
    ]
  },
  "hidden-card-machine-fees": {
    "answer": "Hidden card machine fees can include authorisation fees per transaction, PCI DSS non-compliance charges, monthly minimums, terminal rental, early exit fees, and chargeback fees when a customer disputes a payment. Some providers also charge more for premium or commercial cards. Always read the full pricing before signing up.",
    "faqs": [
      {
        "q": "What is a chargeback fee?",
        "a": "A chargeback fee is charged when a customer disputes a payment and asks their bank to reverse it. Many providers add an administration fee per chargeback on top of refunding the sale. Keeping clear receipts and proof of delivery helps you challenge unfair disputes."
      },
      {
        "q": "What is a PCI DSS non-compliance fee?",
        "a": "PCI DSS is the security standard for handling card data. Some providers charge a monthly fee if you do not complete their compliance questionnaire or meet the requirements. Pay-as-you-go providers usually build compliance in, so you avoid this charge entirely."
      },
      {
        "q": "Why is my card machine charging more for some cards?",
        "a": "Some providers charge higher rates for commercial, business or premium reward cards, and for cards issued outside the UK or EU, because they cost more to process. Flat-rate providers like Square and Zettle avoid this by charging one rate for all cards."
      }
    ]
  },
  "no-contract-card-machines": {
    "answer": "No-contract card machines let you take card payments with no monthly fee or fixed term, paying only a percentage per transaction. UK options include SumUp, Square and Zettle. They suit low-volume, seasonal or new businesses. A contract can work out cheaper if you process high, steady card sales.",
    "faqs": [
      {
        "q": "Which UK card machines have no monthly fee?",
        "a": "SumUp, Square and Zettle all offer pay-as-you-go readers with no monthly fee or contract, charging a flat percentage per transaction instead. You buy the reader once, then only pay when you take a payment, which suits low or irregular sales."
      },
      {
        "q": "When is a card machine contract worth it?",
        "a": "A contract can be worth it if you process high, steady card volumes, as a lower transaction rate may outweigh the monthly cost. It is rarely worth it for low or seasonal trade, where pay-as-you-go with no fixed fees usually costs less overall."
      },
      {
        "q": "Can I cancel a no-contract card machine anytime?",
        "a": "Yes. With pay-as-you-go providers there is no fixed term, so you can simply stop using the reader with nothing more to pay. You keep the hardware you bought. This flexibility is the main reason new and seasonal businesses choose no-contract options."
      }
    ]
  },
  "what-is-tap-to-pay": {
    "answer": "Tap to Pay lets you take contactless card and mobile payments directly on a phone, with no separate card machine. The customer taps their card, phone or watch on your device. Tap to Pay on iPhone and on Android suit sole traders and mobile businesses wanting to take payments with no extra hardware.",
    "faqs": [
      {
        "q": "Is Tap to Pay on iPhone safe?",
        "a": "Yes. Tap to Pay on iPhone uses the phone's built-in contactless reader and Apple's security, so card details are encrypted and not stored on the device. It meets the same payment security standards as a dedicated card machine, making it safe for everyday business use."
      },
      {
        "q": "Do I need a card reader to use Tap to Pay?",
        "a": "No. That is the main appeal. Tap to Pay turns a supported phone into the card reader itself, so customers tap their card or phone directly on yours. You just need a compatible device and an app from a provider such as SumUp, Square or Zettle."
      },
      {
        "q": "What phones support Tap to Pay in the UK?",
        "a": "Tap to Pay on iPhone works on newer iPhone models running a recent version of iOS, with a supported payment app. Many modern Android phones with NFC also support tap-to-pay through provider apps. Always check your provider lists your exact handset as compatible."
      }
    ]
  },
  "what-is-a-virtual-terminal": {
    "answer": "A virtual terminal lets you take card payments by typing the customer's card details into a secure web page, with no physical card present. It suits phone, mail and remote orders. Because the card is not present, these payments carry a slightly higher fee and a greater fraud and chargeback risk.",
    "faqs": [
      {
        "q": "Is a virtual terminal safe for taking card payments?",
        "a": "Used properly, yes. Reputable virtual terminals are PCI DSS compliant and encrypt card data. The main risk is fraud, as you cannot check the physical card. Verify the cardholder's details, keep records, and never store full card numbers yourself to reduce chargeback risk."
      },
      {
        "q": "What is the difference between a virtual terminal and a payment link?",
        "a": "With a virtual terminal, you key in the customer's card details yourself, usually over the phone. With a payment link, you send the customer a secure link and they enter their own details. Payment links shift data entry to the customer, lowering your handling risk."
      },
      {
        "q": "Do I need a website to use a virtual terminal?",
        "a": "No. A virtual terminal runs in your provider's secure web portal, so you only need an internet connection and a browser. It is designed for businesses taking phone or mail orders, not for adding a checkout to your own website, which needs a payment gateway."
      }
    ]
  },
  "merchant-account-vs-payment-facilitator": {
    "answer": "A merchant account is a dedicated account in your business name for processing card payments, usually giving lower rates and more control but slower setup and approval. A payment facilitator, like SumUp or Square, pools many sellers under one account, offering instant sign-up and simple pricing with less control and quicker onboarding.",
    "faqs": [
      {
        "q": "Is SumUp a merchant account?",
        "a": "No. SumUp is a payment facilitator, not a traditional merchant account. It processes your payments under its own master account, so you can start taking cards almost immediately without a separate application. The trade-off is less control and flat pricing rather than a negotiated rate."
      },
      {
        "q": "Which is cheaper, a merchant account or a payment facilitator?",
        "a": "It depends on volume. Payment facilitators have no setup hurdles and simple flat fees, which suits lower or irregular sales. A dedicated merchant account can offer lower per-transaction rates that save money once you process high, steady volumes, despite extra account and setup costs."
      },
      {
        "q": "How long does it take to set up a merchant account?",
        "a": "A traditional merchant account can take several days to a few weeks, as the provider reviews your business, trading history and risk. Payment facilitators like Square and Zettle are far quicker, often letting you sign up and take payments the same day."
      }
    ]
  },
  "how-long-do-card-payments-take-to-clear": {
    "answer": "In the UK, card payments typically reach your bank account one to three working days after the sale, depending on the provider. Some, such as Dojo, offer fast or same-day payouts, and several providers offer instant settlement for an extra fee. Weekends and bank holidays can add a day or two.",
    "faqs": [
      {
        "q": "Why do card payments take a few days to clear?",
        "a": "The payment passes through several steps: authorisation, settlement between banks, and the provider batching and releasing funds. Each adds time. Most UK providers send payouts on working days only, so a sale made on a Friday or before a bank holiday can take longer to arrive."
      },
      {
        "q": "Which card machine pays out the fastest in the UK?",
        "a": "Dojo is known for fast, often same-day or next-day payouts including weekends. Several other providers offer instant or same-day settlement, though this usually costs extra. If quick access to funds matters, check each provider's standard payout time and any fee for faster payouts."
      },
      {
        "q": "Can I get card payments paid out instantly?",
        "a": "Some providers offer instant or same-day payouts, but this often comes with an extra fee or a small percentage charge. Standard free payouts usually take one to three working days. Weigh the cost of instant access against how urgently you need the cash flow."
      }
    ]
  }
};

for (const g of GUIDES) {
  const ex = GUIDE_EXTRAS[g.slug];
  if (!ex) continue;
  if (!g.answer) g.answer = ex.answer;
  const seen = new Set((g.faqs ?? []).map((f) => f.q));
  g.faqs = [...(g.faqs ?? []), ...ex.faqs.filter((f) => !seen.has(f.q))];
}

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug);
