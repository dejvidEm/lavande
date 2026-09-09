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
    imageAlt: "Klientka pri individuálnom cvičení na reformeri v štúdiu Lavande.",
    objectPosition: "center 35%",
  },
  {
    id: "groups",
    title: "Komorné skupiny",
    description:
      "Viac pozornosti, bezpečia a vedenia pri každom cviku.",
    image: siteImages.benefits.groups,
    imageAlt: "Dve klientky cvičia spolu na reformeroch v komornej skupine.",
    objectPosition: "center 45%",
  },
  {
    id: "strength",
    title: "Sila bez tlaku",
    description:
      "Stabilita a mobilita bez zbytočného tlaku na telo.",
    image: siteImages.benefits.strength,
    imageAlt: "Klientka pri dynamickejšom cviku s kruhom na reformeri.",
    objectPosition: "center 40%",
  },
  {
    id: "environment",
    title: "Pokojné prostredie",
    description:
      "Pokojná atmosféra pre chvíľu, ktorá patrí tebe.",
    image: siteImages.benefits.environment,
    imageAlt: "Pokojné štúdio Lavande s levanduľovým vybavením a reformermi.",
    objectPosition: "center 40%",
  },
];
