"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { OffsetCard } from "@/components/ui/OffsetCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionSection } from "@/components/ui/MotionSection";
import { individualPlan, pricingPlans } from "@/data/pricing";
import { siteConfig } from "@/data/site";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

export function PricingSection() {
  return (
    <MotionSection id="cennik" className="py-section-sm md:py-section">
      <Container>
        <SectionHeading
          eyebrow="CENNÍK"
          title="Vyber si tempo, ktoré ti vyhovuje."
          className="mb-12 md:mb-16"
        />

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {pricingPlans.map((plan) => (
            <motion.div key={plan.id} variants={fadeUp} transition={defaultTransition}>
              <OffsetCard className="flex h-full flex-col p-7 sm:p-8">
                {plan.recommended && (
                  <span className="mb-4 inline-flex w-fit rounded-pill bg-lavender-pale px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-lavender">
                    Najobľúbenejšie
                  </span>
                )}
                <h3 className="text-xl font-medium tracking-[-0.02em]">{plan.name}</h3>
                <p className="mt-2 text-sm text-text-muted">{plan.description}</p>
                <p className="mt-6 text-4xl font-medium tracking-[-0.03em] text-text-primary">
                  {plan.price}
                </p>
                {plan.promo && (
                  <p className="mt-2 inline-flex rounded-pill bg-lavender-pale px-3 py-1 text-sm font-medium text-lavender">
                    {plan.promo}
                  </p>
                )}

                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-lavender" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href={siteConfig.bookingUrl}
                  variant={plan.recommended ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </Button>
              </OffsetCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 md:mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={defaultTransition}
        >
          <OffsetCard
            offsetClassName="bg-lavender-soft/60"
            className="p-7 sm:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[1.55fr_1fr] lg:items-center lg:gap-12">
              <div>
                <span className="inline-flex w-fit rounded-pill bg-lavender-pale px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-lavender">
                  {individualPlan.badge}
                </span>
                <h3 className="mt-4 text-xl font-medium tracking-[-0.02em]">
                  {individualPlan.name}
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  {individualPlan.description}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {individualPlan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-lavender" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <p className="text-4xl font-medium tracking-[-0.03em] text-text-primary">
                  {individualPlan.price}
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  {individualPlan.priceNote}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {individualPlan.note}
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <Button href={siteConfig.bookingUrl} className="w-full">
                    {individualPlan.cta}
                  </Button>
                  <Button
                    href={individualPlan.href}
                    variant="secondary"
                    className="w-full"
                  >
                    {individualPlan.secondaryCta}
                  </Button>
                </div>
              </div>
            </div>
          </OffsetCard>
        </motion.div>
      </Container>
    </MotionSection>
  );
}
