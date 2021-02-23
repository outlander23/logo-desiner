import React, {Component} from 'react';
import http from "../../form/httpService";
import {apiRoot} from "../../constants";
import "./css.css"

class Service extends Component {
    state = {
        aboutMe: []
    }

    async componentDidMount() {
        let res = await http.get(apiRoot + '/site-data/about_me/');
        this.setState({aboutMe: res.data.data});
    }

  render() {
    const { email,fiverr} = this.state.aboutMe;
    return (
        <div id="special-footer">

          <div className="footer-top">
            <h3>Start Creating Your Logo Today With Me</h3>
            <p>Choose Creative Logo form Professional</p>
            <a href={fiverr} >Hire Now</a>

          </div>
        </div>
    );
  }
}

export default Service;
