import { cn } from "@/lib/utils";

type LavenderBranchProps = {
  className?: string;
  opacity?: number;
};

export function LavenderBranch({ className, opacity = 0.15 }: LavenderBranchProps) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
      style={{ opacity }}
    >
      <path
        d="M58 190 C58 140, 62 110, 58 70 C54 30, 48 10, 42 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <ellipse cx="38" cy="28" rx="8" ry="14" fill="currentColor" transform="rotate(-35 38 28)" />
      <ellipse cx="52" cy="48" rx="7" ry="12" fill="currentColor" transform="rotate(-20 52 48)" />
      <ellipse cx="44" cy="68" rx="8" ry="13" fill="currentColor" transform="rotate(-40 44 68)" />
      <ellipse cx="56" cy="88" rx="7" ry="12" fill="currentColor" transform="rotate(-15 56 88)" />
      <ellipse cx="46" cy="108" rx="8" ry="13" fill="currentColor" transform="rotate(-35 46 108)" />
      <ellipse cx="54" cy="128" rx="7" ry="11" fill="currentColor" transform="rotate(-25 54 128)" />
      <ellipse cx="48" cy="148" rx="7" ry="12" fill="currentColor" transform="rotate(-30 48 148)" />
    </svg>
  );
}
