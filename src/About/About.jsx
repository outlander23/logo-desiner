import React from "react";
import About from "./About/about";
import Resume from "./Resume/resume";
import "./newstyle.css";
function HomePage() {
  return (
    <React.Fragment>
      <About />
      <Resume />
    </React.Fragment>
  );
}
export default HomePage;
