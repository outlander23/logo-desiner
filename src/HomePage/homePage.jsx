import React, { Component } from 'react';
import HeaderSlider from "./HeaderSlider/headerSlider";
import FeaturesSlides from "./FeatureSliders/feature";
import SomeWorks from "./SomeWorks/feature"
import Review from "./Review/App";
import FAQ from "./FAQ/FAQ";
import BgFix from "./FixBg/fixed"
function HomePage(argument) {
	return (
		<>
		<HeaderSlider/>
		<FeaturesSlides/>
		<SomeWorks />
		<BgFix />
		<FAQ />

		<Review />
		</>
		)
}
export default 	HomePage