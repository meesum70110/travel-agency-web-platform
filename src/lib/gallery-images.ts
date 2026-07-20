/** JPEG extension used for all gallery assets */
export const GALLERY_IMAGE_EXT = "jpeg" as const;

/** Default filename prefix for numbered gallery images */
export const GALLERY_IMAGE_PREFIX = "gallery" as const;

/**
 * Number of gallery images per package folder.
 * Update when adding gallery-N.jpeg files under public/assets/packages/{slug}/
 */
export const PACKAGE_GALLERY_COUNTS = {
  umrah: 4,
  "iraq-ziyarat": 11,
  "iran-ziyarat": 4,
  arbaeen: 5,
} as const;

export type PackageGallerySlug = keyof typeof PACKAGE_GALLERY_COUNTS;

/** Building numbered gallery image paths (gallery-1.jpeg, gallery-2.jpeg, …) */
export function buildGalleryImagePaths(
  basePath: string,
  count: number,
  prefix: string = GALLERY_IMAGE_PREFIX
): string[] {
  if (count <= 0) return [];

  return Array.from(
    { length: count },
    (_, index) => `${basePath}/${prefix}-${index + 1}.${GALLERY_IMAGE_EXT}`
  );
}

/** Building package gallery paths under public/assets/packages/{slug}/ */
export function buildPackageGalleryPaths(
  packageSlug: PackageGallerySlug,
  count: number = PACKAGE_GALLERY_COUNTS[packageSlug]
): string[] {
  return buildGalleryImagePaths(`/assets/packages/${packageSlug}`, count);
}
