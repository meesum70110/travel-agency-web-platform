"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import { useCallback } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SafeImage } from "@/components/shared/SafeImage";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { getAvailablePackages } from "@/data/packages";
import { formatPrice } from "@/lib/utils";
import { routes } from "@/constants/routes";
export function PackagesCarousel() {
  const packages = getAvailablePackages();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (packages.length === 0) {
    return (
      <SectionWrapper id="packages">
        <SectionHeading title="Current Packages" />
        <div className="glass-panel p-12 text-center">
          <p className="text-body-lg text-warm-300">
            No packages are currently available. Please contact us for upcoming
            pilgrimage schedules.
          </p>
          <WhatsAppButton className="mt-6" />
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="packages">
      <SectionHeading
        title="Current Packages"
        subtitle="Choose your sacred journey — complete arrangements included"
      />

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.slug}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <Link
                  href={routes.packageDetail(pkg.slug)}
                  className="group block h-full"
                >
                  <motion.article
                    className="glass-panel hover-lift flex h-full flex-col overflow-hidden"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <SafeImage
                        src={pkg.heroImage}
                        alt={pkg.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-night-900/80 to-transparent" />
                      {pkg.groupName && (
                        <span className="absolute top-4 left-4 rounded-full bg-gold/90 px-3 py-1 text-caption font-medium text-night-900">
                          {pkg.groupName}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-heading-md text-warm-50 group-hover:text-gold transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="mt-1 text-body-sm text-warm-400">
                        {pkg.subtitle}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-4 text-body-sm text-warm-300">
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-gold" />
                          {pkg.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-gold" />
                          {pkg.countries.join(", ")}
                        </span>
                      </div>

                      <div className="mt-auto pt-6">
                        <p className="text-caption text-warm-400">
                          {pkg.priceLabel}
                        </p>
                        <p className="font-serif text-heading-lg font-bold text-gold">
                          {formatPrice(pkg.price, pkg.currency)}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollPrev}
          className="absolute left-2 top-[42%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-night-800/95 text-gold shadow-lg transition-colors hover:bg-night-700 sm:left-0 sm:-left-4 sm:h-11 sm:w-11 focus-ring"
          aria-label="Previous package"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="absolute right-2 top-[42%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-night-800/95 text-gold shadow-lg transition-colors hover:bg-night-700 sm:right-0 sm:-right-4 sm:h-11 sm:w-11 focus-ring"
          aria-label="Next package"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </SectionWrapper>
  );
}
