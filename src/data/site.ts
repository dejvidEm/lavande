export const siteConfig = {
  name: "Lavande Studio",
  title: "Lavande Studio | Pilates štúdio",
  description:
    "Boutique Pilates štúdio pre vedomý pohyb, zdravé držanie tela, silu a pokoj. Tri úrovne Reformer Pilates v komornom prostredí.",
  bookingUrl: "/#kontakt",
  scheduleUrl: "/#lekcie",
  email: "studio@lavande.sk",
  instagramUrl: "#",
  themeColor: "#897495",
} as const;

export const siteImages = {
  logo: "/brand/lavande-studio-logo.png",
  logoNav: "/brand/lavande-studio-logo-nav.png",
  heroBackground: "/images/lavande/hero-background.jpg",
  hero: "/images/lavande/hero.png",
  studio: "/images/lavande/studio.png",
  services: {
    reformer: "/images/lavande/reformer-pilates.png",
    mat: "/images/lavande/mat-pilates.png",
    private: "/images/lavande/private-session.png",
    beginner: "/images/lavande/beginner.png",
  },
  benefits: {
    individual: "/images/lavande/reformer-pilates.png",
    groups: "/images/lavande/hero.png",
    strength: "/images/lavande/mat-pilates.png",
    environment: "/images/lavande/studio.png",
  },
  about: {
    main: "/images/lavande/reformer-pilates.png",
    avatar: "/images/lavande/beginner.png",
  },
  instructors: {
    lucia: "/images/lavande/instructor-1.png",
    veronika: "/images/lavande/instructor-2.png",
    nina: "/images/lavande/instructor-3.png",
  },
  testimonials: {
    martina: "/images/lavande/testimonial-1.png",
    jana: "/images/lavande/testimonial-2.png",
    katarina: "/images/lavande/testimonial-3.png",
  },
  equipment: "/images/lavande/reformer-detail.png",
} as const;

export const heroStats = [
  { value: "10+", label: "spokojných klientok" },
  { value: "3", label: "úrovne Reformer Pilates" },
  { value: "4.9", label: "priemerné hodnotenie" },
] as const;
