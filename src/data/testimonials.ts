import { siteImages } from "./site";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  label: string;
  avatar: string;
  avatarAlt: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "martina",
    quote:
      "V Lavande som prvýkrát pochopila, že cvičenie nemusí byť trest. Po pár týždňoch ma menej bolel chrbát, cítim sa stabilnejšie a na každú lekciu sa úprimne teším.",
    name: "Martina K.",
    label: "Reformer Pilates",
    avatar: siteImages.testimonials.martina,
    avatarAlt: "Portrét klientky Martiny.",
  },
  {
    id: "jana",
    quote:
      "Komorné skupiny robia obrovský rozdiel. Lektorka vidí každý detail a ja sa cítim bezpečne aj ako začiatočníčka.",
    name: "Jana M.",
    label: "Reformer začiatočníci",
    avatar: siteImages.testimonials.jana,
    avatarAlt: "Portrét klientky Jany.",
  },
  {
    id: "katarina",
    quote:
      "Po lekcii sa cítim silnejšia, ale zároveň pokojnejšia. Presne taký pohyb som dlho hľadala.",
    name: "Katarína P.",
    label: "Reformer mierne pokročilí",
    avatar: siteImages.testimonials.katarina,
    avatarAlt: "Portrét klientky Kataríny.",
  },
  {
    id: "eva",
    quote:
      "Atmosféra štúdia je presne taká, akú som chcela — jemná, profesionálna a bez tlaku na výkon.",
    name: "Eva S.",
    label: "Reformer začiatočníci",
    avatar: siteImages.testimonials.jana,
    avatarAlt: "Portrét klientky Evy.",
  },
];
