"use client";

import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { LavenderBranch } from "@/components/brand/LavenderBranch";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { StudioImage } from "@/components/ui/StudioImage";
import { heroStats, siteConfig, siteImages } from "@/data/site";
import { imageSizes } from "@/lib/images";
import { fadeUp, defaultTransition } from "@/lib/motion";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const heroButtons = (
    <>
      <Button href={siteConfig.bookingUrl} className="h-[48px] flex-1 whitespace-nowrap px-3.5 text-sm sm:px-4 lg:h-[52px] lg:flex-none lg:px-7 lg:text-[15px]">
        Rezervovať lekciu
      </Button>
      <Button
        href={siteConfig.scheduleUrl}
        variant="secondary"
        className="h-[48px] flex-1 whitespace-nowrap border-white/30 bg-white/90 px-3.5 text-sm hover:bg-white sm:px-4 lg:h-[52px] lg:flex-none lg:px-7 lg:text-[15px]"
      >
        Pozrieť rozvrh
      </Button>
    </>
  );

  return (
    <section className="pb-2 pt-4 md:pb-8 md:pt-5">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={prefersReducedMotion ? { duration: 0.01 } : defaultTransition}
          className="relative overflow-hidden rounded-[32px]"
        >
          <div className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[520px] lg:max-h-[62vh] xl:min-h-[560px] xl:max-h-[64vh]">
            <StudioImage
              src={siteImages.heroBackground}
              alt="Klientka cvičí na reformeri v štúdiu Lavande s logom štúdia na stene."
              priority
              className="object-[38%_center] lg:object-[center_60%]"
              sizes={imageSizes.hero}
            />

            <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
              <div className="absolute inset-x-0 top-0 h-[72%] bg-[linear-gradient(to_bottom,rgba(38,37,38,0.82)_0%,rgba(38,37,38,0.52)_42%,rgba(38,37,38,0.22)_68%,transparent_100%)] sm:hidden" />
              <div className="absolute inset-x-0 top-0 hidden h-[66%] bg-[linear-gradient(to_bottom,rgba(38,37,38,0.68)_0%,rgba(38,37,38,0.38)_42%,rgba(38,37,38,0.14)_68%,transparent_100%)] sm:block" />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/50 via-transparent to-transparent sm:from-dark/42" />
              <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-dark/25 to-transparent" />
            </div>

            <div className="relative z-10 flex h-full min-h-[580px] flex-col justify-between p-6 sm:min-h-[620px] sm:p-8 lg:min-h-[520px] lg:p-8 xl:min-h-[560px] xl:p-9">
              <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12 xl:gap-16">
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
                  <h1 className="text-balance text-[2rem] font-medium leading-[1.06] tracking-[-0.04em] text-white drop-shadow-[0_2px_16px_rgba(38,37,38,0.35)] sm:text-[2.375rem] lg:text-[2.625rem] xl:text-[2.875rem]">
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
                  className="lg:pt-2"
                >
                  <p className="max-w-md text-base leading-relaxed text-white/90 drop-shadow-[0_1px_10px_rgba(38,37,38,0.3)] sm:text-lg sm:leading-[1.65]">
                    Objav vedomý pohyb v komornom Pilates štúdiu, kde sa sila,
                    držanie tela a pokoj stretávajú v každej lekcii.
                  </p>
                  <div className="mt-6 hidden flex-wrap gap-3 lg:flex">
                    {heroButtons}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={
                  prefersReducedMotion
                    ? { duration: 0.01 }
                    : { ...defaultTransition, delay: 0.18 }
                }
                className="mt-6 flex gap-2.5 lg:hidden"
              >
                {heroButtons}
              </motion.div>
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
          className="gradient-stats relative mt-3 overflow-hidden rounded-[28px] border border-lavender-soft/40 px-4 py-6 text-white sm:px-10 sm:py-8 lg:mt-4 lg:py-7"
        >
          <LavenderBranch
            className="absolute -bottom-10 -right-12 h-56 w-32 text-white sm:-bottom-12 sm:-right-6 sm:h-72 sm:w-40 lg:h-80 lg:w-44"
            opacity={0.14}
          />

          <div className="relative grid grid-cols-3 gap-3 sm:gap-6">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center sm:text-left ${
                  index > 0 ? "border-l border-white/25 pl-3 sm:pl-8" : ""
                }`}
              >
                <p className="text-3xl font-medium tracking-[-0.03em] sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm leading-tight text-white/75 sm:mt-2 sm:text-sm">
                  <span className="hidden sm:inline">{stat.label}</span>
                  <span className="flex flex-col items-center sm:hidden">
                    {stat.label.split(" ").map((word) => (
                      <span key={word}>{word}</span>
                    ))}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.button
          type="button"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={
            prefersReducedMotion
              ? { duration: 0.01 }
              : { ...defaultTransition, delay: 0.28 }
          }
          onClick={() => {
            window.scrollBy({
              top: window.innerHeight * 0.75,
              behavior: prefersReducedMotion ? "auto" : "smooth",
            });
          }}
          className="mx-auto mt-2 flex h-10 w-10 translate-y-2 items-center justify-center text-lavender/40 sm:hidden"
          aria-label="Posunúť sa nižšie"
        >
          <motion.span
            animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-6 w-6" strokeWidth={1.5} />
          </motion.span>
        </motion.button>
      </Container>
    </section>
  );
}
