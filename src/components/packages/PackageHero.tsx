"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, Calendar, ArrowLeft } from "lucide-react";
import { SafeImage } from "@/components/shared/SafeImage";
import { formatPrice } from "@/lib/utils";
import type { TravelPackage } from "@/types";
import { fadeIn, slideUp } from "@/animations/variants";

interface PackageHeroProps {
  pkg: TravelPackage;
}

/** Rendering package detail page hero section */
export function PackageHero({ pkg }: PackageHeroProps) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-20">
      <SafeImage
        src={pkg.heroImage}
        alt={pkg.title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-night/30" />

      <div className="container-main relative z-10 mx-auto max-w-7xl pb-10 pt-28">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Link
            href="/#packages"
            className="mb-6 inline-flex items-center gap-2 text-body-sm text-warm-300 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Packages
          </Link>

          {pkg.groupName && (
            <span className="mb-4 inline-block rounded-full bg-gold/90 px-4 py-1 text-caption font-medium text-night-900">
              {pkg.groupName}
            </span>
          )}

          <motion.h1
            variants={slideUp}
            className="font-serif text-display-sm md:text-display-md text-warm-50"
          >
            {pkg.title}
          </motion.h1>
          <motion.p
            variants={slideUp}
            className="mt-2 text-body-lg text-warm-300"
          >
            {pkg.subtitle}
          </motion.p>

          <motion.div
            variants={slideUp}
            className="mt-6 flex flex-wrap gap-6 text-body-sm text-warm-200"
          >
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" />
              {pkg.duration}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              {pkg.countries.join(", ")}
            </span>
            {pkg.departureDates[0] && (
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gold" />
                {pkg.departureDates[0]}
              </span>
            )}
          </motion.div>

          <motion.div variants={slideUp} className="mt-8">
            <p className="text-caption text-warm-400">{pkg.priceLabel}</p>
            <p className="font-serif text-display-sm text-gold">
              {formatPrice(pkg.price, pkg.currency)}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
