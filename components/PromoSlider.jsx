// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./../styles/PromoSlider.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay, Navigation } from "swiper";
const PromoSlider = () => {
  return (
    <div className={styles.container}>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          USE CODE LV08 TO GET 8% OFF OVER $100 │ USE CODE LV10 TO GET 10% OFF
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          Free shipping over $100 │ all price in cad
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          UP TO 30% OFF STORE WIDE | PRICE ARE LOW, DON'T BE SLOW! LIMITED TIME
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PromoSlider;
