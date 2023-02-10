import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/CompanySlider.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const CompanySlider = () => {
  const images = [
    "/img/LOGO01.png",
    "/img/LOGO02.png",
    "/img/LOGO03.png",
    "/img/LOGO04.png",
    "/img/LOGO05.png",
    "/img/LOGO08.png",
    "/img/LOGO09.png",
    "/img/LOGO010.png",
  ];

  return (
    <>
      <Swiper
        className={styles.swiper}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, EffectFade]}
        loop={true}
        effect={"fade"}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src="/img/LOGO1.png"
            alt=""
            layout="fill"
            className={styles.img}
          />
         
         
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
             src="/img/LOGO2.png"
            alt=""
            layout="fill"
            className={styles.img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
             src="/img/LOGO3.png"
            alt=""
            layout="fill"
            className={styles.img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
             src="/img/LOGO4.png"
            alt=""
            layout="fill"
            className={styles.img}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CompanySlider;
