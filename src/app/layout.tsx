import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationMap } from "@/components/layout/LocationMap";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { JsonLd } from "@/components/seo/JsonLd";
import { ogImage, siteConfig, studioLocation } from "@/data/site";
import { buildLocalBusinessSchema, buildWebSiteSchema } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: ogImage.url,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Ikony: app/favicon.ico, app/icon.png, app/apple-icon.png + android-chrome v public/.
  manifest: "/manifest.webmanifest",
  category: "fitness",
  formatDetection: {
    telephone: false,
    address: true,
    email: false,
  },
  other: {
    "geo.region": "SK-KI",
    "geo.placename": "Trebišov",
    "geo.position": `${studioLocation.geo.latitude};${studioLocation.geo.longitude}`,
    ICBM: `${studioLocation.geo.latitude}, ${studioLocation.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.language}
      className={`${manrope.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background font-sans text-text-primary antialiased">
        <JsonLd schema={[buildWebSiteSchema(), buildLocalBusinessSchema()]} />
        <a
          href="#obsah"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-pill focus:bg-lavender focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
        >
          Preskočiť na obsah
        </a>
        <ScrollToTop />
        <Header />
        <main id="obsah">{children}</main>
        <LocationMap />
        <Footer />
      </body>
    </html>
  );
}
