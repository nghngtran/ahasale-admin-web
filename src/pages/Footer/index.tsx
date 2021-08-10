import { Box, Grid } from "@material-ui/core";
import React, { memo } from "react";
import useStyles from "./styles";
const FooterComponent = () => {
  const css = useStyles();
  return (
    <footer>
      <Box
        padding="8px"
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        alignItems="center"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <Grid
          container
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item xs={12} md={5} className={css.flex}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="end"
            >
              <p
                style={{ fontWeight: 500, color: "#303233", fontSize: "14px" }}
              >
                Email: dangductrung1999@gmail.com
              </p>
              <p
                style={{
                  fontWeight: 500,
                  color: "#303233",
                  fontSize: "14px",
                  marginTop: "0px",
                }}
              >
                Liên hệ: 0982449337
              </p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className={css.flexStart}>
            <p
              style={{
                fontWeight: 600,
                color: "#303233",
                fontSize: "14px",
              }}
            >
              Bản quyền thuộc về Àha Sale Team
            </p>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};
const Footer = memo(FooterComponent);
Footer.displayName = "Footer";
export default Footer;
