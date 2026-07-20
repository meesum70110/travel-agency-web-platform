"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";
import { slideUp, viewportDefaults } from "@/animations/variants";

/** Rendering FAQ accordion from data */
export function FAQSection() {
  return (
    <SectionWrapper id="faq">
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about registering for a pilgrimage"
      />

      <motion.div
        className="mx-auto max-w-3xl"
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefaults}
      >
        <Accordion type="single" collapsible className="glass-panel px-6">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </SectionWrapper>
  );
}
