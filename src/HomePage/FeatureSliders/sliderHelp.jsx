import React, { Component } from "react";

class Helper extends Component {
  render() {
    const { label, Img } = this.props;
    return (
      <div class="slider-box bg-color-3">
        <div class="menu-box">
          <div class="img-box">
            <img src={Img} className="img-responsive img-small" width="100px" />
          </div>
          <div class="product_blog_cont">
            <h3>{label}</h3>
            <div className="stars" id="stars">
              <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
            </div>
            <h3>rating : 5 ot of 5</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default Helper;
