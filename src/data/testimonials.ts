import type { Testimonial } from "@/types";

/** Storing pilgrim testimonials — replace placeholders with verified quotes */
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Karwan-e-Ahlebait made our Ziyaraat journey seamless and spiritually fulfilling. The guidance from the scholars was invaluable.",
    author: "Pilgrim from Karachi", // TODO: Replace with verified name
    location: "Pakistan",
    packageSlug: "iraq-ziyarat",
    isPlaceholder: true,
  },
  {
    id: "testimonial-2",
    quote:
      "From visa processing to the final day, everything was handled with care and devotion. We felt safe and well-guided throughout.",
    author: "Pilgrim from Lahore", // TODO: Replace with verified name
    location: "Pakistan",
    packageSlug: "iran-ziyarat",
    isPlaceholder: true,
  },
  {
    id: "testimonial-3",
    quote:
      "The Arbaeen walk organized by Karwan-e-Ahlebait was a life-changing experience. May Allah reward the entire team.",
    author: "Pilgrim from London", // TODO: Replace with verified name
    location: "United Kingdom",
    packageSlug: "arbaeen",
    isPlaceholder: true,
  },
];
