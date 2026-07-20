import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

/** Rendering custom 404 for missing package pages */
export default function PackageNotFound() {
  return (
    <SectionWrapper className="flex min-h-[60vh] items-center pt-28">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-caption font-medium uppercase tracking-wider text-gold">
          404
        </p>
        <h1 className="mt-4 font-serif text-display-sm text-warm-50">
          Package Not Found
        </h1>
        <p className="mt-4 text-body-lg text-warm-300">
          The pilgrimage package you are looking for does not exist or may no
          longer be available.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/#packages"
            className="inline-flex items-center gap-2 rounded-lg border border-gold/40 px-6 py-3 text-body-md font-medium text-gold transition-colors hover:bg-gold/10 focus-ring"
          >
            <ArrowLeft className="h-4 w-4" />
            View All Packages
          </Link>
          <WhatsAppButton />
        </div>
      </div>
    </SectionWrapper>
  );
}
