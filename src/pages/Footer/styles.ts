import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const styles = ({ breakpoints, spacing, typography }: Theme) =>
  createStyles({
    flex: {
      display: "flex",
      justifyContent: "flex-end",
      [breakpoints.down(1023)]: {
        justifyContent: "center",
      },
    },
    flexStart: {
      display: "flex",
      justifyContent: "flex-start",
      [breakpoints.down(1023)]: {
        justifyContent: "center",
      },
    },
  });
const useStyles = makeStyles(styles, { classNamePrefix: "Footer" });
export default useStyles;
