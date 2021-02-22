import React, {useEffect, useState} from "react";
import "./footer.css";
import Register from "../form/registerFrom";
import http from "../form/httpService";
import {apiRoot} from "../constants";

const Sidebar = () => {
  const [aboutMe, setaboutMe] = useState({});

  useEffect(() => {
    const getUrl = async () => {
      let res = await http.get(apiRoot + '/site-data/about_me/');
      setaboutMe(res.data.data);
    }
    getUrl();
  });

  const {email, phone, address} = aboutMe;

  return (
      <footer>
        {email && <div className=" bg-color-3 color-white ">
          <br/>
          <div className="container ">
            <div className="container mt-4 mb-4">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="section-heading text-center">
                    <h2>
                      Get <strong>In Touch</strong>
                    </h2>
                  </div>
                </div>

                <div className="col-md-7 mb-5 mb-md-0">
                  <form action="" className="site-form">
                    <Register/>
                  </form>
                </div>
                <div className="col-md-5 pl-md-5">
                  <h3 className="mb-5">Our Contact Details</h3>
                  <ul className="site-contact-details text-left">
                    <li>
                      <h4>
                        <span className="text-uppercase color">Email</span>
                      </h4>
                      <p>{email}</p>
                    </li>

                    <li>
                      <h4>
                        <span className="text-uppercase ">Address</span>
                      </h4>
                      <div dangerouslySetInnerHTML={{__html: address}}/>
                    </li>
                    <li>
                      <h4>
                        <span className="text-uppercase ">Phone</span>
                      </h4>
                      {phone}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br/>
        </div>
        }

        <div className="social-contact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 order-2 order-md-2 order-sm-2 order-lg-1">
                <div className="social-media-section">
                  <h2>Follow us</h2>
                  <div className="social-links">
                    <a
                        className="instagram bg-color-11"
                        href="https://www.instagram.com/"
                        data-tooltip="Instagram"
                        target="_blank"
                    >
                      <i className="fa fa-youtube"/>
                    </a>
                    <a
                        className="facebook"
                        href="https://www.facebook.com/"
                        data-tooltip="Facebook"
                        target="_blank"
                    >
                      <i className="fa fa-facebook"/>
                    </a>
                    <a
                        className="instagram"
                        href="https://www.instagram.com/"
                        data-tooltip="Instagram"
                        target="_blank"
                    >
                      <i className="fa fa-instagram"/>
                    </a>
                    <a
                        className="instagram bg-color-11"
                        href="https://www.instagram.com/"
                        data-tooltip="Instagram"
                        target="_blank"
                    >
                      <i className="fa fa-github"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 order-1 order-md-1 order-sm-1 order-lg-2  mb-sm-50 mb-xs-50">
                <div className="contact-summery">
                  <h2>Contact us</h2>

                  <div className="contact-segments d-flex justify-content-between flex-wrap flex-lg-nowrap">
                    <div className="single-contact d-flex mb-xs-20">
                      <div className="icon">
                        <span className="icon-mobile"/>
                      </div>
                      <div className="contact-info">
                        <p>
                          Phone: <span>{phone}</span>
                        </p>
                      </div>
                    </div>

                    <div className="single-contact d-flex">
                      <div className="icon">
                        <span className="icon-mail"/>
                      </div>
                      <div className="contact-info">
                        <p>
                          Email: <span>{email}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-navigation-section mt-4">
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-xs-30">
                <div className="single-navigation-section">
                  <h3 className="nav-section-title">PAGES</h3>
                  <ul>
                    <li>
                      {" "}
                      <a href="http://miloyres.herokuapp.com/">Home</a>
                    </li>
                    <li>
                      <a href="http://miloyres.herokuapp.com/category/">
                        Page 1
                      </a>
                    </li>
                    <li>
                      <a href="http://miloyres.herokuapp.com/category/">
                        Page 2
                      </a>
                    </li>
                    <li>
                      <a href="http://miloyres.herokuapp.com/category/">
                        page 3
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-xs-30">
                <div className="single-navigation-section">
                  <h3 className="nav-section-title">MY ACCOUNT</h3>
                  <ul>
                    <li>
                      {" "}
                      <a href="http://miloyres.herokuapp.com/login">
                        My Account
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="http://miloyres.herokuapp.com/cart">
                        Shopping Cart
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-xs-30">
                <div className="single-navigation-section">
                  <h3 className="nav-section-title">TERMS OF SERVICES</h3>
                  <ul>
                    <li>
                      {" "}
                      <a href="http://miloyres.herokuapp.com/privacy">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="http://miloyres.herokuapp.com/terms">
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="http://miloyres.herokuapp.com/faq">FAQ's</a>
                    </li>
                    <li>
                      {" "}
                      <a href="http://miloyres.herokuapp.com/refund">
                        Refund policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="single-navigation-section">
                  <h3 className="nav-section-title">Miloyres Info</h3>
                  <ul>
                    <li>
                      {" "}
                      <a href="http://miloyres.herokuapp.com/halalcert">
                        VIEW VENDOR HALAL CERTIFICATION
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="http://miloyres.herokuapp.com/about">ABOUT US</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br/>
        </div>

        <div className="copyright-section pt-35 pb-35 mt-2">
          <div className="container mb-4">
            <div className="copyright-segment">
              <p className="copyright-text small">
                © 2020 . All Rights Reserved
              </p>
              <p className="copyright-text small">
                {" "}
                Developed by{" "}
                <a href="https://smmiloy.herokuapp.com/">S.M.Miloy</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
}


export default Sidebar;
