"use client";

import { LavenderBranch } from "@/components/brand/LavenderBranch";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionSection } from "@/components/ui/MotionSection";
import { siteConfig } from "@/data/site";

export function FinalCTASection() {
  return (
    <MotionSection className="pb-section-sm md:pb-section">
      <Container>
        <div className="gradient-cta relative overflow-hidden rounded-card px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <LavenderBranch
            className="absolute -bottom-10 -right-4 h-56 w-32 text-lavender sm:h-64 sm:w-36"
            opacity={0.1}
          />

          <div className="relative max-w-2xl">
            <Eyebrow className="mb-4 text-lavender-medium">TVOJ ČAS PRE SEBA</Eyebrow>
            <h2 className="text-balance text-[2rem] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[2.75rem] lg:text-[3.25rem]">
              Dopraj telu pohyb, po ktorom sa budeš cítiť lepšie.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Rezervuj si prvú lekciu a spoznaj Lavande Studio vlastným tempom.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={siteConfig.bookingUrl}>Rezervovať lekciu</Button>
              <Button href={siteConfig.scheduleUrl} variant="secondary">
                Pozrieť rozvrh
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
