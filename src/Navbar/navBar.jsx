import React, { Component } from "react";
import NavList from "./navList";
import http from "../form/httpService";
import {apiRoot} from "../constants";

class Navbar extends Component {
  state = {
    bars: []
  }

  async componentDidMount() {
    let res = await http.get(apiRoot + '/site-data/navBars/');
    this.setState({bars: res.data.data});
  }


  render() {
    const {bars} = this.state;
    return (
      <header>
        <nav className="navbar  navbar-dark " id="navbar">
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
                {[...bars.entries()].map(([index, bar]) => <NavList key={index}
                                                                    label={bar.label} link={bar.link} />)}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
