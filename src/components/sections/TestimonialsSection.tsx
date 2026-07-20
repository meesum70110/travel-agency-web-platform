"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { testimonials } from "@/data/testimonials";
import {
  staggerContainer,
  slideUp,
  viewportDefaults,
} from "@/animations/variants";

/** Rendering pilgrim testimonials from data */
export function TestimonialsSection() {
  return (
    <SectionWrapper background="pattern">
      <SectionHeading
        title="Pilgrim Testimonials"
        subtitle="Hear from those who have journeyed with us"
      />

      <motion.div
        className="grid gap-6 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefaults}
      >
        {testimonials.map((testimonial) => (
          <motion.blockquote
            key={testimonial.id}
            variants={slideUp}
            className="glass-panel hover-lift relative p-8"
          >
            <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/20" />
            <p className="text-body-md text-warm-200 leading-relaxed italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-6 border-t border-gold/10 pt-4">
              <cite className="not-italic">
                <span className="text-body-sm font-medium text-warm-100">
                  {testimonial.author}
                </span>
                <span className="block text-caption text-warm-400">
                  {testimonial.location}
                </span>
              </cite>
              {testimonial.isPlaceholder && (
                <span className="mt-2 block text-caption text-warm-500">
                  {/* TODO: Replace with verified testimonial */}
                </span>
              )}
            </footer>
          </motion.blockquote>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
