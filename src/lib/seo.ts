import {
  businessInfo,
  ogImage,
  siteConfig,
  socialLinks,
  studioLocation,
} from "@/data/site";
import { faqItems } from "@/data/faq";
import { leadInstructor } from "@/data/instructors";
import { lessonPages, type LessonPage } from "@/data/lesson-pages";
import { individualPlan, pricingPlans } from "@/data/pricing";

export function absoluteUrl(path = "/"): string {
  if (path === "/" || path === "") {
    return siteConfig.url;
  }

  const url = new URL(path, siteConfig.url).toString();
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function definedSocialProfiles(): string[] {
  return Object.values(socialLinks).filter(Boolean);
}

/** Nevyplnené polia sa do structured data nedostanú, aby schéma neobsahovala prázdne hodnoty. */
function optional(key: string, value: string): Record<string, string> {
  return value ? { [key]: value } : {};
}

function euroAmount(price: string | number): string {
  if (typeof price === "number") {
    return price.toFixed(2);
  }

  const parsed = Number.parseFloat(price.replace(/[^\d.,]/g, "").replace(",", "."));
  return Number.isFinite(parsed) ? parsed.toFixed(2) : price;
}

function isoDuration(label: string): string | undefined {
  const match = label.match(/(\d+)\s*min/i);
  return match ? `PT${match[1]}M` : undefined;
}

function organizationId(): string {
  return absoluteUrl("/#organization");
}

function websiteId(): string {
  return absoluteUrl("/#website");
}

export function buildLocalBusinessSchema() {
  const address = {
    "@type": "PostalAddress",
    addressCountry: businessInfo.countryCode,
    ...optional("streetAddress", businessInfo.street),
    ...optional("addressLocality", businessInfo.city),
    ...optional("postalCode", businessInfo.postalCode),
    ...optional("addressRegion", studioLocation.region),
  };

  const sameAs = definedSocialProfiles();

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation", "HealthAndBeautyBusiness"],
    "@id": organizationId(),
    name: siteConfig.name,
    legalName: businessInfo.legalName,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/brand/lavande-studio-logo.png"),
    },
    image: [
      absoluteUrl(ogImage.url),
      absoluteUrl(leadInstructor.image),
    ],
    email: siteConfig.email,
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: studioLocation.geo.latitude,
      longitude: studioLocation.geo.longitude,
    },
    hasMap: studioLocation.externalUrl,
    priceRange: "17€-150€",
    currenciesAccepted: "EUR",
    areaServed: {
      "@type": "City",
      name: businessInfo.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: studioLocation.region,
      },
    },
    knowsLanguage: siteConfig.language,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      availableLanguage: ["Slovak"],
    },
    ...optional("telephone", businessInfo.phone),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    employee: {
      "@type": "Person",
      name: leadInstructor.name,
      jobTitle: leadInstructor.role,
      image: absoluteUrl(leadInstructor.image),
      worksFor: { "@id": organizationId() },
    },
    hasOfferCatalog: {
      "@id": absoluteUrl("/#cennik"),
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(),
    name: siteConfig.name,
    url: absoluteUrl("/"),
    inLanguage: siteConfig.language,
    description: siteConfig.description,
    publisher: { "@id": organizationId() },
  };
}

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl("/#faq"),
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildLessonListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": absoluteUrl("/#lekcie"),
    name: "Lekcie Reformer Pilates",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: lessonPages.length,
    itemListElement: lessonPages.map((lesson, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: lesson.title,
      url: absoluteUrl(`/lekcie/${lesson.slug}`),
    })),
  };
}

export function buildOfferCatalogSchema() {
  const lessonOffers = lessonPages.map((lesson) => ({
    "@type": "Offer",
    name: lesson.title,
    url: absoluteUrl(`/lekcie/${lesson.slug}`),
    priceCurrency: "EUR",
    price: euroAmount(lesson.price),
    availability: "https://schema.org/InStock",
    itemOffered: {
      "@type": "Service",
      name: lesson.title,
      provider: { "@id": organizationId() },
    },
  }));

  const packOffers = pricingPlans.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    url: plan.href?.startsWith("http")
      ? plan.href
      : absoluteUrl("/#cennik"),
    priceCurrency: "EUR",
    price: euroAmount(plan.price),
    availability: "https://schema.org/InStock",
  }));

  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": absoluteUrl("/#cennik"),
    name: "Cenník Lavande Studio",
    itemListElement: [
      ...lessonOffers,
      ...packOffers,
      {
        "@type": "Offer",
        name: individualPlan.name,
        url: absoluteUrl(individualPlan.href),
        priceCurrency: "EUR",
        price: euroAmount(individualPlan.price),
        availability: "https://schema.org/InStock",
      },
    ],
  };
}

export function buildLessonSchema(lesson: LessonPage) {
  const url = absoluteUrl(`/lekcie/${lesson.slug}`);
  const duration = isoDuration(lesson.duration);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: lesson.title,
    description: lesson.metaDescription,
    url,
    serviceType: "Reformer Pilates",
    category: lesson.level,
    image: absoluteUrl(lesson.image),
    provider: { "@id": organizationId() },
    areaServed: {
      "@type": "City",
      name: businessInfo.city,
    },
    audience: {
      "@type": "Audience",
      audienceType: lesson.level,
    },
    ...(duration ? { duration } : {}),
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: euroAmount(lesson.price),
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/#cennik"),
    },
  };
}

export function buildWebPageSchema({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": websiteId() },
    about: { "@id": organizationId() },
  };
}

export function buildBreadcrumbSchema(
  trail: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
