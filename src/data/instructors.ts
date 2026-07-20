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
  image: string;
  imageAlt: string;
  objectPosition?: string;
  courses: InstructorCourse[];
  highlights: string[];
};

export const leadInstructor: InstructorProfile = {
  id: "alexandra",
  name: "Alexandra",
  role: "Zakladateľka & hlavná lektorka",
  bio: "Každú lekciu vedem s dôrazom na bezpečnú techniku, dych a pocit istoty v tele. Verím, že sila má byť jemná, vedomá a dlhodobo udržateľná.",
  image: siteImages.instructors.lucia,
  imageAlt: "Lektorka Alexandra pri cvičení Reformer Pilates v štúdiu Lavande.",
  objectPosition: "center 25%",
  courses: [
    { id: "reformer", label: "Reformer Pilates" },
    { id: "mat", label: "Mat Pilates" },
    { id: "private", label: "Individuálne lekcie" },
  ],
  highlights: [
    "Individuálne prispôsobenie tempa lekcie",
    "Bezpečný prístup pre začiatočníčky aj pokročilejšie",
    "Dôraz na dych, techniku a dlhodobý pokrok",
    "Pokojné a podporné vedenie v komornom štúdiu",
  ],
};
