import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/StoreInfo.module.scss";

const StoreInfo = ({ StoreInfo }) => {
 console.log(StoreInfo,'StoreInfo')

  return (
    <div className={` innerWidth  ${styles.container}`}>
      {StoreInfo && StoreInfo.map((item) => (
        <div className={styles.section}>
          <Image
            src={`${process.env.NEXT_PUBLIC_GAID}/${item?.image?.path}`}
            width="600"
            height="400"
            alt=""
            // objectFit="contain"
          />
          <h3 className={`primaryText ${styles.title}`}>{item.title}</h3>
          <p className={`secondaryText ${styles.desc}`}>{item.text}</p>
          <h1 className="borderText">MORE INFO</h1>
        </div>
      ))}
    </div>
  );
};

export default StoreInfo;
