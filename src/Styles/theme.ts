export const theme = {
  colors: {
    background: {
      dark: "#011221",
      darker: "#011627",
      darkest: "#01080E",
    },
    text: {
      default: "#607B96",
      highlight: "#3C9D93",
      link: "#4D5BCE",
      light: "#FFFFFF",
    },
    highlights: {
      warning: "#FEA55F",
      success: "#43D9AD",
      error: "#E99287",
      info: "#C98BDF",
    },
    gradient: {
      start: "#4D5BCE",
      end: "#43D9AD",
    },
    border: "#1E2D3D",
  },
} as const;

export type Theme = typeof theme;
