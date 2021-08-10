import { makeStyles, Theme, createStyles } from "@material-ui/core";
const styles = ({ spacing }: Theme) =>
  createStyles({
    paper: {
      marginTop: "10vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      maxWidth: 550,
      border: "1px solid #DFDFDF",
      padding: "30px 40px",
    },
    title: {
      color: "black",
      fontSize: "20px",
      lineHeight: 1.25,
      fontWeight: "bold",
      letterSpacing: "0.15px",
      padding: "22px 0 0 ",
      marginLeft: "10px",
    },
    form: {
      marginTop: spacing(3),
    },
    formGroup: {
      marginTop: spacing(3),
    },
    submit: {
      minWidth: 370,
      marginTop: spacing(4),
      backgroundColor: "#F5AF19",
    },
    momoLogo: {
      width: "50px",
      height: "50px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 46px",
    },
    errorMgs: {
      margin: "5px 0",
    },
    input: {
      "& .MuiInputBase-root": {
        fontSize: "16px!important",
      },
      "& .MuiFormLabel-root": {
        fontSize: "16px!important",
      },
    },
    page: {
      maxWidth: "850px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      padding: spacing(10, 0),
    },
    container: {
      minHeight: "100vh",
      width: "100%",
    },
    sectionWrap: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      backgroundColor: "white",
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
    },
  });

const useStyles = makeStyles(styles, {
  classNamePrefix: "Login",
});

export default useStyles;
