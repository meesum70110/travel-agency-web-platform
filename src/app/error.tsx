"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/** Rendering global error boundary with recovery option */
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <SectionWrapper className="flex min-h-[70vh] items-center pt-28">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-caption font-medium uppercase tracking-wider text-crimson-light">
          Error
        </p>
        <h1 className="mt-4 font-serif text-display-sm text-warm-50">
          Something Went Wrong
        </h1>
        <p className="mt-4 text-body-lg text-warm-300">
          We apologize for the inconvenience. Please try again or contact us
          directly via WhatsApp.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center rounded-lg bg-gold px-6 py-3 text-body-md font-medium text-night-900 transition-colors hover:bg-gold-300 focus-ring"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center rounded-lg border border-gold/40 px-6 py-3 text-body-md font-medium text-gold transition-colors hover:bg-gold/10 focus-ring"
          >
            Return Home
          </Link>
          <WhatsAppButton variant="whatsapp" />
        </div>
      </div>
    </SectionWrapper>
  );
}
