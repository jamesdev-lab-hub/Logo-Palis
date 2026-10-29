import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMeta = {
  title: string;
  description: string;
  path: string; // e.g. "/services"
};

/** Builds unique title, description, canonical, Open Graph, and Twitter metadata for a page. */
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const fullTitle = path === "/" ? title : `${title} | ${siteConfig.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: fullTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
