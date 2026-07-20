import type { Metadata } from "next";
import { Suspense } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SafeImage } from "@/components/shared/SafeImage";
import { EmptyGallery } from "@/components/shared/EmptyStates";
import { GallerySkeleton } from "@/components/shared/LoadingSkeletons";
import {
  galleryItems,
  galleryCategoryOrder,
  getGalleryByCategory,
  getGalleryCategoryTitle,
} from "@/data/gallery";
import type { GalleryCategory } from "@/types";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos from Karwan-e-Ahlebait pilgrimage journeys to Iraq, Iran, and the holy cities of Makkah and Madinah.",
};

function GalleryCategoryGrid({ category }: { category: GalleryCategory }) {
  const items = getGalleryByCategory(category);

  return (
    <section className="space-y-6">
      <h2 className="text-center font-serif text-heading-md text-gold md:text-left">
        {getGalleryCategoryTitle(category)}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <figure
            key={item.id}
            className="group relative aspect-square overflow-hidden rounded-xl border border-gold/10"
          >
            <SafeImage
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night-900/90 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <p className="text-body-sm text-warm-100">
                {item.caption ?? item.alt}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function GalleryContent() {
  if (galleryItems.length === 0) {
    return <EmptyGallery />;
  }

  return (
    <div className="space-y-14">
      {galleryCategoryOrder.map((category) => (
        <GalleryCategoryGrid key={category} category={category} />
      ))}
    </div>
  );
}

/** Rendering full gallery page */
export default function GalleryPage() {
  return (
    <SectionWrapper className="pt-28">
      <SectionHeading
        title="Pilgrimage Gallery"
        subtitle="Moments captured from our sacred journeys across Iraq, Iran, Arbaeen, and Umrah"
      />
      <Suspense fallback={<GallerySkeleton />}>
        <GalleryContent />
      </Suspense>
    </SectionWrapper>
  );
}
