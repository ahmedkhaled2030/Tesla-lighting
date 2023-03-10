import Image from "next/image";
import Link from "next/link";
import styles from "./../styles/Times.module.scss";

const Times = ({ timeProps }) => {
  console.log(timeProps, "timeProps");

  return (
    <div className={styles.container} style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_GAID}/${timeProps[0].image.path}')` }}>
      {timeProps && (
        <div className={styles.times}>
          <div dangerouslySetInnerHTML={{ __html: timeProps[0].text }}></div>
 

          <Link href={timeProps[0].url} passHref={true}>
            <button>GET DIRECTIONS</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Times;
