import type { MetadataRoute } from "next";
import { lessonPages } from "@/data/lesson-pages";
import { ogImage, siteImages } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        absoluteUrl(ogImage.url),
        absoluteUrl(siteImages.instructors.alexandra),
        absoluteUrl(siteImages.about.main),
      ],
    },
    ...lessonPages.map((lesson) => ({
      url: absoluteUrl(`/lekcie/${lesson.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: [absoluteUrl(lesson.image)],
    })),
    {
      url: absoluteUrl("/obchodne-podmienky"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: absoluteUrl("/ochrana-osobnych-udajov"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
