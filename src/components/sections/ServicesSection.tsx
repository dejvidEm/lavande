"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { LavenderBranch } from "@/components/brand/LavenderBranch";
import { Container } from "@/components/layout/Container";
import { OffsetCard } from "@/components/ui/OffsetCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionSection } from "@/components/ui/MotionSection";
import { services } from "@/data/services";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

export function ServicesSection() {
  return (
    <MotionSection id="lekcie" className="py-section-sm md:py-section">
      <Container>
        <SectionHeading
          eyebrow="NAŠE LEKCIE"
          title="Pohyb prispôsobený tvojmu telu."
          description="Od prvého stretnutia až po pravidelný tréning. Vyber si formu lekcie, pri ktorej sa budeš cítiť prirodzene a bezpečne."
          className="mb-12 md:mb-16"
        />

        <motion.div
          className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={fadeUp} transition={defaultTransition}>
                <OffsetCard className="flex min-h-[320px] flex-col p-7 sm:min-h-[340px] sm:p-8">
                  <div className="mb-auto flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lavender-pale text-lavender transition-transform duration-premium group-hover:rotate-2">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <LavenderBranch className="h-16 w-10 text-lavender" opacity={0.18} />
                  </div>

                  <div className="mt-16">
                    <h3 className="text-xl font-medium tracking-[-0.02em] text-text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                      {service.description}
                    </p>
                    <Link
                      href={`/lekcie/${service.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-lavender transition hover:text-lavender-medium"
                    >
                      Zistiť viac
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </OffsetCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </MotionSection>
  );
}
