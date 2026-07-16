export type Step = {
  number: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Vyber si lekciu",
    description:
      "Pozri si rozvrh a vyber formu, ktorá ti najviac vyhovuje.",
  },
  {
    number: "02",
    title: "Rezervuj si miesto",
    description: "Termín si rezervuješ online za pár sekúnd.",
  },
  {
    number: "03",
    title: "Príď taká, aká si",
    description: "O všetko ostatné sa postaráme v štúdiu.",
  },
];
