import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/ProductsList.module.scss";
import ProductsCard from "./ProductsCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
const ProductsList = ({ title, products, type }) => {
  console.log(type);

  return (
    <div className={`innerWidth ${styles.container}`}>
      <h1 className={` primaryText ${styles.title}`}>{title}</h1>
      {type !== ("collections" || "wishlist") && (
        <h1 className="borderText">VIEW ALL</h1>
      )}

      {type === ("collections" || "wishlist") ? (
        <div className={styles.wrapper}>
          {products?.map((product, id) => (
            <ProductsCard
              img={product.img}
              title={product.title}
              price={product.price}
              type={type}
            />
          ))}
        </div>
      ) : (
        <>
          <Swiper
            scrollbar={{
              hide: false,
              }}
              freeMode={true}
              breakpoints={{
                300: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            {products?.map((product, i) => (
              <SwiperSlide className={styles.swiperSlide}>
                <ProductsCard
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  key={i}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default ProductsList;


