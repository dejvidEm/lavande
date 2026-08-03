import { siteImages } from "./site";
import type { LucideIcon } from "lucide-react";
import { Sparkles, Layers, TrendingUp } from "lucide-react";

export type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  objectPosition?: string;
};

export const services: Service[] = [
  {
    id: "first-hour",
    slug: "prva-hodina-na-reformeri",
    title: "Prvá hodina na reformeri",
    description:
      "Bezpečný úvod na stroj pre úplných začiatočníkov — technika, dych a práca s pružinami v pokojom tempe.",
    image: siteImages.services.beginner,
    imageAlt: "Začiatočníčka pri prvej hodine na reformeri v štúdiu Lavande.",
    icon: Sparkles,
    objectPosition: "center 25%",
  },
  {
    id: "beginner",
    slug: "reformer-zaciatocnici",
    title: "Reformer Začiatočníci",
    description:
      "Po prvej hodine tu posilňuješ základy, rozvíjaš stabilitu, mobilitu a plynulosť pohybu.",
    image: siteImages.services.reformer,
    imageAlt: "Skupinová lekcia Reformer Začiatočníci v štúdiu Lavande.",
    icon: Layers,
    objectPosition: "center 30%",
  },
  {
    id: "intermediate",
    slug: "reformer-mierne-pokrocili",
    title: "Reformer Mierne pokročilí",
    description:
      "Náročnejšie kombinácie, balančné cviky a vyššia intenzita pre klientky, ktoré ovládajú základy.",
    image: siteImages.services.reformer,
    imageAlt: "Pokročilejšia klientka cvičí na reformeri v štúdiu Lavande.",
    icon: TrendingUp,
    objectPosition: "center 30%",
  },
];
