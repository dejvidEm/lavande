import type { Metadata } from "next";
import { ogImage, siteConfig } from "@/data/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt: string;
  };
  robots?: Metadata["robots"];
  ogType?: "website" | "article";
  keywords?: string[];
};

export function languageAlternates(path: string): NonNullable<
  Metadata["alternates"]
>["languages"] {
  return {
    "sk-SK": path,
    "x-default": path,
  };
}

export function pageMetadata({
  title,
  description,
  path,
  image = ogImage,
  robots,
  ogType = "website",
  keywords,
}: PageMetaInput): Metadata {
  const ogTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: path,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: ogType,
      images: [
        {
          url: image.url,
          alt: image.alt,
          ...(image.width ? { width: image.width } : {}),
          ...(image.height ? { height: image.height } : {}),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image.url],
    },
    ...(robots ? { robots } : {}),
  };
}
