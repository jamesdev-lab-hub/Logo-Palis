/**
 * Discount spin-wheel configuration — everything about the promotion lives here.
 *
 * HOW THE WHEEL WORKS
 * - Each spin picks one of the segments below at random (crypto.getRandomValues),
 *   with equal odds unless you change `weight`.
 * - The coupon code is generated in the browser. It is a PROMOTIONAL REQUEST CODE,
 *   not a validated payment coupon. The customer shares it when requesting a quote,
 *   and you confirm the discount manually before purchase.
 */

export type DiscountSegment = {
  value: number; // percent
  label: string;
  color: string; // segment background
  textColor: string; // segment label color
  weight?: number; // relative odds, default 1
};

export const promoConfig = {
  /** Turn the popup off completely by setting this to false. */
  enabled: true,
  /** Delay before the popup appears on an eligible visit (milliseconds). */
  delayMs: 9000,
  /** After "No Thanks" or close, wait this many days before showing it again. */
  snoozeDays: 14,
  /** Change this key to reset the popup for every visitor (e.g. when launching a new promo). */
  storageKey: "logo-Palace-promo-v1",
  /** Prefix for the generated promotional request code. */
  codePrefix: "LP",
  /** Routes where the popup should never appear. */
  excludedPaths: ["/terms-and-conditions", "/privacy-policy", "/cookie-policy"],
  /** Spin animation length (ms). Reduced-motion users get a short version automatically. */
  spinDurationMs: 5200,
  rules: [
    "The promotion applies to eligible services only.",
    "Discounts cannot be combined unless explicitly permitted.",
    "The discount must be confirmed by Logo Palace before purchase.",
    "Additional eligibility restrictions may apply.",
  ],
} as const;

export const discountSegments: DiscountSegment[] = [
  { value: 10, label: "10% OFF", color: "#FF5A1F", textColor: "#111214" },
  { value: 15, label: "15% OFF", color: "#111214", textColor: "#F5F2EC" },
  { value: 20, label: "20% OFF", color: "#C7F36B", textColor: "#111214" },
  { value: 25, label: "25% OFF", color: "#2E2F35", textColor: "#F5F2EC" },
  { value: 30, label: "30% OFF", color: "#FFC93C", textColor: "#111214" },
  { value: 35, label: "35% OFF", color: "#6E56CF", textColor: "#FFFFFF" },
  { value: 40, label: "40% OFF", color: "#F5F2EC", textColor: "#111214" },
];
