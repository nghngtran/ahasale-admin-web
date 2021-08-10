import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import banner from "../../../assets/banner.jpeg";
const styles = ({ spacing, breakpoints }: Theme) =>
  createStyles({
    root: {
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${banner})`,
      backgroundSize: "cover",
      [breakpoints.down(960)]: {
        backgroundImage: "none",
      },
      [breakpoints.up(1024)]: {
        backgroundSize: "contain",
      },
      [breakpoints.between("lg", 1500)]: {
        backgroundSize: "cover",
      },
      [breakpoints.up(1500)]: {
        backgroundSize: "cover",
      },
    },
    imgBanner: {
      backgroundRepeat: "no-repeat",
      width: "100vw",
      backgroundSize: "cover",
      objectFit: "cover",
      [breakpoints.up(960)]: {
        backgroundImage: "none",
      },
    },
    container: {
      height: "450px",
      display: "flex",
      justifyContent: "space-between",
      [breakpoints.between(960, 1024)]: {
        height: "350px",
      },
      [breakpoints.between("lg", "xl")]: {
        height: "80vh",
      },
      [breakpoints.down(960)]: {
        height: "auto",
      },
      [breakpoints.up("xl")]: {
        height: "60vh",
      },
    },
    box: {
      display: "flex",
      textAlign: "start",
      height: "100%",
      alignContent: "center",
      flexDirection: "column",
      justifyContent: "center",
      [breakpoints.down(960)]: {
        padding: spacing(3, 5),
      },
    },
    title: {
      fontSize: "38px",
      color: "#000",
      fontWeight: "bold",
      "&.title-second-row": {
        marginBottom: spacing(1),
        [breakpoints.down(960)]: {
          marginBottom: spacing(4),
          color: "black",
        },
      },
      [breakpoints.between(960, 1025)]: {
        fontSize: "28px",
        lineHeight: "34px",
      },
      [breakpoints.down(960)]: {
        fontSize: "24px",
        lineHeight: "34px",
        color: "black",
        fontWeight: "bold",
      },
    },
    label: {
      fontSize: "18px",
      color: "#171010",
      letterSpacing: "0.5px",
      marginBottom: spacing(2),
      [breakpoints.down(960)]: {
        color: "#303233",
        fontWeight: 400,
      },
      fontWeight: 500,
    },
    flex: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "start",
      flexDirection: "column",
      [breakpoints.up(1025)]: {
        marginTop: spacing(8),
      },
    },
    signup: {
      minWidth: "248px",
      minHeight: "48px",
      [breakpoints.up(1025)]: {
        marginTop: spacing(5),
      },
      "& .MomoPortal-MuiButton-label": {
        letterSpacing: "1.25px",
      },
      alignSelf: "center",
      color: "#FFF",
      marginBottom: spacing(4),
      fontSize: "16px",
    },
  });
const useStyles = makeStyles(styles, { classNamePrefix: "BannerSection" });
export default useStyles;
