import React, {Component} from 'react';

import "./css.css"
import http from "../form/httpService";
import {apiRoot} from "../constants";

class Service extends Component {
  state = {
    features: []
  }

  async componentDidMount() {
    let res = await http.get(apiRoot + '/site-data/features/');
    this.setState({features: res.data.data});
  }

  render() {
    const features = [...this.state.features.entries()];
    return (
        <section id="section-feature ">
     
     <div className="container">


                <div className="title text-center" id="start-id">
                  <h3 >Other interesting features</h3>
                  <p >What Choose Me ?</p>
                <div className="row">
                  {features.map(([index, feature]) =>
                      <div key={index} className="box col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className=" text-center">
                          <div className="icon_box">
                            <img height="100px" width="100px" src={feature.image} alt={feature.title} className="img-responsive img-fe"/>
                          </div>
                          <div className="text_box">
                            <div className="title_features">{feature.title}</div>
                            <div className="sub_title">{feature.about}</div>
                          </div>
                        </div>
                      </div>
                  )}

                </div>
 

          </div>
 </div>
  
        </section>
     
      
    );
  }
}

export default Service;
