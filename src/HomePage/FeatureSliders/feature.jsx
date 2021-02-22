import React, {useEffect, useState} from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import "bootstrap/dist/css/bootstrap.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import http from "../../form/httpService";
import {apiRoot} from "../../constants";

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

function FeaturesSlides() {
  const [bestWorks, setBestWorks] = useState([]);

  useEffect(() => {
    const getUrl = async () => {
      let res = await http.get(apiRoot + '/site-data/best_works/');
      setBestWorks(res.data.data);
    }
    getUrl();
  });

  const works = [...bestWorks.entries()];

  return (
      <section className="resip_section">
        <div className="container">
          <div className="col-md-12">
            <h2>My Some of my popular work</h2>
          </div>
          <Swiper
              spaceBetween={50}
              slidesPerView={3}
              navigation
              breakpoints={{
                100: {
                  width: 100,
                  slidesPerView: 1,
                },
                500: {
                  width: 500,
                  slidesPerView: 1,
                },
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
              autoplay={{delay: 3000}}
              pagination={{clickable: true}}
          >

            {works.map(([index, work]) =>
                <SwiperSlide key={index}>
                  <div className="slider-box bg-color-3">
                    <div className="menu-box">
                      <div className="img-box">
                        <img alt={work.label} src={work.image} className="img-responsive img-small" width="100px"/>
                      </div>
                      <div className="product_blog_cont">
                        <h3>{work.label}</h3>
                        <div className="stars" id="stars">
                          {[...Array(work.rating).keys()].map(index => <span key={index} className="icon-star"/>)}
                        </div>
                        <h3>rating : 5 ot of 5</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
            )}
          </Swiper>
          <br/>
          <br/>
          <br/>
        </div>
      </section>
  );
}

export default FeaturesSlides;
