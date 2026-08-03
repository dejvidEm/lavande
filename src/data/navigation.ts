import { socialLinks } from "./site";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const mainNavLinks: NavLink[] = [
  { label: "O nás", href: "/#o-nas" },
  { label: "Lekcie", href: "/#lekcie" },
  { label: "Lektorky", href: "/#lektorky" },
  { label: "Cenník", href: "/#cennik" },
  { label: "FAQ", href: "/#faq" },
];

export const footerNavLinks: NavLink[] = [...mainNavLinks];

export const legalNavLinks: NavLink[] = [
  { label: "Obchodné podmienky", href: "/obchodne-podmienky" },
  { label: "Ochrana osobných údajov", href: "/ochrana-osobnych-udajov" },
  { label: "Cookies", href: "/ochrana-osobnych-udajov#cookies" },
];

export const footerSecondaryLinks: NavLink[] = [
  { label: "Kontakt", href: "/#kontakt" },
  ...(socialLinks.instagram
    ? [{ label: "Instagram", href: socialLinks.instagram, external: true }]
    : []),
  ...(socialLinks.facebook
    ? [{ label: "Facebook", href: socialLinks.facebook, external: true }]
    : []),
  ...legalNavLinks,
];
