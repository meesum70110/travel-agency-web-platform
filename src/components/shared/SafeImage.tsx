"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SafeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  objectFit?: "cover" | "contain" | "fill";
}

/** Rendering images with graceful fallback when assets are missing */
export function SafeImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className,
  objectFit = "cover",
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-night-700/50",
          fill ? "absolute inset-0" : "",
          className
        )}
        style={!fill ? { width, height } : undefined}
      >
        <div className="flex flex-col items-center gap-2 text-warm-400">
          <ImageIcon className="h-8 w-8 opacity-50" />
          <span className="text-caption opacity-70">Image coming soon</span>
        </div>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn(
        fill && "absolute inset-0 h-full w-full object-cover object-center",
        !fill && objectFit === "cover" && "object-cover object-center",
        !fill && objectFit === "contain" && "object-contain",
        !fill && objectFit === "fill" && "object-fill",
        className
      )}
      onError={() => setHasError(true)}
    />
  );
}
