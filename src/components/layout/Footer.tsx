import Link from "next/link";
import { SafeImage } from "@/components/shared/SafeImage";
import { OrnamentalDivider } from "@/components/shared/OrnamentalDivider";
import { navigation } from "@/data/navigation";
import { company } from "@/data/company";

/** Rendering comprehensive site footer from navigation and company data */
export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-night-900">
      <div className="container-main section-padding-sm">
        <div className="grid gap-10 text-center md:grid-cols-2 md:gap-12 md:text-left lg:grid-cols-3 lg:gap-16">
          <div className="flex flex-col items-center lg:items-start">
            <SafeImage
              src={navigation.logo.src}
              alt={navigation.logo.alt}
              width={120}
              height={120}
              className="mb-4 h-20 w-20 object-contain brightness-0 invert opacity-90"
            />
            <h3 className="font-serif text-heading-sm text-warm-50">
              {company.name}
            </h3>
            <p className="mt-2 text-body-sm text-warm-400">
              {navigation.footerTagline}
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h4 className="mb-4 font-serif text-heading-sm text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigation.footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-warm-300 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h4 className="mb-4 font-serif text-heading-sm text-gold">
              Contact
            </h4>
            <ul className="space-y-3 text-body-sm text-warm-300">
              <li>
                <span className="text-warm-400">Pakistan:</span>{" "}
                <a
                  href={`tel:${company.pakistanPhone}`}
                  className="transition-colors hover:text-gold"
                >
                  {company.pakistanPhone}
                </a>
              </li>
              <li>
                <span className="text-warm-400">Iran:</span>{" "}
                <a
                  href={`tel:${company.iranPhone}`}
                  className="transition-colors hover:text-gold"
                >
                  {company.iranPhone}
                </a>
              </li>
              {company.email && (
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="transition-colors hover:text-gold"
                  >
                    {company.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <OrnamentalDivider variant="full" className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-body-sm text-warm-400 sm:flex-row sm:text-left">
          <p>{navigation.copyrightText}</p>
          <p className="text-caption">
            {/* TODO: Add social media links when verified URLs are available */}
            Spiritual journeys with devotion and care
          </p>
        </div>
      </div>
    </footer>
  );
}
