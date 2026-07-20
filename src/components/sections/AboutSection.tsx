"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { company } from "@/data/company";
import {
  slideInLeft,
  slideInRight,
  viewportDefaults,
} from "@/animations/variants";

/** Rendering about section entirely from company data */
export function AboutSection() {
  return (
    <SectionWrapper id="about" background="pattern">
      <SectionHeading
        title="About Karwan-e-Ahlebait"
        subtitle="Serving pilgrims with devotion, knowledge, and complete care"
      />

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefaults}
        >
          <div className="glass-panel p-8 md:p-10">
            <h3 className="font-serif text-heading-lg text-gold">
              Our Mission
            </h3>
            <p className="mt-4 text-body-md text-warm-200 leading-relaxed">
              {company.description}
            </p>
            <p className="mt-4 text-body-md text-warm-300 leading-relaxed">
              {company.mission}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefaults}
          className="space-y-6"
        >
          {company.operations.map((item) => (
            <div key={item.title} className="glass-panel p-6">
              <h4 className="text-body-sm font-medium uppercase tracking-wider text-gold">
                {item.title}
              </h4>
              <p className="mt-2 text-body-md text-warm-200 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
