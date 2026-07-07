/* Narrative review content for /reviews/[slug].
 * Structured facts (fees, hardware, ratings) come from data/providers.ts;
 * this file holds the editorial prose. Every provider has an entry so no
 * review page is thin. */

export type ReviewContent = {
  slug: string;
  quickVerdict: string;
  pricingDetail: string[];
  /** Illustrative monthly-cost worked example (flat-rate providers). */
  workedExample?: string;
  /** Optional product photo (WebP), rendered under the quick verdict. */
  image?: { src: string; alt: string; caption?: string };
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
    image: {
      src: "/images/providers/sumup-pos-cafe.webp",
      alt: "SumUp iPad POS on a wooden stand with an Air card reader on a cafe counter",
      caption: "The typical SumUp cafe setup: iPad POS on a stand, Air reader beside the till. Image: SumUp.",
    },
    workedExample:
      "on £5,000 a month at SumUp's 1.69% standard rate, processing costs roughly £85/mo (about £1,020/year) with no monthly fee. On Payments Plus (from 0.99%) the same volume can drop nearer £50/mo - worth it once you're taking steady volume.",
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
    workedExample:
      "at £8,000 a month on Square's flat 1.75%, you'd pay around £140/mo in processing (about £1,680/year) with no monthly fee on the standard plan. Add a paid POS tier only if you need the extra features.",
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
    workedExample:
      "on £4,000 a month at Zettle's 1.75%, processing works out around £70/mo (about £840/year) with no monthly fee. Funds land in your PayPal or linked bank account within a couple of working days.",
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
    workedExample:
      "on £6,000 a month with a typical £15 basket (around 400 sales), a card-present rate near 1.10% + 7p works out roughly £95/mo - about £66 in percentage fees plus £28 in per-sale pence - with funds settled instantly. Always confirm your tier's exact rate.",
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
    slug: "toast",
    quickVerdict:
      "Toast is a restaurant-only platform: purpose-built terminals and handhelds, kitchen displays, online ordering and integrated payments in one system. For a full-service venue it's one of the most complete setups you can buy - just go in with eyes open on the contract and the payments lock-in.",
    pricingDetail: [
      "Plans quoted to your venue - no published UK price list.",
      "Card payments go through integrated Toast Payments at quoted rates - you can't bring your own acquirer.",
      "Purpose-built Android hardware (Flex terminals, Go 2 handhelds), usually bundled into the quote.",
    ],
    hardwareNote: "Purpose-built kit rather than iPads: spill-resistant Flex terminals and Toast Go 2 handhelds for order-and-pay at the table, all kitchen-synced.",
    supportNote: "Hospitality-focused onboarding and 24/7 support; UK operation is newer than the US mothership.",
    useCases: [
      { who: "Full-service restaurant", verdict: "Excellent - handheld ordering, coursing, KDS and tips in one system." },
      { who: "Multi-site group", verdict: "Strong - central menus and reporting are where Toast pulls ahead." },
      { who: "Retail shop or market stall", verdict: "Not suited - it's hospitality-only." },
    ],
    alternatives: ["square", "lightspeed", "dojo"],
    faqs: [
      {
        q: "Is Toast only for restaurants?",
        a: "Yes - it's designed for restaurants and table-service hospitality, and that focus is its strength. Retailers and mobile sellers should look at Square, Shopify POS or a simple reader instead.",
      },
    ],
  },
];


