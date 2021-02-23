import React, { Component } from "react";

import { Link } from "react-router-dom";
class Navlist extends Component {
  render() {
    const { label, link } = this.props;

    return (
      <li className="nav-link text-light">
        <Link
   
          to={link}
        >
          <span className="btn btn-dark color-white"> {label}</span>
        </Link>
      </li>
    );
  }
}
export default Navlist;
