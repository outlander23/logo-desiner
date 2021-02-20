import React, { Component } from "react";
import About from "./About/about";
import Resume from "./Resume/resume";
import "./newstyle.css";
function HomePage(argument) {
  return (
    <>
      <About />
      <Resume />
    </>
  );
}
export default HomePage;
