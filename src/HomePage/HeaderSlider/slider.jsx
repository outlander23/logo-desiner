import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import ImgBarger from "./burger_slide.png";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import http from "../../form/httpService";
import {apiRoot} from "../../constants";

SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);

function SliderBox() {
  const [sliders, setSliders] = useState([]);
  const [fiverr, setFiverr] = useState('');

  useEffect(() => {
    const getUrl = async () => {
      let res = await http.get(apiRoot + '/site-data/sliders/');
      setSliders(res.data.data);
      res = await http.get(apiRoot + '/site-data/about_me/');
      setFiverr(res.data.data.fiverr);
    }
    getUrl();
  });

  return (
      <React.Fragment>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{delay: 3000}}
            pagination={{clickable: true}}
        >
          {[...sliders.entries()].map(([index, slider]) =>
              <SwiperSlide key={index}>
                <div className="row" style={{paddingTop: '100px'}}>
                  <div class="col-md-5">
                    <div class="slider_cont">
                      <h3 className="text-dark">{slider.title}</h3>
                      <p>{slider.text}</p>
                      <a class="main_bt_border text-dark bg-primary" href={fiverr}>
                        Order Now
                      </a>
                    </div>
                  </div>

                  <div class="col-md-7">
                    <div class="slider_image full text_align_center">
                      <img class="img-responsive" src={slider.image} alt="#"/>
                    </div>
                  </div>
                </div>
                <br/>
                <br/>
                <br/>
              </SwiperSlide>
          )}

          <br/>
          <br/>
          <br/>
        </Swiper>
      </ React.Fragment>
  );
}

export default SliderBox;