// --- Extra provider-longtail FAQs (AI-drafted, editor-reviewed) ---
// Appended to each review's faqs (dedup by question); FAQ schema picks them up.
const REVIEW_FAQ_EXTRAS: Record<string, { q: string; a: string }[]> =
{
  "sumup": [
    {
      "q": "How much does a SumUp card reader cost?",
      "a": "SumUp readers start from around £19 plus VAT for the entry model, with no monthly fee and no contract. You pay a transaction fee on each sale rather than a fixed cost, so it suits low or seasonal volumes. Check current terms, as bundle prices vary."
    },
    {
      "q": "How long do SumUp payouts take?",
      "a": "SumUp typically pays funds into your linked bank account within one to two working days of the transaction. There is no extra charge for standard payouts. Timing can vary slightly around weekends and bank holidays, so check current terms for the latest schedule."
    },
    {
      "q": "Can you cancel SumUp at any time?",
      "a": "Yes. SumUp works on a pay-as-you-go basis with no contract and no monthly fee, so there is nothing to cancel in terms of a subscription. You simply stop using the reader. You keep the hardware you bought, and only pay fees when you take a payment."
    },
    {
      "q": "Does SumUp have lower rates for higher volumes?",
      "a": "Yes. The standard rate is 1.69% per transaction, but the Payments Plus plan brings card fees down from 0.99% for busier businesses, typically for a monthly fee. It is worth comparing the two against your monthly takings. Check current terms to confirm the latest pricing."
    }
  ],
  "square": [
    {
      "q": "How much does a Square card reader cost?",
      "a": "The Square contactless and chip reader starts from around £19, while the all-in-one Square Terminal is about £149. There is no monthly fee on the standard plan and no contract. You then pay 1.75% per in-person card transaction. Check current terms for the latest hardware pricing."
    },
    {
      "q": "Does Square offer next-day payouts?",
      "a": "Yes. Square typically sends funds to your bank account the next working day as standard, at no extra cost. If you need money sooner, instant payouts are available for a fee. Timing can shift around weekends and bank holidays, so check current terms."
    },
    {
      "q": "Is Square good for a small business just starting out?",
      "a": "Square suits new and small businesses well. There is no monthly fee on the standard plan, no contract, and a strong free POS app for tracking sales and stock. You pay 1.75% per in-person sale, so costs scale with your takings rather than a fixed bill."
    }
  ],
  "zettle": [
    {
      "q": "How much is the PayPal Zettle card reader?",
      "a": "The Zettle Reader 2 typically costs around £29, sometimes with a discounted first reader. There is no monthly fee and no contract, so after the hardware you only pay a transaction fee of 1.75% per card sale. Check current terms for the latest reader price."
    },
    {
      "q": "How quickly do you get paid with PayPal Zettle?",
      "a": "Card takings usually reach your PayPal balance or linked bank account within one to two working days. Timing can vary around weekends and bank holidays. There is no fixed monthly fee, so you only pay the 1.75% transaction charge per sale. Check current terms for details."
    },
    {
      "q": "Can you cancel PayPal Zettle?",
      "a": "Yes. Zettle is pay-as-you-go with no contract and no monthly fee, so there is no subscription to cancel. You simply stop taking payments. You keep any reader you have bought and only pay the per-transaction fee when you make a sale."
    }
  ],
  "dojo": [
    {
      "q": "How much does a Dojo card machine cost?",
      "a": "Dojo pricing is quote-based, with tailored transaction rates and monthly hire typically from around £15 a month. Costs depend on your card mix and volume, and a contract usually applies. Ask for a written quote and check current terms before signing so you can compare fairly."
    },
    {
      "q": "Is Dojo good for a small business?",
      "a": "Dojo can suit small businesses, especially in hospitality, thanks to fast payouts and hands-on UK support. Because rates are quote-based and a contract usually applies, it tends to make more sense once you have steady card volume. Get a tailored quote and compare against pay-as-you-go options."
    },
    {
      "q": "Does Dojo pay out at weekends?",
      "a": "Yes. Dojo offers next-day and same-day payouts, including at weekends, which helps with cash flow in busy trades like hospitality. Exact eligibility and cut-off times depend on your plan, so check current terms when you get your quote to confirm what applies to you."
    }
  ],
  "mypos": [
    {
      "q": "What are myPOS card machine fees?",
      "a": "myPOS card-present fees start from around 1.10% plus 7p per transaction on its lower tier, with rates depending on your plan and card types. There is a £0 entry monthly option and no fixed contract on the standard plan. Check current terms for the rates that apply to you."
    },
    {
      "q": "How fast is myPOS settlement?",
      "a": "myPOS offers instant settlement into your myPOS business account, so funds are available straight after the sale rather than waiting a day or two. You can then transfer to your own bank or use the account directly. Check current terms for any transfer fees that apply."
    },
    {
      "q": "Is myPOS good for taking international payments?",
      "a": "Yes. myPOS is a strong choice for international and European trade, supporting multiple currencies and cross-border card acceptance. Combined with instant settlement and no fixed contract on the standard plan, it suits businesses selling to overseas customers. Check current terms for supported currencies and rates."
    }
  ],
  "worldpay": [
    {
      "q": "How much does Worldpay cost?",
      "a": "Worldpay pricing is quote-based, often using interchange-plus, with terminal hire and contracts that are common in the industry. Costs depend on your volume and card mix. It tends to suit established, higher-volume businesses, so ask for a written quote and check current terms before committing."
    },
    {
      "q": "Does Worldpay offer next-day payouts?",
      "a": "Yes. Worldpay typically settles funds to your bank account the next working day, though exact timing depends on your agreement and cut-off times. Payouts can vary around weekends and bank holidays. Check current terms in your quote so you know the schedule that applies to your account."
    },
    {
      "q": "Is Worldpay suitable for small businesses?",
      "a": "Worldpay is generally built around established, higher-volume businesses, with quote-based pricing and contracts that are common. Smaller or newer traders may find pay-as-you-go providers simpler and cheaper. If you have steady volume, get a tailored quote and compare it carefully against the alternatives."
    }
  ],
  "barclaycard": [
    {
      "q": "How much does Barclaycard Payments cost?",
      "a": "Barclaycard Payments uses quote-based pricing, with contracts that are common in the sector. As a bank-backed provider, it can suit businesses wanting an established name. Costs depend on your volume and card mix, so ask for a written quote and check current terms before you commit."
    },
    {
      "q": "Do you need a Barclays business account to use Barclaycard Payments?",
      "a": "No, you do not need a Barclays business account, though having one can mean faster access to funds. Payouts are typically next working day, and quicker for Barclays account holders. Check current terms in your quote to confirm the payout timing that applies to your setup."
    },
    {
      "q": "Does Barclaycard Payments do next-day payouts?",
      "a": "Yes. Barclaycard Payments typically pays out the next working day, with faster access if you hold a Barclays business account. Exact timing depends on your agreement and cut-off times, and can vary around weekends and bank holidays. Check current terms in your quote for details."
    }
  ],
  "tyl-by-natwest": [
    {
      "q": "How much does Tyl by NatWest cost?",
      "a": "Tyl offers simple, blended pricing plans typically from around £15 a month, with both flexible and fixed-term options. It is aimed at small and medium businesses. Exact rates depend on your plan and card volume, so check current terms and compare plans before choosing the one that fits."
    },
    {
      "q": "Do you need a NatWest account to use Tyl?",
      "a": "No. Tyl by NatWest works with any UK business bank account, not just NatWest. It is designed to be SME-friendly with straightforward plans. Payouts are typically next working day. Check current terms to confirm the plan options and payout timing that apply to your account."
    },
    {
      "q": "Does Tyl by NatWest do next-day payouts?",
      "a": "Yes. Tyl typically settles funds to your bank account the next working day, regardless of who you bank with. Timing can vary around weekends and bank holidays and depends on cut-off times. Check current terms for the exact payout schedule on your chosen plan."
    }
  ],
  "lightspeed": [
    {
      "q": "How much does Lightspeed POS cost?",
      "a": "Lightspeed POS typically starts from around £59 a month, usually on an annual subscription, with pricing rising for added features and sites. It is built for retail and hospitality with deep inventory tools. Check current terms for the latest plan pricing and what each tier includes."
    },
    {
      "q": "Is Lightspeed good for multi-site businesses?",
      "a": "Yes. Lightspeed is well suited to multi-site retail and hospitality, with strong inventory management and reporting across locations. It is a fuller system than a simple card reader, so it fits established businesses needing depth. Check current terms for plan pricing and the features included at each tier."
    },
    {
      "q": "How does Lightspeed handle card payments?",
      "a": "You can take payments through Lightspeed Payments or an integrated payment partner, with the POS handling sales, stock and reporting. Card processing rates depend on the route you choose. Check current terms for the payment options and rates that apply to your setup and region."
    }
  ],
  "epos-now": [
    {
      "q": "How much does Epos Now cost?",
      "a": "Epos Now provides full till systems, with software typically from around £25 a month and hardware available in bundles. Contract and payment terms vary by setup. It suits businesses wanting a complete point-of-sale rather than just a reader. Check current terms for the latest pricing and bundle options."
    },
    {
      "q": "Does Epos Now include card processing?",
      "a": "Epos Now is primarily a till and POS system, with card processing offered through its payments service or integrated partners. Rates depend on the route you choose. Check current terms to confirm the processing options, fees and any contract conditions that apply to your chosen setup."
    },
    {
      "q": "Is Epos Now good for retail and hospitality?",
      "a": "Epos Now suits both retail and hospitality, offering full till systems with stock control, reporting and hardware bundles. It is a complete POS rather than a simple reader, so it fits businesses wanting more than basic card acceptance. Check current terms for pricing and contract details."
    }
  ],
  "shopify-pos": [
    {
      "q": "How much does Shopify POS cost?",
      "a": "Shopify POS is included with your Shopify subscription, with the more advanced POS Pro available as an added monthly cost per location. You also pay Shopify Payments rates on card sales. Check current terms for plan pricing and the POS Pro fee that applies to your store."
    },
    {
      "q": "Do you need a Shopify plan to use Shopify POS?",
      "a": "Yes. Shopify POS is designed for Shopify merchants and runs on your existing Shopify subscription, syncing online and in-person sales. If you do not already sell on Shopify, you would need a plan first. Check current terms for the plan and POS pricing that suit your business."
    },
    {
      "q": "What are the card fees with Shopify POS?",
      "a": "In-person card sales are processed through Shopify Payments at the rates set for your plan, which generally improve on higher subscription tiers. Costs depend on your plan and region. Check current terms to confirm the in-person processing rates and any monthly fees that apply to your store."
    }
  ],
  "toast": [
    {
      "q": "How much does Toast POS cost in the UK?",
      "a": "Toast quotes pricing per venue rather than publishing a UK price list - the quote bundles software plans, purpose-built hardware and card processing through Toast Payments. Get the full-term cost in writing (including the contract length) so you can compare it properly against other hospitality systems."
    },
    {
      "q": "Can I use my own card machine with Toast?",
      "a": "No - card payments run through integrated Toast Payments at rates quoted to your venue. That integration is part of why the system works so smoothly, but it also means you can't shop around on card fees later. Negotiate the rate before you sign, not after."
    },
    {
      "q": "Is Toast available in the UK?",
      "a": "Yes - Toast launched in the UK and sells through pos.toasttab.com/uk, with UK onboarding and support. It's a newer UK operation than its huge US business, so ask about local support hours and installation lead times for your area."
    }
  ]
};

for (const r of REVIEWS) {
  const extra = REVIEW_FAQ_EXTRAS[r.slug];
  if (!extra) continue;
  const seen = new Set(r.faqs.map((f) => f.q));
  r.faqs = [...r.faqs, ...extra.filter((f) => !seen.has(f.q))];
}

export function getReview(slug: string): ReviewContent | undefined {
  return REVIEWS.find((r) => r.slug === slug);
}
