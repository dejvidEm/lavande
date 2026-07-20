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
      "Tempo aj náročnosť podľa tvojej kondície a cieľov.",
    image: siteImages.benefits.individual,
    imageAlt: "Inštruktorka vedie klientku pri cvičení na reformeri.",
    objectPosition: "center 30%",
  },
  {
    id: "groups",
    title: "Komorné skupiny",
    description:
      "Viac pozornosti, bezpečia a vedenia pri každom cviku.",
    image: siteImages.benefits.groups,
    imageAlt: "Priestor Pilates štúdia s podložkami pripravenými na lekciu.",
    objectPosition: "center center",
  },
  {
    id: "strength",
    title: "Sila bez tlaku",
    description:
      "Stabilita a mobilita bez zbytočného tlaku na telo.",
    image: siteImages.benefits.strength,
    imageAlt: "Žena v plynulom Pilates pohybe v bielom oblečení.",
    objectPosition: "center center",
  },
  {
    id: "environment",
    title: "Pokojné prostredie",
    description:
      "Pokojná atmosféra pre chvíľu, ktorá patrí tebe.",
    image: siteImages.benefits.environment,
    imageAlt: "Béžová podložka, voda a sukulent na drevenej podlahe v slnečnom štúdiu.",
    objectPosition: "center 60%",
  },
];
