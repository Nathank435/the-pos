/* ------------------------------------------------------------------ *
 * PROVIDER DATA - single source of truth                              *
 *                                                                     *
 * Every fee, rate and claim shown on the site comes from here.        *
 * Components NEVER hardcode pricing. To update a provider, edit its    *
 * entry and bump `lastChecked`. Keep `sourceUrls` accurate - they're  *
 * shown to users and protect us under ASA/CMA rules.                  *
 *                                                                     *
 * Rates below reflect publicly advertised UK pricing as noted; they   *
 * are headline figures and vary by plan, card type and contract.      *
 * ------------------------------------------------------------------ */

export type ProviderType = "card-reader" | "full-pos" | "both";

export type EditorialRating = {
  overall: number;
  value: number;
  easeOfUse: number;
  features: number;
  support: number;
  contractFlexibility: number;
};

export type Provider = {
  slug: string;
  name: string;
  /** Path under /public, or a short text mark we render if the asset is missing. */
  logo: string;
  type: ProviderType;
  summary: string;
  /** Bespoke ≤155-char SEO meta description for the review page. */
  metaDescription?: string;
  bestFor: string[];
  notBestFor: string[];

  monthlyFeeFrom: string;
  transactionFeeHeadline: string;
  cardReaderCostFrom: string;
  contractLength: string;
  payoutSpeed: string;

  hasNoMonthlyFee: boolean;
  hasNoContractOption: boolean;
  supportsRestaurants: boolean;
  supportsRetail: boolean;
  supportsMobile: boolean;
  supportsOnlinePayments: boolean;
  supportsVirtualTerminal: boolean;
  supportsInvoicing: boolean;
  supportsInventory: boolean;
  supportsTapToPay: boolean;
  fastPayouts: boolean;

  pros: string[];
  cons: string[];

  /** Card machine / hardware highlights for the card-machine comparison. */
  hardware: { name: string; priceFrom: string; note: string }[];

  affiliateUrl?: string;
  quoteUrl?: string;
  sourceUrls: string[];
  lastChecked: string; // ISO yyyy-mm-dd

  editorialRating: EditorialRating;
};

