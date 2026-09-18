import { MetadataRoute } from "next";
import { services } from "@/src/lib/services";
import { confirmedAreas } from "@/src/lib/areas";
import { absoluteUrl } from "@/src/lib/site";

export const dynamic = "force-static";

// Privacy and terms are noindex and stay out. Unconfirmed areas stay out
// until the owner confirms them (see areas.ts).
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/services"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: absoluteUrl("/service-areas"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...confirmedAreas.map((a) => ({
      url: absoluteUrl(`/service-areas/${a.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
