import React, { memo } from "react";
import {
  Grid,
  Typography,
  Button,
  Hidden,
  Container,
  Box,
} from "@material-ui/core";

import landingPage1 from "../../../assets/landing_1.jpg";
import landingPage2 from "../../../assets/landing_2.jpg";
import landingPage3 from "../../../assets/landing_3.jpg";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const AdvantageSectionComponent = () => {
  const css = useStyles();

  const { push } = useHistory();
  const goToSignIn = () => push("/login");
  return (
    <Box
      display="flex"
      textAlign="center"
      className={css.root}
      flexDirection="column"
    >
      <Typography variant="h2" className={css.titleSection}>
        Đồng hành cùng bạn trong suốt trải nghiệm mua sắm
      </Typography>
      <Typography variant="h2" className={css.titleDescription}>
        Mang lại giải pháp mua hàng tiết kiệm thời gian và giá cả
      </Typography>
      <div style={{ backgroundColor: "#9BCFFF" }}>
        <Container maxWidth="lg" fixed>
          <Grid item container xs className={css.container}>
            <Grid item xs={12} md={6} className={css.box}>
              <div>
                <img
                  src={landingPage1}
                  alt="landingImg"
                  className={css.img}
                  style={{ marginTop: "20px" }}
                />
              </div>
            </Grid>

            <Grid item xs={12} md={5}>
              <div className={css.textInner}>
                <Typography component="h3" className={css.title}>
                  Đề xuất sản phẩm giảm giá nổi bật
                </Typography>
                <Typography component="p" className={css.label}>
                  • Sản phẩm giảm giá mạnh nhất theo tuần, theo ngày
                </Typography>
                <Typography component="p" className={css.label}>
                  • Liên tục cập nhật những sản phẩm mới nhất
                </Typography>
                <Typography component="p" className={css.label}>
                  • Đa dạng sản phẩm, ngành hàng
                </Typography>
              </div>
            </Grid>
          </Grid>{" "}
        </Container>
      </div>

      <Hidden smDown>
        <div style={{ backgroundColor: "#F3F8C7" }}>
          <Container maxWidth="lg" fixed>
            <Grid item container xs className={css.container}>
              <Grid item xs={12} md={5}>
                <div className={css.textInnerLeft}>
                  <Typography component="h3" className={css.title}>
                    Cung cấp thông tin đầy đủ của sản phẩm
                  </Typography>
                  <Typography component="p" className={css.label}>
                    • Thông tin mặt hàng hiển thị chi tiết. Các mức giá cao
                    nhất, thấp nhất và giá hiện tại
                  </Typography>
                  <Typography component="p" className={css.label}>
                    • Biểu đồ biến động giá và lịch sử thay đổi giá sản phẩm
                  </Typography>
                  <Typography component="p" className={css.label}>
                    • Gợi ý cho bạn những sản phẩm bạn có thể yêu thích
                  </Typography>
                </div>
              </Grid>

              <Grid item xs={12} md={6} className={css.box}>
                <div>
                  <img
                    src={landingPage2}
                    alt="landingImg"
                    className={css.img}
                    style={{ marginTop: "30px" }}
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div style={{ backgroundColor: "#F3F8C7" }}>
          <Container maxWidth="lg" fixed>
            <Grid item container xs className={css.container}>
              <Grid item xs={12} md={6} className={css.box}>
                <div>
                  <img
                    src={landingPage2}
                    alt="landingImg"
                    className={css.img}
                    style={{ marginTop: "30px" }}
                  />
                </div>
              </Grid>

              <Grid item xs={12} md={5}>
                <div className={css.textInner}>
                  <Typography component="h3" className={css.title}>
                    Cung cấp thông tin đầy đủ của sản phẩm
                  </Typography>
                  <Typography component="p" className={css.label}>
                    • Thông tin mặt hàng hiển thị chi tiết. Các mức giá cao
                    nhất, thấp nhất và giá hiện tại
                  </Typography>
                  <Typography component="p" className={css.label}>
                    • Biểu đồ biến động giá và lịch sử thay đổi giá sản phẩm
                  </Typography>
                  <Typography component="p" className={css.label}>
                    • Gợi ý cho bạn những sản phẩm bạn có thể yêu thích
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Hidden>
      <div style={{ backgroundColor: "#F6C6D8" }}>
        <Container maxWidth="lg" fixed>
          <Grid item container xs className={css.container}>
            <Grid item md={6} xs={12} className={css.box}>
              <div>
                <img
                  src={landingPage3}
                  alt="landingImg"
                  className={css.img}
                  style={{ marginTop: "30px" }}
                />
              </div>
            </Grid>

            <Grid item md={5} xs={12}>
              <div className={css.textInner}>
                <Typography component="h3" className={css.title}>
                  Thông báo giá biến động
                </Typography>
                <Typography component="p" className={css.label}>
                  • Đăng ký nhận thông báo biến động giá
                </Typography>
                <Typography component="p" className={css.label}>
                  • Chủ động theo dõi giá giúp bạn
                </Typography>
                <Typography component="p" className={css.label}>
                  • Dễ dàng so sánh giá, mua hàng tiết kiệm hơn
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Button
        variant="contained"
        color="primary"
        classes={{ root: css.btn }}
        className={css.signup}
        onClick={() => {
          goToSignIn();
        }}
      >
        Đăng nhập
      </Button>
    </Box>
  );
};

const AdvantageSection = memo(AdvantageSectionComponent);
AdvantageSection.displayName = "AdvantageSection";
export default AdvantageSection;
