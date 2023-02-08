import styles from "../../styles/About.module.scss";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
const About = () => {
  return (
    <div className={`paddings innerWidth flexCenter ${styles.container}`}>
    <Head>
      <title>product</title>
      <meta name="description" content="Tesla Lighting" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Tenor+Sans&display=swap"
        rel="stylesheet"
              />
              
          </Head>
          <div className={`primaryText ${styles.title}`}>About</div>
          <p className={styles.paragraph}>LV Lighting wants to be your trusted, number one destination for all lighting product and service needs. Located at 7991 Alderbridge Way in Richmond, British Columbia, we have been serving our community and our clients with passion, and dedication for over 30 years now.　</p>
          <div className={styles.imgContainer}>
          <Image src="/img/times.jpg" alt="" objectFit="cover"  width={800} height={400} />

          </div>
      </div>
  )
}

export default About