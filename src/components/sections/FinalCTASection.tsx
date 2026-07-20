"use client";

import { LavenderBranch } from "@/components/brand/LavenderBranch";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HighlightedText } from "@/components/ui/HighlightedText";
import { MotionSection } from "@/components/ui/MotionSection";
import { siteConfig } from "@/data/site";

export function FinalCTASection() {
  return (
    <MotionSection className="pb-section-sm md:pb-section">
      <Container>
        <div className="gradient-cta relative overflow-hidden rounded-card px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <LavenderBranch
            className="absolute -bottom-14 -right-8 h-72 w-40 text-lavender-soft sm:-bottom-16 sm:-right-10 sm:h-80 sm:w-44 lg:h-96 lg:w-52"
            opacity={0.12}
          />

          <div className="relative max-w-2xl rounded-[20px] border border-border bg-white/95 p-7 backdrop-blur-sm sm:p-9 lg:p-10">
            <Eyebrow className="mb-4 text-lavender-medium">TVOJ ČAS PRE SEBA</Eyebrow>
            <h2 className="text-balance text-[2rem] font-medium leading-[1.08] tracking-[-0.035em] text-text-primary sm:text-[2.75rem] lg:text-[3.25rem]">
              <HighlightedText
                text="Dopraj telu pohyb, po ktorom sa budeš cítiť lepšie."
                highlight="lepšie"
              />
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
