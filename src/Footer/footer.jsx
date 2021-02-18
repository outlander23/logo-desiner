import React, {Component} from 'react';
import "./footer.css";
import Register from "../form/registerFrom";







class Sidebar extends Component {

    render() {


        return (

<footer>


    <div className=" bg-color-3 color-white ">
    <br /> 
        <div className="container ">
            
<div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <div className="section-heading text-center">
                            <h2>Get <strong>In Touch</strong></h2>
                        </div>
                    </div>
    
                    <div className="col-md-7 mb-5 mb-md-0">
                        <form action="" className="site-form">
                            <Register />
                        </form>
                    </div>
                    <div className="col-md-5 pl-md-5">
                        <h3 className="mb-5">Our Contact Details</h3>
                        <ul className="site-contact-details text-left">
                            <li>
                                <h4><span className="text-uppercase color">Email</span></h4>
                                smmiloyrahman@gmail.com
                            </li>
              
                 
                            <li>
                                <h4><span className="text-uppercase ">Address</span></h4>
                               
                                Talukdar Mas<br></br>
                                Park-mor ,Rangpur city  <br></br>
                                
                                Rangpur, Bangladesh
                              
                            </li>
                            <li>
                                <h4><span className="text-uppercase ">Phone</span></h4>
                               
                                 +1234567899
                              
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           
           </div>
<br />
    </div>
   

    <div className="footer-navigation-section mt-4">
        <div className="container">
        <br />
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-xs-30">
                   

                    <div className="single-navigation-section">
                        <h3 className="nav-section-title">PAGES</h3>
                        <ul>
                            <li> <a href="http://miloyres.herokuapp.com/">Home</a></li>
                          <li><a href="http://miloyres.herokuapp.com/category/">Food 1</a></li>
                          <li><a href="http://miloyres.herokuapp.com/category/">Food 2</a></li>
                          <li><a href="http://miloyres.herokuapp.com/category/">Food 3</a></li>
                                                    </ul>
                    </div>

                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-xs-30">
       

                    <div className="single-navigation-section">
                        <h3 className="nav-section-title">MY ACCOUNT</h3>
                        <ul>
                                                        <li> <a href="http://miloyres.herokuapp.com/login">My Account</a></li>
                                                        <li> <a href="http://miloyres.herokuapp.com/cart">Shopping Cart</a></li>
                        </ul>
                    </div>

                    
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-xs-30">
               

                    <div className="single-navigation-section">
                        <h3 className="nav-section-title">TERMS OF SERVICES</h3>
                        <ul>
                            <li> <a href="http://miloyres.herokuapp.com/privacy">Privacy Policy</a></li>
                            <li> <a href="http://miloyres.herokuapp.com/terms">Terms and Conditions</a></li>
                            <li> <a href="http://miloyres.herokuapp.com/faq">FAQ's</a></li>
                            <li> <a href="http://miloyres.herokuapp.com/refund">Refund policy</a></li>
                        </ul>
                    </div>

                   
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                   

                    <div className="single-navigation-section">
                        <h3 className="nav-section-title">Miloyres Info</h3>
                        <ul>
                            <li> <a href="http://miloyres.herokuapp.com/halalcert">VIEW VENDOR HALAL CERTIFICATION</a></li>
                            <li> <a href="http://miloyres.herokuapp.com/about">ABOUT US</a></li>
                        </ul>
                    </div>

              
                </div>
            </div>
        </div>
        <br />
    </div>



    

    <div className="copyright-section pt-35 pb-35 mt-2">
        <div className="container mb-4">
         
                
               

                    <div className="copyright-segment">
                        <p className="copyright-text small">© 2020 . All Rights Reserved</p>
                        <p className="copyright-text small"> Developed by <a href="https://smmiloy.herokuapp.com/">S.M.Miloy</a></p>
                    </div>

                    


        </div>
    </div>


</footer>
)};
}
export default Sidebar;
