"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { LavenderBranch } from "@/components/brand/LavenderBranch";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HighlightedText } from "@/components/ui/HighlightedText";
import { MotionSection } from "@/components/ui/MotionSection";
import { StudioImage } from "@/components/ui/StudioImage";
import { leadInstructor } from "@/data/instructors";
import { siteConfig } from "@/data/site";
import { imageSizes } from "@/lib/images";
import { fadeUp, defaultTransition } from "@/lib/motion";

export function InstructorsSection() {
  const instructor = leadInstructor;

  return (
    <MotionSection id="lektorky" className="py-section-sm md:py-section">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          {/* Fotka vľavo — opačne než sekcia O nás */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={defaultTransition}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-card sm:aspect-[5/6] lg:min-h-[490px]">
              <StudioImage
                src={instructor.image}
                alt={instructor.imageAlt}
                objectPosition={instructor.objectPosition}
                sizes={imageSizes.split}
              />
              <div
                className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_bottom_left,rgba(38,37,38,0.58)_0%,rgba(38,37,38,0.22)_34%,transparent_62%)]"
                aria-hidden="true"
              />
            </div>

            <div className="absolute right-4 top-4 z-[2] flex flex-wrap justify-end gap-2.5 sm:right-6 sm:top-6 sm:gap-3">
              {instructor.courses.map((course) => (
                <span
                  key={course.id}
                  className="rounded-pill border border-white/25 bg-dark/55 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm sm:px-5 sm:py-2.5 sm:text-[15px]"
                >
                  {course.label}
                </span>
              ))}
            </div>

          </motion.div>

          {/* Info panel vpravo — iný štýl než gradient karta v O nás */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="order-1 flex flex-col justify-center lg:order-2"
          >
            <div className="relative overflow-hidden rounded-card border border-border bg-surface p-8 sm:p-10 lg:p-9 xl:p-10">
              <LavenderBranch
                className="absolute -right-2 top-6 h-28 w-16 text-lavender"
                opacity={0.12}
              />

              <Eyebrow className="mb-4">LEKTORKY</Eyebrow>
              <h2 className="text-balance text-[2rem] font-medium leading-[1.08] tracking-[-0.035em] text-text-primary sm:text-[2.375rem] lg:text-[2.5rem]">
                <HighlightedText
                  text="V bezpečných rukách od prvého pohybu."
                  highlight="bezpečných"
                />
              </h2>

              <div className="mt-6 border-b border-border pb-6">
                <h3 className="text-2xl font-medium tracking-[-0.02em] text-text-primary">
                  {instructor.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.12em] text-lavender">
                  {instructor.role}
                </p>
              </div>

              <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-[17px] sm:leading-[1.65]">
                {instructor.bio}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-border pt-6 lg:mt-7 lg:pt-7">
                {instructor.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-text-secondary"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lavender" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button href={siteConfig.bookingUrl} className="mt-7 lg:mt-8">
                Rezervovať lekciu u Alexandry
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </MotionSection>
  );
}
