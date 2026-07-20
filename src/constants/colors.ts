/** Centralizing brand color tokens for programmatic use outside Tailwind */
export const colors = {
  night: {
    DEFAULT: "#0B192C",
    700: "#0F172A",
    800: "#0B192C",
    900: "#060E18",
  },
  gold: {
    DEFAULT: "#D4AF37",
    200: "#EBD58A",
    300: "#E0C050",
    400: "#D4AF37",
  },
  crimson: {
    DEFAULT: "#7B0000",
  },
  warm: {
    DEFAULT: "#F5F0E8",
    100: "#F5F0E8",
    200: "#E8DFD0",
  },
} as const;

export type ColorToken = typeof colors;
