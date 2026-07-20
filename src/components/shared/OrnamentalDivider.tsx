import { cn } from "@/lib/utils";

interface OrnamentalDividerProps {
  className?: string;
  variant?: "full" | "short" | "diamond";
}

/** Rendering decorative gold dividers for visual rhythm */
export function OrnamentalDivider({
  className,
  variant = "short",
}: OrnamentalDividerProps) {
  if (variant === "diamond") {
    return (
      <div className={cn("flex items-center justify-center gap-4", className)}>
        <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-gold/50" />
        <div className="h-2 w-2 rotate-45 border border-gold/60 bg-gold/20" />
        <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-gold/50" />
      </div>
    );
  }

  if (variant === "full") {
    return <div className={cn("gold-divider", className)} />;
  }

  return <div className={cn("gold-divider-short", className)} />;
}
