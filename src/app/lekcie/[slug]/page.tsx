import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonPageTemplate } from "@/components/sections/LessonPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getAllLessonSlugs,
  getLessonBySlug,
  getOtherLessons,
} from "@/data/lesson-pages";
import { pageMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbSchema,
  buildLessonSchema,
  buildWebPageSchema,
} from "@/lib/seo";

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

  return pageMetadata({
    title: lesson.title,
    description: lesson.metaDescription,
    path,
    image: {
      url: lesson.image,
      alt: lesson.imageAlt,
      width: 960,
      height: 720,
    },
    keywords: [
      lesson.title,
      "Reformer Pilates Trebišov",
      "Lavande Studio",
      lesson.level,
    ],
  });
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  const otherLessons = getOtherLessons(slug);
  const path = `/lekcie/${lesson.slug}`;

  return (
    <>
      <JsonLd
        schema={[
          buildLessonSchema(lesson),
          buildWebPageSchema({
            path,
            name: lesson.title,
            description: lesson.metaDescription,
          }),
          buildBreadcrumbSchema([
            { name: "Domov", path: "/" },
            { name: lesson.title, path },
          ]),
        ]}
      />
      <LessonPageTemplate lesson={lesson} otherLessons={otherLessons} />
    </>
  );
}
