"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { DynamicIcon } from "@/components/shared/DynamicIcon";
import { timeline } from "@/data/timeline";
import {
  staggerContainer,
  slideUp,
  viewportDefaults,
} from "@/animations/variants";
import { cn } from "@/lib/utils";

/** Rendering pilgrimage journey timeline steps */
export function JourneyTimeline() {
  return (
    <SectionWrapper>
      <SectionHeading
        title="Your Journey"
        subtitle="From inquiry to return — we guide you every step of the way"
      />

      <motion.div
        className="relative mx-auto w-full max-w-5xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefaults}
      >
        <div className="absolute bottom-0 left-6 top-0 w-px bg-gold/20 md:left-1/2 md:-translate-x-px" />

        <div className="space-y-12">
          {timeline.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={step.step}
                variants={slideUp}
                className="relative"
              >
                <div className="flex items-start gap-6 md:hidden">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-night-800">
                    <DynamicIcon
                      name={step.icon}
                      className="h-5 w-5 text-gold"
                    />
                  </div>
                  <div className="glass-panel min-w-0 flex-1 p-6">
                    <StepContent step={step} />
                  </div>
                </div>

                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
                  <div
                    className={cn("flex justify-end", !isLeft && "invisible")}
                  >
                    {isLeft && (
                      <div className="glass-panel max-w-md p-6 text-left">
                        <StepContent step={step} />
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center justify-self-center rounded-full border-2 border-gold bg-night-800">
                    <DynamicIcon
                      name={step.icon}
                      className="h-5 w-5 text-gold"
                    />
                  </div>

                  <div
                    className={cn("flex justify-start", isLeft && "invisible")}
                  >
                    {!isLeft && (
                      <div className="glass-panel max-w-md p-6 text-left">
                        <StepContent step={step} />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

function StepContent({ step }: { step: (typeof timeline)[0] }) {
  return (
    <>
      <span className="text-caption font-medium text-gold">
        Step {step.step}
      </span>
      <h3 className="mt-1 font-serif text-heading-sm text-warm-50">
        {step.title}
      </h3>
      <p className="mt-2 text-body-sm text-warm-300">{step.description}</p>
    </>
  );
}
