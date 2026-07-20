import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

/** Rendering global 404 page */
export default function NotFound() {
  return (
    <SectionWrapper className="flex min-h-[70vh] items-center pt-28">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-caption font-medium uppercase tracking-wider text-gold">
          404
        </p>
        <h1 className="mt-4 font-serif text-display-sm md:text-display-md text-warm-50">
          Page Not Found
        </h1>
        <p className="mt-4 text-body-lg text-warm-300">
          The page you are looking for does not exist. It may have been moved or
          removed.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-gold px-6 py-3 text-body-md font-medium text-night-900 transition-colors hover:bg-gold-300 focus-ring"
          >
            Return Home
          </Link>
          <WhatsAppButton variant="outline" />
        </div>
      </div>
    </SectionWrapper>
  );
}
