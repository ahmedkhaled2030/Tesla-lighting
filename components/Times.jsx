import Image from "next/image";
import Link from "next/link";
import styles from "./../styles/Times.module.scss";

const Times = ({ timeProps }) => {
  console.log(timeProps, "timeProps");

  return (
    <div className={styles.container}>
      {timeProps && (
        <div className={styles.times}>
          <div dangerouslySetInnerHTML={{ __html: timeProps[0].text }}></div>
          {/* <Link href={`${timeProps.url}`} >  */}
          {/* <Link href={`${timeProps.url}`} rel="noopener noreferrer" target="_blank">  */}

          <Link href={timeProps[0].url} passHref={true}>
            <button>GET DIRECTIONS</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Times;
