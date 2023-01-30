import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/NewArrivalList.module.scss";
import NewArrivalCard from "./NewArrivalCard";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const NewArrivalList = () => {
   const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    touchMove: true,

     
  
    
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
    <div className={` innerWidth yPaddings  ${styles.container}`}>
      
      <h1 className={` primaryText ${styles.title}`}>new arrival</h1>
      <h1 className="borderText">VIEW ALL</h1>
     
      <div className={` yPaddings ${styles.wrapper}`}>
      <Slider {...sliderSettings} className={styles.slider} >
        <NewArrivalCard img="/img/arrival1.png" title="Aged Brass Frame with Etched Glass Shade Linear Pendant" price="3,767.00" />
        <NewArrivalCard img="/img/arrival2.jpg" title="LED Steel Frame Wrapped with Clear Crystal Double Layer Chandelier" price="3,767.00" />
        <NewArrivalCard img="/img/arrival3.png" title="Aged Brass and Black Rod with Adjustable Arch Arm Chandelier" price="3,767.00" />
        <NewArrivalCard img="/img/arrival4.png" title="Gold Leaf Leafy Bohemian Shade Wall Sconce" price="3,767.00"  />
          <NewArrivalCard img="/img/arrival5.png" title="Handcrafted Wallflower Frame with Opal Matte Glass Globe Pendant / Chandelier" price="3,767.00" />
          </Slider>
        </div>
    
    </div>
  );
};

export default NewArrivalList;
