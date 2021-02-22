import React, {Component} from "react";
import "./fixed.css";
import http from "../../form/httpService";
import {apiRoot} from "../../constants";

class Customer extends Component {
  state = {
    aboutCompany: []
  }

  async componentDidMount() {
    let res = await http.get(apiRoot + '/site-data/about_company/');
    this.setState({aboutCompany: res.data.data});
  }

  render() {
    const {reviews, projects, customers, delivery_rate} = this.state.aboutCompany;
    return (
        <div className="bg-fixed" id="bg-fixed-1">
          <div className="container-fluid  ">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-xs-12 mt-4 statistics-content">
                <div className="statistics bg-color-1 ">
                  <div class="statistics-icon">
                    <i class="icon-happy"/>
                  </div>
                  <h3 className="counter-number">{customers}</h3>
                  <h4>Happy customers</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12 mt-4 statistics-content">
                <div className="statistics bg-color-2 ">
                  <div class="statistics-icon">
                    <i class="icon-back-in-time"/>
                  </div>
                  <h3 className="counter-number">{projects}</h3>
                  <h4>Projects</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12 mt-4 statistics-content">
                <div className="statistics bg-color-3 ">
                  <div class="statistics-icon">
                    <i class=" icon-star-outlined"/>
                  </div>
                  <h3 className="counter-number">{reviews}</h3>
                  <h4>Positive Reviews</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12 mt-4 statistics-content">
                <div className="statistics bg-color-4 ">
                  <div class="statistics-icon">
                    <i class=" icon-bike"/>
                  </div>
                  <h3 className="counter-number">{delivery_rate}</h3>
                  <h4>On Time Delivery</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Customer;
