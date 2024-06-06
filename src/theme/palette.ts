import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    darker?: string;
    lighter?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
    lighter?: string;
  }
  interface Palette {
    neutral: Palette["primary"];
    white: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
    white: PaletteOptions["primary"];
  }
}

export const lightModePalette: PaletteOptions = {
  primary: {
    main: "#848689",
    lighter: "#d7d8d8",
    contrastText: "#111212",
  },
  secondary: {
    main: "#c71121",
    light: "#f04d5a",
    dark: "#541723",
  },
  neutral: {
    main: "#575858",
    dark: "#040404",
  },
  white: {
    main: "#fff",
  },
  divider: "#d6596e",
  text: {
    primary: "#111212",
  },
};

export const darkModePalette: PaletteOptions = {
  primary: {
    main: "#484848",
    light: "#eff0f0",
    dark: "#181818",
    darker: "#000000",
  },
  secondary: {
    main: "#c71121",
    light: "#d04159",
    dark: "#541723",
  },
  neutral: {
    main: "#a7a8a8",
  },
  white: {
    main: "#fff",
  },
};
