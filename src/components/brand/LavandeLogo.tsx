import Image from "next/image";
import Link from "next/link";
import { siteConfig, siteImages } from "@/data/site";
import { cn } from "@/lib/utils";

type LavandeLogoProps = {
  variant?: "full" | "compact" | "mark";
  className?: string;
  href?: string;
  priority?: boolean;
};

// Rozmery zodpovedajú 2× najväčšiemu zobrazeniu, aby Next negeneroval
// zbytočne veľké varianty pre logo vysoké max. 56 px.
const sizes = {
  full: {
    src: siteImages.logoNav,
    width: 321,
    height: 130,
    className: "h-10 w-auto sm:h-11 md:h-12",
  },
  compact: {
    src: siteImages.logoNav,
    width: 321,
    height: 130,
    className: "h-11 w-auto sm:h-12 md:h-14",
  },
  mark: {
    src: siteImages.logo,
    width: 48,
    height: 48,
    className: "h-10 w-10",
  },
} as const;

export function LavandeLogo({
  variant = "full",
  className,
  href = "/",
  priority = false,
}: LavandeLogoProps) {
  const config = sizes[variant];

  const logo = (
    <Image
      src={config.src}
      alt={`${siteConfig.name} logo`}
      width={config.width}
      height={config.height}
      priority={priority}
      // Paletové PNG (3,6 kB) je menšie než čokoľvek, čo z neho spraví
      // optimalizátor, takže sa servíruje priamo.
      unoptimized={variant !== "mark"}
      className={cn(config.className, "object-contain", className)}
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0 items-center" aria-label={siteConfig.name}>
        {logo}
      </Link>
    );
  }

  return logo;
}
