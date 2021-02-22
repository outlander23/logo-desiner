import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import "./index.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "bootstrap/dist/css/bootstrap.css";

import Logo from "./client_icon.png";
import http from "../../form/httpService";
import {apiRoot} from "../../constants";

SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getUrl = async () => {
      let res = await http.get(apiRoot + '/site-data/reviews/');
      setReviews(res.data.data);
    }
    getUrl();
  });

  return (
      <React.Fragment>
        <div className="  bg-color-white color-white bg-fixed-1">
          <br/>
          <br/>
          <h2 className="text-center color-3 uppercase">Our Client</h2><br/>
          <div className="container" id="testimonialx">
            <div className="swiper">
              <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  autoplay={{delay: 3000}}
                  pagination={{clickable: true}}
              >

                {[...reviews.entries()].map(([index, review]) =>
                    <SwiperSlide key={index}>
                      <div className="Client">
                        <div className="col-md-6 offset-md-3">
                          <div className="Client_box testimonial-container">
                            <img src={review.image} height="10px" className="client-img" alt={review.name} />
                            <div className="testimonial-word color-11">
                              <h2>{review.name}</h2>
                              <p className="color-3">{review.message}</p>
                            </div>
                            <i>
                              <img src={Logo} alt="#"/>
                            </i>
                          </div>
                        </div>
                      </div>
                      {" "}
                    </SwiperSlide>
                )}
                <br/> <br/>
              </Swiper>
            </div>
          </div>
        </div>
        <br/><br/>
      </React.Fragment>
  );
}

export default App;
