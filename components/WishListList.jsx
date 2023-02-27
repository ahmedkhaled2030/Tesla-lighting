import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/WishListList.module.scss";
import WishListCard from "./WishListCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
const WishListList = ({ favProducts }) => {

  return (
    <div className={`innerWidth ${styles.container}`}>
      <h1 className={` primaryText paddings ${styles.title}`}>WishList</h1>

      <div className={styles.wrapper}>
        {favProducts?.map((product) => (
          <WishListCard product={product.product} key={product?._id} />
        ))}
      </div>
    </div>
  );
};

export default WishListList;
