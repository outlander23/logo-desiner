import React, {Component} from "react";
import "./new.css";
import Logo from "./image-support.jpg"
import MessengerCustomerChat from 'react-messenger-customer-chat';
import http from "../../form/httpService";
import {apiRoot} from "../../constants";
class App extends Component {
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
        <div className="main_content" id="tech">


<MessengerCustomerChat
    pageId="117189823741050"
    appId="429031561679245"

  />
          <div className="un-container">

            <div className="title ">
              <h3 className="txt1">Technical Support</h3>
              <p className="txt2">All requests will be processed manually by our developer or our support staff during 24
                hours 7 days.<br/>We will try to reply as fast as we can. Will be in touch.</p>
            </div>
            <div className="row support">
              <div className="image_support col-lg-6 col-md-12">
                <img src={Logo} className="img-fluid" alt="Logo"/>
              </div>
              <div className="content_support  text-center col-lg-6 col-md-12">
                <div className="box-support">
                  <div className="iteam-support">
                    <span className="icon-clock color-3"/>

                    <h4>Official Hour</h4>
                    <p>Mon-Fri / 8am-12pm (GMT+6)</p>
                  </div>
                  <div className="iteam-support">
                    <span className="icon-mail color-3" />
                    <h4>Email</h4>
                    <p>{email}</p>
                  </div>
                  <div className="iteam-support">
                    <span className="icon-chat color-3" />
                    <h4>Live Chat </h4>
                    <p>Mon-Fri / 8am-12pm (GMT+6)</p>
                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
    )
  }
}

export default App;