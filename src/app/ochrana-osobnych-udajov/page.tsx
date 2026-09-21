import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/sections/LegalPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { privacyDocument } from "@/data/legal";
import { pageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo";

const path = `/${privacyDocument.slug}`;

export const metadata: Metadata = pageMetadata({
  title: privacyDocument.metaTitle,
  description: privacyDocument.metaDescription,
  path,
  ogType: "article",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildWebPageSchema({
            path,
            name: privacyDocument.title,
            description: privacyDocument.metaDescription,
          }),
          buildBreadcrumbSchema([
            { name: "Domov", path: "/" },
            { name: privacyDocument.title, path },
          ]),
        ]}
      />
      <LegalPageTemplate document={privacyDocument} />
    </>
  );
}
