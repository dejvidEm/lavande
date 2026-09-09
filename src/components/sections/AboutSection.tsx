"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionSection } from "@/components/ui/MotionSection";
import { AvatarImage } from "@/components/ui/AvatarImage";
import { StudioImage } from "@/components/ui/StudioImage";
import { siteImages } from "@/data/site";
import { imageSizes } from "@/lib/images";
import { fadeUp, defaultTransition } from "@/lib/motion";

export function AboutSection() {
  return (
    <MotionSection id="o-nas" className="py-section-sm md:py-section">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={defaultTransition}
            className="gradient-about rounded-card p-8 sm:p-10 lg:p-12 xl:p-14"
          >
            <SectionHeading
              eyebrow="O ŠTÚDIU"
              title="Pohyb, pri ktorom sa nemusíš nikam ponáhľať."
              highlight="ponáhľať"
              description="Lavande Studio vzniklo ako pokojný priestor pre ženy, ktoré chcú budovať silu vedome, bezpečne a s rešpektom k vlastnému telu. Každú lekciu vedieme s dôrazom na techniku, dych a pocit, s ktorým zo štúdia odchádzaš."
            />
            <Button href="/#lektorky" variant="outline" className="mt-8">
              Spoznaj Lavande
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-card sm:aspect-[5/6] lg:min-h-[560px]">
              <StudioImage
                src={siteImages.about.main}
                alt="Dve klientky cvičia spolu na reformeroch v štúdiu Lavande."
                objectPosition="center 45%"
                sizes={imageSizes.split}
              />
              <div
                className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_bottom_left,rgba(38,37,38,0.58)_0%,rgba(38,37,38,0.22)_34%,transparent_62%)]"
                aria-hidden="true"
              />
            </div>

            <div className="absolute right-3 top-4 z-[2] max-w-[240px] rounded-[20px] border border-white/20 bg-dark/88 p-4 text-white backdrop-blur-md sm:right-6 sm:top-6 sm:p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <AvatarImage
                    src={siteImages.about.avatar}
                    alt="Klientka pri cvičení v štúdiu Lavande"
                    className="object-cover object-[center_40%]"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">Katarína P.</p>
                  <p className="text-xs text-white/60">Klientka Lavande</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/80">
                „Po lekcii sa cítim silnejšia, ale zároveň pokojnejšia. Presne
                taký pohyb som dlho hľadala.”
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </MotionSection>
  );
}
