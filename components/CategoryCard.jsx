import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/CategoryCard.module.scss";
const CategoryCard = ({ img, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <Image src={img} alt="" width="275" height="275" objectFit="contain" />
      <h1 className={`secondaryText ${styles.title}`}>{title}</h1>
      </div>

    </div>
  );
};

export default CategoryCard;

//please give me the user and password for the excising database
