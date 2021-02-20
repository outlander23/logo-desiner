import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgBarger from "./burger_slide.png";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);
function SliderBox() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="row">
            <div class="col-md-5">
              <div class="slider_cont">
                <h3>
                  Lorem ipsum dolor sit am
                  <br />
                  elit. Veniam, velit.
                </h3>
                /h3>
                <p>
                  Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
                  Unde velit quidem, odio pariatur tempore aut, ratione. Officia
                  eum accusantium minima fugit eveniet, itaque rem vero!
                </p>
                <a class="main_bt_border" href="#">
                  Order Now
                </a>
              </div>
            </div>

            <div class="col-md-7">
              <div class="slider_image full text_align_center">
                <img class="img-responsive" src={ImgBarger} alt="#" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </SwiperSlide>

        <SwiperSlide>
          <div className="row">
            <div class="col-md-5">
              <div class="slider_cont">
                <h3>
                  Lorem ipsum dolor sit am
                  <br />
                  elit. Veniam, velit.
                </h3>
                /h3>
                <p>
                  Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
                  Unde velit quidem, odio pariatur tempore aut, ratione. Officia
                  eum accusantium minima fugit eveniet, itaque rem vero!
                </p>
                <a class="main_bt_border" href="#">
                  Order Now
                </a>
              </div>
            </div>

            <div class="col-md-7">
              <div class="slider_image full text_align_center">
                <img class="img-responsive" src={ImgBarger} alt="#" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </SwiperSlide>

        <SwiperSlide>
          <div className="row">
            <div class="col-md-5">
              <div class="slider_cont">
                <h3>
                  Lorem ipsum dolor sit am
                  <br />
                  elit. Veniam, velit.
                </h3>
                /h3>
                <p>
                  Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
                  Unde velit quidem, odio pariatur tempore aut, ratione. Officia
                  eum accusantium minima fugit eveniet, itaque rem vero!
                </p>
                <a class="main_bt_border" href="#">
                  Order Now
                </a>
              </div>
            </div>

            <div class="col-md-7">
              <div class="slider_image full text_align_center">
                <img class="img-responsive" src={ImgBarger} alt="#" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </SwiperSlide>

        <SwiperSlide>
          <div className="row">
            <div class="col-md-5">
              <div class="slider_cont">
                <h3>
                  Lorem ipsum dolor sit am
                  <br />
                  elit. Veniam, velit.
                </h3>
                /h3>
                <p>
                  Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
                  Unde velit quidem, odio pariatur tempore aut, ratione. Officia
                  eum accusantium minima fugit eveniet, itaque rem vero!
                </p>
                <a class="main_bt_border" href="#">
                  Order Now
                </a>
              </div>
            </div>

            <div class="col-md-7">
              <div class="slider_image full text_align_center">
                <img class="img-responsive" src={ImgBarger} alt="#" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <br />
        <br />
        <br />
      </Swiper>
    </>
  );
}
export default SliderBox;
