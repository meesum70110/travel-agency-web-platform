import type { Variants } from "framer-motion";

/** Defining reusable fade-in animation variant */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/** Defining slide-up animation variant */
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/** Defining slide-in from left animation variant */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/** Defining slide-in from right animation variant */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/** Defining stagger container for child animations */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/** Defining scale-in animation variant */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Defining viewport trigger defaults for scroll animations */
export const viewportDefaults = {
  once: true,
  margin: "-50px" as const,
  amount: 0.2 as const,
};

/** Defining card hover animation */
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

/** Defining navbar scroll transition */
export const navbarVariants: Variants = {
  top: {
    backgroundColor: "rgba(11, 25, 44, 0)",
    backdropFilter: "blur(0px)",
    borderBottomColor: "rgba(212, 175, 55, 0)",
  },
  scrolled: {
    backgroundColor: "rgba(11, 25, 44, 0.95)",
    backdropFilter: "blur(12px)",
    borderBottomColor: "rgba(212, 175, 55, 0.2)",
  },
};
