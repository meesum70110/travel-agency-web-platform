"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SafeImage } from "@/components/shared/SafeImage";
import { formatPrice } from "@/lib/utils";
import { routes } from "@/constants/routes";
import type { TravelPackage } from "@/types";
import {
  staggerContainer,
  slideUp,
  viewportDefaults,
} from "@/animations/variants";

interface RelatedPackagesProps {
  packages: TravelPackage[];
}

/** Rendering related packages grid on detail pages */
export function RelatedPackages({ packages }: RelatedPackagesProps) {
  if (packages.length === 0) return null;

  return (
    <SectionWrapper background="gradient" padding="compact">
      <SectionHeading title="Related Packages" spacing="compact" />
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefaults}
      >
        {packages.map((pkg) => (
          <motion.div key={pkg.slug} variants={slideUp}>
            <Link
              href={routes.packageDetail(pkg.slug)}
              className="group block glass-panel hover-lift overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <SafeImage
                  src={pkg.heroImage}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="400px"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-heading-sm text-warm-50 group-hover:text-gold transition-colors">
                  {pkg.title}
                </h3>
                <div className="mt-3 flex gap-4 text-caption text-warm-400">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {pkg.countries[0]}
                  </span>
                </div>
                <p className="mt-3 font-serif text-heading-sm text-gold">
                  {formatPrice(pkg.price, pkg.currency)}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
