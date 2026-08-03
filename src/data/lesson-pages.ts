import { siteImages } from "./site";

export type LessonPage = {
  slug: string;
  title: string;
  titleHighlight: string;
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
    slug: "prva-hodina-na-reformeri",
    title: "Prvá hodina na reformeri",
    titleHighlight: "reformeri",
    eyebrow: "PRVÁ HODINA · REFORMER BASICS",
    intro: "Bezpečný úvod na reformer pre úplných začiatočníkov v pokojom tempe.",
    description:
      "Prvá hodina na reformeri je určená pre klientky, ktoré s reformerom ešte necvičili. Naučíš sa bezpečne pracovať so strojom, pochopiť techniku a získať istotu pred prechodom na ďalšie úrovne.",
    image: siteImages.services.beginner,
    imageAlt: "Začiatočníčka pri prvej hodine na reformeri v štúdiu Lavande.",
    objectPosition: "center 25%",
    duration: "55 min",
    groupSize: "max. 4 osoby",
    level: "Úplní začiatočníci",
    metaDescription:
      "Prvá hodina na reformeri v Lavande Studio — bezpečný úvod, technika, dych a práca s pružinami pre úplných začiatočníkov.",
    highlights: [
      "Pomalé tempo bez tlaku na výkon",
      "Bezpečné nastavenie reformera a práca s pružinami",
      "Základy techniky pred ďalšími lekciami",
    ],
    benefits: [
      "Istota pri prvom stretnutí so strojom",
      "Pochopenie dychu a neutrálnej polohy chrbtice",
      "Bezpečné nastupovanie a zostupovanie z reformera",
      "Pripravenosť na lekcie Reformer Začiatočníci",
    ],
    forWhom: [
      "Pre klientky, ktoré nikdy necvičili na reformeri",
      "Pre ženy, ktoré nepoznajú stroje a chcú sa naučiť techniku",
      "Pre úplných začiatočníkov pred prechodom na ďalšiu úroveň",
    ],
    sessionFocus: [
      "Bezpečné nastavenie reformera",
      "Dýchanie a neutrálna poloha chrbtice",
      "Základné cviky a práca s pružinami",
      "Správne nastupovanie a zostupovanie zo stroja",
    ],
  },
  {
    slug: "reformer-zaciatocnici",
    title: "Reformer Začiatočníci",
    titleHighlight: "Začiatočníci",
    eyebrow: "REFORMER ZAČIATOČNÍCI",
    intro: "Pokračovanie po prvej hodine — posilňovanie základov a celého tela.",
    description:
      "Keď absolvuješ prvú hodinu na reformeri, môžeš pokračovať sem. Opakuješ a upevňuješ základy, pracuješ na stabilite, mobilite a postupne zvládaš plynulejšie prechody aj väčší počet cvikov.",
    image: siteImages.services.reformer,
    imageAlt: "Skupinová lekcia Reformer Začiatočníci v štúdiu Lavande.",
    objectPosition: "center 30%",
    duration: "55 min",
    groupSize: "max. 4 osoby",
    level: "Začiatočníci",
    metaDescription:
      "Reformer Začiatočníci v Lavande Studio — opakovanie základov, stabilita, mobilita a posilnenie celého tela.",
    highlights: [
      "Plynulejšie prechody medzi cvikmi",
      "Väčší počet cvikov v jednej lekcii",
      "Posilnenie stability, mobility a celého tela",
    ],
    benefits: [
      "Istota v základných cvikoch na reformeri",
      "Lepšia stabilita a mobilita",
      "Posilnenie celého tela s individuálnym vedením",
      "Pripravenosť na mierne pokročilejšiu úroveň",
    ],
    forWhom: [
      "Pre klientky po absolvovaní prvej hodiny na reformeri",
      "Pre ženy, ktoré chcú upevniť základy a techniku",
      "Pre začiatočníčky pripravené na pravidelnú prax",
    ],
    sessionFocus: [
      "Opakovanie a upevňovanie základov",
      "Plynulejšie prechody medzi cvikmi",
      "Stabilita, mobilita a posilnenie celého tela",
    ],
  },
  {
    slug: "reformer-mierne-pokrocili",
    title: "Reformer Mierne pokročilí",
    titleHighlight: "pokročilí",
    eyebrow: "REFORMER MIERNE POKROČILÍ",
    intro: "Náročnejšie sekvencie pre klientky, ktoré už ovládajú základné cviky.",
    description:
      "Táto lekcia je určená pre klientky, ktoré majú s reformerom skúsenosť a zvládajú základné cviky. Čakajú ťa náročnejšie kombinácie, viac balančných cvikov a vyššia intenzita pri zachovaní precíznej techniky.",
    image: siteImages.services.reformer,
    imageAlt: "Pokročilejšia klientka cvičí na reformeri v štúdiu Lavande.",
    objectPosition: "center 30%",
    duration: "55 min",
    groupSize: "max. 4 osoby",
    level: "Mierne pokročilí",
    metaDescription:
      "Reformer Mierne pokročilí v Lavande Studio — náročnejšie kombinácie, balančné cviky a vyššia intenzita.",
    highlights: [
      "Náročnejšie kombinácie cvikov",
      "Viac balančných cvikov a menšie opory",
      "Väčší rozsah pohybu a vyššia intenzita",
    ],
    benefits: [
      "Posun v sile, kontrole a koordinácii",
      "Lepšia stabilita v balančných cvikoch",
      "Väčší rozsah pohybu pri zachovanej technike",
      "Dynamickejšia prax pre skúsenejšie klientky",
    ],
    forWhom: [
      "Pre klientky, ktoré už ovládajú základné cviky na reformeri",
      "Pre ženy pripravené na náročnejšie sekvencie",
      "Pre pravidelné cvičenky pripravené na vyššiu intenzitu",
    ],
    sessionFocus: [
      "Náročnejšie kombinácie cvikov",
      "Balančné cviky s menšími oporami",
      "Väčší rozsah pohybu a vyššia intenzita",
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
