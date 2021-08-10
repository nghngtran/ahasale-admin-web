import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const styles = ({ breakpoints, spacing, typography }: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
    },
    market: {
      margin: spacing(0, 10),
    },
    title: {
      color: "#d82d8b",
      fontSize: "24px",
    },
    divider: {
      width: "300px",
      color: "#303233",
      marginBottom: "50px",
      height: "1px",
    },
    label: {
      color: "#303233",
      fontWeight: 600,
      fontSize: "16px",
    },
  });
const useStyles = makeStyles(styles, { classNamePrefix: "Download" });
export default useStyles;
