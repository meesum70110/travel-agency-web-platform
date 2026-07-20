export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  packageSlug?: string;
  // TODO: Replace with verified testimonial once confirmed
  isPlaceholder?: boolean;
}
