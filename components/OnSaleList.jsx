import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/OnSaleList.module.scss";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OnSaleCard from "./OnSaleCard";


const OnSaleList = () => {
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
        <div className={` innerWidth   ${styles.container}`}>
          <h1 className={` primaryText ${styles.title}`}>On sale items</h1>
         
          <div className={` yPaddings ${styles.wrapper}`}>
          <Slider {...sliderSettings} className={styles.slider} >
            <OnSaleCard img="/img/sale1.png" title="Steel Frame with Clear Glass Shade Pendant" price="3,767.00" sale="129.00" />
            <OnSaleCard img="/img/sale2.png" title="Steel Curved Shade Pendant" price="3,767.00" sale="239.00"  />
            <OnSaleCard img="/img/sale3.jpg" title="Steel with White Glass Globe Linear Pendant" price="3,767.00" sale="141.00"  />
            <OnSaleCard img="/img/sale4.png" title="Steel with Cylindrical Ceramic Shade Pendant" price="3,767.00" sale="133.00"   />
              <OnSaleCard img="/img/sale5.jpg" title="LED Bloom Branches 10 Lights Pendant" price="3,767.00" sale="508.00"  />
              </Slider>
            </div>
        
        </div>
      );
}

export default OnSaleList