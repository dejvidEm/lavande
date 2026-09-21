import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/sections/LegalPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { termsDocument } from "@/data/legal";
import { pageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo";

const path = `/${termsDocument.slug}`;

export const metadata: Metadata = pageMetadata({
  title: termsDocument.metaTitle,
  description: termsDocument.metaDescription,
  path,
  ogType: "article",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildWebPageSchema({
            path,
            name: termsDocument.title,
            description: termsDocument.metaDescription,
          }),
          buildBreadcrumbSchema([
            { name: "Domov", path: "/" },
            { name: termsDocument.title, path },
          ]),
        ]}
      />
      <LegalPageTemplate document={termsDocument} />
    </>
  );
}
