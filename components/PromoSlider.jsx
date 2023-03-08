// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./../styles/PromoSlider.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay, Navigation } from "swiper";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
const PromoSlider = () => {
  const [token, setToken] = useState(Cookies.get("token"));
  const [promos, setPromos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await setToken(Cookies.get("token"));

      const res = await axios.get(
        `http://18.214.112.247:4000/dashboard/section/promos`,

        {
          headers: {
            Authorization: token,
          },
        }
      );
      const json = await res.data.data;
      setPromos(json);
      console.log(json, "json");
    };
    fetchData();
  }, []);

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
        {promos?.map((promo) => (
          <SwiperSlide className={styles.swiperSlide} key={promo._id}>
            {promo?.text}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PromoSlider;
