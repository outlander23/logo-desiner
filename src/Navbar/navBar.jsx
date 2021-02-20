import React, { Component } from "react";
import Navlist from "./navList";

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark " id="navbar">
          <div className="container">
            <a className="navbar-brand color-18" href="/home">
              <b>
                <h4 className="color-white about-me ">smmiloy</h4>
              </b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "> </span>
            </button>
            <div className="collapse navbar-collapse " id="navbarsExample09">
              <ul className="navbar-nav ml-auto ">
                <Navlist label="Home" link="home" />
                <Navlist label="About" link="about" />
                <Navlist label="Works" link="work" />
        
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
