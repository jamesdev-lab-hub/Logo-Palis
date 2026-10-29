/**
 * Portfolio configuration.
 *
 * IMPORTANT: The projects below are DEMONSTRATION (concept) projects created to show
 * Logo Palace's design style. They are not real client work and are labeled "Concept project"
 * on the website. When you have real projects, add them here with `concept: false` and,
 * optionally, an `image` path to a file in /public (e.g. "/work/my-project.jpg").
 */

export type PortfolioCategory = "Branding" | "Websites" | "E-commerce" | "UI/UX" | "Graphic Design";

export type PortfolioProject = {
  slug: string;
  name: string;
  category: PortfolioCategory;
  services: string[];
  description: string;
  concept: boolean;
  /** Colors used to draw the illustrated mockup when no image is provided. */
  palette: { bg: string; fg: string; accent: string };
  mockup: "logo" | "browser" | "store" | "app" | "poster";
  /** Optional real screenshot/photo in /public. Replaces the illustrated mockup. */
  image?: string;
  featured?: boolean;
};

export const portfolioCategories: PortfolioCategory[] = [
  "Branding",
  "Websites",
  "E-commerce",
  "UI/UX",
  "Graphic Design",
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "harbor-roast",
    name: "Harbor Roast Coffee",
    category: "Branding",
    services: ["Custom Logo Design", "Brand Identity Design"],
    description: "A warm, hand-crafted identity concept for a neighborhood coffee roaster, from cup sleeves to signage.",
    concept: true,
    palette: { bg: "#2B1D16", fg: "#F6E7D3", accent: "#E8893B" },
    mockup: "logo",
    featured: true,
  },
  {
    slug: "summit-legal",
    name: "Summit Legal Group",
    category: "Websites",
    services: ["Custom Website Design", "Business Website Development"],
    description: "A calm, trustworthy multi-page website concept for a small law practice, focused on consultation requests.",
    concept: true,
    palette: { bg: "#0F2A3D", fg: "#EAF2F7", accent: "#5FB3E4" },
    mockup: "browser",
    featured: true,
  },
  {
    slug: "bloom-botanics",
    name: "Bloom Botanics",
    category: "E-commerce",
    services: ["Shopify Store Design", "Packaging Design"],
    description: "A fresh Shopify storefront and label system concept for an organic skincare brand.",
    concept: true,
    palette: { bg: "#E6F0E1", fg: "#1E3A26", accent: "#F28C8C" },
    mockup: "store",
    featured: true,
  },
  {
    slug: "pocket-fit",
    name: "PocketFit",
    category: "UI/UX",
    services: ["UI/UX Design"],
    description: "A clean mobile app interface concept for booking classes and tracking workouts.",
    concept: true,
    palette: { bg: "#17142B", fg: "#F1EEFF", accent: "#9B8CFF" },
    mockup: "app",
  },
  {
    slug: "golden-gate-eats",
    name: "Golden Gate Eats Festival",
    category: "Graphic Design",
    services: ["Marketing Materials", "Banner and Advertisement Design"],
    description: "A bold poster, banner, and social campaign concept for a local food festival.",
    concept: true,
    palette: { bg: "#FFD84D", fg: "#1C1C1C", accent: "#E5402E" },
    mockup: "poster",
  },
  {
    slug: "northline-hvac",
    name: "Northline HVAC",
    category: "Websites",
    services: ["Website Redesign", "Website Speed Optimization"],
    description: "A redesign concept for a home-services company, built around quick quotes and mobile calls to action.",
    concept: true,
    palette: { bg: "#F1F4F8", fg: "#10233F", accent: "#FF7A1A" },
    mockup: "browser",
  },
  {
    slug: "atlas-ventures",
    name: "Atlas Ventures",
    category: "Branding",
    services: ["Logo Redesign", "Brand Guidelines"],
    description: "A modern geometric logo refresh concept and guideline system for a startup investment firm.",
    concept: true,
    palette: { bg: "#EDEBE6", fg: "#141414", accent: "#2F6BFF" },
    mockup: "logo",
  },
  {
    slug: "maple-and-thread",
    name: "Maple & Thread",
    category: "E-commerce",
    services: ["E-commerce Website Development"],
    description: "An online boutique concept with lookbook-style product pages and a simple, focused checkout.",
    concept: true,
    palette: { bg: "#F7EDE4", fg: "#3A2418", accent: "#B5653B" },
    mockup: "store",
  },
  {
    slug: "brightpath-tutors",
    name: "BrightPath Tutors",
    category: "Graphic Design",
    services: ["Social Media Graphics", "Social Media Branding"],
    description: "A friendly social media template kit concept for an after-school tutoring service.",
    concept: true,
    palette: { bg: "#DFF3FF", fg: "#0D2B45", accent: "#FFB020" },
    mockup: "poster",
  },
];
