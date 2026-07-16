import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "text-balance text-[2rem] font-medium leading-[1.08] tracking-[-0.035em] text-text-primary sm:text-[2.375rem] lg:text-[3.25rem]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-[1.65]">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
