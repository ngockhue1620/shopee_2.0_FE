import { createTheme } from "@material-ui/core/styles";

const palette = {
  orange1: "#ee4d2d",
  orange2: "#f69113",
  orange3: "#fff8e4",
  white1: "#ffffff",
  blue1: "#0046ab",
  yellow1: "#eda500",
  green1: "#26aa99",
  green2: "#30b566",
  green3: "f7fffe",
  red1: "#ee2c4a",
  red2: "#fff4f4",
  gray1: "rgba(0,0,0,.54)",
  graylight1: "#fbfbfb",
  graydark1: "#f5f5f5",

  transparent1: "rgba(0,0,0,.18)",
  transparent2: "rgba(0,0,0,.05)",
  textPrimary: "rgba(0, 0, 0, 0.87)",
  textPrimaryO: "#212121",
  textSecondary: "rgba(0, 0, 0, 0.65)",
  textSecondaryO: "#595959",
  textTertiary: "rgba(0, 0, 0, 0.54)",
  textTertiaryO: "#757575",
  textLink: "#0088ff",
  mask: "rgba(0, 0, 0, 0.4)",
  disabled: "rgba(0, 0, 0, 0.26)",
  disabledO: "#bdbdbd",
  line: "rgba(0, 0, 0, 0.09)",
  lineO: "#e8e8e8",
  utilBg: "#f5f5f5",
  placeholder: "#fafafa",
};

export const color = {
  ...palette,
  error: palette.red1,
  primary: palette.orange1,
  success: palette.green2,
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
};
const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
};

export { size, device };

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
    background: {
      default: color.graydark1,
      error: color.red2,
      success: color.green3,
    },
    primary: {
      // Purple and green play nicely together.
      main: color.primary,
    },
    error: {
      main: color.error,
    },
    success: {
      main: color.success,
    },
  },
});
