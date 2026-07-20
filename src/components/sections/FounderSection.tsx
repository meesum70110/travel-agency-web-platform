"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { OrnamentalDivider } from "@/components/shared/OrnamentalDivider";
import { SafeImage } from "@/components/shared/SafeImage";
import { founder } from "@/data/team";
import {
  slideInLeft,
  slideInRight,
  viewportDefaults,
} from "@/animations/variants";

/** Rendering premium founder split layout with framed portrait */
export function FounderSection() {
  return (
    <SectionWrapper id="founder" background="gradient">
      <SectionHeading
        title="Our Founder"
        subtitle="Leading pilgrims with knowledge, devotion, and decades of service"
      />

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefaults}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/20 via-gold/5 to-transparent blur-sm" />
            <div className="relative overflow-hidden rounded-2xl border border-gold/40 bg-night-800/40 p-2 shadow-glow backdrop-blur-sm">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-night-700/30">
                <SafeImage
                  src={founder.imageUrl}
                  alt={founder.name}
                  fill
                  objectFit="cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-2xl border border-gold/15" />
          </div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefaults}
          className="text-center lg:text-left"
        >
          <p className="text-body-sm font-medium uppercase tracking-widest text-gold">
            {founder.title}
          </p>
          <h3 className="mt-3 font-serif text-display-sm text-warm-50 md:text-display-md">
            {founder.name}
          </h3>

          <OrnamentalDivider variant="diamond" className="my-6 lg:mx-0" />

          <p className="text-body-lg text-warm-200 leading-relaxed">
            {founder.shortBiography}
          </p>

          {founder.message && (
            <blockquote className="mt-8 rounded-2xl border border-gold/20 bg-night-800/50 p-6 backdrop-blur-sm">
              <p className="font-serif text-body-lg italic leading-relaxed text-warm-100">
                &ldquo;{founder.message}&rdquo;
              </p>
            </blockquote>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
