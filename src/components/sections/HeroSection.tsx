"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { LavenderBranch } from "@/components/brand/LavenderBranch";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { heroStats, siteConfig, siteImages } from "@/data/site";
import { fadeUp, defaultTransition } from "@/lib/motion";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="pb-8 pt-4 md:pb-12 md:pt-6">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={prefersReducedMotion ? { duration: 0.01 } : defaultTransition}
          className="relative overflow-hidden rounded-[32px]"
        >
          <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] xl:min-h-[740px]">
            <Image
              src={siteImages.heroBackground}
              alt="Žena cvičí jemný strečing v teplom svetle minimalistického Pilates štúdia."
              fill
              priority
              unoptimized
              className="object-cover object-[center_65%] sm:object-[center_60%]"
              sizes="100vw"
            />

            {/* jemný tieň v hornej tretine pre lepšiu čitateľnosť textu */}
            <div
              className="absolute inset-x-0 top-0 h-[38%] bg-gradient-to-b from-dark/45 via-dark/18 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-dark/40 via-dark/10 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent"
              aria-hidden="true"
            />

            <div className="relative z-10 flex h-full min-h-[580px] flex-col justify-between p-6 sm:min-h-[640px] sm:p-8 lg:min-h-[700px] lg:p-10 xl:min-h-[740px] xl:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12 xl:gap-16">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0.01 }
                      : { ...defaultTransition, delay: 0.08 }
                  }
                >
                  <h1 className="text-balance text-[2rem] font-medium leading-[1.06] tracking-[-0.04em] text-white drop-shadow-[0_2px_16px_rgba(38,37,38,0.35)] sm:text-[2.375rem] lg:text-[3rem] xl:text-[3.375rem]">
                    Pohyb, ktorý cítiš.
                    <br />
                    Pokoj, ktorý zostáva.
                  </h1>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0.01 }
                      : { ...defaultTransition, delay: 0.14 }
                  }
                  className="flex flex-col gap-6 lg:pt-2"
                >
                  <p className="max-w-md text-base leading-relaxed text-white/90 drop-shadow-[0_1px_10px_rgba(38,37,38,0.3)] sm:text-lg sm:leading-[1.65]">
                    Objav vedomý pohyb v komornom Pilates štúdiu, kde sa sila,
                    držanie tela a pokoj stretávajú v každej lekcii.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button href={siteConfig.bookingUrl}>Rezervovať lekciu</Button>
                    <Button
                      href={siteConfig.scheduleUrl}
                      variant="secondary"
                      className="border-white/30 bg-white/90 hover:bg-white"
                    >
                      Pozrieť rozvrh
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={
            prefersReducedMotion
              ? { duration: 0.01 }
              : { ...defaultTransition, delay: 0.22 }
          }
          className="gradient-stats relative mt-4 overflow-hidden rounded-[28px] border border-lavender-soft/40 px-6 py-8 text-white sm:px-10 sm:py-10 lg:mt-5"
        >
          <LavenderBranch
            className="absolute -bottom-10 -right-4 h-56 w-32 text-white sm:-bottom-12 sm:-right-6 sm:h-72 sm:w-40 lg:h-80 lg:w-44"
            opacity={0.14}
          />

          <div className="relative grid gap-8 sm:grid-cols-3 sm:gap-6">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center sm:text-left ${
                  index > 0 ? "sm:border-l sm:border-white/25 sm:pl-8" : ""
                }`}
              >
                <p className="text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/75">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
