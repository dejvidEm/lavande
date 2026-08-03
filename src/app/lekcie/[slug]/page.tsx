import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonPageTemplate } from "@/components/sections/LessonPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getAllLessonSlugs,
  getLessonBySlug,
  getOtherLessons,
} from "@/data/lesson-pages";
import { siteConfig } from "@/data/site";
import { buildBreadcrumbSchema, buildLessonSchema } from "@/lib/seo";

type LessonPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllLessonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    return {
      title: "Lekcia sa nenašla",
      robots: { index: false, follow: true },
    };
  }

  const path = `/lekcie/${lesson.slug}`;

  return {
    title: lesson.title,
    description: lesson.metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${lesson.title} | ${siteConfig.name}`,
      description: lesson.metaDescription,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
      images: [
        {
          url: lesson.image,
          alt: lesson.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${lesson.title} | ${siteConfig.name}`,
      description: lesson.metaDescription,
      images: [lesson.image],
    },
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  const otherLessons = getOtherLessons(slug);

  return (
    <>
      <JsonLd
        schema={[
          buildLessonSchema(lesson),
          buildBreadcrumbSchema([
            { name: "Domov", path: "/" },
            { name: "Lekcie", path: "/#lekcie" },
            { name: lesson.title, path: `/lekcie/${lesson.slug}` },
          ]),
        ]}
      />
      <LessonPageTemplate lesson={lesson} otherLessons={otherLessons} />
    </>
  );
}
