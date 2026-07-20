import { cn } from "@/lib/utils";

type HighlightedTextProps = {
  text: string;
  highlight: string;
  highlightClassName?: string;
};

export function HighlightedText({
  text,
  highlight,
  highlightClassName = "text-lavender",
}: HighlightedTextProps) {
  const index = text.indexOf(highlight);

  if (index === -1) {
    return <>{text}</>;
  }

  return (
    <>
      {text.slice(0, index)}
      <span className={cn(highlightClassName)}>{highlight}</span>
      {text.slice(index + highlight.length)}
    </>
  );
}
