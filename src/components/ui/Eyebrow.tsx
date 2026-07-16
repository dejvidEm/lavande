import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted sm:text-xs",
        className
      )}
    >
      [ {children} ]
    </p>
  );
}
