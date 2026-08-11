import { businessInfo, siteConfig } from "./site";

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type LegalSection = {
  id: string;
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  slug: string;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  updatedAt: string;
  sections: LegalSection[];
};

const operatorLine = [
  businessInfo.legalName,
  [businessInfo.street, businessInfo.postalCode, businessInfo.city]
    .filter(Boolean)
    .join(", "),
  businessInfo.registrationId && `IČO: ${businessInfo.registrationId}`,
  `e-mail: ${siteConfig.email}`,
]
  .filter(Boolean)
  .join(", ");

export const termsDocument: LegalDocument = {
  slug: "obchodne-podmienky",
  eyebrow: "PRÁVNE INFORMÁCIE",
  title: "Obchodné podmienky",
  titleHighlight: "podmienky",
  intro:
    "Tieto obchodné podmienky upravujú rezerváciu, úhradu a absolvovanie lekcií v Lavande Studio. Prečítaj si ich, prosím, pred rezerváciou prvej lekcie.",
  metaTitle: "Obchodné podmienky",
  metaDescription:
    "Obchodné podmienky Lavande Studio — rezervácia lekcií, ceny, platnosť balíkov, storno podmienky a reklamácie.",
  updatedAt: "1. augusta 2026",
  sections: [
    {
      id: "prevadzkovatel",
      heading: "1. Prevádzkovateľ",
      blocks: [
        {
          type: "paragraph",
          text: `Prevádzkovateľom štúdia a poskytovateľom služieb je ${operatorLine}.`,
        },
        {
          type: "paragraph",
          text: "Klientkou sa rozumie fyzická osoba, ktorá si rezervuje alebo absolvuje lekciu v štúdiu.",
        },
      ],
    },
    {
      id: "sluzby",
      heading: "2. Rozsah služieb",
      blocks: [
        {
          type: "paragraph",
          text: "Štúdio poskytuje skupinové lekcie Reformer Pilates v troch úrovniach — Reformer začiatočníci, Reformer mierne pokročilí a Reformer pokročilí.",
        },
        {
          type: "list",
          items: [
            "Štandardná dĺžka lekcie je 50 minút.",
            "Kapacita skupinovej lekcie je maximálne 4 osoby.",
            "Úplným začiatočníkom odporúčame začať lekciou Reformer začiatočníci.",
            "Pri prvej návšteve je potrebné prísť o 20 minút skôr kvôli úvodu a oboznámeniu so strojom.",
          ],
        },
      ],
    },
    {
      id: "rezervacia",
      heading: "3. Rezervácia lekcie",
      blocks: [
        {
          type: "paragraph",
          text: "Lekciu je možné rezervovať prostredníctvom kontaktných údajov uvedených na tejto stránke. Rezervácia je záväzná po jej potvrdení zo strany štúdia.",
        },
        {
          type: "list",
          items: [
            "Miesto na lekcii je rezervované až po potvrdení termínu štúdiom.",
            "Na lekciu odporúčame prísť približne 10 minút pred jej začiatkom.",
            "Pri meškaní nad 10 minút nemusí byť z bezpečnostných dôvodov možné zapojiť sa do prebiehajúcej lekcie.",
          ],
        },
      ],
    },
    {
      id: "ceny",
      heading: "4. Ceny a platba",
      blocks: [
        {
          type: "paragraph",
          text: "Aktuálne ceny sú uvedené v cenníku na hlavnej stránke. Ceny sú konečné.",
        },
        {
          type: "list",
          items: [
            "Jednorazová lekcia: 17 €.",
            "Balík 5 lekcií: 80 € s platnosťou 3 mesiace od zakúpenia.",
            "Balík 10 lekcií: 150 € s platnosťou 6 mesiacov od zakúpenia.",
          ],
        },
        {
          type: "paragraph",
          text: "Nevyčerpané lekcie po uplynutí platnosti balíka prepadajú a nevzniká nárok na ich náhradu ani vrátenie ceny. Balíky sú neprenosné na inú osobu, ak sa štúdio nedohodne inak.",
        },
      ],
    },
    {
      id: "storno",
      heading: "5. Zmena a zrušenie rezervácie",
      blocks: [
        {
          type: "list",
          items: [
            "Rezerváciu je možné bezplatne zrušiť alebo presunúť najneskôr 24 hodín pred začiatkom lekcie.",
            "Pri zrušení menej ako 24 hodín pred lekciou sa lekcia považuje za absolvovanú a odpočíta sa z balíka.",
            "Štúdio si vyhradzuje právo zrušiť lekciu pri nenaplnení minimálneho počtu klientok alebo z prevádzkových dôvodov; v takom prípade ponúkne náhradný termín.",
          ],
        },
      ],
    },
    {
      id: "zdravie",
      heading: "6. Zdravotný stav a bezpečnosť",
      blocks: [
        {
          type: "paragraph",
          text: "Klientka absolvuje lekciu na vlastnú zodpovednosť a pred prvou lekciou informuje lektorku o zdravotných obmedzeniach, úrazoch alebo tehotenstve.",
        },
        {
          type: "list",
          items: [
            "Pri akútnych zdravotných ťažkostiach odporúčame najprv konzultáciu s lekárom alebo fyzioterapeutom.",
            "Pokyny lektorky týkajúce sa bezpečnej obsluhy reformera sú pre klientky záväzné.",
            "Štúdio nezodpovedá za ujmu vzniknutú nedodržaním pokynov lektorky alebo zamlčaním zdravotného stavu.",
          ],
        },
      ],
    },
    {
      id: "reklamacie",
      heading: "7. Reklamácie a mimosúdne riešenie sporov",
      blocks: [
        {
          type: "paragraph",
          text: `Reklamáciu služby je možné uplatniť e-mailom na ${siteConfig.email}. Štúdio reklamáciu vybaví najneskôr do 30 dní od jej doručenia.`,
        },
        {
          type: "paragraph",
          text: `V prípade, že klientka nie je spokojná so spôsobom vybavenia reklamácie, má právo obrátiť sa na orgán alternatívneho riešenia sporov — ${businessInfo.supervisoryAuthority}.`,
        },
      ],
    },
    {
      id: "zaverecne",
      heading: "8. Záverečné ustanovenia",
      blocks: [
        {
          type: "paragraph",
          text: "Vzťahy neupravené týmito podmienkami sa riadia právnym poriadkom Slovenskej republiky, najmä Občianskym zákonníkom a zákonom o ochrane spotrebiteľa.",
        },
        {
          type: "paragraph",
          text: "Štúdio si vyhradzuje právo obchodné podmienky meniť. Pre rezerváciu platí znenie účinné v deň jej vytvorenia.",
        },
      ],
    },
  ],
};

