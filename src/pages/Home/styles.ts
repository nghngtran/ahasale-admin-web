import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const styles = ({ breakpoints, spacing, typography }: Theme) =>
  createStyles({
    homeRoot: {
      overflowX: "hidden",
      overflowY: "hidden",
      backgroundColor: "white",
    },
    landingBody: {
      transition: "all 0.3s ease-in-out",
    },
  });
const useStyles = makeStyles(styles, { classNamePrefix: "HomePage" });
export default useStyles;
