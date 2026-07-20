import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerSize?: "main" | "wide" | "narrow" | "full";
  padding?: "default" | "sm" | "compact" | "none";
  background?: "default" | "gradient" | "pattern";
}

/** Abstracting reusable section layout wrapper to prevent duplicated JSX */
export function SectionWrapper({
  id,
  children,
  className,
  containerSize = "main",
  padding = "default",
  background = "default",
}: SectionWrapperProps) {
  const containerClass = {
    main: "container-main",
    wide: "container-wide",
    narrow: "container-narrow",
    full: "w-full px-4 sm:px-6 lg:px-8",
  }[containerSize];

  const paddingClass = {
    default: "section-padding",
    sm: "section-padding-sm",
    compact: "py-10 md:py-12",
    none: "",
  }[padding];

  const backgroundClass = {
    default: "",
    gradient: "bg-gradient-to-b from-night-800/50 to-night",
    pattern: "relative bg-night",
  }[background];

  return (
    <section id={id} className={cn(paddingClass, backgroundClass, className)}>
      {background === "pattern" && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      )}
      <div className={cn(containerClass, "relative")}>{children}</div>
    </section>
  );
}
