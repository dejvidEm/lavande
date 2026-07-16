import { siteImages } from "./site";

export type Benefit = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
};

export const benefits: Benefit[] = [
  {
    id: "individual",
    title: "Individuálny prístup",
    description:
      "Lektorka prispôsobí tempo aj náročnosť tvojej aktuálnej kondícii.",
    image: siteImages.benefits.individual,
    imageAlt: "Inštruktorka vedie klientku pri cvičení na reformeri.",
    objectPosition: "center 30%",
  },
  {
    id: "groups",
    title: "Komorné skupiny",
    description:
      "Menej ľudí znamená viac pozornosti, bezpečia a presnejšie vedenie.",
    image: siteImages.benefits.groups,
    imageAlt: "Priestor Pilates štúdia s podložkami pripravenými na lekciu.",
    objectPosition: "center center",
  },
  {
    id: "strength",
    title: "Sila bez tlaku",
    description:
      "Budujeme stabilitu, mobilitu a zdravé držanie tela bez zbytočného preťažovania.",
    image: siteImages.benefits.strength,
    imageAlt: "Žena v plynulom Pilates pohybe v bielom oblečení.",
    objectPosition: "center center",
  },
  {
    id: "environment",
    title: "Pokojné prostredie",
    description:
      "Jemný interiér, príjemná atmosféra a chvíľa, ktorá patrí iba tebe.",
    image: siteImages.benefits.environment,
    imageAlt: "Béžová podložka, voda a sukulent na drevenej podlahe v slnečnom štúdiu.",
    objectPosition: "center 60%",
  },
];
