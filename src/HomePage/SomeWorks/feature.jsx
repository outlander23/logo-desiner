import React, { Component } from 'react';
import Logo from "./rs5.png";
import SwiperCore, {
    Navigation,
    Pagination,
    EffectFade,
    Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


import "bootstrap/dist/css/bootstrap.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Helper from "./sliderHelp.jsx"
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);


function FeaturesSlides() {

    return (
        <section class="resip_section bg-color-dark">
            <div class="container">

                <div class="col-md-12">
                    <div class="ourheading">
                        <h2>
                            My Services
                    </h2>
                    </div>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation


                    breakpoints={{
                        500:{
                            width:500,
                            slidesPerView:1,
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
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                  

                >
                    <SwiperSlide>
                        <Helper label="Lorem, ipsum dolor." Img={Logo} />

                    </SwiperSlide>

                    <SwiperSlide>
                        <Helper label="Lorem, ipsum dolor." Img={Logo} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Helper label="Lorem, ipsum dolor." Img={Logo} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Helper label="Lorem, ipsum dolor." Img={Logo} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Helper label="Lorem, ipsum dolor." Img={Logo} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Helper label="Lorem, ipsum dolor." Img={Logo} />
                    </SwiperSlide>

 
                </Swiper>
<br /><br /><br />
            </div>



        </section>
    )
}
export default FeaturesSlides;