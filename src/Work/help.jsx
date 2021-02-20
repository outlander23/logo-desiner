import React, { Component } from "react";

class Helper extends Component {
  render() {
    const { label, Img } = this.props;
    return (
      <div class="services-section sp-circle">
           <div className="icon">
            <img src={Img} className="img-responsive "  />
           </div>

            <h3>{label}</h3>
            <h4>sell in <time>12:04 px 1/1/2002</time></h4>

      </div>
    );
  }
}
export default Helper;
