export const siteConfig = {
  name: "Lavande Studio",
  title: "Lavande Studio | Reformer Pilates štúdio",
  description:
    "Boutique Pilates štúdio pre vedomý pohyb, zdravé držanie tela, silu a pokoj. Tri úrovne Reformer Pilates v komornom prostredí, max. 4 osoby na lekcii.",
  url: "https://lavande.sk",
  locale: "sk_SK",
  language: "sk",
  bookingUrl: "/#kontakt",
  scheduleUrl: "/#lekcie",
  email: "studio@lavande.sk",
  themeColor: "#897495",
  keywords: [
    "Reformer Pilates",
    "Pilates štúdio",
    "Pilates pre začiatočníkov",
    "Pilates lekcie",
    "Lavande Studio",
    "vedomý pohyb",
    "zdravé držanie tela",
  ],
} as const;

/**
 * Odkazy na sociálne siete. Prázdna hodnota znamená, že sa odkaz nikde nezobrazí,
 * takže tu nikdy nevznikne mŕtvy link.
 */
export const socialLinks = {
  instagram: "https://www.instagram.com/lavande_pilatesstudio/",
  facebook: "",
} as const;

/**
 * Fakturačné a kontaktné údaje prevádzkovateľa.
 * Používajú sa v právnych dokumentoch a v structured data pre vyhľadávače.
 */
export const businessInfo = {
  legalName: "Lavande Studio",
  registrationId: "",
  vatId: "",
  street: "",
  city: "Bratislava",
  postalCode: "",
  country: "Slovensko",
  countryCode: "SK",
  phone: "",
  supervisoryAuthority:
    "Slovenská obchodná inšpekcia (SOI), Inšpektorát SOI pre Bratislavský kraj",
  dataProtectionAuthority: "Úrad na ochranu osobných údajov Slovenskej republiky",
} as const;

export const siteImages = {
  logo: "/brand/lavande-studio-logo.png",
  // Zmenšený zdroj: wordmark sa nikde nezobrazuje vyššie ako 56 px.
  logoNav: "/brand/lavande-studio-logo-nav-small.png",
  heroBackground: "/images/lavande/hero-background.jpg",
  hero: "/images/lavande/hero.png",
  studio: "/images/lavande/studio.png",
  services: {
    reformer: "/images/lavande/reformer-pilates.png",
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
    alexandra: "/images/lavande/instructor-1.png",
  },
  testimonials: {
    martina: "/images/lavande/testimonial-1.png",
    jana: "/images/lavande/testimonial-2.png",
    katarina: "/images/lavande/testimonial-3.png",
  },
} as const;

export const ogImage = {
  url: siteImages.heroBackground,
  width: 1024,
  height: 576,
  alt: "Lavande Studio — Reformer Pilates v komornom prostredí.",
} as const;

export const heroStats = [
  { value: "10+", label: "spokojných klientok" },
  { value: "3", label: "úrovne Reformer Pilates" },
  { value: "4.9", label: "priemerné hodnotenie" },
] as const;
