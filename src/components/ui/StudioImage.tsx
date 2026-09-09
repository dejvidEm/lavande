import Image from "next/image";
import { imageBlurs } from "@/data/image-blurs";
import { IMAGE_QUALITY } from "@/lib/images";
import { cn } from "@/lib/utils";

type StudioImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  objectPosition?: string;
};

export function StudioImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
  objectPosition,
}: StudioImageProps) {
  const blurDataURL = imageBlurs[src];

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={IMAGE_QUALITY.photo}
      preload={priority}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "low"}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
      className={cn("object-cover", className)}
      style={objectPosition ? { objectPosition } : undefined}
    />
  );
}
