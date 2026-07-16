import { siteImages } from "./site";

export type LessonPage = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  description: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  duration: string;
  groupSize: string;
  level: string;
  metaDescription: string;
  highlights: string[];
  benefits: string[];
  forWhom: string[];
  sessionFocus: string[];
};

export const lessonPages: LessonPage[] = [
  {
    slug: "reformer-pilates",
    title: "Reformer Pilates",
    eyebrow: "REFORMER PILATES",
    intro: "Precízny pohyb na reformeri pre silu, stabilitu a dlhšie svaly.",
    description:
      "Reformer Pilates kombinuje kontrolovaný odpor, plynulý posun a individuálne vedenie. Každý cvik je prispôsobený tvojej kondícii — od prvého stretnutia až po pokročilejšie sekvencie.",
    image: siteImages.services.reformer,
    imageAlt: "Inštruktorka cvičí Reformer Pilates v svetlom štúdiu Lavande.",
    objectPosition: "center 30%",
    duration: "55 min",
    groupSize: "max. 6 osôb",
    level: "Začiatočníčky aj pokročilejšie",
    metaDescription:
      "Reformer Pilates v Lavande Studio — individuálne vedenie, sila, stabilita a zdravé držanie tela v komornom štúdiu.",
    highlights: [
      "Práca s odporom pružín pre kontrolovaný posilňujúci efekt",
      "Bezpečné vedenie každého pohybu lektorkou",
      "Vhodné pre budovanie stability aj flexibility",
    ],
    benefits: [
      "Posilnenie hlbokého svalového korzetu",
      "Lepšia stabilita panvy a chrbta",
      "Precíznejšia technika pohybu",
      "Viditeľný pokrok bez zbytočného preťaženia",
    ],
    forWhom: [
      "Pre ženy, ktoré chcú silnejšie a dlhšie svaly",
      "Pre klientky s cieľom zlepšiť držanie tela",
      "Pre začiatočníčky aj pokročilejšie po úvodnej konzultácii",
    ],
    sessionFocus: [
      "Nastavenie správnej polohy tela na reformeri",
      "Dych synchronizovaný s pohybom",
      "Postupné budovanie sily a mobility",
    ],
  },
  {
    slug: "mat-pilates",
    title: "Mat Pilates",
    eyebrow: "MAT PILATES",
    intro: "Vedomá práca s vlastnou hmotnosťou pre silu, dych a kontrolu.",
    description:
      "Mat Pilates stavia na precíznych cvikoch na podložke. Naučíš sa stabilizovať telo, dýchať vedome a cítiť každý pohyb — bez zbytočného tlaku na kĺby.",
    image: siteImages.services.mat,
    imageAlt: "Žena cvičí Mat Pilates v bielom oblečení v minimalistickom štúdiu.",
    objectPosition: "center center",
    duration: "55 min",
    groupSize: "max. 8 osôb",
    level: "Všetky úrovne",
    metaDescription:
      "Mat Pilates v Lavande Studio — vedomý pohyb na podložke, dych, stabilita a zdravé držanie tela.",
    highlights: [
      "Cviky s vlastnou hmotnosťou bez zbytočného tlaku",
      "Dôraz na dych a kontrolu pohybu",
      "Ideálne pre pravidelnú prax doma aj v štúdiu",
    ],
    benefits: [
      "Posilnenie stredu tela a stability",
      "Lepšia koordinácia a mobilita",
      "Vedomé dýchanie počas celého tréningu",
      "Pocit istoty v základných aj pokročilejších cvikoch",
    ],
    forWhom: [
      "Pre klientky, ktoré preferujú prácu na podložke",
      "Pre ženy budujúce pravidelný pohybový návyk",
      "Pre každú, kto chce zlepšiť držanie tela prirodzene",
    ],
    sessionFocus: [
      "Aktivácia stredu tela v každej sérii",
      "Plynulé prechody medzi cvikmi",
      "Individuálne úpravy podľa úrovne",
    ],
  },
  {
    slug: "individualna-lekcia",
    title: "Individuálna lekcia",
    eyebrow: "INDIVIDUÁLNA LEKCIA",
    intro: "Lekcia len pre teba — tempo, ciele aj náročnosť na mieru.",
    description:
      "Individuálna lekcia je najosobnejší formát v Lavande. Lektorka sa venuje výhradne tebe, prispôsobí cvičebný plán tvojim cieľom a aktuálnej kondícii.",
    image: siteImages.services.private,
    imageAlt: "Detail ruky pri cvičení na Pilates reformeri so strapmi.",
    objectPosition: "center 40%",
    duration: "55 min",
    groupSize: "1:1",
    level: "Všetky úrovne",
    metaDescription:
      "Individuálne Pilates lekcie v Lavande Studio — osobný prístup, prispôsobené tempo a ciele.",
    highlights: [
      "100 % pozornosti lektorky počas celej lekcie",
      "Plán prispôsobený tvojim cieľom a telu",
      "Ideálne pred návratom po pauze alebo pri špecifických potrebách",
    ],
    benefits: [
      "Rýchlejší pokrok v technike",
      "Bezpečné vedenie pri citlivejších oblastiach",
      "Flexibilný výber reformer / mat podľa cieľa",
      "Lekcia v tvojom tempe bez porovnávania",
    ],
    forWhom: [
      "Pre klientky s konkrétnym cieľom (chrbát, mobilita, sila)",
      "Pre začiatočníčky, ktoré chcú istý úvod",
      "Pre pokročilejšie, ktoré chcú doladiť techniku",
    ],
    sessionFocus: [
      "Krátka konzultácia na začiatku lekcie",
      "Cvičebný plán podľa tvojich potrieb",
      "Spätná väzba a odporúčania na domácu prax",
    ],
  },
  {
    slug: "pilates-pre-zaciatocnice",
    title: "Pilates pre začiatočníčky",
    eyebrow: "PILATES PRE ZAČIATOČNÍČKY",
    intro: "Bezpečný a pokojný úvod do Pilates od prvého pohybu.",
    description:
      "Tento formát je navrhnutý pre ženy, ktoré s Pilates ešte nezačali alebo sa k nemu vracajú po dlhšej pauze. Tempo je pokojné, technika vysvetlená krok za krokom.",
    image: siteImages.services.beginner,
    imageAlt: "Začiatočníčka cvičí Pilates s loptou na béžovom pozadí.",
    objectPosition: "center 25%",
    duration: "55 min",
    groupSize: "max. 6 osôb",
    level: "Začiatočníčky",
    metaDescription:
      "Pilates pre začiatočníčky v Lavande Studio — bezpečný úvod, technika, dych a pocit istoty.",
    highlights: [
      "Pokojné tempo bez tlaku na výkon",
      "Základy dychu, stability a správnej techniky",
      "Komorná skupina s dostatkom pozornosti",
    ],
    benefits: [
      "Istota pri prvých cvikoch",
      "Pochopenie základov Pilates princípov",
      "Budovanie návyku bez stresu",
      "Pripravenosť na ďalšie formy lekcií",
    ],
    forWhom: [
      "Pre úplné začiatočníčky",
      "Pre ženy vracajúce sa k pohybu po pauze",
      "Pre každú, kto chce začať v bezpečnom prostredí",
    ],
    sessionFocus: [
      "Základy dychu a stabilizácie",
      "Bezpečné nastavenie tela v každom cviku",
      "Postupné zvyšovanie náročnosti podľa pocitu",
    ],
  },
];

export function getLessonBySlug(slug: string): LessonPage | undefined {
  return lessonPages.find((lesson) => lesson.slug === slug);
}

export function getAllLessonSlugs(): string[] {
  return lessonPages.map((lesson) => lesson.slug);
}

export function getOtherLessons(currentSlug: string): LessonPage[] {
  return lessonPages.filter((lesson) => lesson.slug !== currentSlug);
}
