import { siteImages } from "./site";

export type InstructorCourse = {
  id: string;
  label: string;
};

export type InstructorProfile = {
  id: string;
  name: string;
  role: string;
  bio: string;
  approach: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  experience: string;
  experienceLabel: string;
  courses: InstructorCourse[];
  highlights: string[];
};

export const leadInstructor: InstructorProfile = {
  id: "lucia",
  name: "Lucia",
  role: "Zakladateľka & hlavná lektorka",
  bio: "Pilatesu sa venujem viac ako päť rokov a v Lavande vediem každú lekciu s dôrazom na bezpečnú techniku, dych a pocit istoty v tele. Verím, že sila má byť jemná, vedomá a dlhodobo udržateľná.",
  approach:
    "Každú klientku vediem individuálne — bez porovnávania, bez tlaku na výkon. Cieľom je, aby si po lekcii odišla silnejšia, ale aj pokojnejšia.",
  image: siteImages.instructors.lucia,
  imageAlt: "Lektorka Lucia pri cvičení Reformer Pilates v štúdiu Lavande.",
  objectPosition: "center 25%",
  experience: "5+",
  experienceLabel: "rokov skúseností",
  courses: [
    { id: "reformer", label: "Reformer Pilates" },
    { id: "mat", label: "Mat Pilates" },
    { id: "private", label: "Individuálne lekcie" },
    { id: "beginner", label: "Pilates pre začiatočníčky" },
    { id: "posture", label: "Zdravé držanie tela" },
    { id: "mobility", label: "Mobilita & stabilita" },
  ],
  highlights: [
    "Certifikovaná Pilates inštruktorka",
    "Individuálne prispôsobenie tempa lekcie",
    "Bezpečný prístup pre začiatočníčky aj pokročilejšie",
    "Dôraz na dych, techniku a dlhodobý pokrok",
  ],
};
