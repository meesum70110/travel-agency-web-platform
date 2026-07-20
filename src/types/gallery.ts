export type GalleryCategory = "umrah" | "iraq" | "iran" | "arbaeen";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: GalleryCategory;
}
