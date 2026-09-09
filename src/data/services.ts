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
    id: "beginner",
    slug: "reformer-zaciatocnici",
    title: "Reformer začiatočníci",
    description:
      "Určené pre začiatočníkov aj klientov, ktorí si chcú upevniť základy. Ak prichádzaš na Reformer Pilates prvýkrát, prosíme, príď na svoju prvú lekciu o 20 minút skôr kvôli krátkemu úvodu a oboznámeniu so strojom.",
    image: siteImages.services.beginner,
    imageAlt: "Klientka pri cvičení na lekcii Reformer začiatočníci v štúdiu Lavande.",
    icon: Sparkles,
    objectPosition: "center 40%",
  },
  {
    id: "intermediate",
    slug: "reformer-mierne-pokrocili",
    title: "Reformer mierne pokročilí",
    description:
      "Pre klientov, ktorí už ovládajú základy techniky a chcú rozvíjať silu, stabilitu a plynulosť pohybu.",
    image: siteImages.services.intermediate,
    imageAlt: "Klientka pri bočnom strečinge na reformeri v štúdiu Lavande.",
    icon: Layers,
    objectPosition: "center 45%",
  },
  {
    id: "advanced",
    slug: "reformer-pokrocili",
    title: "Reformer pokročilí",
    description:
      "Dynamickejšie a náročnejšie lekcie určené pre tých, ktorí majú pevné základy a chcú posunúť svoju prax na vyššiu úroveň.",
    image: siteImages.services.advanced,
    imageAlt: "Klientka pri náročnejšom cviku na reformeri v štúdiu Lavande.",
    icon: TrendingUp,
    objectPosition: "center 50%",
  },
];
