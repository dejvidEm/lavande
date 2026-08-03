import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/sections/LegalPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { privacyDocument } from "@/data/legal";
import { ogImage, siteConfig } from "@/data/site";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: privacyDocument.metaTitle,
  description: privacyDocument.metaDescription,
  alternates: {
    canonical: `/${privacyDocument.slug}`,
  },
  openGraph: {
    title: `${privacyDocument.metaTitle} | ${siteConfig.name}`,
    description: privacyDocument.metaDescription,
    url: `/${privacyDocument.slug}`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "article",
    images: [{ ...ogImage }],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Domov", path: "/" },
          { name: privacyDocument.title, path: `/${privacyDocument.slug}` },
        ])}
      />
      <LegalPageTemplate document={privacyDocument} />
    </>
  );
}
