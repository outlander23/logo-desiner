import React from "react";
import SliderBox from "./HeaderSlider/slider";
import FeaturesSlides from "./FeatureSliders/feature";
import Review from "./Review/App";
import FAQ from "./FAQ/FAQ";
import BgFix from "./FixBg/fixed";
import News from "./Newsletter/Newsletter";
import Service from "./services";
import Tech from "./tech/tech";
import HireNow from "./Start/hireNow"

function HomePage() {
  return (
      <React.Fragment>
        <SliderBox/>
        <FeaturesSlides/>

        <Service/>
        <HireNow/>
        <Tech/>
        <FAQ/>
        <BgFix/>
        <Review/>

        <News/>

      </React.Fragment>
  );
}

export default HomePage;
