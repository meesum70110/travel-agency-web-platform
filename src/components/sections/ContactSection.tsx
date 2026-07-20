"use client";

import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { Phone, Mail } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { company } from "@/data/company";
import {
  staggerContainer,
  slideUp,
  viewportDefaults,
} from "@/animations/variants";

/** Rendering contact section with balanced contact details layout */
export function ContactSection() {
  return (
    <SectionWrapper id="contact" background="gradient">
      <SectionHeading
        title="Contact Us"
        subtitle="Reach out to begin your sacred journey"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefaults}
        className="mx-auto max-w-5xl space-y-6"
      >
        <motion.div
          variants={slideUp}
          className="glass-panel mx-auto max-w-xl p-6 md:p-8"
        >
          <h3 className="mb-4 text-center font-serif text-heading-sm text-gold">
            Primary Contact
          </h3>
          <div className="space-y-4">
            {company.contacts.slice(0, 1).map((contact) => (
              <div key={contact.name} className="text-center">
                <p className="text-body-md font-medium text-warm-100">
                  {contact.name}
                </p>
                <p className="text-body-sm text-warm-400">{contact.role}</p>
              </div>
            ))}
            <div className="flex items-center justify-center gap-3 text-body-md text-warm-200">
              <Phone className="h-5 w-5 shrink-0 text-gold" />
              <div>
                <a
                  href={`tel:${company.pakistanPhone}`}
                  className="block transition-colors hover:text-gold"
                >
                  {company.pakistanPhone}
                </a>
                <span className="text-caption text-warm-400">
                  Pakistan / WhatsApp
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-body-md text-warm-200">
              <Phone className="h-5 w-5 shrink-0 text-gold" />
              <div>
                <a
                  href={`tel:${company.iranPhone}`}
                  className="block transition-colors hover:text-gold"
                >
                  {company.iranPhone}
                </a>
                <span className="text-caption text-warm-400">Iran</span>
              </div>
            </div>
            {company.email && (
              <div className="flex items-center justify-center gap-3 text-body-md text-warm-200">
                <Mail className="h-5 w-5 shrink-0 text-gold" />
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {company.email}
                </a>
              </div>
            )}
          </div>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton className="mx-auto w-[200px] py-3" size="lg" />
          </div>
        </motion.div>

        <motion.div variants={slideUp} className="glass-panel p-6 md:p-8">
          <h3 className="mb-4 text-center font-serif text-heading-sm text-gold">
            All Coordinators
          </h3>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3">
            {company.contacts.map((contact) => (
              <div
                key={contact.name}
                className="rounded-xl border border-gold/10 bg-night-800/30 p-4 text-center text-body-sm"
              >
                <p className="font-medium text-warm-100">{contact.name}</p>
                <p className="text-caption text-warm-400">{contact.role}</p>
                <a
                  href={`tel:${contact.phone}`}
                  className="mt-3 inline-flex items-center justify-center gap-2 text-warm-300 transition-colors hover:text-gold"
                >
                  {contact.phone.startsWith("+") ? (
                    <FaWhatsapp className="h-3.5 w-3.5 shrink-0 text-gold/70" />
                  ) : (
                    <FaPhone className="h-3.5 w-3.5 shrink-0 text-gold/70" />
                  )}
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
