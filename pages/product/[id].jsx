import styles from "../../styles/Product.module.scss";
import Image from "next/image";
import { useState } from "react";

import {
  Search,
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
  Check,
} from "@mui/icons-material";
import CustomerReview from "@/components/CustomerReview";
import Head from "next/head";
import { Rating } from "@mui/material";
import ProductsList from "@/components/ProductsList";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Product = () => {
  const images = [
    "/img/product1.png",
    "/img/product2.png",
    "/img/product3.png",
  ];

  const SimilarProducts = [
    {
      img: "/img/arrival1.png",
      title: "Aged Brass Frame with Etched Glass Shade Linear Pendant",
      price: "3,767.00",
    },
    {
      img: "/img/arrival2.jpg",
      title:
        "LED Steel Frame Wrapped with Clear Crystal Double Layer Chandelier",
      price: "3,767.00",
    },
    {
      img: "/img/arrival3.png",
      title: "Aged Brass and Black Rod with Adjustable Arch Arm Chandelier",
      price: "3,767.00",
    },
    {
      img: "/img/arrival4.png",
      title: "Gold Leaf Leafy Bohemian Shade Wall Sconce",
      price: "3,767.00",
    },
    {
      img: "/img/arrival5.png",
      title:
        "Handcrafted Wallflower Frame with Opal Matte Glass Globe Pendant / Chandelier",
      price: "3,767.00",
    },
  ];
  const RecentViewedProducts = [
    {
      img: "/img/1.jpg",
      title: "Aged Brass Frame with Etched Glass Shade Linear Pendant",
      price: "3,767.00",
    },
    {
      img: "/img/2.jpg",
      title:
        "LED Steel Frame Wrapped with Clear Crystal Double Layer Chandelier",
      price: "3,767.00",
    },
    {
      img: "/img/3.jpg",
      title: "Aged Brass and Black Rod with Adjustable Arch Arm Chandelier",
      price: "3,767.00",
    },
    {
      img: "/img/4.jpg",
      title: "Gold Leaf Leafy Bohemian Shade Wall Sconce",
      price: "3,767.00",
    },
    {
      img: "/img/5.jpg",
      title:
        "Handcrafted Wallflower Frame with Opal Matte Glass Globe Pendant / Chandelier",
      price: "3,767.00",
    },
  ];
  const Reviews = [
    {
      name: "Laura Carter",
      Verified: true,
      rating: 5,
      reviewTitle: "Vey Nice",
      reviewComment:
        "Hi, I purchased it for my new build… not completed yet… however cannot wait to hang it!…",
    },
    {
      name: "Ivy Ng",
      Verified: false,
      rating: 3,
      reviewTitle: "Love it",
      reviewComment: "It match my place, quality is good, worth it",
    },
    {
      name: "Eladio Carter",
      Verified: true,
      rating: 4,
      reviewTitle: "EXcellent",
      reviewComment:
        "quality is good not completed yet… however cannot wait to hang it!…",
    },
  ];
  const [selectedImg, setSelectedImg] = useState(images[1]);
  const [show, setShow] = useState(false);
  console.log(selectedImg);

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
    <div className={`paddings ${styles.container}`}>
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
          <div className={styles.subImagesContainer}>
            {images.map((image, i) => (
              <div
                className={styles.image}
                onClick={() => setSelectedImg(image)}
              >
                <Image
                  src={image}
                  alt=""
                  width="100%"
                  height="150px"
                  objectFit="contain"
                  className={styles.subImg}
                />
              </div>
            ))}
          </div>

          <div className={styles.mainImgContainer}>
            <Image
              src={selectedImg}
              alt=""
              width="500px"
              height="500px"
              objectFit="contain"
              className={styles.mainImg}
            />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={`primaryText ${styles.title}`}>
            Steel Curved Shade Pendant
          </h1>
          <span className={styles.number}>317220880</span>
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
        <h1 className={`primaryText ${styles.title}`}>Customer Reviews</h1>
        <div className={styles.reviewTop}>
          {Reviews.length >= 1 ? (
            ""
          ) : (
            <div className={styles.reviewTopLeft}>
              <Rating
                name="disabled"
                value="0"
                disabled
                className={styles.rating}
              />
              <span className={styles.reviewText}>
                Be the first to write a review
              </span>
            </div>
          )}

          <div className={styles.reviewTopRight}>
            <button onClick={toggleShow} className={styles.switchButton}>
              {buttonText}
            </button>
          </div>
        </div>

        {show && (
          <div className={styles.review}>
            <div className={styles.reviewComponent}>
            <CustomerReview />
            </div>

            <div className={styles.reviewButtons}>
              <button className={styles.switchButton}>Submit Review</button>
              <button
                onClick={() => setShow(false)}
                className={styles.switchButton}
              >
                Cancel review
              </button>
            </div>
          </div>
        )}

        <div className={styles.reviews}>
          {Reviews.map((review, i) => (
            <div className={styles.review}>
              <Rating
                name="readOnly"
                value={review.rating}
                readOnly
                className={styles.rating}
              />
              <div className={styles.personData}>
                <div className={styles.personImg}>
                  <PersonOutlineOutlined />
                  {review.Verified ? (
                    <div className={styles.check}>
                      <Check className={styles.icon} />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className={styles.personName}>{review.name}</div>
                {review.Verified ? (
                  <div className={styles.verified}>Verified</div>
                ) : (
                  ""
                )}
              </div>
              <span className={styles.reviewTitle}>{review.reviewTitle}</span>
              <span className={styles.reviewComment}>
                {review.reviewComment}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.hr}></div>
      <div className={styles.similarProducts}>
        <ProductsList title="You may also like" products={SimilarProducts} />
      </div>
      <div className={styles.hr}></div>
      <div className={styles.recentlyViewed}>
        <ProductsList title="Recently Viewed" products={RecentViewedProducts} />
      </div>
      <div className={styles.hr}></div>
    </div>
  );
};

export default Product;
