import React, { memo } from "react";
import { Grid, Typography, Container, Box, Hidden } from "@material-ui/core";
import useStyles from "./styles";
import clsx from "clsx";
import banner from "../../../assets/banner.jpeg";
const BannerSectionComponent = () => {
  const css = useStyles();

  return (
    <>
      <Hidden smDown>
        <Box className={css.root}>
          <Container maxWidth="lg" fixed>
            <Grid container className={css.container}>
              <Grid item container md={6} xs={12} lg={6} className={css.box}>
                <Typography
                  component="h1"
                  className={clsx(css.title, "title-second-row")}
                  style={{ marginTop: "120px" }}
                >
                  TRỢ LÝ MUA HÀNG ĐẮC LỰC,
                  <br />
                  MUA SẮM GIÁ RẺ CÙNG ÀHA SALE
                </Typography>
                <div className={css.flex} style={{ marginTop: "40px" }}>
                  <Typography component="p" className={css.label}>
                    • Đồng hành cùng bạn trong suốt trải nghiệm mua sắm trực
                    tuyến
                  </Typography>
                  <Typography component="p" className={css.label}>
                    • Hỗ trợ theo dõi và so sánh giá sản phẩm. Ứng dụng sử dụng
                    trên thiết bị di động (Android & iOS)
                  </Typography>
                  <Typography component="p" className={css.label}>
                    • Hoàn toàn miễn phí dành cho bạn. Bảo mật thông tin an toàn
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Box>
          <Grid container xs={12}>
            <img src={banner} alt="banner" className={css.imgBanner} />
          </Grid>
        </Box>

        <Grid container md={6} xs={12} lg={6} className={css.box}>
          <Container maxWidth="lg" fixed>
            <Typography
              component="h1"
              className={clsx(css.title, "title-second-row")}
            >
              TRỢ LÝ MUA HÀNG ĐẮC LỰC,
              <br />
              MUA SẮM GIÁ RẺ CÙNG ÀHA SALE
            </Typography>
            <div className={css.flex}>
              <Typography component="p" className={css.label}>
                • Đồng hành cùng bạn trong suốt trải nghiệm mua sắm trực tuyến
              </Typography>
              <Typography component="p" className={css.label}>
                • Hỗ trợ theo dõi và so sánh giá sản phẩm. Ứng dụng sử dụng trên
                thiết bị di động (Android & iOS)
              </Typography>
              <Typography component="p" className={css.label}>
                • Hoàn toàn miễn phí dành cho bạn. Bảo mật thông tin an toàn
              </Typography>
            </div>
          </Container>
        </Grid>
      </Hidden>
    </>
  );
};

const BannerSection = memo(BannerSectionComponent);
BannerSection.displayName = "BannerSection";
export default BannerSection;
