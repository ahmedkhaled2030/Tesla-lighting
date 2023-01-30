import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/OnSaleCard.module.scss";
import { FavoriteBorderOutlined } from "@mui/icons-material";

const OnSaleCard = ({ title, img, price, sale }) => {

    return (
        <div className={styles.container}>
          <Image src={img} alt={title} width="275" height="275" objectFit="contain" />
        <h1 className={`thirdText ${styles.title}`}>{title}</h1>
        
    
          <div className={styles.iconWrapper}>
            <FavoriteBorderOutlined />
          </div>
        <div className={styles.priceWrapper}>
        <span className={styles.total}>$2.575.00</span>
          <span className={styles.price}>from ${price}</span>
        <span className={styles.sale}>Save ${sale}</span>
        </div>
        <span className={styles.black}>Sale</span>
  
    

        </div>
      );
}

export default OnSaleCard