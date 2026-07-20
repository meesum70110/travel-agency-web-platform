/** Storing global site configuration values */
export const siteConfig = {
  name: "Karwan-e-Ahlebait",
  fullName: "Karwan-e-Ahlebait A.S",
  tagline: "Premier Ziyaraat & Umrah Travel Services",
  description:
    "Trusted spiritual travel agency specializing in Ziyaraat pilgrimages to Iraq and Iran, and Umrah journeys. Guided by renowned scholars with decades of experience.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://karwan-e-ahlebait.com"),
  locale: "en_US",
  themeColor: "#0B192C",
  // TODO: Replace with verified statistics once confirmed by the business
  stats: {
    yearsExperience: 20,
    pilgrimsServed: 10000,
  },
} as const;

export type SiteConfig = typeof siteConfig;
