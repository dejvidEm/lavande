"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionSection } from "@/components/ui/MotionSection";
import { siteImages } from "@/data/site";
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
            <Button href="/#o-nas" variant="outline" className="mt-8">
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
              <Image
                src={siteImages.about.main}
                alt="Inštruktorka cvičí Reformer Pilates v minimalistickom štúdiu Lavande."
                fill
                className="object-cover"
                style={{ objectPosition: "center 25%" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute right-3 top-4 max-w-[240px] rounded-[20px] border border-white/20 bg-dark/88 p-4 text-white backdrop-blur-md sm:right-6 sm:top-6 sm:p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={siteImages.about.avatar}
                    alt="Portrét klientky"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center 30%" }}
                    sizes="40px"
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
