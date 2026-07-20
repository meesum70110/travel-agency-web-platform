import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  spacing?: "default" | "compact";
  className?: string;
}

/** Rendering consistent section headings across all pages */
export function SectionHeading({
  title,
  subtitle,
  align = "center",
  spacing = "default",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        spacing === "default" ? "mb-12 md:mb-16" : "mb-6 md:mb-8",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="font-serif text-display-sm md:text-display-md text-warm-50 text-balance">
        {title}
      </h2>
      <div
        className={cn("gold-divider-short my-4", align === "left" && "mx-0")}
      />
      {subtitle && (
        <p className="mx-auto max-w-2xl text-body-lg text-warm-300 text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
