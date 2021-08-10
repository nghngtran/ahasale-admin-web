import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#FFFFFF",
      overflowWrap: "break-word",
      "& .MuiDataGrid-cell:focus-within": {
        outline: "none",
      },
      "& .MuiDataGrid-columnHeader:focus": {
        outline: "none",
      },
    },
    msgNoData: {
      margin: "10vh 0",
      display: "flex",
      justifyContent: "center",
    },
    title: {
      margin: theme.spacing(3, 2),
      display: "flex",
      justifyContent: "center",
    },
    table: {
      width: "100%",
    },
  });
const useStyles = makeStyles(styles, { classNamePrefix: "TableData" });
export default useStyles;
