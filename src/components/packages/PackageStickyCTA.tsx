"use client";

import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { formatPrice } from "@/lib/utils";
import type { TravelPackage } from "@/types";

interface PackageStickyCTAProps {
  pkg: TravelPackage;
  variant?: "mobile" | "desktop" | "all";
}

/** Rendering sticky CTA bar for package registration */
export function PackageStickyCTA({
  pkg,
  variant = "all",
}: PackageStickyCTAProps) {
  const showMobile = variant === "mobile" || variant === "all";
  const showDesktop = variant === "desktop" || variant === "all";

  return (
    <>
      {/* Mobile bottom bar */}
      {showMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gold/20 bg-night-900/95 p-4 pr-24 backdrop-blur-lg lg:hidden">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-caption text-warm-400">{pkg.priceLabel}</p>
              <p className="font-serif text-heading-sm text-gold">
                {formatPrice(pkg.price, pkg.currency)}
              </p>
            </div>
            <WhatsAppButton
              message={pkg.registerMessage}
              size="lg"
              className="shrink-0 w-[200px] py-3"
            />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      {showDesktop && (
        <aside className="hidden lg:block">
          <div className="sticky top-24 glass-panel-strong p-6">
            <p className="text-caption text-warm-400">{pkg.priceLabel}</p>
            <p className="font-serif text-display-sm text-gold">
              {formatPrice(pkg.price, pkg.currency)}
            </p>

            {pkg.advancePayment && (
              <p className="mt-4 text-body-sm text-warm-300">
                Advance: {pkg.advancePayment}
              </p>
            )}

            {pkg.documentDeadline && (
              <p className="mt-2 text-body-sm text-warm-400">
                Deadline: {pkg.documentDeadline}
              </p>
            )}

            <div className="mt-6 flex justify-center">
              <WhatsAppButton
                message={pkg.registerMessage}
                size="lg"
                className="w-full sm:w-[260px]"
              />
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
