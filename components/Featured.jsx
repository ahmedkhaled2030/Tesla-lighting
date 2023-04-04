import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/Featured.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Category, Menu, ArrowForwardIos, Light } from "@mui/icons-material";
import Link from "next/link";
const Featured = ({ HeaderSliderProps }) => {
  const images = [
    "/img/slider1.png",
    "/img/slider11.png",
    "/img/slider2.jpg",
    "/img/slider3.jpg",
    "/img/slider4.jpg",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <div className={styles.dropdown}>
          <Light className={styles.icon} />
          <h2 className={`secondaryText `}>Shop By Category</h2>
        </div>
        <div className={styles.categories}>
          <div className={styles.item}>
          <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db454?selectedSubCategory=&selectedModel=&limit=20&page=1`} passHref>
             <h2 className={`secondaryText `}>Lights </h2>
          </Link>
           
            <ArrowForwardIos className={styles.icon} />
            <ul className={styles.menuBar}>
              <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db454?selectedSubCategory=6408ef8abe47ab1b5a1db4af&selectedModel=&limit=20&page=1`} passHref>
              <li>
                <a>CEILINGS</a>
              </li> 
            </Link>
              <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db454?selectedSubCategory=6408ef8abe47ab1b5a1db4b0&selectedModel=&limit=20&page=1`} passHref>
              <li>
                <a>WALL</a>
              </li>
              </Link>
              <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db454?selectedSubCategory=6408ef8abe47ab1b5a1db4b1&selectedModel=&limit=20&page=1`} passHref>
              <li>
                <a>OUTDOOR</a>
              </li>
              </Link>
              <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db454?selectedSubCategory=6408ef8abe47ab1b5a1db4b3&selectedModel=&limit=20&page=1`} passHref>
              <li>
                <a>INDOOR LIGHTING</a>
              </li>
              </Link>
            </ul>
          </div>
          <div className={styles.item}>
            <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db458?selectedSubCategory=&selectedModel=&limit=20&page=1`} passHref>
            <h2 className={`secondaryText `}>Electrical Supplies </h2>
          </Link>

            <ArrowForwardIos className={styles.icon} />
            <ul className={styles.menuBar}>
              <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db458?selectedSubCategory=6408ef89be47ab1b5a1db45e&selectedModel=&limit=20&page=1`} passHref>
              <li>
                <a>FANS</a>
              </li>
              </Link>
              <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db458?selectedSubCategory=6408ef89be47ab1b5a1db45f&selectedModel=&limit=20&page=1`} passHref>
              <li>
                <a>LAMP</a>
              </li>
              </Link>
              <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db458?selectedSubCategory=6408ef89be47ab1b5a1db460&selectedModel=&limit=20&page=1`} passHref>
              <li>
                <a>ACCESSORIES</a>
              </li>
              </Link>
              <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db458?selectedSubCategory=6408ef89be47ab1b5a1db461&selectedModel=&limit=20&page=1`} passHref>
              <li>
                <a>BOXES</a>
              </li>
              </Link>
              <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db458?selectedSubCategory=6408ef89be47ab1b5a1db462&selectedModel=&limit=20&page=1`} passHref>
              <li>
                <a>LED LIGHTS</a>
              </li>
              </Link>
              <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db458?selectedSubCategory=6408ef89be47ab1b5a1db463&selectedModel=&limit=20&page=1`} passHref>
              <li>
                <a>RETRO FIT</a>
              </li>
              </Link>
              <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db458?selectedSubCategory=6408ef89be47ab1b5a1db464&selectedModel=&limit=20&page=1`} passHref>
              <li>
                <a>WIRES</a>
              </li>
              </Link>
              <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db458?selectedSubCategory=6408ef89be47ab1b5a1db465&selectedModel=&limit=20&page=1`} passHref>
              <li>
                <a>WIRING DEVICES</a>
              </li>
            </Link>
              
             
            </ul>
          </div>
          <div className={styles.item}>
          <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db456?selectedSubCategory=6408ef89be47ab1b5a1db45c&selectedModel=&limit=20&page=1`} passHref>
            <h2 className={`secondaryText `}>Decor </h2>
          </Link>
   
            <ArrowForwardIos className={styles.icon} />
            <ul className={styles.menuBar}>
              <Link href={`http://18.214.112.247:3000/collections/6408ef89be47ab1b5a1db456?selectedSubCategory=6408ef89be47ab1b5a1db45c&selectedModel=&limit=20&page=1`} passHref>
              <li>
                <a>Mirrors & Mirror Accessories</a>
              </li>
            </Link>
             
            </ul>
          </div>
        </div>
      </div>
      {HeaderSliderProps && (
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
          {HeaderSliderProps?.map((slide) => (
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                src={`${process.env.NEXT_PUBLIC_GAID}/${slide.image.path}`}
                alt={slide.image._id}
                layout="fill"
                className={styles.img}
              />
              {/* <span className={`primaryText ${styles.text}`}>brand new</span>
          <h1 className={`primaryText ${styles.title}`}>MAGNETIC TRACK SYSTEM</h1>
          <div className={`borderText ${styles.button}`}>MORE INFO</div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Featured;
