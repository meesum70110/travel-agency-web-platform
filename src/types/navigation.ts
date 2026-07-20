export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavigationData {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  logoCompact: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  mainNav: NavLink[];
  footerNav: NavLink[];
  ctaLabel: string;
  ctaMessage: string;
  footerTagline: string;
  copyrightText: string;
}
