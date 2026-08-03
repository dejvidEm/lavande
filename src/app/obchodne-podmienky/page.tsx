import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/sections/LegalPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { termsDocument } from "@/data/legal";
import { ogImage, siteConfig } from "@/data/site";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: termsDocument.metaTitle,
  description: termsDocument.metaDescription,
  alternates: {
    canonical: `/${termsDocument.slug}`,
  },
  openGraph: {
    title: `${termsDocument.metaTitle} | ${siteConfig.name}`,
    description: termsDocument.metaDescription,
    url: `/${termsDocument.slug}`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "article",
    images: [{ ...ogImage }],
  },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Domov", path: "/" },
          { name: termsDocument.title, path: `/${termsDocument.slug}` },
        ])}
      />
      <LegalPageTemplate document={termsDocument} />
    </>
  );
}
