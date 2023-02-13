import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/ProductsCard.module.scss";
import { Close, FavoriteBorderOutlined } from "@mui/icons-material";

const ProductsCard = ({ title, price, type }) => {
// console.log(type,"type")
  return (
    <div className={styles.container}>
      {/* <Image
        // src={img}
        alt={title}
        width="275"
        height="275"
        objectFit="contain"
      /> */}
      <h1 className={`thirdText ${styles.title}`}>{title}</h1>

      <div className={styles.iconWrapper}>
        <FavoriteBorderOutlined />
      </div>
      
      {type == "wishlist" ? (
        <div className={styles.closeIcon}>
          <Close />
        </div>
      ) : null}

      <span className="secondaryText">${price}</span>
      {type == "wishlist" ? (
        <button className={` button ${styles.wishlist} `}>MOVE TO CART</button>
      ) : null}
    </div>
  );
};

export default ProductsCard;
