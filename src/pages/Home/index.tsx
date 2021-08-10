import React, { memo } from "react";
import Footer from "../Footer";
import BannerSection from "./BannerSection";
import Download from "./DownloadSection";
import IntroSection from "./IntroSection";
import useStyles from "./styles";
const HomePageComponent = () => {
  const css = useStyles();
  return (
    <div className={css.homeRoot}>
      <div id="sectionBody" className={css.landingBody}>
        <BannerSection />
        <IntroSection />
        <Download />
        <Footer />
      </div>
    </div>
  );
};
const HomePage = memo(HomePageComponent);
HomePage.displayName = "HomePage";
export default HomePage;
