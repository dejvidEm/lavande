import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-lavender text-white hover:bg-lavender-medium border border-transparent",
  secondary:
    "bg-beige-light text-text-primary border border-border hover:bg-beige",
  outline:
    "bg-lavender-pale/40 text-lavender border border-lavender-soft hover:bg-lavender-pale",
  ghost:
    "bg-transparent text-text-primary border border-transparent hover:text-lavender",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex h-[52px] items-center justify-center rounded-pill px-7 text-[15px] font-medium transition-all duration-premium",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender",
    variants[variant],
    className
  );

  if (href) {
    const isExternal = href.startsWith("http://") || href.startsWith("https://");

    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
