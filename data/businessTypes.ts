/* Business-type hubs - editable content for /pos-systems/[slug] pages. */

export type BusinessType = {
  slug: string;
  name: string; // plural, e.g. "Cafés"
  h1: string;
  intro: string;
  /** Art-direction hint for the hub banner photo (Unsplash/Pexels search string).
   *  Drop a real photo at /public/images/hubs/<slug>.jpg to replace the placeholder. */
  imageHint?: string;
  /** Optional banner photo URL. Overrides the local /images/hubs/<slug>.jpg path. */
  image?: string;
  /** Ordered provider slugs recommended for this business type. */
  recommendedProviders: string[];
  whatMatters: { title: string; body: string }[];
  feesToWatch: string[];
  recommendedSetup: string;
  faqs: { q: string; a: string }[];
};

export const BUSINESS_TYPES: BusinessType[] = [
  {
    slug: "cafes",
    name: "Cafés",
    h1: "Best POS Systems for Cafés in the UK",
    imageHint: "barista espresso machine coffee shop counter, iPad POS on wooden counter",
    image: "/images/hubs/cafes.jpg",
    intro:
      "A café POS needs to be quick, easy for staff, decent with tips, and not fall over during the Saturday morning oat-flat-white stampede. You want fast taps, simple menus and reliable card payments - not a 12-week onboarding project.",
    recommendedProviders: ["square", "sumup", "zettle", "dojo"],
    whatMatters: [
      { title: "Speed at the counter", body: "Quick item buttons and contactless that taps first time during the rush." },
      { title: "Tips and split bills", body: "Easy tipping prompts and the ability to handle a quick table or two." },
      { title: "No painful contract", body: "Most cafés do well on pay-as-you-go so you're not locked in while you find your feet." },
      { title: "Decent reporting", body: "See your best sellers and busiest hours without exporting to a spreadsheet." },
    ],
    feesToWatch: [
      "Flat transaction rate vs. your average ticket size - small coffees mean lots of tiny transactions",
      "Whether instant payouts cost extra",
      "Hardware cost for a second reader at busy times",
    ],
    recommendedSetup:
      "Square's free POS app with a Square Reader or Terminal is the sweet spot for most independent cafés. SumUp is great if you want the cheapest, simplest start. Step up to Dojo if you're high-volume and want same-day payouts.",
    faqs: [
      {
        q: "What's the cheapest way for a café to take card payments?",
        a: "A SumUp or Square reader on pay-as-you-go has no monthly fee - you only pay a percentage per transaction. That's usually cheapest until you're taking serious volume, where a quote-based provider may beat the flat rate.",
      },
      {
        q: "Do I need a full till system for a café?",
        a: "Not necessarily. A tablet running Square or Zettle with a card reader covers most independents. You only need a full till bundle if you want a fixed counter station with a cash drawer and receipt printer.",
      },
    ],
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    h1: "Best POS Systems for Restaurants in the UK",
    imageHint: "independent restaurant table service, waiter with handheld card machine, warm ambient light",
    image: "/images/hubs/restaurants.jpg",
    intro:
      "A restaurant POS has to handle tables, tabs, coursing, tips and a kitchen that's already on fire at 8pm. You want something staff can learn fast and that won't drop payments mid-service.",
    recommendedProviders: ["dojo", "square", "touchbistro", "lightspeed"],
    whatMatters: [
      { title: "Table & tab management", body: "Open tabs, move tables, split bills and add service charge without a maths degree." },
      { title: "Reliability under pressure", body: "Connectivity and uptime matter more than saving 0.1% on the rate." },
      { title: "Fast payouts", body: "Cash flow is king in hospitality - next-day or same-day settlement helps." },
      { title: "Tips handling", body: "Proper tipping and tronc-friendly reporting for staff." },
    ],
    feesToWatch: [
      "Monthly software fees on hospitality-grade systems",
      "Contract length and exit fees on quote-based providers",
      "Hardware finance terms on full till bundles",
    ],
    recommendedSetup:
      "For table service, a hospitality-grade POS (TouchBistro or Square for Restaurants) paired with a fast-payout card machine like Dojo is a strong combo. Lightspeed suits larger or multi-site operations.",
    faqs: [
      {
        q: "What POS do most independent restaurants use?",
        a: "Square for Restaurants and TouchBistro are popular with independents for table management, while Dojo is widely used for the card machine and fast payouts. Bigger groups often run Lightspeed.",
      },
      {
        q: "Is Dojo good for restaurants?",
        a: "Yes - Dojo is popular in hospitality for reliable card machines, fast (even same-day) payouts and hands-on support. Just check the contract and monthly terms, as pricing is quote-based.",
      },
    ],
  },
  {
    slug: "retail",
    name: "Retail shops",
    h1: "Best POS Systems for Retail Shops in the UK",
    imageHint: "independent boutique counter retail, card reader next to folded apparel",
    image: "/images/hubs/retail.jpg",
    intro:
      "Retail lives and dies on stock. A good retail POS tracks inventory, handles barcodes, and ideally keeps your shop and online store in sync - without charging you a fortune per sale.",
    recommendedProviders: ["square", "shopify-pos", "lightspeed", "zettle"],
    whatMatters: [
      { title: "Inventory management", body: "Track stock, variants and low-stock alerts across your range." },
      { title: "Online + in-person sync", body: "One source of truth if you also sell online." },
      { title: "Barcode & receipt hardware", body: "Scanners, label printers and a proper till station." },
      { title: "Sensible per-sale cost", body: "Higher-value baskets mean the percentage rate matters more." },
    ],
    feesToWatch: [
      "Per-location software fees if you have more than one shop",
      "Transaction rate vs. your average basket value",
      "Hardware bundle and finance costs",
    ],
    recommendedSetup:
      "Square is the easy all-rounder for independent retail. If you sell online via Shopify, Shopify POS keeps everything in sync. Lightspeed suits bigger inventories and multiple locations.",
    faqs: [
      {
        q: "What's the best POS for a small retail shop?",
        a: "Square is the most popular all-rounder - free POS app, good inventory and no monthly fee to start. If you already use Shopify online, Shopify POS is the natural fit; for large inventories, Lightspeed.",
      },
      {
        q: "Do I need inventory management built in?",
        a: "If you carry more than a handful of lines, yes. Square, Lightspeed, Shopify POS and Epos Now all include inventory; basic readers like SumUp don't go as deep.",
      },
    ],
  },
  {
    slug: "market-stalls",
    name: "Market stalls",
    h1: "Best Card Machines for Market Stalls in the UK",
    imageHint: "farmers market stall vendor, handing over card reader over crate of fresh produce",
    image: "/images/hubs/market-stalls.jpg",
    intro:
      "On a market stall you want something that fits in your apron, works on mobile data, charges all day and costs almost nothing when it's quiet. No contracts, no monthly fees, no nonsense.",
    recommendedProviders: ["sumup", "zettle", "square", "mypos"],
    whatMatters: [
      { title: "Portability & battery", body: "A pocket reader or standalone device that lasts a full market day." },
      { title: "No monthly fee", body: "You shouldn't pay a subscription for the weeks you don't trade." },
      { title: "Works on mobile data", body: "A device with its own SIM beats relying on dodgy market WiFi." },
      { title: "Cheap to start", body: "A £19–£79 reader, not a finance agreement." },
    ],
    feesToWatch: [
      "Per-transaction rate on lots of small sales",
      "Whether you need a standalone (SIM) device vs. phone-paired",
      "Payout speed if you rely on the cash quickly",
    ],
    recommendedSetup:
      "A SumUp Solo or Zettle Terminal - standalone, SIM-connected, no monthly fee. Pair with Tap to Pay on your phone as a backup. myPOS is worth a look if you want instant access to funds.",
    faqs: [
      {
        q: "What's the best card reader for a market stall?",
        a: "A standalone reader with its own mobile data - like the SumUp Solo or Zettle Terminal - is ideal so you're not dependent on market WiFi. Both are pay-as-you-go with no monthly fee.",
      },
      {
        q: "Is there a card machine with no monthly fee?",
        a: "Yes - SumUp, Square and Zettle all offer pay-as-you-go readers with no monthly fee. You buy the reader once and pay a percentage per transaction.",
      },
    ],
  },
  {
    slug: "pubs-bars",
    name: "Pubs & bars",
    h1: "Best POS Systems for Pubs & Bars in the UK",
    intro:
      "Behind a busy bar you need fast rounds, open tabs and card machines that don't sulk on a Friday night. Reliability and speed beat shaving pennies off the rate.",
    recommendedProviders: ["dojo", "square", "lightspeed", "epos-now"],
    whatMatters: [
      { title: "Speed & open tabs", body: "Quick rounds, pre-auth tabs and fast contactless." },
      { title: "Reliability", body: "Hardware and connectivity that survive a full session." },
      { title: "Fast payouts", body: "Cash flow matters; next/same-day settlement helps." },
      { title: "Stock control on kegs & spirits", body: "Pour cost and stock tracking for the cellar." },
    ],
    feesToWatch: [
      "Monthly fees and contract terms on quote-based providers",
      "Number of card machines you need at peak",
      "Hardware finance costs",
    ],
    recommendedSetup:
      "Dojo card machines for speed and fast payouts, paired with Square or a hospitality POS for tabs and stock. Bigger venues lean to Lightspeed or Epos Now for deeper stock control.",
    faqs: [
      {
        q: "What card machine is best for a busy bar?",
        a: "Dojo is a popular choice for bars thanks to fast, reliable card machines and quick payouts. Pair it with a POS that handles tabs well if you run table or tab service.",
      },
    ],
  },
  {
    slug: "salons",
    name: "Salons",
    h1: "Best POS Systems for Salons & Barbers in the UK",
    intro:
      "Salons want easy card payments at the chair, tips handled cleanly, and ideally booking that doesn't live in a paper diary. Simple and tidy beats sprawling and complicated.",
    recommendedProviders: ["square", "sumup", "zettle", "mypos"],
    whatMatters: [
      { title: "Payments at the chair", body: "Portable readers or Tap to Pay so you don't herd clients to a desk." },
      { title: "Tips", body: "Clean tipping prompts that staff and clients understand." },
      { title: "Booking integration", body: "Bonus points for built-in or integrated appointments." },
      { title: "Low commitment", body: "Pay-as-you-go suits independents and chair-renters." },
    ],
    feesToWatch: [
      "Flat rate vs. your average treatment price",
      "Whether booking software costs extra",
      "Instant payout fees",
    ],
    recommendedSetup:
      "Square is strong here - free POS, tipping and an Appointments product. SumUp or Zettle suit independents and chair-renters who just want simple card payments.",
    faqs: [
      {
        q: "What's the best card machine for a salon or barber?",
        a: "Square is a great all-rounder with tipping and built-in appointments. If you only need simple payments at the chair, SumUp or Zettle on pay-as-you-go are cheaper to start.",
      },
    ],
  },
  {
    slug: "tradesmen",
    name: "Tradespeople",
    h1: "Best Card Readers for Tradesmen & Sole Traders in the UK",
    image: "/images/hubs/tradesmen.jpg",
    intro:
      "If you're a plumber, electrician or one-person band, you want to take a card on the doorstep, send the odd invoice, and not pay a monthly fee for the privilege. Keep it simple.",
    recommendedProviders: ["sumup", "zettle", "square", "mypos"],
    whatMatters: [
      { title: "Take payment on site", body: "A pocket reader or Tap to Pay on your phone for doorstep payments." },
      { title: "Invoicing", body: "Send a quick invoice with a pay-by-link for bigger jobs." },
      { title: "No monthly fee", body: "Pay-as-you-go suits irregular, project-based income." },
      { title: "Virtual terminal", body: "Take a card over the phone when you can't be there in person." },
    ],
    feesToWatch: [
      "Per-transaction rate on larger one-off jobs",
      "Whether invoicing/pay-by-link costs extra",
      "Payout speed for cash flow between jobs",
    ],
    recommendedSetup:
      "SumUp is the classic tradesperson pick - cheap reader, invoices, pay-by-link and Tap to Pay, all with no monthly fee. Zettle and Square do the same job if you prefer their apps.",
    faqs: [
      {
        q: "What's the best card machine for a plumber or electrician?",
        a: "SumUp is hugely popular with tradespeople: a cheap reader, no monthly fee, plus invoicing and Tap to Pay on your phone. Zettle and Square are close alternatives.",
      },
      {
        q: "Can I take card payments without a card machine?",
        a: "Yes - Tap to Pay on iPhone/Android (offered by SumUp, Square and Zettle) lets you accept contactless on your phone, and a virtual terminal lets you key in card details for phone payments.",
      },
    ],
  },
  {
    slug: "takeaways",
    name: "Takeaways",
    h1: "Best POS Systems for Takeaways in the UK",
    intro:
      "Takeaways juggle counter sales, phone orders and online delivery platforms. You want fast order entry, a kitchen ticket that's actually readable, and card payments that keep up at peak.",
    recommendedProviders: ["square", "epos-now", "dojo", "sumup"],
    whatMatters: [
      { title: "Fast order entry", body: "Quick menu buttons and modifiers for a busy counter." },
      { title: "Kitchen tickets", body: "Clear printed or on-screen tickets so orders don't get lost." },
      { title: "Phone & online orders", body: "Handle call-ins and, ideally, link to delivery platforms." },
      { title: "Reliable card payments", body: "Contactless that keeps up during the Friday-night rush." },
    ],
    feesToWatch: [
      "Software fees if you add online ordering",
      "Contract terms on full till systems",
      "Per-transaction rate on lots of small orders",
    ],
    recommendedSetup:
      "Square handles counter + online ordering tidily for most independents. Epos Now suits a fuller till setup with kitchen printing. Add a Dojo card machine if you want fast payouts.",
    faqs: [
      {
        q: "What's the best POS for a takeaway?",
        a: "Square is a strong, affordable all-rounder with online ordering. For a fuller till with kitchen printing, Epos Now is popular. Pair with a fast card machine like Dojo if cash flow matters.",
      },
    ],
  },
  {
    slug: "mobile-businesses",
    name: "Mobile businesses",
    h1: "Best Card Readers for Mobile Businesses in the UK",
    intro:
      "Food vans, pop-ups, mobile groomers, event traders - if you move around, you need a reader that works on mobile data, lasts the day, and doesn't tie you to a contract.",
    recommendedProviders: ["sumup", "square", "zettle", "mypos"],
    whatMatters: [
      { title: "Mobile connectivity", body: "A standalone device with its own SIM beats hunting for WiFi." },
      { title: "Battery life", body: "All-day power for events and markets." },
      { title: "No monthly fee", body: "Pay-as-you-go for irregular trading days." },
      { title: "Tap to Pay backup", body: "Accept contactless on your phone if the reader dies." },
    ],
    feesToWatch: [
      "Standalone (SIM) device vs. phone-paired",
      "Per-transaction rate on small sales",
      "Instant access to funds if you need cash quickly",
    ],
    recommendedSetup:
      "A SumUp Solo or Square Terminal - standalone, SIM-connected, no monthly fee. myPOS is a strong option if instant access to your takings matters.",
    faqs: [
      {
        q: "What card reader works without WiFi?",
        a: "Standalone readers with a built-in SIM - like the SumUp Solo, Zettle Terminal or myPOS Go - work on mobile data, so you don't need WiFi. Ideal for vans, markets and events.",
      },
    ],
  },
];

export function getBusinessType(slug: string): BusinessType | undefined {
  return BUSINESS_TYPES.find((b) => b.slug === slug);
}

export const BUSINESS_TYPE_SLUGS = BUSINESS_TYPES.map((b) => b.slug);
