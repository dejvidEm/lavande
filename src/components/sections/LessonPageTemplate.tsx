"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { LavenderBranch } from "@/components/brand/LavenderBranch";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { OffsetCard } from "@/components/ui/OffsetCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { LessonPage } from "@/data/lesson-pages";
import { siteConfig } from "@/data/site";
import { fadeUp, defaultTransition } from "@/lib/motion";

type LessonPageTemplateProps = {
  lesson: LessonPage;
  otherLessons: LessonPage[];
};

export function LessonPageTemplate({
  lesson,
  otherLessons,
}: LessonPageTemplateProps) {
  return (
    <>
      <section className="pb-8 pt-6 md:pb-10 md:pt-8">
        <Container>
          <Link
            href="/#lekcie"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition hover:text-lavender"
          >
            <ArrowLeft className="h-4 w-4" />
            Späť na lekcie
          </Link>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={defaultTransition}
            >
              <Eyebrow className="mb-4">{lesson.eyebrow}</Eyebrow>
              <h1 className="text-balance text-[2.25rem] font-medium leading-[1.06] tracking-[-0.04em] text-text-primary sm:text-[2.75rem] lg:text-[3.25rem]">
                {lesson.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-text-secondary">
                {lesson.intro}
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-[17px] sm:leading-[1.65]">
                {lesson.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-pill border border-border bg-surface px-4 py-2 text-sm text-text-secondary">
                  <Clock className="h-4 w-4 text-lavender" />
                  {lesson.duration}
                </span>
                <span className="inline-flex items-center gap-2 rounded-pill border border-border bg-surface px-4 py-2 text-sm text-text-secondary">
                  <Users className="h-4 w-4 text-lavender" />
                  {lesson.groupSize}
                </span>
                <span className="inline-flex rounded-pill border border-lavender-soft bg-lavender-pale/60 px-4 py-2 text-sm text-text-primary">
                  {lesson.level}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={siteConfig.bookingUrl}>Rezervovať lekciu</Button>
                <Button href="/#cennik" variant="secondary">
                  Pozrieť cenník
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.1 }}
              className="relative overflow-hidden rounded-card"
            >
              <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:min-h-[420px]">
                <Image
                  src={lesson.image}
                  alt={lesson.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  style={{ objectPosition: lesson.objectPosition }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-section-sm md:py-section">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={defaultTransition}
            >
              <SectionHeading
                eyebrow="ČO ŤA ČAKÁ"
                title="Lekcia s dôrazom na techniku a pocit."
              />
              <ul className="mt-8 space-y-4">
                {lesson.sessionFocus.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-text-secondary"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lavender" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.08 }}
              className="gradient-about rounded-card p-8 sm:p-10"
            >
              <SectionHeading
                eyebrow="PRE KOHO"
                title="Kto si túto lekciu zamiluje."
              />
              <ul className="mt-8 space-y-4">
                {lesson.forWhom.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-text-secondary"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lavender" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="pb-section-sm md:pb-section">
        <Container>
          <SectionHeading
            eyebrow="PRÍNOSY"
            title="Čo ti pravidelná prax prinesie."
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {lesson.benefits.map((benefit, index) => (
              <OffsetCard
                key={benefit}
                offsetClassName={index % 2 === 1 ? "bg-lavender-soft/70" : undefined}
                className="p-6 sm:p-7"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lavender-pale text-sm font-medium text-lavender">
                    {index + 1}
                  </span>
                  <p className="text-[15px] leading-relaxed text-text-secondary">
                    {benefit}
                  </p>
                </div>
              </OffsetCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-section-sm md:pb-section">
        <Container>
          <div className="gradient-cta relative overflow-hidden rounded-card px-6 py-10 sm:px-10 sm:py-12">
            <LavenderBranch
              className="absolute -bottom-8 -right-4 h-48 w-28 text-lavender sm:h-56 sm:w-32"
              opacity={0.1}
            />
            <div className="relative max-w-2xl">
              <Eyebrow className="mb-4 text-lavender-medium">PRIPRAVENÁ ZAČAŤ?</Eyebrow>
              <h2 className="text-balance text-[1.75rem] font-medium leading-[1.1] tracking-[-0.035em] sm:text-[2.25rem]">
                Rezervuj si {lesson.title.toLowerCase()} vo Lavande.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                {lesson.highlights[0]}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={siteConfig.bookingUrl}>Rezervovať lekciu</Button>
                <Button href="/#lekcie" variant="secondary">
                  Ďalšie lekcie
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {otherLessons.length > 0 && (
        <section className="pb-section-sm md:pb-section">
          <Container>
            <SectionHeading
              eyebrow="ĎALŠIE LEKCIE"
              title="Preskúmaj aj ostatné formy cvičenia."
              className="mb-10"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherLessons.map((other) => (
                <Link
                  key={other.slug}
                  href={`/lekcie/${other.slug}`}
                  className="group flex items-center justify-between rounded-card-sm border border-border bg-surface px-5 py-4 transition hover:border-lavender-soft hover:bg-lavender-pale/30"
                >
                  <span className="font-medium text-text-primary">{other.title}</span>
                  <ArrowUpRight className="h-4 w-4 text-lavender transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
