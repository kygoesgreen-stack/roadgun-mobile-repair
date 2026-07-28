import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: "https://roadgunrepairs.com/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://roadgunrepairs.com/privacy-policy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://roadgunrepairs.com/terms",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
