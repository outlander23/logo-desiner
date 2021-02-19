import React, {Component} from 'react';
import "./news.css";
class News extends Component {

    render() {


        return (
       <div className="newsletter-section pb-50  pt-50 ">

        <div class="container">
            

            <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-12 mb-sm-20 mb-xs-20">
        

                    <div class="newsletter-title">
                        <h1>
                            <span className="icon-mail" />
                            Send Newsletter
                        </h1>
                    </div>

          
                </div>

                <div class="col-lg-8 col-md-12 col-sm-12">


                    <div class="subscription-form-wrapper d-flex flex-wrap flex-sm-nowrap">
                        <p class="mb-xs-20">Sign up for our newsletter to receive updates and Exclusive offers</p>
                        <div class="subscription-form">
                            <form action="http://www.gtahalalmeat.com/store-newsletter" method="post" class="mc-form subscribe-form">
                                <input type="hidden" name="_token" value="AsWHSv7wFd22W56EynOh8TLbHmngPrDNYM4GKk7k"/>                                
                                <input type="email" name="email" placeholder="Your email address"/>
                                <button type="submit"> subscribe!</button>
                            </form>

            
                            <div class="mailchimp-alerts">
                                <div class="mailchimp-submitting"></div>
                                <div class="mailchimp-success"></div>
                                <div class="mailchimp-error"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
       </div>

    


        );
    }
};
export default News;