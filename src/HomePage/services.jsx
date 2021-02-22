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
        <section id="section-feature">
          <div className="section-heading-styles _mPS2id-t">
            <div className="list-header">
              <div className="un-container text-center">

                <div className="title" id="start-id">
                  <h3 className="txt1 to-upper">Other interesting features</h3>
                  <p className="txt2">What Choose Me ?</p>

                </div>

                <br/>
                <div className="row">
                  {features.map(([index, feature]) =>
                      <div key={index} className="col-lg-4 col-md-3 col-sm-2 col-xs-1">
                        <div className="box box-14 text-center">
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
          </div>

        </section>
    );
  }
}

export default Service;
