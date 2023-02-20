import Image from "next/image";
import Link from "next/link";
import styles from "./../styles/Times.module.scss";

const Times = () => {
  return (
    <div className={styles.container}>
          <div className={styles.times}>
              <h1 className="primaryText">our retail store</h1>
              <p >7991 Alderbridge Way Unit 100</p>
              <p >Richmond, BC V6X 2A4</p>
              <p className={styles.dates}>
                  Mon - Fri, 10:00am - 7:00pm
                  <br />
                  Saturday, 11:00am - 7:00pm
                  <br />
                  Sunday, 11:00am - 6:00pm
        </p>
        <Link href="https://goo.gl/maps/89LnzY4QbNtHzuQS7" passHref={true}>
        <button>GET DIRECTIONS</button>
  </Link>
          
        </div>
    </div>
  );
};

export default Times;
