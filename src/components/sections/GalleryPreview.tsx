"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SafeImage } from "@/components/shared/SafeImage";
import { getLatestGalleryItems } from "@/data/gallery";
import { routes } from "@/constants/routes";
import {
  staggerContainer,
  scaleIn,
  viewportDefaults,
} from "@/animations/variants";

/** Rendering gallery preview grid with link to full gallery */
export function GalleryPreview() {
  const items = getLatestGalleryItems(6);

  if (items.length === 0) {
    return null;
  }

  return (
    <SectionWrapper id="gallery" background="gradient">
      <SectionHeading
        title="Pilgrimage Gallery"
        subtitle="Moments from our sacred journeys"
      />

      <motion.div
        className="grid grid-cols-2 gap-4 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefaults}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={scaleIn}
            className="group relative aspect-square overflow-hidden rounded-xl border border-gold/10"
          >
            <SafeImage
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-900/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            {item.caption && (
              <p className="absolute bottom-0 left-0 right-0 p-4 text-body-sm text-warm-100 opacity-0 transition-opacity group-hover:opacity-100">
                {item.caption}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 text-center">
        <Link
          href={routes.gallery}
          className="inline-flex items-center gap-2 text-body-md font-medium text-gold transition-colors hover:text-gold-200 focus-ring rounded-lg px-4 py-2"
        >
          View Full Gallery
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
