import SwiperCore, { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./index.css"
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "bootstrap/dist/css/bootstrap.css";

import Picture from "./customer.png";
import Logo from "./client_icon.png";
SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);



function App() {

  return ( <
            >
    <div className=" resip_section bg-color-15 color-white" >
      <br /><br />
      <h2 className="text-center ">Our Client</h2>
      <div className="swiper">

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
   
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >



          <SwiperSlide effect="fade">

            <div className="Client">

              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className="Client_box">
                    <img src={Picture} className="client-img" alt="#" />
                    <h3>Roock Due</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>
                    <i><img src={Logo} alt="#" /></i>
                  </div>
                </div>


              </div>
            </div> <
        /SwiperSlide>





  <SwiperSlide effect="fade">

              <div className="Client">

                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    <div className="Client_box">
                      <img src={Picture} className="client-img" alt="#" />
                      <h3>Roock Due</h3>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>
                      <i><img src={Logo} alt="#" /></i>
                    </div>
                  </div>

                </div>
              </div> <
        /SwiperSlide>












  <SwiperSlide effect="fade">

                <div className="Client">

                  <div className="row">
                    <div className="col-md-6 offset-md-3">
                      <div className="Client_box">
                        <img src={Picture} className="client-img" alt="#" />
                        <h3>Roock Due</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>
                        <i><img src={Logo} alt="#" /></i>
                      </div>
                    </div>

                  </div>
                </div> <
        /SwiperSlide>












  <SwiperSlide effect="fade">

                  <div className="Client">

                    <div className="row">
                      <div className="col-md-6 offset-md-3">
                        <div className="Client_box">
                          <img src={Picture} className="client-img" alt="#" />
                          <h3>Roock Due</h3>
                          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>
                          <i><img src={Logo} alt="#" /></i>
                        </div>
                      </div>

                    </div>
                  </div> <
        /SwiperSlide>


















<br /> <br />
                  <
        /Swiper>
        <
        /div>
        </div>
        </>
    );
}

export default App;