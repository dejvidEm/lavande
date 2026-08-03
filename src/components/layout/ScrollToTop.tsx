"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function forceScrollTop() {
  const { documentElement: html, body } = document;
  const previousHtmlBehavior = html.style.scrollBehavior;
  const previousBodyBehavior = body.style.scrollBehavior;

  html.style.scrollBehavior = "auto";
  body.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  html.scrollTop = 0;
  body.scrollTop = 0;

  html.style.scrollBehavior = previousHtmlBehavior;
  body.style.scrollBehavior = previousBodyBehavior;
}

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Pri navigácii na kotvu (napr. /#lekcie z podstránky) musí zostať
    // v platnosti scroll prehliadača na cieľovú sekciu.
    if (window.location.hash) return;

    forceScrollTop();
    const frame = requestAnimationFrame(forceScrollTop);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
