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
      "Nie. Naše lekcie sú rozdelené podľa úrovne, takže si môžeš vybrať tú, ktorá je pre teba vhodná. Ak prichádzaš na Reformer Pilates prvýkrát, rezervuj si lekciu Reformer začiatočníci a príď prosím 10 minút pred začiatkom.",
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
      "Áno. Reformer Pilates je vhodný aj pre úplné začiatočníčky. V našom štúdiu začína každá nová klientka na lekcii Reformer začiatočníci, kde sa naučí správnu techniku, dýchanie a prácu so strojom.",
  },
  {
    id: "arrival",
    question: "Ako skoro mám prísť pred lekciou?",
    answer:
      "Prosíme, príď približne 10 minút pred začiatkom každej lekcie, aby si mala dostatok času pripraviť sa na cvičenie.",
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
