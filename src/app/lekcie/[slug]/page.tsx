import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonPageTemplate } from "@/components/sections/LessonPageTemplate";
import {
  getAllLessonSlugs,
  getLessonBySlug,
  getOtherLessons,
} from "@/data/lesson-pages";
import { siteConfig } from "@/data/site";

type LessonPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllLessonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    return { title: "Lekcia nenájdená" };
  }

  return {
    title: `${lesson.title} | ${siteConfig.name}`,
    description: lesson.metaDescription,
    openGraph: {
      title: `${lesson.title} | ${siteConfig.name}`,
      description: lesson.metaDescription,
      locale: "sk_SK",
      type: "website",
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

  return <LessonPageTemplate lesson={lesson} otherLessons={otherLessons} />;
}
