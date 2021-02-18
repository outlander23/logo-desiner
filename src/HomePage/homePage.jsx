import React, { Component } from 'react';
import HeaderSlider from "./HeaderSlider/headerSlider";
import FeaturesSlides from "./FeatureSliders/feature";
import SomeWorks from "./SomeWorks/feature"
import Review from "./Review/App";
import FAQ from "./FAQ/FAQ"
function HomePage(argument) {
	return (
		<>
		<HeaderSlider/>
		<FeaturesSlides/>
		<SomeWorks />
		<FAQ />
		<Review />
		</>
		)
}
export default 	HomePage