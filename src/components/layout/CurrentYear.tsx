import { cacheLife } from "next/cache";

/**
 * Current year for the copyright line. Cached and refreshed daily,
 * so it updates automatically on New Year's without a redeploy.
 */
export async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
