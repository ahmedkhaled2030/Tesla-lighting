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
import Link from "next/link";
const ProductsList = ({ title, products, type }) => {
console.log(products ,'products')

  return (
    <div className={`innerWidth ${styles.container}`}>
      <h1 className={` primaryText ${styles.title}`}>{title}</h1>
      {type !== ("collections" ) && (
        <h1 className="borderText">VIEW ALL</h1>
      )}

   
      {type == "collections"  ? (
        <div className={styles.wrapper}>
          {products?.map((product) => (
            <Link href={`/product/${product?._id}`} passHref className="link"> 
            <ProductsCard
              img={`${process.env.NEXT_PUBLIC_GAID}product?.cover`} 
              title={product?.title}
              price={product?.price}
              type={type}
              key={product?._id}
              id={product?._id}
              />
              </Link>
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
            className={styles.swiper}
          >
            {products?.map((product, i) => (
              <SwiperSlide className={styles.swiperSlide}>
                <ProductsCard
                  img={`${process.env.NEXT_PUBLIC_GAID}${product?.img}`}
                  title={product?.title}
                  price={product?.price}
                  key={i}
                  id={product?._id}
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
