/* Estimated £ value per lead — used for GA4 `value` params and Klaviyo scoring.
 * Tune these as real EPC / lead-sale data comes in. */

const TURNOVER_VALUE: Record<string, number> = {
  "Under £2,000": 8,
  "£2,000–£10,000": 20,
  "£10,000–£30,000": 40,
  "Over £30,000": 70,
};

/** Rough value of a captured lead, by monthly card turnover band. */
export function leadValue(monthlyTurnover?: string): number {
  if (!monthlyTurnover) return 15;
  return TURNOVER_VALUE[monthlyTurnover] ?? 15;
}
