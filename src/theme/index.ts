import { createMuiTheme } from "@material-ui/core";

import overrides from "./overrides";

export const colorPrimary = "#F5AF19";
export const colorSecondary = "#F5AF19";
export const colorThird = "#F5AF19";
export const colorText = "#333";
export const colorBg = "#f1f1f1";
const theme = createMuiTheme({
  overrides,
  palette: {
    background: { default: colorBg },
    divider: colorText,
    primary: {
      main: colorPrimary,
    },
    secondary: {
      main: colorSecondary,
    },
    text: {
      primary: colorText,
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    body1: {
      fontSize: 14,
    },
    button: {
      fontSize: 14,
    },
  },
});

export default theme;
