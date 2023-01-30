import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/ReviewList.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard";
import { Rating } from "@mui/material";

const ReviewList = () => {
  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // dots: true,
        },
      },
    ],
  };
  return (
    <div className={`innerWidth xPaddings ${styles.container}`}>
      <div>
      <h1 className={` primaryText ${styles.title}`}>
        let customers speak for us
      </h1>
      <Rating name="read-only" value="5" readOnly className={styles.rating} />
      <p className={`secondaryText ${styles.number}`}>from 110 reviews</p>
      </div>
      
     

      <div className={`flexCenter ${styles.wrapper}`}>
        <Slider {...sliderSettings} className={styles.slider}>
          <ReviewCard
            title="New island lights"
            desc="Very nice lights, juste love it!"
            user=" Rosanna Martino "
            img="/img/6.jpg"
            itemName=" LED Steel Straight Streamlined Frame with Acrylic Diffuser Chandelier "
          />
          <ReviewCard
            title="Bathroom renovation"
            desc="Very nice lights, juste love it!"
            user=" Rosanna Martino "
            img="/img/5.jpg"
            itemName=" LED Steel Straight Streamlined Frame with Acrylic Diffuser Chandelier "
          />
          <ReviewCard
            title="Amazing Service"
            desc="Very nice lights, juste love it!"
            user=" Rosanna Martino "
            img="/img/review1.jpg"
            itemName=" LED Steel Straight Streamlined Frame with Acrylic Diffuser Chandelier "
          />
          <ReviewCard
            title="Bathroom renovation"
            desc="Very nice lights, juste love it!"
            user=" Rosanna Martino "
            img="/img/1.jpg"
            itemName=" LED Steel Straight Streamlined Frame with Acrylic Diffuser Chandelier "
          />
          <ReviewCard
            title="Amazing Service"
            desc="Very nice lights, juste love it!"
            user=" Rosanna Martino "
            img="/img/2.jpg"
            itemName=" LED Steel Straight Streamlined Frame with Acrylic Diffuser Chandelier "
          />
          <ReviewCard
            title="Bathroom renovation"
            desc="Very nice lights, juste love it!"
            user=" Rosanna Martino "
            img="/img/3.jpg"
            itemName=" LED Steel Straight Streamlined Frame with Acrylic Diffuser Chandelier "
          />
          <ReviewCard
            title="Amazing Service"
            desc="Very nice lights, juste love it!"
            user=" Rosanna Martino "
            img="/img/4.jpg"
            itemName=" LED Steel Straight Streamlined Frame with Acrylic Diffuser Chandelier "
          />
        </Slider>
      </div>
    </div>
  );
};

export default ReviewList;
