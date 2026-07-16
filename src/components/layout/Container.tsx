import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
  id?: string;
};

export function Container({
  children,
  className,
  as: Component = "div",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={cn(
        "mx-auto w-full max-w-container px-5 sm:px-6 lg:px-9 xl:px-10",
        className
      )}
    >
      {children}
    </Component>
  );
}
