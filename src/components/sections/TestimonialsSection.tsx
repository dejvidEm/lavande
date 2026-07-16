"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { MotionSection } from "@/components/ui/MotionSection";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <MotionSection className="py-section-sm md:py-section">
      <Container>
        <div className="overflow-hidden rounded-card bg-dark px-6 py-10 text-white grain-dark sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <SectionHeading
              eyebrow="SKÚSENOSTI KLIENTOK"
              title="Miesto, kde sa výsledky začínajú dobrým pocitom."
              titleClassName="text-white"
              className="[&_p:first-child]:text-white/50 [&_p:last-child]:text-white/70"
            />
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
