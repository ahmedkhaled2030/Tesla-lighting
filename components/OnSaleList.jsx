import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/OnSaleList.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import OnSaleCard from "./OnSaleCard";

const OnSaleList = () => {
  const list = [
    {
      img: "/img/sale1.png",
      title: "Steel Frame with Clear Glass Shade Pendant",
      price: "3,767.00",
      sale: "129.00",
    },
    {
      img: "/img/sale5.jpg",
      title: "Steel Curved Shade Pendant",
      price: "3,767.00",
      sale: "129.00",
    },
    {
      img: "/img/sale2.png",
      title: "Steel with White Glass Globe Linear Pendant",
      price: "3,767.00",
      sale: "129.00",
    },
    {
      img: "/img/sale3.jpg",
      title: "Steel with Cylindrical Ceramic Shade Pendant",
      price: "3,767.00",
      sale: "129.00",
    },
    {
      img: "/img/sale4.png",
      title: "LED Bloom Branches 10 Lights Pendant",
      price: "3,767.00",
      sale: "129.00",
    },
  ];
  return (
    <div className={` innerWidth ${styles.container}`}>
      <h1 className={` primaryText ${styles.title}`}>On sale items</h1>
      <h1 className="borderText">VIEW ALL</h1>
 
        <Swiper
          scrollbar={{
            hide: false,
          }}
          freeMode={true}
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {list?.map((item, i) => (
            <SwiperSlide className={styles.swiperSlide}>
              <OnSaleCard
                img={item.img}
                title={item.title}
                price={item.price}
                sale={item.sale}
                key={i}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

  );
};

export default OnSaleList;

{
  /* <OnSaleCard
              img={item.img}
              title={item.title}
              price={item.price}
              sale={item.sale}
              key={i}
            /> */
}
