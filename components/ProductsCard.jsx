import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/ProductsCard.module.scss";
import { Close, FavoriteBorderOutlined } from "@mui/icons-material";
import Link from "next/link";

const ProductsCard = ({ id, img, title, price, type }) => {
  console.log(img,'img111')
  return (
    <div className={styles.container}>
      <Link href={`/product/${id}`} passHref>
        <div>
          <Image
            src={img}
            alt={title}
            width="275"
            height="275"
            objectFit="contain"
          />

          <h1 className={`thirdText ${styles.title}`}>{title}</h1>

          <div className={styles.iconWrapper}>
            <FavoriteBorderOutlined />
          </div>

          <span className="secondaryText">${price}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductsCard;
