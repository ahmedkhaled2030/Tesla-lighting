import styles from "../../styles/Product.module.scss";
import Image from "next/image";
import { useState } from "react";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import CustomerReview from "@/components/CustomerReview";
import Head from "next/head";
import { Rating } from "@mui/material";
const Product = () => {
  const images = [
    "/img/product1.png",
    "/img/product2.png",
    "/img/product3.png",
  ];
  const [selectedImg, setSelectedImg] = useState(images[1]);
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  var buttonText = show ? "Cancel review" : "Write a review";

  const clickHandler = (i) => {
    console.log(i);
  };

  const desc = `SKU: 1233W70-36 
  Finish: Matte White
  Width: 70
  Height: 36
  Extension: 2
  Collection: Abigail
  Bulb 1 max wattage: 28
  Bulb 1 Type: LED
  Bulb 1 base: LED
  Lumens: 1456
  CRI: 80
  Shipping Method: LTL
  Color Temperature: 3000k to 6000k
  Voltage: 120
  Manufacturer Warranty: Three years warranty against manufacturers defect.`;

  return (
    <div className={styles.container}>
      <Head>
        <title>Tesla Lighting</title>
        <meta name="description" content="Tesla Lighting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Tenor+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.subImages}>
            <Image
              src="/img/product1.png"
              alt=""
              width="100"
              height="100"
              objectFit="contain"
              className={styles.subImg}
            />
            <Image
              src="/img/product2.png"
              alt=""
              width="100%"
              height="150px"
              objectFit="contain"
              className={styles.subImg}
            />
          </div>

          <div className={styles.mainImgContainer}>
            <Image
              src="/img/product3.png"
              alt=""
              width="100%"
              height="800px"
              objectFit="contain"
              className={styles.mainImg}
            />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={`primaryText ${styles.title}`}>
            Steel Curved Shade Pendant
          </h1>
          <span className={styles.number}>0317220880</span>
          <div className={styles.prices}>
            <span className={styles.price}>$3,265.00</span>
            <span className={styles.price}>$2,972.00</span>
            <span className={styles.price}>Save $293.00</span>
          </div>
          <span className={styles.shipping}>
            Shipping calculated at checkout.
          </span>
          <button className={styles.buttonWish}>
            <FavoriteBorderOutlined />
            Add to Wishlist
          </button>
          <button className={styles.buttonCart}>ADD TO CART</button>
          <h3 className={`primaryText ${styles.descHeading}`}>DESCRIPTION</h3>
          <span className={styles.desc}>{desc}</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <h1 className={`primaryText ${styles.title}`}>Customer Review</h1>
        <div className={styles.top}>
          <div className={styles.leftTop}>
            <Rating
              name="disabled"
              value="0"
              disabled
              className={styles.rating}
            />
            <div className={styles.line}></div>
            <span className={styles.reviewText}>
              Be the first to write a review
            </span>
          </div>
          <div className={styles.rightTop}>
            <button onClick={toggleShow} className={styles.switchButton}>
              {buttonText}
            </button>
          </div>
        </div>
        <div className={styles.hr}></div>
        {show && (
          <div className={styles.review}>
            <CustomerReview />
            <div className={styles.reviewButtons}>
              <button
                onClick={() => setShow(false)}
                className={styles.switchButton}
              >
                Cancel review
              </button>
              <button className={styles.switchButton}>Submit Review</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
