import Image from "next/image";
import styles from "./../styles/Help.module.scss";
const Help = () => {
  return (
    <div className={` innerWidth  ${styles.container}`}>
      <div className={styles.item}>
        <Image
          src="/img/help1.png"
          alt=""
          width="120"
          height="120"
          objectFit="contain"
          className={styles.img}
        />
        <div className={`borderText ${styles.text}`}>
          Need help with the install?
        </div>
      </div>
      <div className={styles.item}>
        <Image
          src="/img/help2.png"
          alt=""
          width="120"
          height="120"
          objectFit="contain"
        />
        <div className={`borderText ${styles.text}`}>
          Questions about shipping & Return?
        </div>
      </div>
      <div className={styles.item}>
        <Image
          src="/img/help3.png"
          alt=""
          width="120"
          height="120"
          objectFit="contain"
        />
        <div className={`borderText ${styles.text}`}>
          Not Sure Which Light You Should Get?
        </div>
      </div>
    </div>
  );
};

export default Help;
