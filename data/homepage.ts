/* Homepage-curated, opinionated content. Deliberately blunt, plain-English UK
 * voice. Facts (fees, contracts) stay rough/"approx" here - the sourced detail
 * lives on each /reviews/[slug] page from data/providers.ts. */

/** Business-type quick selector → the matching hub page (real recommendations). */
export const BUSINESS_PICKER = [
  { label: "Café / Coffee shop", href: "/pos-systems/cafes" },
  { label: "Takeaway / Food truck", href: "/pos-systems/takeaways" },
  { label: "Pub / Bar", href: "/pos-systems/pubs-bars" },
  { label: "Salon / Barber", href: "/pos-systems/salons" },
  { label: "Retail shop", href: "/pos-systems/retail" },
  { label: "Market trader", href: "/pos-systems/market-stalls" },
  { label: "Mobile service", href: "/pos-systems/mobile-businesses" },
  { label: "New business", href: "/get-pos-quotes" },
] as const;

/** Opinionated provider cards for the homepage shelf. */
export type ProviderTake = {
  slug: string;
  bestFor: string;
  avoidIf: string;
  fees: string;
  contract: string;
  verdict: string;
};

export const PROVIDER_TAKES: ProviderTake[] = [
  {
    slug: "sumup",
    bestFor: "Market traders, pop-ups and tiny businesses taking the odd card payment.",
    avoidIf: "You need a full till, staff logins or serious reporting.",
    fees: "From 0.99–1.69%, no monthly fee",
    contract: "No contract",
    verdict: "Dead simple and cheap to start - but you may outgrow it quickly.",
  },
  {
    slug: "square",
    bestFor: "Small shops, salons and cafés that want decent POS software without faff.",
    avoidIf: "You're hunting the absolute lowest transaction rate at high volume.",
    fees: "1.75% in person, no monthly fee",
    contract: "No contract",
    verdict: "Probably the easiest all-rounder for a small business.",
  },
  {
    slug: "dojo",
    bestFor: "Busy cafés, pubs and hospitality processing decent volume that want fast payouts.",
    avoidIf: "You hate contracts, sales calls or quote-based pricing.",
    fees: "Quote-based, from ~£15/mo",
    contract: "Contract - check the term",
    verdict: "Often strong on rates and payouts - but read the contract before you shake hands.",
  },
  {
    slug: "mypos",
    bestFor: "Mobile and international traders who want their money the same day.",
    avoidIf: "You want the most familiar UK high-street brand.",
    fees: "From ~1.10% + 7p, no monthly fee",
    contract: "No fixed contract",
    verdict: "Handy if cash flow matters more than brand recognition.",
  },
];

/** The fees that quietly nibble your margins. */
export const FEE_GOTCHAS: { title: string; body: string }[] = [
  { title: "Transaction fees", body: "The percentage taken off every sale. Small on paper, brutal on lots of tiny coffees." },
  { title: "Monthly rental", body: "Terminal hire that rolls on whether you trade or not. Owning the reader is usually cheaper." },
  { title: "PCI fees", body: "A 'compliance' charge some acquirers add - and a penalty if you don't fill in their form." },
  { title: "Refund fees", body: "A few providers keep the original transaction fee when you refund. Adds up in retail." },
  { title: "Chargeback fees", body: "A flat fee (often £15-£20) every time a customer disputes a payment - even if you win." },
  { title: "Contract exit fees", body: "The bit that bites on quote-based deals. Always ask the term length and cost to leave." },
  { title: "Minimum monthly charges", body: "A service fee if you don't hit a turnover threshold. Quiet months cost you extra." },
  { title: "Next-day payout fees", body: "Standard payouts are usually free; 'get paid faster' often isn't. Check before you rely on it." },
];

/** How to choose without getting mugged by the small print. */
export const CHOOSE_STEPS: { title: string; body: string }[] = [
  { title: "Work out your monthly card turnover", body: "It decides everything. Low volume favours no-monthly-fee; high volume can justify a lower rate with a fee." },
  { title: "Decide: full till, or just a card reader?", body: "A sole trader rarely needs a £600 till system. Don't pay for stock control you'll never open." },
  { title: "Compare transaction fees against monthly fees", body: "A 1.5% rate with a £25/mo fee can cost more than 1.75% with no fee. Do the maths, not the vibes." },
  { title: "Check the contract length and exit fees", body: "Pay-as-you-go means walk away anytime. Quote-based often means a term - and a cost to leave early." },
  { title: "Choose for your business type, not the shiniest terminal", body: "A café, a market stall and a salon want different things. The flashiest screen rarely wins." },
];

/** "Which one would I pick?" - real scenarios, blunt answers. */
export const SCENARIOS: { situation: string; picks: { slug: string; name: string }[]; why: string }[] = [
  {
    situation: "I run a coffee shop doing £18k/month on card",
    picks: [{ slug: "dojo", name: "Dojo" }, { slug: "square", name: "Square" }],
    why: "At that volume, Dojo's tailored rates and fast payouts usually beat a flat 1.75% - just check the contract. Want zero contract and easy software instead? Square.",
  },
  {
    situation: "I'm a barber taking bookings and walk-ins",
    picks: [{ slug: "square", name: "Square" }],
    why: "Square handles card-at-the-chair, tips and basic booking without a monthly fee. Simple, tidy, no lock-in.",
  },
  {
    situation: "I sell at markets on weekends",
    picks: [{ slug: "sumup", name: "SumUp" }],
    why: "Cheapest way in, a standalone reader that works on mobile data, and nothing to pay in the weeks you don't trade.",
  },
  {
    situation: "I'm opening a takeaway",
    picks: [{ slug: "square", name: "Square" }, { slug: "dojo", name: "Dojo" }],
    why: "Square for fast order entry and no contract while you find your feet; Dojo once you're busy and want reliable hardware with quick payouts.",
  },
  {
    situation: "I run a small retail shop with stock",
    picks: [{ slug: "square", name: "Square" }, { slug: "lightspeed", name: "Lightspeed" }],
    why: "Square's free inventory covers most independents. Carrying a big range across more than one shop? Lightspeed goes deeper (for a price).",
  },
];