export const privacyDocument: LegalDocument = {
  slug: "ochrana-osobnych-udajov",
  eyebrow: "PRÁVNE INFORMÁCIE",
  title: "Ochrana osobných údajov",
  titleHighlight: "osobných",
  intro:
    "Tvoje súkromie berieme vážne. Nižšie nájdeš prehľad o tom, aké údaje spracúvame, prečo ich potrebujeme a aké máš práva podľa nariadenia GDPR.",
  metaTitle: "Ochrana osobných údajov",
  metaDescription:
    "Zásady ochrany osobných údajov Lavande Studio — aké údaje spracúvame, na aký účel, ako dlho ich uchovávame a aké máš práva podľa GDPR.",
  updatedAt: "1. augusta 2026",
  sections: [
    {
      id: "prevadzkovatel",
      heading: "1. Prevádzkovateľ",
      blocks: [
        {
          type: "paragraph",
          text: `Prevádzkovateľom, ktorý určuje účely a prostriedky spracúvania osobných údajov, je ${operatorLine}.`,
        },
        {
          type: "paragraph",
          text: `Vo veciach ochrany osobných údajov nás môžeš kontaktovať na ${siteConfig.email}.`,
        },
      ],
    },
    {
      id: "rozsah",
      heading: "2. Aké údaje spracúvame",
      blocks: [
        {
          type: "list",
          items: [
            "Identifikačné a kontaktné údaje: meno, e-mailová adresa, prípadne telefónne číslo.",
            "Údaje o rezervácii: vybraná lekcia, termín a história absolvovaných lekcií.",
            "Údaje o zdravotných obmedzeniach, ak nám ich dobrovoľne poskytneš pred lekciou.",
            "Technické údaje o návšteve webu v rozsahu nevyhnutnom na jeho fungovanie.",
          ],
        },
      ],
    },
    {
      id: "ucel",
      heading: "3. Účel a právny základ spracúvania",
      blocks: [
        {
          type: "list",
          items: [
            "Rezervácia a poskytnutie lekcie — plnenie zmluvy podľa čl. 6 ods. 1 písm. b) GDPR.",
            "Odpoveď na e-mailovú otázku — oprávnený záujem podľa čl. 6 ods. 1 písm. f) GDPR.",
            "Zasielanie noviniek zo štúdia — súhlas podľa čl. 6 ods. 1 písm. a) GDPR, ktorý môžeš kedykoľvek odvolať.",
            "Údaje o zdravotnom stave — výslovný súhlas podľa čl. 9 ods. 2 písm. a) GDPR, výhradne pre bezpečné vedenie lekcie.",
            "Účtovné doklady — plnenie zákonnej povinnosti podľa čl. 6 ods. 1 písm. c) GDPR.",
          ],
        },
      ],
    },
    {
      id: "doba",
      heading: "4. Doba uchovávania",
      blocks: [
        {
          type: "list",
          items: [
            "Údaje o rezerváciách uchovávame počas trvania spolupráce a následne 1 rok.",
            "Účtovné doklady uchovávame 10 rokov, ako to vyžaduje zákon o účtovníctve.",
            "Údaje spracúvané na základe súhlasu uchovávame do jeho odvolania.",
          ],
        },
      ],
    },
    {
      id: "prijemcovia",
      heading: "5. Komu údaje sprístupňujeme",
      blocks: [
        {
          type: "paragraph",
          text: "Osobné údaje nepredávame ani neposkytujeme tretím stranám na marketingové účely. Sprístupňujeme ich len sprostredkovateľom nevyhnutným na chod štúdia.",
        },
        {
          type: "list",
          items: [
            "Poskytovateľ webhostingu a prevádzky webovej stránky.",
            "Poskytovateľ e-mailových a rezervačných služieb.",
            "Účtovník a daňový poradca v rozsahu účtovných dokladov.",
          ],
        },
        {
          type: "paragraph",
          text: "Údaje neprenášame do krajín mimo Európskeho hospodárskeho priestoru bez zodpovedajúcich záruk podľa GDPR.",
        },
      ],
    },
    {
      id: "prava",
      heading: "6. Tvoje práva",
      blocks: [
        {
          type: "list",
          items: [
            "Právo na prístup k osobným údajom a na ich kópiu.",
            "Právo na opravu nesprávnych alebo neúplných údajov.",
            "Právo na vymazanie údajov, ak už nie sú potrebné na uvedený účel.",
            "Právo na obmedzenie spracúvania a právo namietať proti spracúvaniu.",
            "Právo na prenosnosť údajov k inému prevádzkovateľovi.",
            "Právo kedykoľvek odvolať udelený súhlas bez vplyvu na predchádzajúce spracúvanie.",
          ],
        },
        {
          type: "paragraph",
          text: `Svoje práva si môžeš uplatniť e-mailom na ${siteConfig.email}. Ak máš za to, že spracúvame údaje v rozpore s predpismi, môžeš podať sťažnosť na ${businessInfo.dataProtectionAuthority}.`,
        },
      ],
    },
    {
      id: "cookies",
      heading: "7. Cookies a analytika",
      blocks: [
        {
          type: "paragraph",
          text: "Táto stránka používa iba technicky nevyhnutné cookies potrebné na jej správne zobrazenie a bezpečnú prevádzku. Tieto cookies nevyžadujú súhlas a neslúžia na sledovanie správania návštevníkov.",
        },
        {
          type: "list",
          items: [
            "Nepoužívame marketingové ani profilovacie cookies.",
            "Nepoužívame nástroje na sledovanie naprieč webmi ani reklamné pixely.",
            "Ukladanie cookies môžeš kedykoľvek obmedziť v nastaveniach svojho prehliadača.",
          ],
        },
        {
          type: "paragraph",
          text: "Ak v budúcnosti nasadíme analytické alebo marketingové cookies, vyžiadame si na ne vopred tvoj súhlas a tieto zásady aktualizujeme.",
        },
      ],
    },
    {
      id: "zmeny",
      heading: "8. Zmeny zásad",
      blocks: [
        {
          type: "paragraph",
          text: "Tieto zásady môžeme priebežne aktualizovať. Aktuálne znenie je vždy dostupné na tejto stránke spolu s dátumom poslednej aktualizácie.",
        },
      ],
    },
  ],
};

export const legalDocuments: LegalDocument[] = [termsDocument, privacyDocument];
