import React, {Component} from "react";
import "./new.css";
import Logo from "./image-support.jpg"

class App extends Component {
  render() {
    return (
        <div className="main_content">
          {/*This section is for live chat*/}
          <div className="form-popup" id="myForm">
            <form action="/action_page.php" className="form-container">
              <h1>Login</h1>

              <label htmlFor="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                  <button type="submit" className="btn">Login</button>
                  <button type="submit" className="btn cancel" onClick="closeForm()">Close</button>
            </form>
          </div>

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
                    <p>posthemes@gmail.com</p>
                  </div>
                  <div className="iteam-support">
                    <span className="icon-browser color-3" />
                    <h4>Website</h4>
                    <p><a href="http://posthemes.com">http://posthemes.com</a></p>
                  </div>
                </div>
                <button className="contact_now"><span className="icon-chat"/>Live Chat now</button>
              </div>
            </div>

          </div>
        </div>
    )
  }
}

export default App;