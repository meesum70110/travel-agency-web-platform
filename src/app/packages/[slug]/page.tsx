import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PackageHero } from "@/components/packages/PackageHero";
import { PackageDetails } from "@/components/packages/PackageDetails";
import { RelatedPackages } from "@/components/packages/RelatedPackages";
import { PackageStickyCTA } from "@/components/packages/PackageStickyCTA";
import {
  getPackageBySlug,
  getAllPackageSlugs,
  getRelatedPackages,
} from "@/data/packages";
import { siteConfig } from "@/constants/config";

interface PackagePageProps {
  params: Promise<{ slug: string }>;
}

/** Generating static params for all package pages */
export async function generateStaticParams() {
  return getAllPackageSlugs().map((slug) => ({ slug }));
}

/** Generating dynamic metadata for package pages */
export async function generateMetadata({
  params,
}: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return { title: "Package Not Found" };
  }

  return {
    title: pkg.title,
    description: pkg.overview,
    openGraph: {
      title: `${pkg.title} | ${siteConfig.name}`,
      description: pkg.overview,
      images: [{ url: pkg.heroImage, alt: pkg.title }],
    },
  };
}

/** Rendering dynamic package detail page */
export default async function PackagePage({ params }: PackagePageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const related = getRelatedPackages(slug);

  return (
    <>
      <PackageHero pkg={pkg} />

      <div className="container-main mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <div className="min-w-0 pb-20 lg:pb-8">
            <PackageDetails pkg={pkg} />
          </div>
          <PackageStickyCTA pkg={pkg} variant="desktop" />
        </div>
      </div>

      <PackageStickyCTA pkg={pkg} variant="mobile" />
      <RelatedPackages packages={related} />
    </>
  );
}
