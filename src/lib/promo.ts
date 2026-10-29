import { discountSegments, promoConfig, type DiscountSegment } from "@/config/discounts";

export type StoredPromo =
  | { status: "dismissed"; until: number }
  | { status: "spun"; value: number; code: string; at: number };

export function readPromo(): StoredPromo | null {
  try {
    const raw = window.localStorage.getItem(promoConfig.storageKey);
    return raw ? (JSON.parse(raw) as StoredPromo) : null;
  } catch {
    return null;
  }
}

export function writePromo(value: StoredPromo) {
  try {
    window.localStorage.setItem(promoConfig.storageKey, JSON.stringify(value));
  } catch {
    /* storage unavailable (private mode etc.) — popup simply may show again */
  }
}

/** Cryptographically strong random float in [0, 1). Falls back to Math.random if crypto is unavailable. */
export function secureRandom(): number {
  if (typeof crypto !== "undefined" && "getRandomValues" in crypto) {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    return buf[0] / 2 ** 32;
  }
  return Math.random();
}

/** Picks a segment index at random, honoring optional weights. */
export function pickSegmentIndex(segments: DiscountSegment[] = discountSegments): number {
  const weights = segments.map((s) => s.weight ?? 1);
  const total = weights.reduce((a, b) => a + b, 0);
  let roll = secureRandom() * total;
  for (let i = 0; i < weights.length; i++) {
    roll -= weights[i];
    if (roll < 0) return i;
  }
  return segments.length - 1;
}

const CODE_CHARS = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

/**
 * Generates a unique-looking promotional request code, e.g. "LP20-K7Q2MX".
 * NOTE: This code is generated in the browser and is NOT validated by any payment system.
 * Logo Palace confirms the discount manually when the customer requests a quote.
 */
export function generatePromoCode(value: number): string {
  let suffix = "";
  for (let i = 0; i < 6; i++) suffix += CODE_CHARS[Math.floor(secureRandom() * CODE_CHARS.length)];
  return `${promoConfig.codePrefix}${value}-${suffix}`;
}
