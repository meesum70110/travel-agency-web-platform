"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { DynamicIcon } from "@/components/shared/DynamicIcon";
import { services } from "@/data/services";
import {
  staggerContainer,
  slideUp,
  viewportDefaults,
} from "@/animations/variants";

/** Rendering services included grid with icons */
export function ServicesSection() {
  return (
    <SectionWrapper id="services" background="pattern">
      <SectionHeading
        title="Services Included"
        subtitle="Complete arrangements so you can focus on your spiritual journey"
      />

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefaults}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={slideUp}
            className="group glass-panel hover-lift p-6"
          >
            <DynamicIcon
              name={service.icon}
              className="mb-4 h-8 w-8 text-gold transition-transform group-hover:scale-110"
            />
            <h3 className="font-serif text-heading-sm text-warm-50">
              {service.title}
            </h3>
            <p className="mt-2 text-body-sm text-warm-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
