import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

 const palette = {
  orange1: "#ee4d2d",
  white1: "#ffffff",
  
};

export const color = {
  ...palette,

  primary: palette.orange1,
};

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      htmlFontSize: 10,
    },
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: color.primary,
      },
    },
  })
);
