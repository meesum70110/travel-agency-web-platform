"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SafeImage } from "@/components/shared/SafeImage";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { OrnamentalDivider } from "@/components/shared/OrnamentalDivider";
import { heroSlides } from "@/data/home";
import { navigation } from "@/data/navigation";
import { fadeIn, slideUp } from "@/animations/variants";

interface Particle {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

/** Rendering floating particles only after mount to avoid SSR/client random mismatch */
function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, id) => ({
        id,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-gold/30"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

/** Rendering full-screen hero with background slideshow and CTAs */
export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: index === currentSlide ? 1 : 0 }}
        >
          <SafeImage
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            objectFit="cover"
            sizes="100vw"
            className="object-cover object-center max-sm:object-[center_20%]"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-night-900/70 via-night-900/60 to-night" />

      <div className="shrine-glow" />

      <FloatingParticles />

      <div className="container-main relative z-10 pt-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mx-auto max-w-4xl"
        >
          <SafeImage
            src={navigation.logo.src}
            alt={navigation.logo.alt}
            width={160}
            height={160}
            className="mx-auto mb-8 h-24 w-24 object-contain brightness-0 invert opacity-90 md:h-28 md:w-28"
            priority
          />

          <motion.h1
            variants={slideUp}
            className="font-serif text-display-sm md:text-display-lg lg:text-display-xl text-warm-50 text-balance"
          >
            Sacred Journeys to the{" "}
            <span className="text-gradient-gold">Holy Shrines</span>
          </motion.h1>

          <motion.p
            variants={slideUp}
            className="mx-auto mt-6 max-w-2xl text-body-lg text-warm-200 md:text-xl"
          >
            Premier Ziyaraat and Umrah travel services, guided by renowned
            scholars with complete arrangements for a spiritually enriching
            pilgrimage.
          </motion.p>

          <motion.div
            variants={slideUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <WhatsAppButton size="lg" className="w-full sm:w-[220px]" />
            <Link
              href="/#packages"
              className="inline-flex h-13 w-full sm:w-[220px] items-center justify-center rounded-lg border border-gold/40 text-base font-medium text-gold transition-all hover:bg-gold/10 hover:border-gold focus-ring"
            >
              View Packages
            </Link>
          </motion.div>

          <motion.div variants={slideUp} className="mt-12">
            <OrnamentalDivider variant="diamond" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Link
          href="/#about"
          aria-label="Scroll to content"
          className="flex flex-col items-center gap-2 text-warm-400 transition-colors hover:text-gold"
        >
          <span className="text-caption">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </Link>
      </motion.div>
    </section>
  );
}
