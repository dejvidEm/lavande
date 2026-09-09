import Image from "next/image";

type AvatarImageProps = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Avatary sú už 128–160 px a 3–4 kB. Optimalizátor by k nim pridal
 * srcset s väčšími `w=` variantmi a extra hop na `/_next/image`.
 */
export function AvatarImage({ src, alt, className = "object-cover" }: AvatarImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      sizes="56px"
      fetchPriority="low"
      className={className}
    />
  );
}
