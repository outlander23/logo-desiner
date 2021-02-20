import React, { Component } from "react";

import { Link } from "react-router-dom";
class Navlist extends Component {
  render() {
    const { label, link } = this.props;

    return (
      <li className="nav-item nav-link">
        <Link
   
          to={link}
        >
          <span>{label}</span>
        </Link>
      </li>
    );
  }
}
export default Navlist;
