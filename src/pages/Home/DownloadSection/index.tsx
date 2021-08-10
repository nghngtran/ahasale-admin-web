import { Box, Grid } from "@material-ui/core";
import React, { memo } from "react";
import useStyles from "./styles";
import ios from "../../../assets/ios.jpg";
import android from "../../../assets/android.jpg";
const DownloadComponent = () => {
  const css = useStyles();
  return (
    <Box
      paddingTop="24px"
      paddingBottom="100px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <h2 className={css.title}>TẢI ỨNG DỤNG TẠI</h2>
      <Grid container className={css.container}>
        <Grid item className={css.market}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <p className={css.label}>iOS</p>
            <img src={ios} alt="iOS" width="120px" />
          </Box>
        </Grid>
        <Grid item className={css.market}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <p className={css.label}>Android</p>
            <img src={android} alt="android" width="120px" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
const Download = memo(DownloadComponent);
Download.displayName = "Download";
export default Download;
