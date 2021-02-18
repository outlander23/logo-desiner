import React, { Component } from 'react';


class Helper extends Component {
	render() {

		const { label, Img } = this.props;
		return (
			<div class="slider-box bg-color-13">
				<div class="menu-box">
					<div class="img-box">
						<img src={Img} className="img-responsive img-small" width="100px"/>
					</div>
					<div class="product_blog_cont">
						<h3>
							{label}
						</h3>
					</div>
				</div>
			</div>

		)

	}
}
export default Helper;