import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./index.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "bootstrap/dist/css/bootstrap.css";

import Picture from "./customer.png";
import Logo from "./client_icon.png";
SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);

function App() {
  return (
    <>
      <div className="  bg-color-white color-white bg-fixed-1">
        <br />
        <br />
        <h2 className="text-center color-3 uppercase">Our Client</h2><br />
        <div className="container" id="testimonialx">
          <div className="swiper">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="Client">
                  <div className="col-md-6 offset-md-3">
                    <div className="Client_box testimonial-container">
                      <img src={Picture} className="client-img" alt="#" />
                      <div className="testimonial-word color-11">
                        <h2>Roock Due</h2>
                        <p className="color-3">
                          {" "}
                          slightly believable. If you are going to use a passage
                          of Lorem Ipsum, you need to be sure there isn’t
                          anything embarrassing hidden in the middle of text.
                        </p>
                      </div>
                      <i>
                        <img src={Logo} alt="#" />
                      </i>
                    </div>
                  </div>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className="Client">
                  <div className="col-md-6 offset-md-3">
                    <div className="Client_box testimonial-container">
                      <img src={Picture} className="client-img" alt="#" />
                      <div className="testimonial-word color-11">
                        <h2>Roock Due</h2>
                        <p className="color-3">
                          {" "}
                          slightly believable. If you are going to use a passage
                          of Lorem Ipsum, you need to be sure there isn’t
                          anything embarrassing hidden in the middle of text.
                        </p>
                      </div>
                      <i>
                        <img src={Logo} alt="#" />
                      </i>
                    </div>
                  </div>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className="Client">
                  <div className="col-md-6 offset-md-3">
                    <div className="Client_box testimonial-container">
                      <img src={Picture} className="client-img" alt="#" />
                      <div className="testimonial-word color-11">
                        <h2>Roock Due</h2>
                        <p className="color-3">
                          {" "}
                          slightly believable. If you are going to use a passage
                          of Lorem Ipsum, you need to be sure there isn’t
                          anything embarrassing hidden in the middle of text.
                        </p>
                      </div>
                      <i>
                        <img src={Logo} alt="#" />
                      </i>
                    </div>
                  </div>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className="Client">
                  <div className="col-md-6 offset-md-3">
                    <div className="Client_box testimonial-container">
                      <img src={Picture} className="client-img" alt="#" />
                      <div className="testimonial-word color-11">
                        <h2>Roock Due</h2>
                        <p className="color-3">
                          {" "}
                          slightly believable. If you are going to use a passage
                          of Lorem Ipsum, you need to be sure there isn’t
                          anything embarrassing hidden in the middle of text.
                        </p>
                      </div>
                      <i>
                        <img src={Logo} alt="#" />
                      </i>
                    </div>
                  </div>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className="Client">
                  <div className="col-md-6 offset-md-3">
                    <div className="Client_box testimonial-container">
                      <img src={Picture} className="client-img" alt="#" />
                      <div className="testimonial-word color-11">
                        <h2>Roock Due</h2>
                        <p className="color-3">
                          {" "}
                          slightly believable. If you are going to use a passage
                          of Lorem Ipsum, you need to be sure there isn’t
                          anything embarrassing hidden in the middle of text.
                        </p>
                      </div>
                      <i>
                        <img src={Logo} alt="#" />
                      </i>
                    </div>
                  </div>
                </div>{" "}
              </SwiperSlide>
              <br /> <br />
            </Swiper>
          </div>
        </div>
      </div>
      <br /><br />
    </>
  );
}

export default App;
