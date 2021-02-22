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

      <div className="container" id="testimonial">

          <h2 className="testimonial-heading">What Clients Say About Me</h2>


              <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  loop={{loop:true}}
                  autoplay={{delay: 3000}}
                  pagination={{clickable: true}}
              >

                {[...reviews.entries()].map(([index, review]) =>
                    <SwiperSlide key={index}>
                      <div class="box-review" >
    <div class="item">
        <div class="testimonial-single shadow-sm gray-light-bg rounded p-4">
            <blockquote>
                {review.message}
            </blockquote>
            <div class="client-img d-flex align-items-center justify-content-between pt-4">
                <div class="d-flex align-items-center">
                    <img  alt={review.name} class="img-fluid rounded-circle shadow-sm mr-3" src={review.image} width="50"/>

                        <div class="client-info">
                            <h5 class="mb-0">
                                {review.name}
                            </h5>
                        </div>
                    
                </div>
                <div class="client-ratting">
                    <ul class="list-inline client-ratting-list">
                        <li class="list-inline-item">
                            <span class="icon-star ratting-color">
                            </span>
                        </li>
                        <li class="list-inline-item">
                            <span class="icon-star ratting-color">
                            </span>
                        </li>
                        <li class="list-inline-item">
                            <span class="icon-star ratting-color">
                            </span>
                        </li>
                        <li class="list-inline-item">
                            <span class="icon-star ratting-color">
                            </span>
                        </li>
                        <li class="list-inline-item">
                            <span class="icon-star ratting-color">
                            </span>
                        </li>
                    </ul>
                    <span class="font-weight-bold">
                        5.0 
                        <small class="font-weight-lighter">
                             Out of 5
                        </small>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
                      {" "}
                    </SwiperSlide>
                )}
                <br/> <br/>
              </Swiper>

      </div>
      </React.Fragment>
  );
}

export default App;
