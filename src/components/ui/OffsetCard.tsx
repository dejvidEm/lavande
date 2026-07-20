"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type OffsetCardProps = {
  children: ReactNode;
  className?: string;
  offsetClassName?: string;
  hover?: boolean;
  shadow?: boolean;
};

export function OffsetCard({
  children,
  className,
  offsetClassName,
  hover = true,
  shadow = true,
}: OffsetCardProps) {
  return (
    <div className="group relative">
      {shadow && (
        <div
          className={cn(
            "absolute inset-0 translate-x-[10px] translate-y-[10px] rounded-card-sm bg-lavender-pale",
            offsetClassName
          )}
          aria-hidden="true"
        />
      )}
      <div
        className={cn(
          "relative rounded-card-sm border border-border bg-surface transition-transform duration-premium",
          hover && "group-hover:-translate-y-1",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
