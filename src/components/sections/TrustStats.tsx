"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { siteConfig } from "@/constants/config";
import {
  staggerContainer,
  slideUp,
  viewportDefaults,
} from "@/animations/variants";

const stats = [
  {
    label: "Years of Experience",
    value: siteConfig.stats.yearsExperience,
    suffix: "+",
  },
  {
    label: "Pilgrims Served",
    value: siteConfig.stats.pilgrimsServed,
    suffix: "+",
  },
  {
    label: "Destinations",
    value: 4,
    suffix: "",
  },
  {
    label: "Dedicated Coordinators",
    value: 6,
    suffix: "",
  },
];

/** Rendering animated trust statistics counters */
export function TrustStats() {
  return (
    <SectionWrapper className="border-y border-gold/10 bg-night-800/50">
      <motion.div
        className="grid grid-cols-2 gap-8 md:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefaults}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={slideUp}
            className="text-center"
          >
            <div className="font-serif text-display-sm text-gold md:text-display-md">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-body-sm text-warm-300">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
