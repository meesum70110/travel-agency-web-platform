"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { DynamicIcon } from "@/components/shared/DynamicIcon";
import { trustBadges } from "@/data/home";
import {
  staggerContainer,
  slideUp,
  viewportDefaults,
} from "@/animations/variants";

/** Rendering trust badges and differentiators */
export function WhyChooseUs() {
  return (
    <SectionWrapper background="gradient">
      <SectionHeading
        title="Why Choose Karwan-e-Ahlebait"
        subtitle="Trusted by pilgrims worldwide for spiritually enriching journeys"
      />

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefaults}
      >
        {trustBadges.map((badge) => (
          <motion.div
            key={badge.id}
            variants={slideUp}
            className="glass-panel hover-lift p-6 text-center"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
              <DynamicIcon name={badge.icon} className="h-6 w-6 text-gold" />
            </div>
            <h3 className="font-serif text-heading-sm text-warm-50">
              {badge.title}
            </h3>
            <p className="mt-2 text-body-sm text-warm-300">
              {badge.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
