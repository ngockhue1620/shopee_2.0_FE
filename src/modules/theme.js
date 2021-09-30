import { createTheme } from "@material-ui/core/styles";

const palette = {
  orange1: "#ee4d2d",
  white1: "#ffffff",

  gray1:"rgba(0,0,0,.54)",
  graylight1:"#fbfbfb",
  graydark1:"#f5f5f5",

  transparent1: "rgba(0,0,0,.18)",
  transparent2:"rgba(0,0,0,.05)",
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

const size = {
  xs: "320px",
  sm: "768px",
  lg: "1200px",
 }
 const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`
 }

export {size, device}

export const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    subtitle1: {
      fontSize: 14,
    },
    subtitle2: {
      fontSize: 12,
    },
    caption: {
      fontSize: 16,
    },
  },

  palette: {
    background:{
      default:color.graydark1,
    },
    primary: {
      // Purple and green play nicely together.
      main: color.primary,
    },
  },
});
