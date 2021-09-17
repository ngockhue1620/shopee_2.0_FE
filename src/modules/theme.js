import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const palette = {
  orange1: "#ee4d2d",
  white1: "#ffffff",
};

export const color = {
  ...palette,

  primary: palette.orange1,
};
export const spacing = {
  xxs: "1px",
  xs: "2px",
  s: "4px",
  m: "8px",
  l: "16px",
  lx: "24px",
  xl: "32px",
  xxl: "64px",
};

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      htmlFontSize: 10,
      subtitle1: {
        fontSize: 14,
      },
      caption: {
        fontSize: 16,
      },
    },

    palette: {
      primary: {
        // Purple and green play nicely together.
        main: color.primary,
      },
    },
  })
);
