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
          className="mb-12 md:mb-16"
        />

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={fadeUp} transition={defaultTransition}>
              <OffsetCard
                offsetClassName={index === 1 ? "bg-lavender-soft/80" : undefined}
                className="min-h-[240px] bg-beige-light p-7 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="text-5xl font-medium tracking-[-0.04em] text-lavender/30">
                    {step.number}
                  </span>
                  <LavenderBranch className="h-14 w-8 text-lavender" opacity={0.2} />
                </div>
                <h3 className="mt-10 text-xl font-medium tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </OffsetCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </MotionSection>
  );
}
