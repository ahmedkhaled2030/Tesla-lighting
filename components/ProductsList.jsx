import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/ProductsList.module.scss";
import ProductsCard from "./ProductsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsList = ({ title, products, type }) => {
  // console.log(products);
  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 3,
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
    <div className={styles.container}>
      <h1 className={` primaryText ${styles.title}`}>{title}</h1>
      {type !== "collections" && <h1 className="borderText">VIEW ALL</h1>}

      <div className={styles.wrapper}>
        {type == "collections" ? (
          <div className={styles.wrapper}>
            {products?.map((product, id) => (
              <ProductsCard
                img={product.img}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        ) : (
          <div className={styles.wrapper}>
            <Slider {...sliderSettings} className={styles.slider}>
              {products?.map((product, i) => (
                <ProductsCard
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  key={i}
                />
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
