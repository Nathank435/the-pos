/* Narrative review content for /reviews/[slug].
 * Structured facts (fees, hardware, ratings) come from data/providers.ts;
 * this file holds the editorial prose. Every provider has an entry so no
 * review page is thin. */

export type ReviewContent = {
  slug: string;
  quickVerdict: string;
  pricingDetail: string[];
  hardwareNote: string;
  supportNote: string;
  useCases: { who: string; verdict: string }[];
  /** Alternative provider slugs to cross-link. */
  alternatives: string[];
  faqs: { q: string; a: string }[];
};

export const REVIEWS: ReviewContent[] = [
  {
    slug: "sumup",
    quickVerdict:
      "SumUp is the default pick for sole traders, market stalls and mobile sellers who just want to take a card without a contract or monthly fee. Simple, cheap to start, and hard to get wrong. You'll outgrow it if you need full restaurant or deep retail features.",
    pricingDetail: [
      "Standard transaction rate is 1.69%, with a Payments Plus plan offering rates from 0.99% for domestic cards.",
      "No monthly fee and no contract on pay-as-you-go - you only pay when you sell.",
      "Readers start at £19 + VAT (Air); the standalone Solo with SIM is around £79 + VAT.",
    ],
    hardwareNote:
      "The SumUp Air is the cheapest way in but needs your phone. The Solo is the better buy for most - it works on its own with mobile data and a little touchscreen, ideal for markets and on-site work.",
    supportNote:
      "Support is decent for a low-cost provider - help centre, email and chat. Don't expect a dedicated account manager at this price point.",
    useCases: [
      { who: "Market stall", verdict: "Excellent - Solo reader, no monthly fee, works on mobile data." },
      { who: "Plumber / electrician", verdict: "Excellent - cheap reader, invoices, pay-by-link and Tap to Pay." },
      { who: "Busy restaurant", verdict: "Limited - no proper table/coursing features; look at Square or a hospitality POS." },
    ],
    alternatives: ["square", "zettle", "mypos"],
    faqs: [
      {
        q: "Is SumUp good for small businesses?",
        a: "Yes - it's one of the most popular options for UK sole traders and micro-businesses thanks to cheap hardware, no monthly fee and no contract.",
      },
      {
        q: "What are SumUp's fees?",
        a: "1.69% per transaction on the standard plan, or from 0.99% on Payments Plus for domestic cards. No monthly fee on pay-as-you-go. Always check current terms.",
      },
      {
        q: "Does SumUp do Tap to Pay?",
        a: "Yes - SumUp supports Tap to Pay on iPhone and Android, so you can accept contactless on your phone with no separate reader.",
      },
    ],
  },
  {
    slug: "square",
    quickVerdict:
      "Square is the best free POS software you can get without signing a contract. The app is genuinely good, the ecosystem (online store, invoices, inventory, loyalty) is broad, and there's no monthly fee to start. It's our go-to recommendation for cafés, small retail and service businesses.",
    pricingDetail: [
      "Flat 1.75% on in-person card payments, with no setup fee and no monthly fee on the standard plan.",
      "Square for Restaurants and Square for Retail add paid tiers with deeper features.",
      "Readers from £19 + VAT; the Square Terminal (£149 + VAT) is an all-in-one with a printer; the Register is a full till.",
    ],
    hardwareNote:
      "The range scales nicely: a £19 reader for a phone/tablet, a Terminal handheld for table-side, or a Register for a fixed counter. You can start small and add hardware as you grow.",
    supportNote:
      "Square's help resources are strong and the software is self-explanatory. Phone support is available during business hours.",
    useCases: [
      { who: "Independent café", verdict: "Excellent - free POS, tipping, quick menus and good reporting." },
      { who: "Small retail shop", verdict: "Excellent - built-in inventory and an online store that syncs." },
      { who: "High-volume merchant after bespoke rates", verdict: "Limited - the flat rate isn't negotiable; consider a quote-based acquirer." },
    ],
    alternatives: ["sumup", "zettle", "shopify-pos"],
    faqs: [
      {
        q: "Is Square really free?",
        a: "The standard POS app and plan have no monthly or setup fee - you pay 1.75% per in-person transaction. Advanced Restaurant/Retail tiers and some add-ons are paid.",
      },
      {
        q: "Is Square good for restaurants?",
        a: "Square for Restaurants handles tables, coursing and tips well for small and mid-size venues. Larger operations sometimes prefer Lightspeed or a dedicated hospitality POS.",
      },
    ],
  },
  {
    slug: "zettle",
    quickVerdict:
      "PayPal Zettle is a tidy, no-monthly-fee reader that makes most sense if you already live in the PayPal ecosystem. The app and inventory are solid for small retail and mobile selling, even if the wider ecosystem is less ambitious than Square's.",
    pricingDetail: [
      "1.75% per card and contactless transaction, with no monthly fee for the basic POS app.",
      "The Reader 2 is around £29 + VAT (first reader is often discounted for new users).",
      "Funds can flow into your PayPal balance or your bank account.",
    ],
    hardwareNote:
      "The Reader 2 is a neat contactless + chip reader that pairs with the free app. The Zettle Terminal is a standalone handheld if you don't want to use your own phone or tablet.",
    supportNote: "Backed by PayPal, with standard help-centre and contact options. Fine for the price point.",
    useCases: [
      { who: "PayPal-using seller", verdict: "Excellent - takings flow into your PayPal balance." },
      { who: "Small retailer", verdict: "Good - free inventory and reporting cover the basics." },
      { who: "Full hospitality venue", verdict: "Limited - not built for table service." },
    ],
    alternatives: ["sumup", "square", "mypos"],
    faqs: [
      {
        q: "Do I need a PayPal account for Zettle?",
        a: "You sign up through PayPal, and it integrates closely with your PayPal account - which is the main reason to choose it over rivals.",
      },
      {
        q: "What are Zettle's fees?",
        a: "1.75% per card transaction with no monthly fee on the basic plan. Check current terms for any promotional rates.",
      },
    ],
  },
  {
    slug: "dojo",
    quickVerdict:
      "Dojo is built for businesses that have outgrown a flat-rate reader. Fast (even same-day) payouts, reliable card machines and hands-on UK support make it a favourite in hospitality. The trade-off is quote-based pricing and a contract you need to read properly.",
    pricingDetail: [
      "Pricing is tailored to your business and quote-based - typically a monthly element plus a card rate.",
      "Hardware comes via payment-plan options rather than a one-off £19 purchase.",
      "Contract length and terms vary, so confirm them in writing before signing.",
    ],
    hardwareNote:
      "Dojo's card machines are well-regarded for connectivity and reliability under pressure - they fall back across networks so they keep working in a busy venue.",
    supportNote:
      "This is where Dojo earns its keep: UK-based support and account management, which busier businesses value over saving a fraction of a percent.",
    useCases: [
      { who: "Busy restaurant or bar", verdict: "Excellent - reliability, fast payouts and support." },
      { who: "Higher-volume retailer", verdict: "Good - tailored rates can beat a flat rate at scale." },
      { who: "Occasional / low-volume seller", verdict: "Poor value - a no-fee pay-as-you-go reader is cheaper." },
    ],
    alternatives: ["square", "worldpay", "tyl-by-natwest"],
    faqs: [
      {
        q: "Does Dojo have a contract?",
        a: "Yes - pricing is quote-based and typically involves a contract, unlike pay-as-you-go providers. Check the term length and any exit fees before committing.",
      },
      {
        q: "How fast does Dojo pay out?",
        a: "Dojo offers next-day settlement, with as-fast-as same-day payouts - one of its main selling points for hospitality cash flow.",
      },
    ],
  },
  {
    slug: "mypos",
    quickVerdict:
      "myPOS stands out for instant settlement: your takings land in a built-in business account straight away. That, plus strong cross-border card acceptance, makes it a niche favourite - just be ready for a more complex fee structure than a single flat rate.",
    pricingDetail: [
      "Card-present rates start from around 1.10% + 7p on lower-turnover tiers, varying by card type.",
      "No monthly fee on entry plans and no fixed contract on standard accounts.",
      "Funds settle instantly to your myPOS account; transfers out to your bank may carry a fee.",
    ],
    hardwareNote:
      "The myPOS Go 2 is a pocket device with a free SIM; the myPOS Pro is an Android smart terminal with a receipt printer. Good for mobile and international traders.",
    supportNote: "Standard support channels; the draw is the instant-funds model rather than white-glove service.",
    useCases: [
      { who: "Trader who needs cash fast", verdict: "Excellent - instant settlement to the myPOS account." },
      { who: "Cross-border / European sales", verdict: "Good - solid international card acceptance." },
      { who: "Anyone wanting one simple flat rate", verdict: "Mixed - fees vary by card type, so read the detail." },
    ],
    alternatives: ["sumup", "zettle", "square"],
    faqs: [
      {
        q: "How fast does myPOS pay out?",
        a: "Instantly - funds settle to your built-in myPOS account in real time, which is its headline feature. Moving money out to your own bank may incur a fee.",
      },
      {
        q: "What are myPOS fees?",
        a: "Card-present rates start from around 1.10% + 7p on lower-turnover tiers, but vary by card type, so check the full schedule for your plan.",
      },
    ],
  },
  {
    slug: "worldpay",
    quickVerdict:
      "Worldpay is a heavyweight acquirer suited to established, higher-volume businesses that can negotiate a competitive bespoke rate. Powerful and capable, but quote-based pricing and contracts mean it's not the place to start if you're small or occasional.",
    pricingDetail: [
      "Pricing is quote-based, with interchange-plus available to suit higher volumes.",
      "Terminals are typically on hire rather than bought outright.",
      "Contracts are common - scrutinise length and exit fees.",
    ],
    hardwareNote: "A broad range of countertop and portable terminals, usually supplied on hire as part of a package.",
    supportNote: "Established acquirer support; experience can vary, so agree service terms upfront.",
    useCases: [
      { who: "Established high-volume business", verdict: "Good - bespoke rates can be competitive." },
      { who: "Omnichannel retailer", verdict: "Good - strong in-person + online capability." },
      { who: "Micro-business", verdict: "Overkill - a pay-as-you-go reader is simpler and cheaper." },
    ],
    alternatives: ["dojo", "barclaycard", "tyl-by-natwest"],
    faqs: [
      {
        q: "Is Worldpay good for small businesses?",
        a: "It's aimed more at established and higher-volume businesses. Very small or occasional sellers usually do better on a no-contract pay-as-you-go provider.",
      },
    ],
  },
  {
    slug: "barclaycard",
    quickVerdict:
      "Barclaycard Payments offers bank-backed reassurance, a full terminal range and faster settlement if you bank with Barclays. Pricing is quote-based and contract terms apply, so it suits established UK businesses more than micro-sellers.",
    pricingDetail: [
      "Quote-based rates tailored to your business.",
      "Terminal options from entry to established-business needs.",
      "Faster settlement is possible if you hold a Barclays business account.",
    ],
    hardwareNote: "The Smartpay range spans mobile, portable and countertop terminals to suit most setups.",
    supportNote: "Major-bank backing and UK support are the draw here.",
    useCases: [
      { who: "Existing Barclays customer", verdict: "Good - joined-up banking and faster settlement." },
      { who: "Established retailer or venue", verdict: "Good - capable terminals and support." },
      { who: "Occasional seller", verdict: "Limited - contract-based and heavier than app-first rivals." },
    ],
    alternatives: ["tyl-by-natwest", "worldpay", "dojo"],
    faqs: [
      {
        q: "Do I need a Barclays account to use Barclaycard Payments?",
        a: "No, but settlement can be faster if you do bank with Barclays. Pricing is quote-based regardless.",
      },
    ],
  },
  {
    slug: "tyl-by-natwest",
    quickVerdict:
      "Tyl by NatWest is a solid bank-backed all-rounder for small and medium UK businesses, with clearer pricing than some legacy acquirers and a flexible no-fixed-term option. A sensible middle ground between app-first readers and traditional acquirers.",
    pricingDetail: [
      "Simple or blended rate plans, quoted to your business; monthly fees from around £15 depending on plan.",
      "Card readers from roughly £19/month or available to purchase.",
      "Flexible (no fixed term) and fixed-term options are available.",
    ],
    hardwareNote: "Portable and countertop card readers covering most small-business setups.",
    supportNote: "UK bank-backed support, with a community/giving angle that some businesses like.",
    useCases: [
      { who: "Small/medium retailer or venue", verdict: "Good - clear pricing and online payments included." },
      { who: "Business wanting flexibility", verdict: "Good - a no-fixed-term option is available." },
      { who: "Micro-seller wanting zero monthly fee", verdict: "Limited - most plans carry a monthly fee." },
    ],
    alternatives: ["barclaycard", "dojo", "square"],
    faqs: [
      {
        q: "Is Tyl by NatWest good value?",
        a: "For small and medium businesses wanting bank-backed reliability with reasonably clear pricing, yes. Very low-volume sellers may still prefer a no-monthly-fee reader.",
      },
    ],
  },
  {
    slug: "lightspeed",
    quickVerdict:
      "Lightspeed is a serious retail and hospitality POS with deep inventory, reporting and multi-location features. It's powerful and priced accordingly - the right call for growing or multi-site businesses, and overkill for anyone who just needs to take a card.",
    pricingDetail: [
      "Subscription from around £59/month depending on plan and modules.",
      "Payments via Lightspeed Payments or an integrated provider, quoted to your business.",
      "Hardware supplied in bundles; subscriptions are often annual.",
    ],
    hardwareNote: "iPad-based POS with printers, scanners and cash drawers, built to spec for retail or hospitality.",
    supportNote: "Onboarding and support reflect the more premium positioning.",
    useCases: [
      { who: "Multi-location retailer", verdict: "Excellent - strong inventory and multi-site control." },
      { who: "Hospitality group", verdict: "Good - capable hospitality build." },
      { who: "Sole trader", verdict: "Overkill - far more than you need." },
    ],
    alternatives: ["square", "epos-now", "shopify-pos"],
    faqs: [
      {
        q: "Is Lightspeed worth the price?",
        a: "For businesses with real inventory complexity or multiple locations, the depth justifies the cost. Simpler businesses will find it more than they need.",
      },
    ],
  },
  {
    slug: "epos-now",
    quickVerdict:
      "Epos Now is a full till-system specialist with strong hardware bundles for retail and hospitality. Capable and feature-rich, but reviews of sales and aftercare are mixed - so read contracts, payment terms and add-on costs carefully before signing.",
    pricingDetail: [
      "Software from around £25/month, with hardware bundles and finance options.",
      "Payments via Epos Now Payments or an integration, quoted to your business.",
      "Contract and payment terms vary - review them in detail.",
    ],
    hardwareNote: "Complete touchscreen till bundles with printer and cash drawer; a big app/integration marketplace.",
    supportNote: "Capable platform, but agree support and contract terms clearly upfront given mixed aftercare reports.",
    useCases: [
      { who: "Retail shop wanting a full till", verdict: "Good - complete hardware and back-office." },
      { who: "Hospitality venue", verdict: "Good - handles menus and kitchen printing." },
      { who: "Mobile-only seller", verdict: "Not suited - it's a fixed till system." },
    ],
    alternatives: ["square", "lightspeed", "shopify-pos"],
    faqs: [
      {
        q: "Is Epos Now a good POS system?",
        a: "It's a capable full till system for retail and hospitality. The main caution is around contracts and aftercare, so read the terms carefully before committing.",
      },
    ],
  },
  {
    slug: "shopify-pos",
    quickVerdict:
      "Shopify POS is the obvious choice if you already sell on Shopify and want in-person to match your online store, with unified inventory across both. Less compelling if you're not already a Shopify merchant.",
    pricingDetail: [
      "Builds on your existing Shopify subscription; POS Pro is an extra per location.",
      "In-person rates run through Shopify Payments and depend on your plan.",
      "Readers from around £49.",
    ],
    hardwareNote: "Tap & Chip / WisePad readers pair with the POS app; the POS Go is an all-in-one handheld with a scanner.",
    supportNote: "Shopify's 24/7 support and documentation are a plus.",
    useCases: [
      { who: "Shopify online retailer", verdict: "Excellent - unified stock across online and in-person." },
      { who: "Omnichannel brand", verdict: "Good - one platform for both channels." },
      { who: "Business not on Shopify", verdict: "Limited - only makes sense if you're already in Shopify." },
    ],
    alternatives: ["square", "lightspeed", "zettle"],
    faqs: [
      {
        q: "Do I need a Shopify store to use Shopify POS?",
        a: "Effectively yes - it's designed to extend a Shopify online store to in-person sales. If you're not on Shopify, another POS will likely suit you better.",
      },
    ],
  },
  {
    slug: "touchbistro",
    quickVerdict:
      "TouchBistro is a restaurant-first POS built around table service, menus and floor plans. If you run a full-service venue it's purpose-built for the job; it's not intended for retail or simple mobile card payments.",
    pricingDetail: [
      "Subscription-based, quoted to your venue.",
      "Payments handled via an integrated partner.",
      "iPad-based hardware; subscription terms vary.",
    ],
    hardwareNote: "Runs on iPad with printers and kitchen display options for full table service.",
    supportNote: "Hospitality-focused onboarding and support.",
    useCases: [
      { who: "Full-service restaurant", verdict: "Excellent - floor plans, coursing and tips." },
      { who: "Café with table service", verdict: "Good - strong menu and table handling." },
      { who: "Retail shop", verdict: "Not suited - it's hospitality-only." },
    ],
    alternatives: ["square", "lightspeed", "dojo"],
    faqs: [
      {
        q: "Is TouchBistro only for restaurants?",
        a: "It's designed for restaurants and table-service hospitality. Retailers and mobile sellers should look at Square, Shopify POS or a simple reader instead.",
      },
    ],
  },
];

export function getReview(slug: string): ReviewContent | undefined {
  return REVIEWS.find((r) => r.slug === slug);
}
