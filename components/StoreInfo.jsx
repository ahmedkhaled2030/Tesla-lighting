import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/StoreInfo.module.scss";

const StoreInfo = () => {
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
    <div className={styles.container}>
      {/* {sections.map((section, i) => (  */}
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <Image src="/img/storeInfo1.jpg" width={645} height={450} alt="" objectFit="contain" />
          <h3 className={`primaryText ${styles.title}`}>new magnetic track system</h3>
                  <p className={`secondaryText ${styles.desc}`}>Sleek, Slim Line, Latest LED technology. Thanks to the convenient and versatile structure, the systems are used in various sapces from commercial to residential settings.</p>
                  <h1 className="borderText">MORE INFO</h1>
        </div>
        <div className={styles.section}>
          <Image src="/img/storeInfo1.jpg" alt="" width={645} height={450} objectFit="contain" />
          <h3 className={`primaryText ${styles.title}`}>new magnetic track system</h3>
                  <p className={`secondaryText ${styles.desc}`}>Sleek, Slim Line, Latest LED technology. Thanks to the convenient and versatile structure, the systems are used in various sapces from commercial to residential settings.</p>
                  <h1 className="borderText">MORE INFO</h1>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default StoreInfo;
