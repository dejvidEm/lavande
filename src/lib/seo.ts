import { businessInfo, ogImage, siteConfig, socialLinks } from "@/data/site";
import { faqItems } from "@/data/faq";
import { leadInstructor } from "@/data/instructors";
import type { LessonPage } from "@/data/lesson-pages";

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

function definedSocialProfiles(): string[] {
  return Object.values(socialLinks).filter(Boolean);
}

/** Nevyplnené polia sa do structured data nedostanú, aby schéma neobsahovala prázdne hodnoty. */
function optional(key: string, value: string): Record<string, string> {
  return value ? { [key]: value } : {};
}

export function buildLocalBusinessSchema() {
  const address = {
    "@type": "PostalAddress",
    addressCountry: businessInfo.countryCode,
    ...optional("streetAddress", businessInfo.street),
    ...optional("addressLocality", businessInfo.city),
    ...optional("postalCode", businessInfo.postalCode),
  };

  const sameAs = definedSocialProfiles();

  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    legalName: businessInfo.legalName,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/brand/lavande-studio-logo.png"),
    image: absoluteUrl(ogImage.url),
    email: siteConfig.email,
    address,
    ...optional("telephone", businessInfo.phone),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    areaServed: businessInfo.city || businessInfo.country,
    knowsLanguage: siteConfig.language,
    employee: {
      "@type": "Person",
      name: leadInstructor.name,
      jobTitle: leadInstructor.role,
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: absoluteUrl("/"),
    inLanguage: siteConfig.language,
    description: siteConfig.description,
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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

export function buildLessonSchema(lesson: LessonPage) {
  const url = absoluteUrl(`/lekcie/${lesson.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: lesson.title,
    description: lesson.metaDescription,
    url,
    serviceType: "Reformer Pilates",
    image: absoluteUrl(lesson.image),
    provider: { "@id": absoluteUrl("/#organization") },
    audience: {
      "@type": "Audience",
      audienceType: lesson.level,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "17",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/#cennik"),
    },
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
