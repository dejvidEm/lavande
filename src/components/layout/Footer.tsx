"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { LavandeLogo } from "@/components/brand/LavandeLogo";
import { LavenderBranch } from "@/components/brand/LavenderBranch";
import { Container } from "@/components/layout/Container";
import { footerNavLinks, footerSecondaryLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const currentYear = new Date().getFullYear();

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent("Prihlásenie na odber noviniek");
    const body = encodeURIComponent(
      `Dobrý deň,\n\nchcem dostávať novinky zo štúdia na e-mail: ${email}\n\nĎakujem.`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubscribed(true);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="kontakt" className="scroll-mt-28 pb-8 pt-section-sm md:pt-section-md">
      <Container>
        <div className="relative overflow-hidden rounded-card bg-dark-ui px-6 py-10 text-white grain-dark sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <LavenderBranch
            className="absolute -bottom-10 -right-14 h-[17rem] w-[10.5rem] text-lavender sm:-bottom-8 sm:right-8 sm:h-48 sm:w-28"
            opacity={0.08}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-8">
            <div>
              <h2 className="max-w-sm text-2xl font-medium leading-tight tracking-[-0.02em] sm:text-3xl">
                Novinky zo štúdia priamo do e-mailu
              </h2>
              <form className="mt-6 flex max-w-md gap-2" onSubmit={handleSubscribe}>
                <label htmlFor="newsletter-email" className="sr-only">
                  E-mailová adresa
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubscribed(false);
                  }}
                  placeholder="tvoj@email.sk"
                  aria-describedby="newsletter-hint"
                  className="h-12 min-w-0 flex-1 rounded-pill border border-white/10 bg-white px-5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-lavender"
                />
                <button
                  type="submit"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lavender text-white transition hover:bg-lavender-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label="Prihlásiť sa na odber noviniek"
                >
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </form>
              <p
                id="newsletter-hint"
                role={subscribed ? "status" : undefined}
                className={cn(
                  "mt-3 text-xs leading-relaxed",
                  subscribed ? "text-white/80" : "text-white/50"
                )}
              >
                {subscribed
                  ? "Otvorili sme ti e-mailového klienta — správu stačí odoslať."
                  : "Prihlásením súhlasíš so spracúvaním e-mailu na zasielanie noviniek."}
              </p>
            </div>

            <nav aria-label="Navigácia v pätičke">
              <h2 className="text-sm font-medium text-white">Stránka</h2>
              <ul className="mt-4 space-y-3">
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

            <nav aria-label="Kontakt a právne informácie">
              <h2 className="text-sm font-medium text-white">Informácie</h2>
              <ul className="mt-4 space-y-3">
                {footerSecondaryLinks.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-white/75 transition hover:text-white"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/75 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <p className="relative mt-10 text-sm text-white/60">
            Kontakt:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-white/80 underline-offset-2 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>

          <div className="relative mt-10 flex flex-col gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col items-start gap-3">
              <LavandeLogo
                variant="compact"
                href="/"
                className="brightness-0 invert"
              />
              <p className="text-sm text-white/50">
                © {currentYear} {siteConfig.name}. Všetky práva vyhradené.
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
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