export const PROVIDERS: Provider[] = [
  {
    slug: "sumup",
    metaDescription:
      "SumUp review (2026): the cheapest, simplest card reader for UK market traders and mobile sellers. No contract, no monthly fee. Fees, pros and verdict.",
    name: "SumUp",
    logo: "SumUp",
    type: "both",
    summary:
      "The “just let me take payments” option. Cheap to start, portable, dead simple. Brilliant for low-volume and mobile sellers; you may outgrow it for a full restaurant setup.",
    bestFor: ["Market stalls", "Tradespeople", "Mobile sellers", "Low-volume businesses"],
    notBestFor: ["Busy restaurants needing table plans", "Complex multi-site retail"],
    monthlyFeeFrom: "£0",
    transactionFeeHeadline: "from 0.99% (Payments Plus) / 1.69% standard",
    cardReaderCostFrom: "£19 + VAT",
    contractLength: "No contract (pay-as-you-go)",
    payoutSpeed: "1–2 working days (next-day option)",
    hasNoMonthlyFee: true,
    hasNoContractOption: true,
    supportsRestaurants: false,
    supportsRetail: true,
    supportsMobile: true,
    supportsOnlinePayments: true,
    supportsVirtualTerminal: true,
    supportsInvoicing: true,
    supportsInventory: false,
    supportsTapToPay: true,
    fastPayouts: false,
    pros: [
      "Cheap, low-commitment hardware",
      "No monthly fee on pay-as-you-go",
      "Genuinely simple to set up and use",
      "Tap to Pay on iPhone/Android, invoices and a free online store",
    ],
    cons: [
      "Standard rate isn't the cheapest at higher volumes",
      "Light on full-POS features (tables, deep inventory)",
      "Standard payouts slower than instant-access rivals",
    ],
    hardware: [
      { name: "SumUp Air", priceFrom: "£19 + VAT", note: "Entry card reader, pairs with phone app" },
      { name: "SumUp Solo", priceFrom: "£79 + VAT", note: "Standalone reader, no phone needed, SIM connectivity" },
    ],
    affiliateUrl: "https://tillersystems504.partnerlinks.io/auhbbs5szcov",
    quoteUrl: "/get-pos-quotes?provider=sumup",
    sourceUrls: ["https://www.sumup.com/en-gb/pricing/"],
    lastChecked: "2026-06-25",
    editorialRating: {
      overall: 4.4,
      value: 4.5,
      easeOfUse: 4.8,
      features: 3.8,
      support: 4.0,
      contractFlexibility: 4.9,
    },
  },
  {
    slug: "square",
    metaDescription:
      "Square review (2026): the strongest free POS app for UK cafés, shops and service businesses. No monthly fee, 1.75% in person. Fees, pros and verdict.",
    name: "Square",
    logo: "Square",
    type: "both",
    summary:
      "The strongest free POS software option. Tidy app, decent ecosystem, no monthly fee to start. Great for small retail, cafés and service businesses that want software without signing their life away.",
    bestFor: ["Cafés", "Small retail", "Service businesses", "Online + in-person"],
    notBestFor: ["Businesses needing bespoke rates at large scale"],
    monthlyFeeFrom: "£0 (paid POS tiers available)",
    transactionFeeHeadline: "1.75% in-person (no monthly/setup fee on standard)",
    cardReaderCostFrom: "£19 + VAT",
    contractLength: "No contract (pay-as-you-go)",
    payoutSpeed: "Next working day (instant transfer for a fee)",
    hasNoMonthlyFee: true,
    hasNoContractOption: true,
    supportsRestaurants: true,
    supportsRetail: true,
    supportsMobile: true,
    supportsOnlinePayments: true,
    supportsVirtualTerminal: true,
    supportsInvoicing: true,
    supportsInventory: true,
    supportsTapToPay: true,
    fastPayouts: true,
    pros: [
      "Genuinely good free POS app",
      "No monthly fee, no setup fee on standard plan",
      "Strong ecosystem: online store, invoices, inventory, loyalty",
      "Square for Restaurants & Retail tiers if you grow",
    ],
    cons: [
      "1.75% flat rate isn't bespoke-cheap at high volume",
      "Some advanced features sit behind paid tiers",
      "Instant payouts cost extra",
    ],
    hardware: [
      { name: "Square Reader", priceFrom: "£19 + VAT", note: "Contactless + chip, pairs with phone/tablet" },
      { name: "Square Terminal", priceFrom: "£149 + VAT", note: "All-in-one handheld with receipt printer" },
      { name: "Square Register", priceFrom: "£599 + VAT", note: "Full countertop till system" },
    ],
    affiliateUrl: "https://squareup.com/gb/en/hardware",
    quoteUrl: "/get-pos-quotes?provider=square",
    sourceUrls: ["https://squareup.com/gb/en/pricing"],
    lastChecked: "2026-06-25",
    editorialRating: {
      overall: 4.5,
      value: 4.4,
      easeOfUse: 4.6,
      features: 4.5,
      support: 4.1,
      contractFlexibility: 4.7,
    },
  },
  {
    slug: "zettle",
    metaDescription:
      "PayPal Zettle review (2026): simple, no-monthly-fee card payments for UK retailers and mobile sellers in the PayPal world. Fees, pros, cons and verdict.",
    name: "PayPal Zettle",
    logo: "Zettle",
    type: "both",
    summary:
      "PayPal-friendly card payments with a simple reader and no monthly software fee for basic use. Good for small retailers and mobile sellers already in the PayPal world.",
    bestFor: ["PayPal users", "Small retailers", "Mobile sellers", "Pop-ups"],
    notBestFor: ["Businesses wanting a deep full-POS ecosystem"],
    monthlyFeeFrom: "£0",
    transactionFeeHeadline: "1.75% card & contactless",
    cardReaderCostFrom: "£29 + VAT (first reader often discounted)",
    contractLength: "No contract (pay-as-you-go)",
    payoutSpeed: "1–2 working days (into PayPal/bank)",
    hasNoMonthlyFee: true,
    hasNoContractOption: true,
    supportsRestaurants: false,
    supportsRetail: true,
    supportsMobile: true,
    supportsOnlinePayments: true,
    supportsVirtualTerminal: true,
    supportsInvoicing: true,
    supportsInventory: true,
    supportsTapToPay: true,
    fastPayouts: false,
    pros: [
      "No monthly fee for the basic POS app",
      "Neat integration with PayPal balance",
      "Simple, affordable reader",
      "Good basic inventory and reporting",
    ],
    cons: [
      "Ecosystem less ambitious than Square",
      "Fewer hospitality features",
      "Standard payout speed",
    ],
    hardware: [
      { name: "Zettle Reader 2", priceFrom: "£29 + VAT", note: "Contactless + chip card reader" },
      { name: "Zettle Terminal", priceFrom: "£149 + VAT", note: "Standalone handheld with built-in app" },
    ],
    affiliateUrl: "https://www.zettle.com/gb/card-readers",
    quoteUrl: "/get-pos-quotes?provider=zettle",
    sourceUrls: ["https://www.zettle.com/gb/pricing"],
    lastChecked: "2026-06-25",
    editorialRating: {
      overall: 4.2,
      value: 4.3,
      easeOfUse: 4.5,
      features: 4.0,
      support: 4.0,
      contractFlexibility: 4.7,
    },
  },
  {
    slug: "dojo",
    metaDescription:
      "Dojo card machine review (2026): fast (even same-day) payouts and hospitality-grade support, but quote-based contract pricing. Fees, pros and verdict.",
    name: "Dojo",
    type: "both",
    logo: "Dojo",
    summary:
      "Built for growing businesses that want faster payouts and hands-on, sales-led support. Strong in hospitality and higher-volume retail. Rates are quote-based - read the contract and monthly structure carefully.",
    bestFor: ["Restaurants", "Pubs & bars", "Higher-volume retail", "Growing businesses"],
    notBestFor: ["Occasional or very low-volume sellers", "Anyone wanting zero commitment"],
    monthlyFeeFrom: "From ~£15/mo (quote-based)",
    transactionFeeHeadline: "Tailored rates (quote-based, often blended)",
    cardReaderCostFrom: "Hardware/payment-plan pricing (quoted)",
    contractLength: "Contract terms vary - check carefully",
    payoutSpeed: "Next-day, as fast as same-day payouts",
    hasNoMonthlyFee: false,
    hasNoContractOption: false,
    supportsRestaurants: true,
    supportsRetail: true,
    supportsMobile: true,
    supportsOnlinePayments: true,
    supportsVirtualTerminal: true,
    supportsInvoicing: false,
    supportsInventory: false,
    supportsTapToPay: true,
    fastPayouts: true,
    pros: [
      "Fast payouts (as quick as same day)",
      "Strong reliability and connectivity on the card machine",
      "Good UK-based support and account management",
      "Popular with busy hospitality venues",
    ],
    cons: [
      "Quote-based pricing - less upfront transparency",
      "Contract and monthly terms need careful checking",
      "Overkill for low-volume sellers",
    ],
    hardware: [
      { name: "Dojo Go", priceFrom: "Quoted", note: "Portable card machine with fast payouts" },
      { name: "Dojo Pocket / countertop", priceFrom: "Quoted", note: "Range to suit counter or table service" },
    ],
    affiliateUrl: "https://dojo.tech/card-machines/",
    quoteUrl: "/get-pos-quotes?provider=dojo",
    sourceUrls: ["https://dojo.tech/card-machines/"],
    lastChecked: "2026-06-25",
    editorialRating: {
      overall: 4.1,
      value: 3.8,
      easeOfUse: 4.3,
      features: 4.2,
      support: 4.5,
      contractFlexibility: 3.4,
    },
  },
  {
    slug: "mypos",
    metaDescription:
      "myPOS review (2026): instant access to your funds via a built-in business account, ideal for mobile and international traders. Fees, pros and verdict.",
    name: "myPOS",
    logo: "myPOS",
    type: "both",
    summary:
      "Best when you want instant access to funds through a built-in business account. Handy for international/European payments. The fee structure is more complex, so watch card-type differences.",
    bestFor: ["Instant access to funds", "International payments", "Mobile traders"],
    notBestFor: ["Anyone who wants one simple flat rate"],
    monthlyFeeFrom: "£0 on entry plans",
    transactionFeeHeadline: "Card-present from 1.10% + 7p (lower-turnover tier)",
    cardReaderCostFrom: "£19+ (device dependent)",
    contractLength: "No fixed contract on standard plans",
    payoutSpeed: "Instant settlement to myPOS account",
    hasNoMonthlyFee: true,
    hasNoContractOption: true,
    supportsRestaurants: false,
    supportsRetail: true,
    supportsMobile: true,
    supportsOnlinePayments: true,
    supportsVirtualTerminal: true,
    supportsInvoicing: true,
    supportsInventory: false,
    supportsTapToPay: true,
    fastPayouts: true,
    pros: [
      "Instant access to your money via a built-in account",
      "Competitive headline rate at lower turnover",
      "Good for cross-border/European card acceptance",
      "Range of standalone devices",
    ],
    cons: [
      "Fee structure varies by card type - read the detail",
      "Some fees on transfers out of the myPOS account",
      "Lighter on full-POS software",
    ],
    hardware: [
      { name: "myPOS Go 2", priceFrom: "From ~£19", note: "Pocket card machine with free SIM" },
      { name: "myPOS Pro", priceFrom: "From ~£199", note: "Android smart terminal with receipt printer" },
    ],
    affiliateUrl: "https://www.mypos.com/en-gb/pricing-and-fees?a_aid=68af3151f3be8",
    quoteUrl: "/get-pos-quotes?provider=mypos",
    sourceUrls: ["https://www.mypos.com/en-gb/pricing"],
    lastChecked: "2026-06-25",
    editorialRating: {
      overall: 4.0,
      value: 4.1,
      easeOfUse: 4.0,
      features: 3.9,
      support: 3.8,
      contractFlexibility: 4.4,
    },
  },
  {
    slug: "worldpay",
    metaDescription:
      "Worldpay review (2026): a heavyweight UK acquirer for established, higher-volume businesses. Bespoke but quote-based rates. Fees, pros, cons, verdict.",
    name: "Worldpay",
    logo: "Worldpay",
    type: "both",
    summary:
      "A heavyweight acquirer aimed at established and higher-volume businesses. Can offer competitive bespoke rates, but pricing and contracts are quote-based and worth scrutinising.",
    bestFor: ["Established businesses", "Higher card volumes", "Bespoke merchant rates"],
    notBestFor: ["Tiny or occasional sellers", "Anyone wanting no contract"],
    monthlyFeeFrom: "Quote-based (terminal hire + fees)",
    transactionFeeHeadline: "Tailored / interchange-plus available (quoted)",
    cardReaderCostFrom: "Terminal hire (quoted)",
    contractLength: "Contracts common - check length & exit fees",
    payoutSpeed: "Typically next working day",
    hasNoMonthlyFee: false,
    hasNoContractOption: false,
    supportsRestaurants: true,
    supportsRetail: true,
    supportsMobile: true,
    supportsOnlinePayments: true,
    supportsVirtualTerminal: true,
    supportsInvoicing: false,
    supportsInventory: false,
    supportsTapToPay: true,
    fastPayouts: false,
    pros: [
      "Can negotiate competitive bespoke rates at volume",
      "Established acquirer with broad capability",
      "Good for omnichannel (in-person + online)",
    ],
    cons: [
      "Quote-based, less transparent upfront",
      "Contracts and terminal hire need careful review",
      "Heavy for small/low-volume businesses",
    ],
    hardware: [
      { name: "Worldpay countertop / portable", priceFrom: "Hire (quoted)", note: "Range of terminals, typically on hire" },
    ],
    affiliateUrl: "https://www.worldpay.com/en-gb",
    quoteUrl: "/get-pos-quotes?provider=worldpay",
    sourceUrls: ["https://www.worldpay.com/en-gb/products/in-person-payments"],
    lastChecked: "2026-06-25",
    editorialRating: {
      overall: 3.7,
      value: 3.6,
      easeOfUse: 3.6,
      features: 4.0,
      support: 3.7,
      contractFlexibility: 3.0,
    },
  },
  {
    slug: "barclaycard",
    metaDescription:
      "Barclaycard Payments review (2026): bank-backed card machines for established UK businesses. Reassuring brand, quote-based rates. Pros, cons and verdict.",
    name: "Barclaycard Payments",
    logo: "Barclaycard",
    type: "both",
    summary:
      "A bank-backed acquirer offering card machines and online payments. Reassuring brand and support, with quote-based rates that suit established UK businesses.",
    bestFor: ["Established UK businesses", "Existing Barclays customers", "Higher volumes"],
    notBestFor: ["Very low-volume sellers", "No-commitment seekers"],
    monthlyFeeFrom: "Quote-based",
    transactionFeeHeadline: "Tailored rates (quoted)",
    cardReaderCostFrom: "Terminal options (quoted)",
    contractLength: "Contracts common - review terms",
    payoutSpeed: "Typically next working day (faster for Barclays accounts)",
    hasNoMonthlyFee: false,
    hasNoContractOption: false,
    supportsRestaurants: true,
    supportsRetail: true,
    supportsMobile: true,
    supportsOnlinePayments: true,
    supportsVirtualTerminal: true,
    supportsInvoicing: false,
    supportsInventory: false,
    supportsTapToPay: true,
    fastPayouts: false,
    pros: [
      "Major bank backing and UK support",
      "Faster settlement if you bank with Barclays",
      "Smartpay range from entry to established business",
    ],
    cons: [
      "Quote-based pricing",
      "Contract terms to review",
      "Less nimble than app-first rivals for micro-businesses",
    ],
    hardware: [
      { name: "Barclaycard Smartpay range", priceFrom: "Quoted", note: "Mobile, portable and countertop terminals" },
    ],
    affiliateUrl: "https://www.barclaycard.co.uk/business",
    quoteUrl: "/get-pos-quotes?provider=barclaycard",
    sourceUrls: ["https://www.barclaycard.co.uk/business/accepting-payments/card-readers-and-machines"],
    lastChecked: "2026-06-25",
    editorialRating: {
      overall: 3.7,
      value: 3.6,
      easeOfUse: 3.7,
      features: 3.8,
      support: 3.9,
      contractFlexibility: 3.1,
    },
  },
  {
    slug: "tyl-by-natwest",
    metaDescription:
      "Tyl by NatWest review (2026): clearer-pricing card payments for UK small and medium retail and hospitality businesses. Fees, pros, cons and verdict.",
    name: "Tyl by NatWest",
    logo: "Tyl",
    type: "both",
    summary:
      "NatWest's payments arm, pitched at small and medium UK businesses with clearer pricing than some legacy acquirers and a community/giving angle. Solid all-rounder.",
    bestFor: ["Small & medium UK businesses", "Clear monthly pricing", "Retail & hospitality"],
    notBestFor: ["Micro-sellers wanting pure pay-as-you-go"],
    monthlyFeeFrom: "From ~£15/mo (plan dependent)",
    transactionFeeHeadline: "Simple/blended rate plans (quoted)",
    cardReaderCostFrom: "Terminal from ~£19/mo or purchase",
    contractLength: "Flexible and fixed terms available",
    payoutSpeed: "Next working day",
    hasNoMonthlyFee: false,
    hasNoContractOption: true,
    supportsRestaurants: true,
    supportsRetail: true,
    supportsMobile: true,
    supportsOnlinePayments: true,
    supportsVirtualTerminal: true,
    supportsInvoicing: false,
    supportsInventory: false,
    supportsTapToPay: true,
    fastPayouts: false,
    pros: [
      "Bank-backed with reasonably clear pricing",
      "Flexible (no fixed term) option available",
      "Online payments and virtual terminal included",
    ],
    cons: [
      "Monthly fee on most plans",
      "Not the cheapest for very low volumes",
      "Software lighter than POS specialists",
    ],
    hardware: [
      { name: "Tyl card readers", priceFrom: "From ~£19/mo", note: "Portable and countertop options" },
    ],
    affiliateUrl: "https://www.tylbynatwest.com/",
    quoteUrl: "/get-pos-quotes?provider=tyl-by-natwest",
    sourceUrls: ["https://www.tylbynatwest.com/card-readers"],
    lastChecked: "2026-06-25",
    editorialRating: {
      overall: 3.9,
      value: 3.8,
      easeOfUse: 3.9,
      features: 3.8,
      support: 4.0,
      contractFlexibility: 4.0,
    },
  },
  {
    slug: "lightspeed",
    metaDescription:
      "Lightspeed review (2026): a powerful retail and hospitality POS for multi-site businesses with deep inventory needs. Pricier. Fees, pros and verdict.",
    name: "Lightspeed",
    logo: "Lightspeed",
    type: "full-pos",
    summary:
      "A serious retail/hospitality POS with strong inventory and multi-location features. More advanced and more expensive - overkill if you only need basic card payments.",
    bestFor: ["Multi-location retail", "Hospitality groups", "Deep inventory needs"],
    notBestFor: ["Sole traders", "Anyone wanting cheap, simple payments"],
    monthlyFeeFrom: "From ~£59/mo (plan dependent)",
    transactionFeeHeadline: "Payments via Lightspeed or integrated provider (quoted)",
    cardReaderCostFrom: "Hardware bundles (quoted)",
    contractLength: "Subscription, often annual",
    payoutSpeed: "Depends on payments provider",
    hasNoMonthlyFee: false,
    hasNoContractOption: false,
    supportsRestaurants: true,
    supportsRetail: true,
    supportsMobile: false,
    supportsOnlinePayments: true,
    supportsVirtualTerminal: false,
    supportsInvoicing: true,
    supportsInventory: true,
    supportsTapToPay: false,
    fastPayouts: false,
    pros: [
      "Powerful inventory and reporting",
      "Strong multi-location and omnichannel",
      "Tailored retail and hospitality builds",
    ],
    cons: [
      "Pricier monthly subscription",
      "Steeper learning curve",
      "Too much for small/simple businesses",
    ],
    hardware: [
      { name: "Lightspeed hardware bundles", priceFrom: "Quoted", note: "iPad-based POS, printers, scanners, cash drawers" },
    ],
    affiliateUrl: "https://www.lightspeedhq.co.uk/",
    quoteUrl: "/get-pos-quotes?provider=lightspeed",
    sourceUrls: ["https://www.lightspeedhq.co.uk/pos/"],
    lastChecked: "2026-06-25",
    editorialRating: {
      overall: 4.1,
      value: 3.6,
      easeOfUse: 3.8,
      features: 4.7,
      support: 4.0,
      contractFlexibility: 3.3,
    },
  },
  {
    slug: "epos-now",
    metaDescription:
      "Epos Now review (2026): full till systems and hardware bundles for UK retail and hospitality. Capable, but check the contracts. Fees, pros, verdict.",
    name: "Epos Now",
    logo: "Epos Now",
    type: "full-pos",
    summary:
      "A full till-system specialist for retail and hospitality, with strong hardware bundles. Capable, but review contracts, payment terms and add-on costs carefully.",
    bestFor: ["Full till systems", "Retail", "Hospitality", "Hardware bundles"],
    notBestFor: ["Anyone wanting just a card reader"],
    monthlyFeeFrom: "Software from ~£25/mo (bundles vary)",
    transactionFeeHeadline: "Via Epos Now Payments or integration (quoted)",
    cardReaderCostFrom: "Till bundles (quoted, finance options)",
    contractLength: "Contract & payment terms vary - read carefully",
    payoutSpeed: "Depends on payments setup",
    hasNoMonthlyFee: false,
    hasNoContractOption: false,
    supportsRestaurants: true,
    supportsRetail: true,
    supportsMobile: false,
    supportsOnlinePayments: true,
    supportsVirtualTerminal: false,
    supportsInvoicing: true,
    supportsInventory: true,
    supportsTapToPay: false,
    fastPayouts: false,
    pros: [
      "Complete till/POS hardware setups",
      "Strong inventory and back-office",
      "Big app/integration marketplace",
    ],
    cons: [
      "Contracts and add-on costs need scrutiny",
      "Mixed reports on sales/aftercare experience",
      "Not aimed at simple mobile payments",
    ],
    hardware: [
      { name: "Epos Now Complete bundles", priceFrom: "Quoted", note: "Touchscreen till, printer, cash drawer" },
    ],
    affiliateUrl: "https://www.eposnow.com/uk/",
    quoteUrl: "/get-pos-quotes?provider=epos-now",
    sourceUrls: ["https://www.eposnow.com/uk/pricing/"],
    lastChecked: "2026-06-25",
    editorialRating: {
      overall: 3.6,
      value: 3.5,
      easeOfUse: 3.6,
      features: 4.2,
      support: 3.3,
      contractFlexibility: 3.1,
    },
  },
  {
    slug: "shopify-pos",
    metaDescription:
      "Shopify POS review (2026): the obvious in-person till for Shopify merchants who want shop and online in sync. Fees, hardware, pros, cons, verdict.",
    name: "Shopify POS",
    logo: "Shopify",
    type: "full-pos",
    summary:
      "The obvious choice if you sell on Shopify and want in-person to match your online store. Strong for ecommerce-led retail; less compelling if you're not already on Shopify.",
    bestFor: ["Shopify merchants", "Online + in-person retail", "Omnichannel brands"],
    notBestFor: ["Businesses not using Shopify", "Pure hospitality"],
    monthlyFeeFrom: "From your Shopify plan (POS Pro extra)",
    transactionFeeHeadline: "Shopify Payments in-person rates (plan dependent)",
    cardReaderCostFrom: "Reader from ~£49",
    contractLength: "Monthly Shopify subscription",
    payoutSpeed: "Per Shopify Payments schedule",
    hasNoMonthlyFee: false,
    hasNoContractOption: true,
    supportsRestaurants: false,
    supportsRetail: true,
    supportsMobile: true,
    supportsOnlinePayments: true,
    supportsVirtualTerminal: false,
    supportsInvoicing: false,
    supportsInventory: true,
    supportsTapToPay: true,
    fastPayouts: false,
    pros: [
      "Seamless with a Shopify online store",
      "Unified inventory across online and in-person",
      "Good for omnichannel retail brands",
    ],
    cons: [
      "Only makes sense if you're on Shopify",
      "POS Pro features cost extra per location",
      "Not built for hospitality workflows",
    ],
    hardware: [
      { name: "Shopify Tap & Chip / WisePad", priceFrom: "From ~£49", note: "Card reader pairs with Shopify POS app" },
      { name: "Shopify POS Go", priceFrom: "Quoted", note: "All-in-one handheld scanner + reader" },
    ],
    affiliateUrl: "https://www.shopify.com/uk/pos",
    quoteUrl: "/get-pos-quotes?provider=shopify-pos",
    sourceUrls: ["https://www.shopify.com/uk/pos"],
    lastChecked: "2026-06-25",
    editorialRating: {
      overall: 4.0,
      value: 3.8,
      easeOfUse: 4.2,
      features: 4.1,
      support: 3.9,
      contractFlexibility: 3.8,
    },
  },
  {
    slug: "touchbistro",
    metaDescription:
      "TouchBistro review (2026): a restaurant-first POS built around table service, menus and floor plans. Strong for hospitality. Fees, pros and verdict.",
    name: "TouchBistro",
    logo: "TouchBistro",
    type: "full-pos",
    summary:
      "A restaurant-first POS built around table service, menus and floor plans. Strong hospitality features; not intended for retail or simple mobile card payments.",
    bestFor: ["Restaurants", "Table service", "Cafés with full menus"],
    notBestFor: ["Retail shops", "Market stalls", "Sole traders"],
    monthlyFeeFrom: "Subscription (quoted)",
    transactionFeeHeadline: "Via integrated payments partner (quoted)",
    cardReaderCostFrom: "iPad-based hardware (quoted)",
    contractLength: "Subscription terms vary",
    payoutSpeed: "Depends on payments partner",
    hasNoMonthlyFee: false,
    hasNoContractOption: false,
    supportsRestaurants: true,
    supportsRetail: false,
    supportsMobile: false,
    supportsOnlinePayments: true,
    supportsVirtualTerminal: false,
    supportsInvoicing: false,
    supportsInventory: true,
    supportsTapToPay: false,
    fastPayouts: false,
    pros: [
      "Purpose-built for restaurants and table service",
      "Floor plans, menu management, coursing and tips",
      "Solid hospitality reporting",
    ],
    cons: [
      "Not for retail or mobile-only sellers",
      "Payments handled via partner",
      "Subscription + hardware investment",
    ],
    hardware: [
      { name: "TouchBistro iPad setup", priceFrom: "Quoted", note: "iPad POS, printers, KDS options" },
    ],
    affiliateUrl: "https://www.touchbistro.com/",
    quoteUrl: "/get-pos-quotes?provider=touchbistro",
    sourceUrls: ["https://www.touchbistro.com/pricing/"],
    lastChecked: "2026-06-25",
    editorialRating: {
      overall: 3.8,
      value: 3.6,
      easeOfUse: 3.9,
      features: 4.2,
      support: 3.8,
      contractFlexibility: 3.3,
    },
  },
];

