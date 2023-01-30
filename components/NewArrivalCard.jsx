import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/NewArrivalCard.module.scss";
import { FavoriteBorderOutlined } from "@mui/icons-material";

const NewArrivalCard = ({ img, title , price }) => {
  return (
    <div className={styles.container}>
      <Image src={img} alt={title} width="275" height="275" objectFit="contain" />
      <h1 className={`thirdText ${styles.title}`}>{title}</h1>

      <div className={styles.iconWrapper}>
        <FavoriteBorderOutlined />
      </div>

      <span className="secondaryText">${ price}</span>
    </div>
  );
};

export default NewArrivalCard;
