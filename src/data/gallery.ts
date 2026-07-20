import type { GalleryItem, GalleryCategory } from "@/types";
import {
  buildPackageGalleryPaths,
  PACKAGE_GALLERY_COUNTS,
  type PackageGallerySlug,
} from "@/lib/gallery-images";

/** Maps gallery categories to their package asset folders */
const categoryPackageSlugs: Record<GalleryCategory, PackageGallerySlug> = {
  umrah: "umrah",
  iraq: "iraq-ziyarat",
  iran: "iran-ziyarat",
  arbaeen: "arbaeen",
};

const categoryMeta: Record<
  GalleryCategory,
  { title: string; altPrefix: string }
> = {
  umrah: {
    title: "Umrah",
    altPrefix: "Umrah pilgrimage",
  },
  iraq: {
    title: "Iraq Ziyarat",
    altPrefix: "Iraq Ziyarat",
  },
  iran: {
    title: "Iran Ziyarat",
    altPrefix: "Iran Ziyarat",
  },
  arbaeen: {
    title: "Arbaeen",
    altPrefix: "Arbaeen walk",
  },
};

function buildCategoryGalleryItems(category: GalleryCategory): GalleryItem[] {
  const packageSlug = categoryPackageSlugs[category];
  const { altPrefix } = categoryMeta[category];
  const count = PACKAGE_GALLERY_COUNTS[packageSlug];

  return buildPackageGalleryPaths(packageSlug, count).map((src, index) => ({
    id: `${category}-gallery-${index + 1}`,
    src,
    alt: `${altPrefix} photo ${index + 1}`,
    caption: `${categoryMeta[category].title} — Photo ${index + 1}`,
    category,
  }));
}

/** All gallery images grouped by pilgrimage category */
export const galleryItems: GalleryItem[] = (
  Object.keys(categoryMeta) as GalleryCategory[]
).flatMap((category) => buildCategoryGalleryItems(category));

/** Gallery section labels for the full gallery page */
export const galleryCategoryOrder: GalleryCategory[] = [
  "iraq",
  "iran",
  "arbaeen",
  "umrah",
];

export function getGalleryCategoryTitle(category: GalleryCategory): string {
  return categoryMeta[category].title;
}

/** Retrieving gallery items by category */
export function getGalleryByCategory(category: GalleryCategory): GalleryItem[] {
  return galleryItems.filter((item) => item.category === category);
}

/** Retrieving a mixed preview from each category for the homepage */
export function getLatestGalleryItems(limit = 6): GalleryItem[] {
  const preview: GalleryItem[] = [];

  for (const category of galleryCategoryOrder) {
    const items = getGalleryByCategory(category);
    if (items[0]) preview.push(items[0]);
  }

  for (const category of galleryCategoryOrder) {
    const items = getGalleryByCategory(category).slice(1);
    for (const item of items) {
      if (preview.length >= limit) break;
      preview.push(item);
    }
    if (preview.length >= limit) break;
  }

  return preview.slice(0, limit);
}
