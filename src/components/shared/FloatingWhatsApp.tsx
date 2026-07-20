"use client";

import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/utils";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";

/** Rendering persistent floating WhatsApp widget with pulse animation */
export function FloatingWhatsApp() {
  const url = buildWhatsAppUrl(company.whatsapp, navigation.ctaMessage);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus-ring"
      >
        <span className="absolute inset-0 animate-pulse-soft rounded-full bg-[#25D366]/40" />
        <FaWhatsapp className="relative h-7 w-7" />
      </Link>
    </motion.div>
  );
}
