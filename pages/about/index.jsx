import styles from "../../styles/About.module.scss";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import axios from "axios";
const About = ({ pageProps }) => {
  return (
    <div className={`paddings innerWidth flexCenter ${styles.container}`}>
      <div className={`primaryText ${styles.title}`}>About</div>
      <p
        className={styles.paragraph}
        dangerouslySetInnerHTML={{ __html: pageProps.text }}
      ></p>
      <div className={styles.imgContainer}>
        <Image
          src="/img/times.jpg"
          alt=""
          objectFit="cover"
          width={800}
          height={400}
        />
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const token = ctx.req?.cookies.token || "";
  const pageRes = await axios.get(
    `${process.env.PRIVATE_URL}/dashboard/page/about-us`
  );

  return {
    props: {
      pageProps: pageRes.data.data,
    },
  };
};
export default About;
