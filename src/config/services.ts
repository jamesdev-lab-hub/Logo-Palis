/**
 * Services configuration — edit service names, descriptions, and benefits here.
 * Used by the Services page, homepage, contact form dropdown, and footer.
 */
import type { LucideIcon } from "lucide-react";
import {
  Brush,
  RefreshCw,
  Shapes,
  BookOpen,
  IdCard,
  Printer,
  Share2,
  PanelsTopLeft,
  Building2,
  MousePointerClick,
  Globe,
  Store,
  ShoppingBag,
  Wand2,
  MonitorSmartphone,
  Wrench,
  Gauge,
  LayoutDashboard,
  PenTool,
  Image as ImageIcon,
  Megaphone,
  Package,
  RectangleHorizontal,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
  /** Pricing group this service most closely relates to, if any. */
  pricing?: "logo-design" | "website-development";
};

export type ServiceCategory = {
  id: string;
  title: string;
  intro: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "branding",
    title: "Branding and Logo Design",
    intro: "Logos and brand systems that make your business instantly recognizable and easy to trust.",
    services: [
      {
        slug: "custom-logo-design",
        title: "Custom Logo Design",
        description: "An original logo designed around your business, audience, and personality — never a template.",
        benefits: ["Unique to your business", "Works at every size", "Delivered in ready-to-use formats"],
        icon: Brush,
        pricing: "logo-design",
      },
      {
        slug: "logo-redesign",
        title: "Logo Redesign",
        description: "Modernize a dated logo while keeping the recognition you've already built with customers.",
        benefits: ["Keeps your existing equity", "Cleaner, more modern look", "Better on screens and print"],
        icon: RefreshCw,
        pricing: "logo-design",
      },
      {
        slug: "brand-identity-design",
        title: "Brand Identity Design",
        description: "A complete visual identity — logo, colors, type, and graphic style — that works together.",
        benefits: ["Consistent look everywhere", "Stronger first impression", "Easier marketing decisions"],
        icon: Shapes,
        pricing: "logo-design",
      },
      {
        slug: "brand-guidelines",
        title: "Brand Guidelines",
        description: "A clear guide that shows your team and vendors exactly how to use your brand correctly.",
        benefits: ["Protects brand consistency", "Speeds up future design work", "Easy to share with partners"],
        icon: BookOpen,
      },
      {
        slug: "business-card-design",
        title: "Business Card Design",
        description: "Polished, print-ready business cards that match your brand and leave a lasting impression.",
        benefits: ["Print-ready files", "Matches your identity", "Front and back designs"],
        icon: IdCard,
      },
      {
        slug: "stationery-design",
        title: "Stationery Design",
        description: "Letterheads, envelopes, invoices, and email signatures that keep every touchpoint on-brand.",
        benefits: ["Professional paperwork", "Consistent client experience", "Digital and print versions"],
        icon: Printer,
      },
      {
        slug: "social-media-branding",
        title: "Social Media Branding",
        description: "Profile images, cover art, and post templates that make your social accounts look cohesive.",
        benefits: ["Recognizable feed", "Reusable templates", "Sized for each platform"],
        icon: Share2,
      },
    ],
  },
  {
    id: "websites",
    title: "Website Design and Development",
    intro: "Fast, responsive websites designed to explain what you do and turn visitors into customers.",
    services: [
      {
        slug: "custom-website-design",
        title: "Custom Website Design",
        description: "A website designed from scratch around your brand, your customers, and your goals.",
        benefits: ["Original, on-brand design", "Clear user journeys", "Built to convert"],
        icon: PanelsTopLeft,
        pricing: "website-development",
      },
      {
        slug: "business-website-development",
        title: "Business Website Development",
        description: "Professional multi-page websites that present your services and make it easy to get in touch.",
        benefits: ["Credible online presence", "Simple content updates", "Contact forms included"],
        icon: Building2,
        pricing: "website-development",
      },
      {
        slug: "landing-page-design",
        title: "Landing Page Design",
        description: "Focused, single-goal pages for launches, ads, and campaigns that need results.",
        benefits: ["One clear call to action", "Ideal for paid ads", "Quick to launch"],
        icon: MousePointerClick,
        pricing: "website-development",
      },
      {
        slug: "wordpress-website-development",
        title: "WordPress Website Development",
        description: "Flexible WordPress websites you can update yourself, set up with only the plugins you need.",
        benefits: ["Easy to manage", "Huge plugin ecosystem", "Lightweight setup"],
        icon: Globe,
        pricing: "website-development",
      },
      {
        slug: "shopify-store-design",
        title: "Shopify Store Design",
        description: "Shopify storefronts customized to your brand with product pages that are easy to shop.",
        benefits: ["On-brand storefront", "Mobile-friendly checkout flow", "Product and collection setup"],
        icon: Store,
        pricing: "website-development",
      },
      {
        slug: "ecommerce-website-development",
        title: "E-commerce Website Development",
        description: "Online stores with product catalogs, carts, and payment setup on the platform that fits you.",
        benefits: ["Sell online around the clock", "Secure payment providers", "Scales with your catalog"],
        icon: ShoppingBag,
        pricing: "website-development",
      },
      {
        slug: "website-redesign",
        title: "Website Redesign",
        description: "Refresh an outdated website with a modern design, better structure, and clearer messaging.",
        benefits: ["Modern look and feel", "Improved navigation", "Content carried over carefully"],
        icon: Wand2,
        pricing: "website-development",
      },
      {
        slug: "responsive-website-development",
        title: "Responsive Website Development",
        description: "Websites that look and work great on phones, tablets, laptops, and large screens.",
        benefits: ["Mobile-first layouts", "Consistent on every device", "Better usability"],
        icon: MonitorSmartphone,
        pricing: "website-development",
      },
      {
        slug: "website-maintenance-and-support",
        title: "Website Maintenance and Support",
        description: "Ongoing updates, content changes, and fixes so your website stays healthy after launch.",
        benefits: ["Updates handled for you", "Help when something breaks", "Content edits on request"],
        icon: Wrench,
      },
      {
        slug: "website-speed-optimization",
        title: "Website Speed Optimization",
        description: "Find and fix what's slowing your site down, from heavy images to unnecessary scripts.",
        benefits: ["Faster page loads", "Better Core Web Vitals", "Smoother mobile experience"],
        icon: Gauge,
      },
    ],
  },
  {
    id: "digital-creative",
    title: "Digital and Creative Services",
    intro: "Design support for your product, your marketing, and everything in between.",
    services: [
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        description: "User-friendly interface designs and prototypes for websites, web apps, and mobile apps.",
        benefits: ["Clickable prototypes", "Clear, intuitive flows", "Developer-ready designs"],
        icon: LayoutDashboard,
      },
      {
        slug: "graphic-design",
        title: "Graphic Design",
        description: "Custom visuals for presentations, documents, infographics, and everyday business needs.",
        benefits: ["Consistent visual style", "Quick turnaround on small tasks", "Editable source files"],
        icon: PenTool,
      },
      {
        slug: "social-media-graphics",
        title: "Social Media Graphics",
        description: "Scroll-stopping posts, stories, and ad creatives designed to match your brand.",
        benefits: ["Sized for every platform", "On-brand templates", "Batch designs available"],
        icon: ImageIcon,
      },
      {
        slug: "marketing-materials",
        title: "Marketing Materials",
        description: "Flyers, brochures, menus, rack cards, and sales sheets that help you sell offline and online.",
        benefits: ["Print-ready files", "Clear, persuasive layouts", "Digital versions included"],
        icon: Megaphone,
      },
      {
        slug: "packaging-design",
        title: "Packaging Design",
        description: "Product labels and packaging artwork that stand out on the shelf and in product photos.",
        benefits: ["Shelf-ready artwork", "Built to your printer's specs", "Consistent product line"],
        icon: Package,
      },
      {
        slug: "banner-and-advertisement-design",
        title: "Banner and Advertisement Design",
        description: "Web banners, display ads, and print banners designed to grab attention and drive clicks.",
        benefits: ["Standard ad sizes", "Strong, clear messaging", "Variations for testing"],
        icon: RectangleHorizontal,
      },
    ],
  },
];

export const allServices: Service[] = serviceCategories.flatMap((c) => c.services);

/** Service names used by the contact form dropdown. */
export const serviceOptions: string[] = [...allServices.map((s) => s.title), "Not sure yet"];
