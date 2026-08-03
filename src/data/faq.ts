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
      "Nie. Začína sa prvá hodina na reformeri, potom môžeš pokračovať na Reformer Začiatočníci a neskôr na Reformer Mierne pokročilí. Lektorka vždy prispôsobí tempo tvojej úrovni.",
  },
  {
    id: "bring",
    question: "Čo si mám priniesť na prvú lekciu?",
    answer:
      "Stačí pohodlné oblečenie, v ktorom sa ti bude dobre pohybovať. Ponožky s protišmykovou podrážkou môžeš mať, ale nemusíš — netreba si kvôli lekcii nič špeciálne dokupovať. Ostatné vybavenie zabezpečíme v štúdiu.",
  },
  {
    id: "reformer-beginner",
    question: "Je Reformer Pilates vhodný aj pre začiatočníčky?",
    answer:
      "Áno. Začni prvou hodinou na reformeri, kde sa naučíš techniku a prácu so strojom. Potom môžeš pokračovať na Reformer Začiatočníci a ďalej podľa svojho pokroku.",
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
