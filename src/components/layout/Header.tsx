"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LavandeLogo } from "@/components/brand/LavandeLogo";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { mainNavLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  // Portál sa počas SSR preskočí; menu sa aj tak dá otvoriť až po hydratácii.
  const canUsePortal = typeof document !== "undefined";

  return (
    <header
      className={cn(
        "sticky top-0 z-[102] transition-all duration-300",
        menuOpen && "border-b border-border/60 bg-white lg:border-transparent lg:bg-transparent",
        !menuOpen && scrolled && "border-b border-border/60 bg-background/85 backdrop-blur-md"
      )}
    >
      <Container as="div" className="flex items-center justify-between gap-4 py-5 lg:py-6">
        <LavandeLogo variant="compact" href="/" priority />

        <nav
          className="hidden items-center rounded-pill bg-dark-ui px-8 py-3 lg:flex"
          aria-label="Hlavná navigácia"
        >
          <ul className="flex items-center gap-7 xl:gap-8">
            {mainNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-white/90 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button href={siteConfig.bookingUrl} className="h-[50px] px-6">
            Rezervovať lekciu
          </Button>
        </div>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface lg:hidden"
          aria-label={menuOpen ? "Zavrieť menu" : "Otvoriť menu"}
          aria-expanded={menuOpen}
          aria-controls="mobilne-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </Container>

      {canUsePortal &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <>
                <motion.button
                  type="button"
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-x-0 bottom-0 top-[5.5rem] z-[100] bg-white/30 backdrop-blur-xl lg:hidden"
                  aria-label="Zavrieť menu"
                  onClick={closeMenu}
                />
                <motion.div
                  id="mobilne-menu"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="fixed inset-x-0 top-[5.5rem] z-[101] lg:hidden"
                >
                  <div className="border-t border-border/60 bg-white px-5 pb-8 pt-4 shadow-[0_12px_32px_-12px_rgba(41,40,41,0.12)]">
                    <nav aria-label="Mobilná navigácia">
                      <ul className="space-y-1">
                        {mainNavLinks.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={closeMenu}
                              className="block rounded-control px-3 py-3 text-base text-text-primary hover:bg-surface-soft"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <div className="mt-6">
                      <Link
                        href={siteConfig.bookingUrl}
                        onClick={closeMenu}
                        className="inline-flex h-[52px] w-full items-center justify-center rounded-pill bg-lavender px-7 text-[15px] font-medium text-white transition-all duration-premium hover:bg-lavender-medium"
                      >
                        Rezervovať lekciu
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
