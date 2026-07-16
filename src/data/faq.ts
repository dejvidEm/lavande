export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    id: "experience",
    question: "Potrebujem mať skúsenosti s Pilates?",
    answer:
      "Nie. Ponúkame lekcie pre začiatočníčky aj pokročilejšie klientky. Lektorka vždy prispôsobí tempo a náročnosť tvojej aktuálnej kondícii.",
  },
  {
    id: "bring",
    question: "Čo si mám priniesť na prvú lekciu?",
    answer:
      "Odporúčame pohodlné oblečenie, ponožky s protišmykovou podrážkou a malú fľašu vody. Ostatné vybavenie zabezpečíme v štúdiu.",
  },
  {
    id: "reformer-beginner",
    question: "Je Reformer Pilates vhodný aj pre začiatočníčky?",
    answer:
      "Áno. Reformer umožňuje bezpečný a kontrolovaný pohyb. Začiatočníčky odporúčame začať úvodnou lekciou alebo individuálnym stretnutím.",
  },
  {
    id: "arrival",
    question: "Ako skoro mám prísť pred lekciou?",
    answer:
      "Prosíme, príď 10–15 minút pred začiatkom, aby si sa stihla pripraviť a lektorka mala priestor na krátku konzultáciu.",
  },
  {
    id: "cancel",
    question: "Môžem lekciu zrušiť alebo presunúť?",
    answer:
      "Termín je možné zmeniť alebo zrušiť podľa podmienok rezervácie. Presné pravidlá nájdeš v potvrdení rezervácie alebo nás kontaktuj priamo.",
  },
  {
    id: "back-pain",
    question: "Je Pilates vhodný pri bolesti chrbta?",
    answer:
      "Pilates môže podporiť silu a stabilitu chrbta, no pri akútnej bolesti alebo zdravotných obmedzeniach odporúčame najprv konzultáciu s kvalifikovaným odborníkom.",
  },
];
