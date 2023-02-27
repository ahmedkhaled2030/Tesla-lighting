import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/StoreInfo.module.scss";

const StoreInfo = ({ StoreInfo }) => {
  // console.log(StoreInfo,'StoreInfo')
  const sections = [
    {
      img: "/img/storeInfo1.jpg",
      title: "new magnetic track system",
      desc: "Sleek, Slim Line, Latest LED technology. Thanks to the convenient and versatile structure, the systems are used in various sapces from commercial to residential settings.",
    },
    {
      img: "/img/storeInfo1.jpg",
      title: "free lighting design",
      desc: "Now available in Vancouver areas!",
    },
  ];
  return (
    <div className={` innerWidth  ${styles.container}`}>

      {StoreInfo.map((item) => (
        <div className={styles.section}>
          <Image
            src={item.image.path}
            width="600"
            height="400"
            alt=""
            // objectFit="contain"
          />
          <h3 className={`primaryText ${styles.title}`}>
           {item.title}
          </h3>
          <p className={`secondaryText ${styles.desc}`}>
          {item.text}
          </p>
          <h1 className="borderText">MORE INFO</h1>
        </div>
))}

      </div>


  );
};

export default StoreInfo;
