"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { LavandeLogo } from "@/components/brand/LavandeLogo";
import { LavenderBranch } from "@/components/brand/LavenderBranch";
import { Container } from "@/components/layout/Container";
import {
  footerNavLinks,
  footerSecondaryLinks,
} from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="kontakt" className="pb-8 pt-section-sm md:pt-section-md">
      <Container>
        <div className="relative overflow-hidden rounded-card bg-dark-ui px-6 py-10 text-white grain-dark sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <LavenderBranch
            className="absolute -bottom-10 -right-14 h-[17rem] w-[10.5rem] text-lavender sm:-bottom-8 sm:right-8 sm:h-48 sm:w-28"
            opacity={0.08}
          />

          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-8">
            <div>
              <h2 className="max-w-sm text-2xl font-medium leading-tight tracking-[-0.02em] sm:text-3xl">
                Novinky zo štúdia priamo do e-mailu
              </h2>
              <form
                className="mt-6 flex max-w-md gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  E-mailová adresa
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tvoj@email.sk"
                  className="h-12 min-w-0 flex-1 rounded-pill border border-white/10 bg-white px-5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-lavender"
                />
                <button
                  type="submit"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lavender text-white transition hover:bg-lavender-medium"
                  aria-label="Prihlásiť sa na odber"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </form>
            </div>

            <nav aria-label="Navigácia v pätičke">
              <ul className="space-y-3">
                {footerNavLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Sekundárne odkazy">
              <ul className="space-y-3">
                {footerSecondaryLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <p className="mt-10 text-sm text-white/60">
            Kontakt:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-white/80 underline-offset-2 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>

          <div className="mt-10 flex flex-col gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col items-start gap-3">
              <LavandeLogo variant="compact" href="/" className="brightness-0 invert" />
              <p className="text-sm text-white/50">
                © 2026 {siteConfig.name}. Všetky práva vyhradené.
              </p>
            </div>

            <p
              className="select-none text-[clamp(3rem,12vw,7rem)] font-semibold leading-none tracking-[-0.04em] text-white/90"
              aria-hidden="true"
            >
              LAVANDE
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 sm:bottom-8 sm:right-8"
            aria-label="Späť hore"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
