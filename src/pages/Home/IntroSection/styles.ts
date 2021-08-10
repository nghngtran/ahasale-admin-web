import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const styles = ({ spacing, breakpoints }: Theme) =>
  createStyles({
    root: {
      padding: spacing(16, 0, 6, 0),
      [breakpoints.down("sm")]: {
        padding: spacing(12, 0),
      },
    },
    section: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      alignContent: "center",
      flexDirection: "column",
    },
    label: {
      fontSize: "16px",
      fontWeight: 400,
      color: "black",
      lineHeight: "32px",
      marginBottom: "4px",
      letterSpacing: 0.5,
      [breakpoints.down("sm")]: {
        lineHeight: "24px",
      },
    },
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      justifyContent: "space-between",
      textAlign: "center",
      alignContent: "center",
      flexDirection: "row",
      display: "flex",
      marginBottom: spacing(6),
    },
    titleSection: {
      color: "black",
      fontSize: "38px",
      lineHeight: "46px",
      fontWeight: "bold",
      maxWidth: "100vw",
      [breakpoints.down("sm")]: {
        fontSize: "24px",
        lineHeight: "34px",
      },
      marginBottom: spacing(2),
    },
    titleDescription: {
      fontSize: "20px",
      color: "#303233",
      letterSpacing: "0.15px",
      fontWeight: 600,
      marginBottom: "100px",
      [breakpoints.down("sm")]: {
        marginBottom: spacing(2),
        fontSize: "14px",
        letterSpacing: "0.1px",
      },
    },
    textInner: {
      textAlign: "start",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      [breakpoints.down("sm")]: {
        padding: spacing(4),
      },
      padding: spacing(2),
    },
    textInnerLeft: {
      textAlign: "start",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      marginLeft: "20px",
      [breakpoints.down("sm")]: {
        padding: spacing(4),
        marginLeft: 0,
      },
      [breakpoints.down(960)]: {
        marginLeft: "15px",
      },
      padding: spacing(2),
    },
    title: {
      color: "black",
      display: "flex",
      fontSize: "24px",
      lineHeight: "34px",
      fontWeight: "bold",
      marginBottom: spacing(4),
      [breakpoints.down("sm")]: {
        fontSize: "20px",
        lineHeight: "24px",
      },
    },
    btn: {
      marginTop: spacing(6),
    },
    signup: {
      alignSelf: "center",
      color: "#FFF",
      fontSize: "16px",
    },
    img: {
      width: "50%",
      height: "50%",
    },
    pattern: {
      position: "absolute",
      left: 0,
    },
    dotPattern: {
      position: "absolute",
      right: 0,
    },
  });
const useStyles = makeStyles(styles, { classNamePrefix: "AdvantageSection" });
export default useStyles;
