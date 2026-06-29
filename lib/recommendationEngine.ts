/* Quiz recommendation engine.
 * Pure, deterministic scoring over PROVIDERS. This is comparison guidance,
 * NOT financial advice - copy reflects that. */

import { PROVIDERS, type Provider } from "@/data/providers";

export type QuizAnswers = {
  businessType:
    | "cafe"
    | "restaurant"
    | "pub-bar"
    | "retail"
    | "salon"
    | "tradesperson"
    | "market-stall"
    | "takeaway"
    | "mobile"
    | "other";
  monthlyTurnover: "under-2k" | "2k-10k" | "10k-30k" | "over-30k";
  systemType: "card-reader" | "full-pos";
  avoidContracts: "yes" | "no" | "either";
  sellOnline: "yes" | "no";
  needInventory: "yes" | "no";
  needHospitality: "yes" | "no";
  fastPayouts: "yes" | "no";
  priority: "lowest-fees" | "simplicity" | "software" | "flexibility";
};

export type Recommendation = {
  provider: Provider;
  score: number;
  reasons: string[];
};

export type RecommendationResult = {
  bestOverall: Recommendation;
  cheapest: Recommendation;
  bestNoContract: Recommendation;
  bestForSoftware: Recommendation;
  bestAlternative: Recommendation;
  /** A single plain-English summary line. */
  summary: string;
};

const HOSPITALITY = new Set(["cafe", "restaurant", "pub-bar", "takeaway"]);

function scoreProvider(p: Provider, a: QuizAnswers): Recommendation {
  let score = p.editorialRating.overall * 2; // baseline quality
  const reasons: string[] = [];

  // Business-type fit
  if (HOSPITALITY.has(a.businessType)) {
    if (a.businessType === "restaurant" || a.businessType === "pub-bar") {
      if (p.supportsRestaurants) {
        score += 4;
        reasons.push("handles table/hospitality service");
      }
    } else if (p.supportsRestaurants || p.type !== "full-pos") {
      score += 2;
    }
  }
  if ((a.businessType === "retail" || a.businessType === "takeaway") && p.supportsRetail) {
    score += 2;
    reasons.push("good for retail-style selling");
  }
  if ((a.businessType === "market-stall" || a.businessType === "mobile" || a.businessType === "tradesperson") && p.supportsMobile) {
    score += 3;
    reasons.push("portable and mobile-friendly");
  }

  // System type
  if (a.systemType === "full-pos") {
    if (p.type === "full-pos" || p.type === "both") {
      score += 3;
      reasons.push("offers full POS software");
    } else {
      score -= 3;
    }
  } else {
    // just a card reader - penalise heavy full-POS-only systems
    if (p.type === "full-pos") score -= 4;
    if (p.hasNoMonthlyFee) {
      score += 2;
      reasons.push("simple reader with no monthly fee");
    }
  }

  // Contracts
  if (a.avoidContracts === "yes") {
    if (p.hasNoContractOption) {
      score += 4;
      reasons.push("no contract required");
    } else {
      score -= 5;
    }
  }

  // Online
  if (a.sellOnline === "yes" && p.supportsOnlinePayments) {
    score += 2;
    reasons.push("supports online payments");
  }

  // Inventory
  if (a.needInventory === "yes") {
    if (p.supportsInventory) {
      score += 3;
      reasons.push("includes inventory management");
    } else {
      score -= 3;
    }
  }

  // Hospitality features
  if (a.needHospitality === "yes") {
    if (p.supportsRestaurants) {
      score += 3;
      reasons.push("hospitality features (tables/tabs/tips)");
    } else {
      score -= 4;
    }
  }

  // Fast payouts
  if (a.fastPayouts === "yes") {
    if (p.fastPayouts) {
      score += 3;
      reasons.push("fast payouts");
    } else {
      score -= 1;
    }
  }

  // Turnover sensitivity: high volume favours quote-based; low volume favours no-fee
  if (a.monthlyTurnover === "under-2k" || a.monthlyTurnover === "2k-10k") {
    if (p.hasNoMonthlyFee) {
      score += 3;
      reasons.push("no monthly fee suits lower volumes");
    }
  } else if (a.monthlyTurnover === "over-30k") {
    if (!p.hasNoMonthlyFee) {
      score += 2;
      reasons.push("tailored rates can pay off at higher volumes");
    }
  }

  // Priority weighting
  switch (a.priority) {
    case "lowest-fees":
      score += p.editorialRating.value;
      break;
    case "simplicity":
      score += p.editorialRating.easeOfUse;
      break;
    case "software":
      score += p.editorialRating.features;
      break;
    case "flexibility":
      score += p.editorialRating.contractFlexibility;
      break;
  }

  return { provider: p, score: Math.round(score * 10) / 10, reasons: reasons.slice(0, 3) };
}

export function recommend(a: QuizAnswers): RecommendationResult {
  const scored = PROVIDERS.map((p) => scoreProvider(p, a)).sort((x, y) => y.score - x.score);

  const bestOverall = scored[0];
  const cheapest =
    [...scored].sort(
      (x, y) => y.provider.editorialRating.value - x.provider.editorialRating.value,
    )[0];
  const bestNoContract =
    scored.find((r) => r.provider.hasNoContractOption) ?? bestOverall;
  const bestForSoftware =
    [...scored].sort(
      (x, y) => y.provider.editorialRating.features - x.provider.editorialRating.features,
    )[0];
  const bestAlternative =
    scored.find((r) => r.provider.slug !== bestOverall.provider.slug) ?? scored[1];

  const summary = `Based on your answers, ${bestOverall.provider.name} looks like the strongest overall fit${
    bestOverall.reasons.length ? ` - ${bestOverall.reasons.join(", ")}` : ""
  }. ${cheapest.provider.name} is worth a look if keeping costs down is the priority. This is comparison guidance, not financial advice - always check provider terms before signing.`;

  return { bestOverall, cheapest, bestNoContract, bestForSoftware, bestAlternative, summary };
}
