export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  promo?: string;
  description: string;
  features: string[];
  recommended?: boolean;
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "single",
    name: "Jednorazová lekcia",
    price: "17 €",
    promo: "Prvá úvodná lekcia za 15 €",
    description: "Ideálne na prvé stretnutie so štúdiom.",
    features: [
      "55 minút vedenej lekcie",
      "Výber z dostupných termínov",
      "Individuálne úpravy podľa úrovne",
      "Prístup k vybaveniu v štúdiu",
    ],
    cta: "Rezervovať lekciu",
  },
  {
    id: "pack-5",
    name: "Balík 5 lekcií",
    price: "80 €",
    description: "Pre pravidelný tréning niekoľkokrát mesačne.",
    features: [
      "5 lekcií podľa výberu",
      "Flexibilná rezervácia termínov",
      "Prioritné upozornenia na voľné miesta",
      "Platnosť balíka 3 mesiace",
      "Ideálne pre budovanie návyku",
    ],
    recommended: true,
    cta: "Vybrať balík",
  },
  {
    id: "pack-10",
    name: "Balík 10 lekcií",
    price: "150 €",
    description: "Najlepšia hodnota pre dlhodobú prax.",
    features: [
      "10 lekcií podľa výberu",
      "Flexibilná rezervácia termínov",
      "Platnosť balíka 6 mesiacov",
      "Vhodné pre viditeľný pokrok",
      "Najvýhodnejšia cena za lekciu",
    ],
    cta: "Vybrať balík",
  },
];
