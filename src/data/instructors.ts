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
  bio: "Každú lekciu vediem tak, aby ste sa cítili príjemne, bezpečne a zároveň z nej mali čo najviac. Záleží mi na správnom prevedení cvikov, dýchaní a na tom, aby ste svoje telo postupne spoznávali a posilňovali.",
  image: siteImages.instructors.alexandra,
  imageAlt: "Lektorka Alexandra v štúdiu Lavande.",
  objectPosition: "center 22%",
  courses: [
    { id: "beginner", label: "Reformer začiatočníci" },
    { id: "intermediate", label: "Reformer mierne pokročilí" },
    { id: "advanced", label: "Reformer pokročilí" },
  ],
  highlights: [
    "Lekciu prispôsobím vašim potrebám a tempu",
    "Vhodné pre začiatočníčky aj pokročilé",
    "Zameranie na správnu techniku, dych a kontrolu pohybu",
    "Individuálny prístup v príjemnom a komornom štúdiu",
  ],
};
