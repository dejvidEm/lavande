export const siteConfig = {
  name: "Lavande Studio",
  title: "Lavande Studio | Reformer Pilates štúdio",
  description:
    "Boutique Pilates štúdio pre vedomý pohyb, zdravé držanie tela, silu a pokoj. Tri úrovne Reformer Pilates v komornom prostredí, max. 4 osoby na lekcii.",
  url: "https://lavande.sk",
  locale: "sk_SK",
  language: "sk",
  bookingUrl: "https://app.zenamu.com/lavande-studio?from=1789336800",
  passUrl: "https://app.zenamu.com/lavande-studio/entry-pass",
  scheduleUrl: "/#lekcie",
  email: "lavandestudio7@gmail.com",
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

export const instagramHandle = socialLinks.instagram
  ? socialLinks.instagram.replace(/\/+$/, "").split("/").pop() ?? ""
  : "";

/**
 * Fakturačné a kontaktné údaje prevádzkovateľa.
 * Používajú sa v právnych dokumentoch a v structured data pre vyhľadávače.
 */
export const businessInfo = {
  legalName: "Lavande Studio",
  registrationId: "",
  vatId: "",
  street: "Jána Kostru 1",
  city: "Trebišov",
  postalCode: "075 01",
  country: "Slovensko",
  countryCode: "SK",
  phone: "",
  supervisoryAuthority:
    "Slovenská obchodná inšpekcia (SOI), Inšpektorát SOI pre Bratislavský kraj",
  dataProtectionAuthority: "Úrad na ochranu osobných údajov Slovenskej republiky",
} as const;

const studioAddressQuery = [
  businessInfo.street,
  businessInfo.postalCode,
  businessInfo.city,
]
  .filter(Boolean)
  .join(", ");

export const studioLocation = {
  label: studioAddressQuery,
  street: businessInfo.street,
  city: businessInfo.city,
  embedSrc: `https://maps.google.com/maps?q=${encodeURIComponent(studioAddressQuery)}&hl=sk&z=16&output=embed`,
  externalUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(studioAddressQuery)}`,
} as const;

export const siteImages = {
  logo: "/brand/lavande-studio-logo.png",
  logoNav: "/brand/lavande-studio-logo-nav-small.png",
  heroBackground: "/images/lavande/lavande-studio-reformer-hero.jpg",
  services: {
    beginner: "/images/lavande/lesson-beginner-studio.jpg",
    intermediate: "/images/lavande/lesson-intermediate.jpg",
    advanced: "/images/lavande/lesson-advanced.jpg",
    individual: "/images/lavande/lesson-individual.jpg",
  },
  benefits: {
    individual: "/images/lavande/benefit-individual.jpg",
    groups: "/images/lavande/benefit-groups-studio.jpg",
    strength: "/images/lavande/benefit-strength.jpg",
    environment: "/images/lavande/benefit-environment.jpg",
  },
  about: {
    main: "/images/lavande/about-main.jpg",
    avatar: "/images/lavande/about-avatar.jpg",
  },
  instructors: {
    alexandra: "/images/lavande/instructor-alexandra-portrait.jpg",
  },
  testimonials: {
    martina: "/images/lavande/testimonial-1.jpg",
    jana: "/images/lavande/testimonial-2.jpg",
    katarina: "/images/lavande/testimonial-3.jpg",
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
