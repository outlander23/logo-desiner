import React, { Component } from "react";
import "./new.css";
import Logo from "./image-support.jpg"
class App extends Component {
  render() {
    return (
    	<div className="main_content">

<div className="un-container">

						<div class="title ">
							<h3 class="txt1">Technical Support</h3>
							<p class="txt2">All requests will be processed manually by our developer or our support staff during 24 hours (Friday - Monday).<br/>We will try to reply as fast as we can. Will be in touch.</p>
						</div>
						<div class="row support">
							<div class="image_support col-lg-6 col-md-12">
								<img src={Logo} class="img-fluid"/>
							</div>
							<div class="content_support  text-center col-lg-6 col-md-12">
								<div class="box-support">
									<div class="iteam-support">
										<span className="icon-clock color-3" />
										
										<h4>Official Hour</h4>
										<p>Mon-Fri / 8am-5pm (GMT+7)</p>
									</div>
									<div class="iteam-support">
										<span className="icon-mail color-3" alt=""/>
										<h4>Email</h4>
										<p>posthemes@gmail.com</p>
									</div>
									<div class="iteam-support">
										<span className="icon-browser color-3" alt=""/>
										<h4>Website</h4>
										<p><a href="http://posthemes.com">http://posthemes.com</a></p>
									</div>
								</div>
								<a class="contact_now" ><span class="icon-chat"/>Live Chat now</a>
							</div>
						</div>
					
</div>
    	</div>
)
}
}
export default App;