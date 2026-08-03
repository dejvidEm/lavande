import type { MetadataRoute } from "next";
import { getAllLessonSlugs } from "@/data/lesson-pages";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...getAllLessonSlugs().map((slug) => ({
      url: absoluteUrl(`/lekcie/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: absoluteUrl("/obchodne-podmienky"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/ochrana-osobnych-udajov"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
