import type { Metadata } from "next";

export const SITE_URL = "https://roadgunrepairs.com";
export const SITE_NAME = "Roadgun Mobile Repair";
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const PHONE_DISPLAY = "(910) 358-9027";
export const PHONE_HREF = "tel:+19103589027";

// Shared by the AutoRepair block in layout.tsx and every Service block.
export const AREA_SERVED = [
  { "@type": "City", name: "Jacksonville", containedInPlace: { "@type": "State", name: "North Carolina" } },
  { "@type": "City", name: "Holly Ridge", containedInPlace: { "@type": "State", name: "North Carolina" } },
  { "@type": "AdministrativeArea", name: "Onslow County", containedInPlace: { "@type": "State", name: "North Carolina" } },
  { "@type": "AdministrativeArea", name: "Craven County", containedInPlace: { "@type": "State", name: "North Carolina" } },
  { "@type": "AdministrativeArea", name: "Jones County", containedInPlace: { "@type": "State", name: "North Carolina" } },
];

/** Absolute URL with a trailing slash (next.config.ts sets trailingSlash: true). */
export function absoluteUrl(path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
}

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/hero-poster.jpg",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [image],
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