/* ------------------------------ logos ------------------------------ *
 * Editable logo map, keyed by provider slug. Two ways to supply a logo: *
 *   1. Remote vector (clean CDN SVG), or                                *
 *   2. Local asset at /public/assets/logos/<slug>.svg                   *
 * Anything missing or that fails to load falls back to a tidy initials  *
 * tile - so the UI never shows a broken image. Horizontal "ar21"        *
 * lockups are fine; <ProviderLogo> contains + multiply-blends them.     *
 * ------------------------------------------------------------------ */
export const PROVIDER_LOGOS: Partial<Record<string, string>> = {
  // Self-hosted in /public/assets/logos so the site never depends on a third-party CDN.
  sumup: "/assets/logos/sumup.svg",
  square: "/assets/logos/square.svg",
  zettle: "/assets/logos/zettle.svg",
  mypos: "/assets/logos/mypos.svg",
  "shopify-pos": "/assets/logos/shopify-pos.svg",
  dojo: "/assets/logos/dojo.png",
  worldpay: "/assets/logos/worldpay.svg",
  barclaycard: "/assets/logos/barclaycard.svg",
  lightspeed: "/assets/logos/lightspeed.svg",
  "epos-now": "/assets/logos/epos-now.png",
  "tyl-by-natwest": "/assets/logos/tyl-by-natwest.png",
  // TouchBistro's site logo is inline SVG (no hotlinkable file) - uses the initials
  // fallback. Drop /public/assets/logos/touchbistro.svg to enable.
  touchbistro: "/assets/logos/touchbistro.svg",
};

export function getProviderLogo(slug: string): string | undefined {
  return PROVIDER_LOGOS[slug];
}

/* ----------------------------- helpers ----------------------------- */

export function getProvider(slug: string): Provider | undefined {
  return PROVIDERS.find((p) => p.slug === slug);
}

export function getProviders(slugs: string[]): Provider[] {
  return slugs.map(getProvider).filter((p): p is Provider => Boolean(p));
}

export const PROVIDER_SLUGS = PROVIDERS.map((p) => p.slug);

/** Most recent lastChecked date across providers - used for "last updated" stamps. */
export function latestProviderUpdate(): string {
  return PROVIDERS.map((p) => p.lastChecked).sort().at(-1) ?? "2026-06-25";
}
