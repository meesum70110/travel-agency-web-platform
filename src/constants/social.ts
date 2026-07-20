/** Defining social media links — add verified URLs when available */
export const socialLinks = {
  // TODO: Add verified social media URLs when available
  facebook: "", // UPDATE HERE: Add Facebook page URL
  instagram: "", // UPDATE HERE: Add Instagram profile URL
  youtube: "", // UPDATE HERE: Add YouTube channel URL
  twitter: "", // UPDATE HERE: Add Twitter/X profile URL
} as const;

export type SocialLinks = typeof socialLinks;

/** Filtering out empty social links for rendering */
export function getActiveSocialLinks(): Array<{
  platform: string;
  url: string;
}> {
  return Object.entries(socialLinks)
    .filter(([, url]) => url.length > 0)
    .map(([platform, url]) => ({ platform, url }));
}
