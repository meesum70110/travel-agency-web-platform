"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SafeImage } from "@/components/shared/SafeImage";
import { DynamicIcon } from "@/components/shared/DynamicIcon";
import type { TravelPackage } from "@/types";
import {
  staggerContainer,
  slideUp,
  viewportDefaults,
} from "@/animations/variants";
import { cn } from "@/lib/utils";

interface PackageDetailsProps {
  pkg: TravelPackage;
}

const sectionInner = "mx-auto w-full max-w-6xl";
const proseBlock =
  "mx-auto max-w-3xl text-center text-body-lg text-warm-200 leading-relaxed";

interface PackageSectionProps {
  children: React.ReactNode;
  background?: "default" | "gradient" | "pattern";
  padding?: "compact" | "sm";
  className?: string;
}

/** Wrapping package sections with tighter spacing and centered containers */
function PackageSection({
  children,
  background = "default",
  padding = "compact",
  className,
}: PackageSectionProps) {
  return (
    <SectionWrapper
      background={background}
      padding={padding}
      containerSize="full"
      className={className}
    >
      <div className={sectionInner}>{children}</div>
    </SectionWrapper>
  );
}

/** Rendering package detail content sections */
export function PackageDetails({ pkg }: PackageDetailsProps) {
  return (
    <>
      {pkg.poster && (
        <SectionWrapper padding="sm" containerSize="full">
          <div className={cn(sectionInner, "max-w-2xl")}>
            <div className="relative overflow-hidden rounded-2xl border border-gold/20">
              <SafeImage
                src={pkg.poster}
                alt={`${pkg.title} promotional poster`}
                width={800}
                height={1200}
                className="w-full object-contain"
              />
            </div>
          </div>
        </SectionWrapper>
      )}

      <PackageSection background="pattern">
        <SectionHeading title="Overview" spacing="compact" />
        <p className={proseBlock}>{pkg.overview}</p>
      </PackageSection>

      {pkg.highlights.length > 0 && (
        <PackageSection background="gradient">
          <SectionHeading title="Package Highlights" spacing="compact" />
          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportDefaults}
          >
            {pkg.highlights.map((highlight) => (
              <motion.div
                key={highlight.title}
                variants={slideUp}
                className="glass-panel p-5"
              >
                {highlight.icon && (
                  <DynamicIcon
                    name={highlight.icon}
                    className="mb-3 h-6 w-6 text-gold"
                  />
                )}
                <h3 className="font-serif text-heading-sm text-warm-50">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-body-sm text-warm-300">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </PackageSection>
      )}

      <PackageSection>
        <SectionHeading
          title="What's Included"
          subtitle="Everything covered in your package"
          spacing="compact"
        />
        <div className="mx-auto grid max-w-5xl gap-8 text-left lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-center font-serif text-heading-sm text-gold">
              Included
            </h3>
            <ul className="space-y-3">
              {pkg.inclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-body-md text-warm-200"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-center font-serif text-heading-sm text-gold">
              Not Included
            </h3>
            <ul className="space-y-3">
              {pkg.exclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-body-md text-warm-300"
                >
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-warm-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PackageSection>

      {pkg.itinerary.length > 0 && (
        <PackageSection background="gradient">
          <SectionHeading
            title="Travel Plan"
            subtitle="Day-by-day itinerary"
            spacing="compact"
          />
          <div className="mx-auto max-w-3xl space-y-3 text-left">
            {pkg.itinerary.map((day) => (
              <div key={day.day} className="glass-panel flex gap-5 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <span className="font-serif text-body-md font-medium text-gold">
                    {day.day}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-heading-sm text-warm-50">
                    {day.title}
                  </h3>
                  {day.location && (
                    <p className="text-caption text-gold">{day.location}</p>
                  )}
                  <p className="mt-1.5 text-body-sm text-warm-300">
                    {day.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PackageSection>
      )}

      <PackageSection>
        <SectionHeading title="Requirements & Information" spacing="compact" />
        <div className="mx-auto grid max-w-5xl gap-6 text-left lg:grid-cols-2">
          <div className="glass-panel p-5">
            <h3 className="mb-3 text-center font-serif text-heading-sm text-gold">
              Requirements
            </h3>
            <ul className="space-y-2">
              {pkg.requirements.map((req) => (
                <li key={req} className="text-body-sm text-warm-200">
                  • {req}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div className="glass-panel p-5">
              <h3 className="mb-2 text-center font-serif text-heading-sm text-gold">
                Hotel Information
              </h3>
              <p className="text-body-sm text-warm-300">{pkg.hotelInfo}</p>
            </div>
            <div className="glass-panel p-5">
              <h3 className="mb-2 text-center font-serif text-heading-sm text-gold">
                Transport
              </h3>
              <p className="text-body-sm text-warm-300">{pkg.transportInfo}</p>
            </div>
          </div>
        </div>
      </PackageSection>

      {pkg.pricingNotes.length > 0 && (
        <PackageSection background="pattern" padding="sm">
          <SectionHeading title="Pricing Notes" spacing="compact" />
          <div className="glass-panel mx-auto max-w-3xl p-6 text-left">
            <ul className="space-y-2">
              {pkg.pricingNotes.map((note) => (
                <li key={note} className="text-body-sm text-warm-300">
                  • {note}
                </li>
              ))}
            </ul>
            {pkg.advancePayment && (
              <p className="mt-4 text-center text-body-md font-medium text-warm-100">
                Advance Payment: {pkg.advancePayment}
              </p>
            )}
            {pkg.documentDeadline && (
              <p className="mt-2 text-center text-body-sm text-warm-400">
                Document Deadline: {pkg.documentDeadline}
              </p>
            )}
          </div>
        </PackageSection>
      )}

      {pkg.faq.length > 0 && (
        <PackageSection>
          <SectionHeading title="Package FAQ" spacing="compact" />
          <div className="mx-auto max-w-3xl space-y-3 text-left">
            {pkg.faq.map((item) => (
              <div key={item.question} className="glass-panel p-5">
                <h3 className="font-serif text-heading-sm text-warm-50">
                  {item.question}
                </h3>
                <p className="mt-2 text-body-sm text-warm-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </PackageSection>
      )}
    </>
  );
}
