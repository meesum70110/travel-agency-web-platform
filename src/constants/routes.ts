/** Defining application route paths as single source of truth */
export const routes = {
  home: "/",
  packages: "/packages",
  packageDetail: (slug: string) => `/packages/${slug}`,
  gallery: "/gallery",
  about: "/#about",
  contact: "/#contact",
  faq: "/#faq",
  team: "/#founder",
} as const;

export type Routes = typeof routes;
