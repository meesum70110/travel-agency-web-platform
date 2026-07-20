"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SafeImage } from "@/components/shared/SafeImage";
import { guides } from "@/data/team";
import {
  staggerContainer,
  slideUp,
  viewportDefaults,
} from "@/animations/variants";

/** Rendering prestigious spiritual guides and scholars section */
export function SpiritualGuidesSection() {
  return (
    <SectionWrapper id="guides" background="pattern">
      <SectionHeading
        title="Spiritual Guides & Scholars"
        subtitle="Renowned scholars and Noha Khwans who lead every sacred journey — the heart of Karwan-e-Ahlebait"
      />

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefaults}
      >
        {guides.map((guide) => (
          <motion.article
            key={guide.id}
            variants={slideUp}
            className="group glass-panel-strong hover-lift overflow-hidden"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden border-b border-gold/20">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-night-900/90 via-night-900/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
              <SafeImage
                src={guide.imageUrl}
                alt={guide.name}
                fill
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                {guide.nameUrdu && (
                  <p className="mb-1 font-serif text-body-md text-gold/90">
                    {guide.nameUrdu}
                  </p>
                )}
                <h3 className="font-serif text-heading-md text-warm-50">
                  {guide.name}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-caption font-medium uppercase tracking-wider text-gold">
                {guide.title}
              </span>
              <p className="mt-4 text-body-sm leading-relaxed text-warm-300">
                {guide.shortBiography}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
