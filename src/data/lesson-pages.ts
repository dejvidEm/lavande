import { siteImages } from "./site";

export type LessonPage = {
  slug: string;
  title: string;
  titleHighlight: string;
  /** Názov lekcie v akuzatíve pre vetu „Rezervuj si …“. */
  ctaTitle: string;
  eyebrow: string;
  intro: string;
  description: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  duration: string;
  groupSize: string;
  level: string;
  /** Cena za lekciu v eurách, používa sa v structured data. */
  price: number;
  metaDescription: string;
  highlights: string[];
  benefits: string[];
  forWhom: string[];
  sessionFocus: string[];
};

export const lessonPages: LessonPage[] = [
  {
    slug: "reformer-zaciatocnici",
    ctaTitle: "lekciu Reformer začiatočníci",
    title: "Reformer začiatočníci",
    titleHighlight: "začiatočníci",
    eyebrow: "REFORMER ZAČIATOČNÍCI",
    intro:
      "Lekcia pre každého, kto začína s Reformer Pilates alebo si chce upevniť správne základy.",
    description:
      "Na tejto lekcii sa naučíš správnu techniku cvičenia, dýchanie a prácu s reformerom. Postupne budeš budovať silu, stabilitu, mobilitu a koordináciu pohybu v bezpečnom tempe. Ak prichádzaš na Reformer Pilates prvýkrát, prosíme, príď 20 minút pred začiatkom lekcie. Ukážeme ti stroj, vysvetlíme jeho nastavenie a pripravíme ťa na cvičenie. Po absolvovaní úvodnej lekcie stačí prichádzať približne 10 minút pred začiatkom.",
    image: siteImages.services.beginner,
    imageAlt: "Klientka pri cvičení na lekcii Reformer začiatočníci v štúdiu Lavande.",
    objectPosition: "center 25%",
    duration: "50 min",
    groupSize: "max. 4 osoby",
    level: "Začiatočníci",
    price: 17,
    metaDescription:
      "Reformer začiatočníci v Lavande Studio — technika, dýchanie a práca s reformerom v skupine do 4 osôb. Prvýkrát príď 20 minút pred začiatkom lekcie.",
    highlights: [
      "Naučíš sa správnu techniku, dýchanie a prácu s reformerom v bezpečnom tempe",
      "Prvýkrát príď 20 minút pred začiatkom lekcie",
      "Každá lekcia nadväzuje na predchádzajúcu",
    ],
    benefits: [
      "Istota pri práci s reformerom",
      "Správna technika cvičenia a dýchania",
      "Silnejší stred tela a lepšie držanie",
      "Lepšia stabilita, mobilita a koordinácia pohybu",
    ],
    forWhom: [
      "Pre klientov, ktorí s Reformer Pilates začínajú",
      "Pre tých, ktorí si chcú upevniť správne základy",
      "Pre návrat k pravidelnému pohybu po dlhšej pauze",
    ],
    sessionFocus: [
      "Naučíš sa základy práce na reformeri",
      "Osvojíš si správne dýchanie a techniku cvičenia",
      "Posilníš stred tela, zlepšíš stabilitu a mobilitu",
      "Každá lekcia nadväzuje na predchádzajúcu, takže sa budeš postupne zlepšovať",
    ],
  },
  {
    slug: "reformer-mierne-pokrocili",
    ctaTitle: "lekciu Reformer mierne pokročilí",
    title: "Reformer mierne pokročilí",
    titleHighlight: "pokročilí",
    eyebrow: "REFORMER MIERNE POKROČILÍ",
    intro:
      "Lekcia pre klientov, ktorí ovládajú základy a chcú posunúť svoje cvičenie na vyššiu úroveň.",
    description:
      "Táto lekcia je určená pre klientov, ktorí už absolvovali začiatočnícke lekcie alebo majú skúsenosti s Reformer Pilates. Zameriava sa na rozvoj sily, stability, koordinácie a kontroly pohybu prostredníctvom náročnejších zostáv a plynulejších prechodov medzi cvikmi. Lekcie prinášajú väčšiu variabilitu cvikov, vyššiu intenzitu a nové pohybové výzvy, pričom dôraz zostáva na správnej technike a kvalite prevedenia každého pohybu.",
    image: siteImages.services.intermediate,
    imageAlt: "Klientka cvičí náročnejšiu zostavu na reformeri v štúdiu Lavande.",
    objectPosition: "center 30%",
    duration: "50 min",
    groupSize: "max. 4 osoby",
    level: "Mierne pokročilí",
    price: 17,
    metaDescription:
      "Reformer mierne pokročilí v Lavande Studio — náročnejšie zostavy a rozvoj sily, stability a kontroly pohybu pre klientov so zvládnutými základmi.",
    highlights: [
      "Rozvíjaj silu, stabilitu a kontrolu pohybu v náročnejších zostavách",
      "Väčšia variabilita cvikov a vyššia intenzita",
      "Dôraz na techniku a kvalitu prevedenia každého pohybu",
    ],
    benefits: [
      "Viditeľný posun v sile a kontrole pohybu",
      "Lepšia stabilita, koordinácia a mobilita",
      "Plynulejší a istejší pohyb na stroji",
      "Príprava na pokročilú úroveň",
    ],
    forWhom: [
      "Pre klientov, ktorí ovládajú základy techniky",
      "Pre tých, ktorí už absolvovali začiatočnícke lekcie",
      "Pre klientov so skúsenosťami s Reformer Pilates",
    ],
    sessionFocus: [
      "Náročnejšie kombinácie cvikov",
      "Väčší dôraz na stabilitu a kontrolu pohybu",
      "Rozvoj sily, koordinácie a mobility",
      "Plynulejšie prechody medzi cvikmi",
      "Postupné zvyšovanie náročnosti",
    ],
  },
  {
    slug: "reformer-pokrocili",
    ctaTitle: "lekciu Reformer pokročilí",
    title: "Reformer pokročilí",
    titleHighlight: "pokročilí",
    eyebrow: "REFORMER POKROČILÍ",
    intro:
      "Dynamické lekcie pre klientov, ktorí majú pevné základy a chcú svoje schopnosti posunúť ešte ďalej.",
    description:
      "Táto lekcia je určená pre klientov s pokročilými skúsenosťami s Reformer Pilates. Čakajú ťa náročnejšie zostavy, dynamickejšie sekvencie a komplexnejšie cviky, ktoré preveria tvoju silu, stabilitu, koordináciu aj kontrolu pohybu. Dôraz kladieme na precíznu techniku, plynulosť pohybu a neustále napredovanie. Lekcie sú vhodné pre tých, ktorí zvládajú základy bez problémov a chcú si dopriať väčšiu výzvu.",
    image: siteImages.services.advanced,
    imageAlt: "Klientka v dynamickom Pilates pohybe počas pokročilej lekcie.",
    objectPosition: "center 35%",
    duration: "50 min",
    groupSize: "max. 4 osoby",
    level: "Pokročilí",
    price: 17,
    metaDescription:
      "Reformer pokročilí v Lavande Studio — dynamické zostavy, vyššia intenzita a precízna kontrola pohybu pre klientov s pokročilými skúsenosťami.",
    highlights: [
      "Náročnejšie zostavy, ktoré preveria tvoju silu, stabilitu aj kontrolu pohybu",
      "Dynamickejšie sekvencie a komplexnejšie cviky",
      "Dôraz na precíznu techniku a neustále napredovanie",
    ],
    benefits: [
      "Výrazný posun v sile a vytrvalosti",
      "Vysoká kontrola tela v náročných polohách",
      "Lepšia rovnováha, koordinácia a mobilita",
      "Dlhodobo udržateľná pokročilá prax",
    ],
    forWhom: [
      "Pre klientov s pokročilými skúsenosťami s Reformer Pilates",
      "Pre tých, ktorí bezpečne ovládajú základné aj mierne pokročilé cviky",
      "Pre každého, kto hľadá intenzívnejšiu výzvu a chce ďalej rozvíjať svoju prax",
    ],
    sessionFocus: [
      "Dynamické a komplexné zostavy",
      "Vyššia intenzita cvičenia",
      "Náročnejšie balančné a koordinačné cviky",
      "Rozvoj sily, stability a mobility",
      "Plynulé prechody a precízna kontrola každého pohybu",
    ],
  },
  {
    slug: "individualna-lekcia",
    ctaTitle: "individuálnu lekciu",
    title: "Individuálna lekcia",
    titleHighlight: "Individuálna",
    eyebrow: "INDIVIDUÁLNA LEKCIA",
    intro:
      "Lekcia prispôsobená iba tebe – podľa tvojich cieľov, potrieb a úrovne skúseností.",
    description:
      "Individuálna lekcia je vhodná pre úplných začiatočníkov, ale aj pre tých, ktorí preferujú cvičenie v súkromí alebo sa chcú zamerať na konkrétny cieľ. Celá lekcia prebieha individuálne pod vedením inštruktorky a je prispôsobená tvojim potrebám, možnostiam a tempu. Individuálne lekcie sú dostupné iba po predchádzajúcej dohode.",
    image: siteImages.services.individual,
    imageAlt: "Cvičenie na reformeri počas individuálnej lekcie v štúdiu Lavande.",
    objectPosition: "center 30%",
    duration: "50 min",
    groupSize: "1 osoba",
    level: "Všetky úrovne",
    price: 30,
    metaDescription:
      "Individuálna lekcia Reformer Pilates v Lavande Studio — cvičenie jeden na jedného podľa tvojich cieľov a tempa. 50 minút za 30 €, iba po predchádzajúcej dohode.",
    highlights: [
      "Celá lekcia patrí iba tebe",
      "Obsah a tempo podľa tvojich cieľov",
      "Dostupné iba po predchádzajúcej dohode",
    ],
    benefits: [
      "Nepretržitá pozornosť inštruktorky počas celej lekcie",
      "Cviky vybrané presne podľa tvojich cieľov a možností",
      "Istota v technike od úplne prvej lekcie",
      "Cvičenie v súkromí a vlastným tempom",
    ],
    forWhom: [
      "Pre úplných začiatočníkov",
      "Pre klientov, ktorí preferujú individuálny prístup",
      "Pre tých, ktorí sa chcú zamerať na konkrétny cieľ alebo techniku",
    ],
    sessionFocus: [
      "Individuálny prístup počas celej lekcie",
      "Lekcia prispôsobená tvojim cieľom",
      "Dôraz na správnu techniku a precízne prevedenie cvikov",
      "Cvičenie vlastným tempom",
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
