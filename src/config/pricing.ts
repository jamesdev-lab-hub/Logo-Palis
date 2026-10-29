/**
 * Pricing configuration — edit prices, deliverables, and limitations here.
 * Every price on the site (home preview + pricing page) reads from this file.
 */

export type PricingPackage = {
  id: string;
  name: string;
  price: number; // USD, starting price
  summary: string;
  bestFor: string;
  deliverables: string[];
  limitations: string[];
  featured?: boolean;
  /** Service name pre-selected on the contact form when this package's button is clicked. */
  service: string;
};

export type PricingGroup = {
  id: string;
  title: string;
  description: string;
  packages: PricingPackage[];
};

export const currency = "USD";

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export const pricingGroups: PricingGroup[] = [
  {
    id: "logo-design",
    title: "Logo Design Packages",
    description: "A professional mark for your business, from a simple start to a fuller identity kit.",
    packages: [
      {
        id: "basic-logo",
        name: "Basic Logo",
        price: 49,
        summary: "A clean, simple logo for a new idea or side business.",
        bestFor: "Individuals, side projects, and early-stage ideas",
        deliverables: [
          "Short design questionnaire",
          "Initial logo concepts for review",
          "Revision rounds as agreed in your quote",
          "Final logo in PNG and JPG",
          "Transparent-background version",
        ],
        limitations: [
          "Vector source files not included",
          "Brand guidelines not included",
        ],
        service: "Custom Logo Design",
      },
      {
        id: "standard-logo",
        name: "Standard Logo",
        price: 99,
        summary: "A more developed logo with the file formats most businesses need.",
        bestFor: "Startups and small businesses getting ready to launch",
        deliverables: [
          "Design questionnaire and short discovery call",
          "Additional logo concepts for review",
          "Revision rounds as agreed in your quote",
          "Vector source files (SVG, PDF)",
          "Full-color, black, and white versions",
          "Social media profile image",
        ],
        limitations: ["Full brand guidelines not included"],
        featured: true,
        service: "Custom Logo Design",
      },
      {
        id: "premium-logo",
        name: "Premium Logo",
        price: 199,
        summary: "A logo plus the starter brand assets to use it consistently.",
        bestFor: "Businesses that want a complete, ready-to-use identity kit",
        deliverables: [
          "Discovery call and competitor review",
          "Expanded set of logo concepts",
          "Revision rounds as agreed in your quote",
          "Primary logo, secondary logo, and icon mark",
          "Color palette and font recommendations",
          "One-page brand style sheet",
          "Business card design",
        ],
        limitations: ["Printing costs are not included"],
        service: "Brand Identity Design",
      },
    ],
  },
  {
    id: "website-development",
    title: "Website Development Packages",
    description: "Responsive websites built to look professional and turn visitors into inquiries.",
    packages: [
      {
        id: "starter-website",
        name: "Starter Website",
        price: 299,
        summary: "A focused one-page site to get your business online.",
        bestFor: "New businesses, freelancers, and single-offer landing pages",
        deliverables: [
          "One-page responsive website",
          "Up to 5 content sections",
          "Contact form setup",
          "Basic on-page SEO (titles and descriptions)",
          "Launch support",
        ],
        limitations: [
          "Domain, hosting, and paid plugins are billed separately",
          "Copywriting is not included",
        ],
        service: "Business Website Development",
      },
      {
        id: "business-website",
        name: "Business Website",
        price: 599,
        summary: "A multi-page website for an established small business.",
        bestFor: "Small businesses that need to present several services",
        deliverables: [
          "Up to 5 responsive pages",
          "Custom design based on your brand",
          "Contact form and Google Maps embed",
          "Basic on-page SEO setup",
          "Speed and mobile checks before launch",
          "Short walkthrough of how to edit your content",
        ],
        limitations: [
          "Domain, hosting, and paid plugins are billed separately",
          "E-commerce features are quoted separately",
        ],
        featured: true,
        service: "Custom Website Design",
      },
      {
        id: "premium-website",
        name: "Premium Website",
        price: 999,
        summary: "A larger custom website with room for more pages and features.",
        bestFor: "Growing businesses and online stores that need more",
        deliverables: [
          "Up to 10 responsive pages",
          "Fully custom design and UI",
          "Blog or small product catalog setup",
          "Basic on-page SEO setup",
          "Performance optimization",
          "Analytics setup on request",
          "Launch support",
        ],
        limitations: [
          "Domain, hosting, and paid apps or plugins are billed separately",
          "Large catalogs and custom integrations are quoted separately",
        ],
        service: "E-commerce Website Development",
      },
    ],
  },
];

export const pricingDisclaimer =
  "Prices shown are starting prices in USD. Your final price depends on your project's scope and requirements, and we confirm it in a written quote before any work begins.";
