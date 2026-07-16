import { siteImages } from "./site";
import type { LucideIcon } from "lucide-react";
import { Sparkles, User, Layers, Dumbbell } from "lucide-react";

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
    id: "reformer",
    slug: "reformer-pilates",
    title: "Reformer Pilates",
    description:
      "Precízny pohyb na reformeri pre silu, stabilitu a dlhšie svaly s individuálnym vedením.",
    image: siteImages.services.reformer,
    imageAlt: "Inštruktorka cvičí Reformer Pilates v svetlom štúdiu Lavande.",
    icon: Layers,
    objectPosition: "center 30%",
  },
  {
    id: "mat",
    slug: "mat-pilates",
    title: "Mat Pilates",
    description:
      "Vedomá práca s vlastnou hmotnosťou pre lepšie držanie tela, dýchanie a kontrolu pohybu.",
    image: siteImages.services.mat,
    imageAlt: "Žena cvičí Mat Pilates v bielom oblečení v minimalistickom štúdiu.",
    icon: Dumbbell,
    objectPosition: "center center",
  },
  {
    id: "private",
    slug: "individualna-lekcia",
    title: "Individuálna lekcia",
    description:
      "Lekcia len pre teba — tempo, ciele aj náročnosť prispôsobené tvojmu telu a aktuálnej kondícii.",
    image: siteImages.services.private,
    imageAlt: "Detail ruky pri cvičení na Pilates reformeri so strapmi.",
    icon: User,
    objectPosition: "center 40%",
  },
  {
    id: "beginner",
    slug: "pilates-pre-zaciatocnice",
    title: "Pilates pre začiatočníčky",
    description:
      "Bezpečný úvod do Pilates s dôrazom na techniku, dych a pocit istoty od prvého pohybu.",
    image: siteImages.services.beginner,
    imageAlt: "Začiatočníčka cvičí Pilates s loptou na béžovom pozadí.",
    icon: Sparkles,
    objectPosition: "center 25%",
  },
];
