import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import Logo from "./roberta-zanlucchi-AttlcHoVot0-unsplash.jpg"
import Logo2 from "./daniel-olah-LHDPiqcOGLI-unsplash.jpg"
import "./css.css"
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  return (

    <div id="gallery-top">
    <br />
      <Swiper
        id="gallery-top-swiper"
        thumbs={{ swiper: thumbsSwiper }}
        tag="section"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
     
      >
        <SwiperSlide>
          <img src={Logo} id="special-image" className=" mt-4 rounded d-block  img-fluid" />

        </SwiperSlide>

        <SwiperSlide>
          <img src={Logo} id="special-image" alt="" className=" mt-4 rounded mx-auto d-block img-responsive  img-fluid" />

        </SwiperSlide>

        <SwiperSlide>
          <img src={Logo2} id="special-image" alt="" className=" mt-4 rounded mx-auto d-block img-responsive  img-fluid" />

        </SwiperSlide>

        <SwiperSlide>
          <img src={Logo} id="special-image" alt="" className=" mt-4 rounded mx-auto d-block img-responsive  img-fluid"  />

        </SwiperSlide>

      </Swiper>

      <Swiper
      className="container"
        id="gallery-thumbs"
        spaceBetween={5}
        slidesPerView={15}
        onSwiper={setThumbsSwiper}
      >
       <SwiperSlide>
          <img src={Logo} alt="" className="gallery-thumbs mt-4 rounded mx-auto d-block img-responsive  img-fluid" />

        </SwiperSlide>

        <SwiperSlide>
          <img src={Logo} alt="" className="gallery-thumbs mt-4 rounded mx-auto d-block img-responsive  img-fluid" />

        </SwiperSlide>

        <SwiperSlide>
          <img src={Logo2} alt="" className="gallery-thumbs mt-4 rounded mx-auto d-block img-responsive  img-fluid" />

        </SwiperSlide>

        <SwiperSlide>
          <img src={Logo} alt="" className="gallery-thumbs mt-4 rounded mx-auto d-block img-responsive  img-fluid" />

        </SwiperSlide>
      </Swiper>

<br />
    </div>
  );
}

export default App;