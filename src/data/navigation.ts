import type { NavigationData } from "@/types";

/** Homepage section IDs in DOM order — required for scroll-spy accuracy */
export const HOME_SCROLL_SECTIONS = [
  "about",
  "packages",
  "gallery",
  "contact",
] as const;

/** Storing all navigation, footer, and global CTA content */
export const navigation: NavigationData = {
  logo: {
    src: "/assets/logo/logo.png",
    alt: "Karwan-e-Ahlebait A.S Logo",
    width: 200,
    height: 200,
  },
  logoCompact: {
    src: "/assets/logo/logo.png",
    alt: "Karwan-e-Ahlebait",
    width: 48,
    height: 48,
  },
  mainNav: [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/#packages" },
    { label: "About", href: "/#about" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Contact", href: "/#contact" },
  ],
  footerNav: [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/#packages" },
    { label: "About Us", href: "/#about" },
    { label: "Our Founder", href: "/#founder" },
    { label: "Our Scholars", href: "/#guides" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ],
  ctaLabel: "WhatsApp Us",
  ctaMessage:
    "Assalam-o-Alaikum, I would like to inquire about your pilgrimage packages.",
  footerTagline: "Guiding pilgrims on sacred journeys with devotion and care.",
  copyrightText: `© ${new Date().getFullYear()} Karwan-e-Ahlebait A.S. All rights reserved.`,
};
