"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionSection } from "@/components/ui/MotionSection";
import { benefits } from "@/data/benefits";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

export function BenefitsSection() {
  return (
    <MotionSection className="py-section-sm md:py-section">
      <Container>
        <SectionHeading
          eyebrow="PREČO LAVANDE"
          title="Viac než cvičenie. Priestor, kam sa budeš rada vracať."
          highlight="vracať"
          className="mb-12 md:mb-16"
        />

        <motion.div
          className="grid grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {benefits.map((benefit) => (
            <motion.article
              key={benefit.id}
              variants={fadeUp}
              transition={defaultTransition}
              className="group relative overflow-hidden rounded-card-sm"
            >
              <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                <Image
                  src={benefit.image}
                  alt={benefit.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  style={{ objectPosition: benefit.objectPosition }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>
              <div className="absolute inset-x-2 bottom-2 rounded-[16px] border border-white/40 bg-white/90 p-3 backdrop-blur-[2px] sm:inset-x-4 sm:bottom-4 sm:rounded-[20px] sm:p-6">
                <h3 className="text-sm font-medium tracking-[-0.02em] text-text-primary sm:text-lg">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 min-h-[2.5rem] text-xs leading-relaxed text-text-secondary sm:mt-2 sm:min-h-[2.875rem] sm:text-sm">
                  {benefit.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </MotionSection>
  );
}
