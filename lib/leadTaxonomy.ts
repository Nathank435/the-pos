/* Canonical lead taxonomy — the single source of truth for the values we write
 * to Klaviyo (and use for segments + dynamic email fields).
 *
 * The quiz, quote form and calculator each speak a slightly different dialect
 * (e.g. business type arrives as "cafe" from the quiz but "Café" from the quote
 * form; turnover as "over-30k" vs "Over £30,000"). Everything funnels through
 * here so each profile property holds ONE vocabulary:
 *   - <field>        → a stable lowercase slug (segment on this)
 *   - <field>_label  → a human label (use this in email dynamic fields)
 * Plus a coarse business_category for vertical-level segments/branches.
 */

export type Canon = { slug: string; label: string };
export type BusinessCanon = Canon & { category: "hospitality" | "retail" | "services" | "other" };

const norm = (v?: string) => (v ?? "").trim().toLowerCase();

const BUSINESS: Record<string, BusinessCanon> = {};
function regBiz(slug: string, label: string, category: BusinessCanon["category"], aliases: string[]) {
  const c: BusinessCanon = { slug, label, category };
  [slug, label, ...aliases].forEach((a) => (BUSINESS[norm(a)] = c));
}
regBiz("cafe", "Café", "hospitality", ["café", "cafe", "coffee shop"]);
regBiz("restaurant", "Restaurant", "hospitality", []);
regBiz("pub-bar", "Pub / bar", "hospitality", ["pub", "bar", "pub / bar", "pub-bar"]);
regBiz("takeaway", "Takeaway", "hospitality", ["takeaways"]);
regBiz("retail", "Retail shop", "retail", ["retail shop", "retail", "shop"]);
regBiz("market-stall", "Market stall", "retail", ["market stall", "market-stall", "market trader"]);
regBiz("salon", "Salon / barber", "services", ["salon / barber", "salon", "barber"]);
regBiz("tradesperson", "Tradesperson", "services", ["tradesman", "trades"]);
regBiz("mobile", "Mobile business", "services", ["mobile business", "mobile", "mobile trader"]);
regBiz("other", "Other", "other", []);

const TURNOVER: Record<string, Canon> = {};
function regTurn(slug: string, label: string, aliases: string[]) {
  const c: Canon = { slug, label };
  [slug, label, ...aliases].forEach((a) => (TURNOVER[norm(a)] = c));
}
regTurn("under-2k", "Under £2,000", ["under £2k", "under 2k", "under-2k"]);
regTurn("2k-10k", "£2,000–£10,000", ["£2k–£10k", "£2,000-£10,000", "2k-10k", "£2k-£10k"]);
regTurn("10k-30k", "£10,000–£30,000", ["£10k–£30k", "£10,000-£30,000", "10k-30k", "£10k-£30k"]);
regTurn("over-30k", "Over £30,000", ["over £30k", "over 30k", "over-30k"]);

const TURNOVER_VALUE: Record<string, number> = {
  "under-2k": 8,
  "2k-10k": 20,
  "10k-30k": 40,
  "over-30k": 70,
};

const PRIORITY: Record<string, Canon> = {};
function regPrio(slug: string, label: string, aliases: string[]) {
  const c: Canon = { slug, label };
  [slug, label, ...aliases].forEach((a) => (PRIORITY[norm(a)] = c));
}
regPrio("lowest-fees", "Lowest fees", ["cheapest fees", "lowest fees", "lowest-fees"]);
regPrio("no-contract", "No contract", ["no contract", "flexibility", "no-contract"]);
regPrio("fast-payouts", "Fast payouts", ["fast payouts", "same-day payouts"]);
regPrio("software", "Better POS software", ["better pos software", "software features", "software"]);
regPrio("simplicity", "Simple to use", ["just need simple payments", "simplicity", "simple"]);
regPrio("restaurant-features", "Restaurant features", ["restaurant features"]);
regPrio("retail-inventory", "Retail inventory", ["retail inventory"]);

export function normalizeBusiness(input?: string): BusinessCanon | undefined {
  return BUSINESS[norm(input)];
}
export function normalizeTurnover(input?: string): Canon | undefined {
  return TURNOVER[norm(input)];
}
export function normalizePriority(input?: string): Canon | undefined {
  if (!norm(input)) return undefined;
  return PRIORITY[norm(input)] ?? { slug: "other", label: input!.trim() };
}

/** Estimated £ value of a lead, keyed by canonical turnover slug. */
export function turnoverValue(input?: string): number {
  const slug = normalizeTurnover(input)?.slug;
  return slug ? (TURNOVER_VALUE[slug] ?? 15) : 15;
}

// Provider → our review URL (slug overrides for irregular names).
const PROVIDER_SLUG: Record<string, string> = {
  "paypal zettle": "zettle",
  zettle: "zettle",
  mypos: "mypos",
  sumup: "sumup",
  square: "square",
  dojo: "dojo",
  takepayments: "takepayments",
  tyl: "tyl",
};
function providerUrl(name: string): string {
  const slug = PROVIDER_SLUG[norm(name)] ?? norm(name).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `https://thepos.co.uk/reviews/${slug}`;
}

// Sensible default recommendation per vertical when we have no quiz/calc result.
const BIZ_DEFAULT_PROVIDER: Record<string, string> = {
  cafe: "Square",
  restaurant: "Dojo",
  "pub-bar": "Dojo",
  takeaway: "Square",
  retail: "Square",
  "market-stall": "SumUp",
  salon: "SumUp",
  tradesperson: "SumUp",
  mobile: "SumUp",
  other: "SumUp",
};

/** The provider we put front-and-centre in the welcome email.
 *  Priority: quiz top match → calculator cheapest → vertical default. */
export function recommendedProvider(opts: {
  quizTopMatch?: string;
  cheapestProvider?: string;
  businessSlug?: string;
}): { name: string; url: string } | undefined {
  const name =
    opts.quizTopMatch ||
    opts.cheapestProvider ||
    (opts.businessSlug ? BIZ_DEFAULT_PROVIDER[opts.businessSlug] : undefined);
  if (!name) return undefined;
  return { name, url: providerUrl(name) };
}
