import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/Featured.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const Featured = () => {
  const images = [
    "/img/slider1.png",
    "/img/slider11.png",
    "/img/slider2.jpg",
    "/img/slider3.jpg",
    "/img/slider4.jpg",
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
            src="/img/slider1.png"
            alt=""
            layout="fill"
            className={styles.img}
          />
          {/* <span className={`primaryText ${styles.text}`}>brand new</span>
          <h1 className={`primaryText ${styles.title}`}>MAGNETIC TRACK SYSTEM</h1>
          <div className={`borderText ${styles.button}`}>MORE INFO</div> */}
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src="/img/slider11.png"
            alt=""
            layout="fill"
            className={styles.img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src="/img/slider3.png"
            alt=""
            layout="fill"
            className={styles.img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src="/img/slider4.jpg"
            alt=""
            layout="fill"
            className={styles.img}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Featured;
