import { fade, createMuiTheme } from "@material-ui/core";
import { Overrides } from "@material-ui/core/styles/overrides";

export const colorPrimary = "#a50064";

export const { spacing } = createMuiTheme();

const overrides: Overrides = {
  MuiAppBar: {
    colorPrimary: {
      backgroundColor: "#F5AF19",
    },
  },
  MuiBackdrop: {
    root: {
      backgroundColor: fade(colorPrimary, 0.5),
    },
  },
  MuiList: {
    padding: {
      paddingTop: spacing(2),
    },
  },

  MuiButton: {
    colorInherit: {
      backgroundColor: "white",
    },
    contained: {
      backgroundColor: "#F5AF19",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#F5AF19",
      },
    },
    containedPrimary: {
      color: "white",
      "&:hover": {
        backgroundColor: "#F5AF19",
      },
    },
    containedSizeLarge: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 16,
    },
    containedSizeSmall: {
      padding: 8,
    },
    root: {
      minWidth: 0,
      paddingTop: 8,
      paddingBottom: 8,
      textTransform: "none",
    },
  },
  MuiDrawer: {
    paper: {
      top: "inherit",
      padding: spacing(0),
    },
    paperAnchorDockedLeft: { borderRight: "none" },
  },
  MuiTabs: {
    root: {
      alignItems: "center",
    },
  },
  MuiTypography: {
    h4: {
      fontSize: 22,
    },
    colorPrimary: {},
  },
  MuiFormControl: {
    marginNormal: {
      marginTop: "0px",
      marginBottom: "0px",
    },
  },
  MuiInput: {
    root: {
      borderColor: "#F5AF19",
      "&$disabled": {
        backgroundColor: "##f7f7f7",
      },
    },
  },
  MuiInputBase: {
    root: {
      borderColor: "#F5AF19",
      "&$disabled": {
        backgroundColor: "##f7f7f7",
      },
    },
  },
};

export default overrides;
