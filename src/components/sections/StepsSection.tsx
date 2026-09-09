"use client";

import { motion } from "framer-motion";
import { LavenderBranch } from "@/components/brand/LavenderBranch";
import { Container } from "@/components/layout/Container";
import { OffsetCard } from "@/components/ui/OffsetCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionSection } from "@/components/ui/MotionSection";
import { steps } from "@/data/steps";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

export function StepsSection() {
  return (
    <MotionSection className="py-section-sm md:py-section">
      <Container>
        <SectionHeading
          eyebrow="TVOJA PRVÁ LEKCIA"
          title="Začať je jednoduchšie, než si myslíš."
          highlight="jednoduchšie"
          className="mb-12 md:mb-16"
        />

        <div className="relative">
          <div
            className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-[38%] z-0 hidden md:block"
            aria-hidden="true"
          >
            <div className="h-px w-full bg-lavender-soft" />
            <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lavender-soft bg-surface" />
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lavender-soft bg-surface" />
            <div className="absolute right-0 top-1/2 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full border border-lavender-soft bg-surface" />
          </div>

          <motion.div
            className="relative z-10 grid gap-5 md:grid-cols-3 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {steps.map((step) => (
              <motion.div key={step.number} variants={fadeUp} transition={defaultTransition}>
                <OffsetCard
                  className="relative min-h-[210px] overflow-hidden bg-beige-light p-6 sm:min-h-[220px] sm:p-7"
                >
                  <LavenderBranch
                    className="pointer-events-none absolute -right-10 -top-8 h-56 w-[7.75rem] text-lavender-soft sm:-right-12 sm:-top-10 sm:h-[17rem] sm:w-40 lg:-right-14 lg:-top-12 lg:h-[20rem] lg:w-[9rem]"
                    opacity={0.19}
                  />

                  <div className="relative z-10">
                    <span className="text-4xl font-medium tracking-[-0.04em] text-lavender/35 sm:text-[2.75rem]">
                      {step.number}
                    </span>
                    <h3 className="mt-7 text-lg font-medium tracking-[-0.02em] sm:mt-8 sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </OffsetCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </MotionSection>
  );
}
