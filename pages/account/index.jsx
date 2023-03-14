import styles from "../../styles/Account.module.scss";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
const Account = () => {
  return (
    <div className={`paddings innerWidth ${styles.container}`}>
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

      <div className={`primaryText ${styles.title}`}>MY ACCOUNT</div>
      {/* <Link href={`/dashboard/products`} passHref>
      <div className={`borderText  ${styles.logout}`}>Dashboard</div>
      </Link> */}

          
          <div className={styles.wrapper}>
              <div className={styles.orders}>
                  <div className={`primaryText ${styles.title}`}>order history</div>
                  <p className={styles.text}>You haven't placed any orders yet.</p>
              </div>
              <div className={styles.details}>
                  <div className={`primaryText ${styles.title}`}>account details</div>
                  <p className={styles.text}>You haven't placed any address yet.</p>
                  <p className={styles.text}>View addresses</p>
              </div>
          </div>
      
      </div>
  )
}

export default Account