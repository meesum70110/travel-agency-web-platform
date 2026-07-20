"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SafeImage } from "@/components/shared/SafeImage";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useActiveSection, scrollToHomeTop } from "@/hooks/useActiveSection";
import { navigation, HOME_SCROLL_SECTIONS } from "@/data/navigation";
import { cn } from "@/lib/utils";

/** Resolving whether a nav link matches the current page or section */
function useNavActiveState() {
  const pathname = usePathname();
  const activeSection = useActiveSection(HOME_SCROLL_SECTIONS);

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;

    event.preventDefault();
    scrollToHomeTop();
  };

  const isActive = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/" && activeSection === null;
    }

    if (href.startsWith("/#")) {
      const sectionId = href.slice(2);

      if (sectionId === "packages" && pathname.startsWith("/packages")) {
        return true;
      }

      if (sectionId === "gallery" && pathname === "/gallery") {
        return true;
      }

      return pathname === "/" && activeSection === sectionId;
    }

    return pathname === href;
  };

  return { isActive, handleHomeClick };
}

const navLinkClassName =
  "relative cursor-pointer py-1 text-body-sm font-medium transition-colors hover:text-gold";

/** Rendering sticky navigation with scroll-based transparency transition */
export function Navbar() {
  const { isScrolled } = useScrollPosition(50);
  const { isActive, handleHomeClick } = useNavActiveState();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300",
          isScrolled
            ? "border-gold/20 bg-night-800/95 backdrop-blur-lg shadow-lg"
            : "border-transparent bg-transparent"
        )}
        initial={false}
        animate={isScrolled ? "scrolled" : "top"}
      >
        <nav className="container-main flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            onClick={handleHomeClick}
            className="relative z-10 flex cursor-pointer items-center gap-3"
          >
            <SafeImage
              src={navigation.logoCompact.src}
              alt={navigation.logoCompact.alt}
              width={navigation.logoCompact.width}
              height={navigation.logoCompact.height}
              className="h-10 w-10 object-contain brightness-0 invert opacity-90 md:h-11 md:w-11"
              priority
            />
            <span className="hidden font-serif text-heading-sm text-warm-50 sm:block">
              Karwan-e-Ahlebait
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navigation.mainNav.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.href === "/" ? handleHomeClick : undefined}
                  className={cn(
                    navLinkClassName,
                    active ? "text-gold" : "text-warm-200"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gold"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <WhatsAppButton size="sm" />
          </div>

          <button
            type="button"
            className="relative z-10 cursor-pointer rounded-lg p-2 text-warm-100 transition-colors hover:text-gold lg:hidden focus-ring"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-night-900/95 backdrop-blur-lg lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 pt-16">
              {navigation.mainNav.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={
                      link.href === "/"
                        ? (event) => {
                            handleHomeClick(event);
                            setMobileOpen(false);
                          }
                        : () => setMobileOpen(false)
                    }
                    className={cn(
                      "cursor-pointer text-heading-md font-medium transition-colors hover:text-gold",
                      isActive(link.href) ? "text-gold" : "text-warm-100"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div onClick={() => setMobileOpen(false)}>
                  <WhatsAppButton size="lg" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
