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

const sizes = {
  full: { width: 140, height: 140, className: "h-14 w-auto md:h-16" },
  compact: { width: 120, height: 120, className: "h-11 w-auto" },
  mark: { width: 48, height: 48, className: "h-10 w-10" },
} as const;

export function LavandeLogo({
  variant = "full",
  className,
  href = "#",
  priority = false,
}: LavandeLogoProps) {
  const config = sizes[variant];

  const logo = (
    <Image
      src={siteImages.logo}
      alt={`${siteConfig.name} logo`}
      width={config.width}
      height={config.height}
      priority={priority}
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
