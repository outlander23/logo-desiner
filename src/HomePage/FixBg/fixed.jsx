import React, { Component } from 'react';
import "./fixed.css"
import { Fade } from "react-awesome-reveal";

class Customar extends Component {
    render() { 
        return (
        
      <div className="bg-fixed" id="bg-fixed-1">
		<div className="container-fluid  ">
			<div className="row">
				<div className="col-lg-3 col-sm-6 col-xs-12 mt-4 statistics-content">
					<div className="statistics bg-color-1 ">
						 <div class="statistics-icon"><i class="icon-happy"></i> </div>
						<h3 className="counter-number">1000+</h3>
						<h4>Happy customars</h4>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 col-xs-12 mt-4 statistics-content">
					<div className="statistics bg-color-2 ">
						 <div class="statistics-icon"><i class="icon-back-in-time"></i></div>
						<h3 className="counter-number">5+</h3>
						<h4>Projects</h4>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 col-xs-12 mt-4 statistics-content">
					<div className="statistics bg-color-3 ">
						<div class="statistics-icon"><i class=" icon-star-outlined"></i></div>
						<h3 className="counter-number">300</h3>
						<h4>Positive Reviews</h4>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 col-xs-12 mt-4 statistics-content">
					<div className="statistics bg-color-4 ">
						<div class="statistics-icon"><i class=" icon-bike"></i></div>
						<h3 className="counter-number">100%</h3>
						<h4>On Time Delevery</h4>
					</div>
				</div>
				
			</div>
		</div>
	</div>

       );
    }
}
export default Customar;
