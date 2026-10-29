/**
 * Central brand + site configuration.
 * Edit brand details here and they update across the whole website.
 */

function resolveSiteUrl(): string {
  // 1. Set NEXT_PUBLIC_SITE_URL to your final domain (e.g. https://www.yourdomain.com).
  // 2. On Vercel, the production URL is used automatically if (1) is not set.
  // 3. Falls back to localhost for local development.
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Logo Palace",
  shortDescription:
    "Logo design, branding, and website development for US entrepreneurs, startups, and small businesses.",
  description:
    "Logo Palace is a San Francisco–based digital agency creating custom logos, brand identities, and conversion-focused websites for entrepreneurs, startups, and growing US businesses.",
  url: resolveSiteUrl(),
  email: "jamesbuilds.dev@gmail.com",
  location: "San Francisco, California, USA",
  facebook: "https://www.facebook.com/logo_Palace",
  instagram: "https://www.instagram.com/logo_Palace",
  github: "https://github.com/logo-Palace",
  locale: "en_US",
} as const;

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNav = [
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/faq", label: "FAQ" },
] as const;

/** Date shown as "Last updated" on the legal pages. Change it whenever you edit a policy. */
export const legalLastUpdated = "October 27, 2026";
