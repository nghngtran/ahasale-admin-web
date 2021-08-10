import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    grow: {
      gridColumn: "span 2",
      zIndex: 1,
    },
    momoLogo: {
      width: "50px",
      height: "50px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 46px",
      padding: "0px 10px 0px 25px",
      color: "white",
    },
    appBar: {
      padding: theme.spacing(2, 3),
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      height: 64,
      backgroundColor: "#F5AF19",
    },
    sectionDesktop: {
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    profileBtn: {
      borderRadius: 0,
      fontSize: 14,
      color: "white",
      backgroundColor: "#F5AF19",
      "&:hover": {
        // background: "#bb0272",
        backgroundColor: "#F5AF19",
        boxShadow: "none",
      },
      svg: { marginLeft: theme.spacing(1) },
    },
    iconProfile: {
      backgroundColor: "white",
      color: "white",
    },
    menuItem: {
      padding: theme.spacing(2),
      margin: 0,
      borderRadius: 0,
      "& p": {
        padding: 0,
        margin: 0,
      },
      "& button": {
        padding: 0,
        margin: 0,
        paddingLeft: 16,
      },
      "&:hover": {
        backgroundColor: "#F5AF19",
      },
    },
    headerLeft: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    },
    showSidebarBtn: {
      padding: theme.spacing(1),
      borderRadius: 4,
    },
    btnIcon: { color: "grey" },
    line: {
      backgroundColor: "grey",
      width: 1,
      height: 40,
      margin: theme.spacing(0, 2),
    },
    logout: {
      marginLeft: theme.spacing(2),
      borderRadius: 4,
    },
    iconLogout: {
      minWidth: 35,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: "Header" });
export default useStyles;
