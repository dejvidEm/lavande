export type NavLink = {
  label: string;
  href: string;
};

export const mainNavLinks: NavLink[] = [
  { label: "O nás", href: "/#o-nas" },
  { label: "Lekcie", href: "/#lekcie" },
  { label: "Lektorky", href: "/#lektorky" },
  { label: "Cenník", href: "/#cennik" },
  { label: "FAQ", href: "/#faq" },
];

export const footerNavLinks: NavLink[] = [...mainNavLinks];

export const footerSecondaryLinks: NavLink[] = [
  { label: "Instagram", href: "#" },
  { label: "Kontakt", href: "/#kontakt" },
  { label: "Obchodné podmienky", href: "#" },
  { label: "Ochrana osobných údajov", href: "#" },
  { label: "Cookies", href: "#" },
];
