import styles from "../../styles/Login.module.scss";

import Image from "next/image";
import { useState } from "react";

import Head from "next/head";

const Login = () => {
  return (
    <div className={` flexCenter paddings ${styles.container}`}>
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
      <h1 className={` primaryText ${styles.title}`}>Login</h1>
      <form className={styles.form}>
        <div className={styles.signPart}>
          <span className={`secondaryText ${styles.subHeading}`}>EMAIL</span>
          <input type="text" className={styles.signInput} />
        </div>
        <div className={styles.signPart}>
          <div className={styles.password}>
            <span className={`secondaryText ${styles.subHeading}`}>
              PASSWORD
            </span>
            <span className={`${styles.subHeading} ${styles.forgot} `}>
              Forgot password?
            </span>
          </div>

          <input type="password" className={styles.signInput} />
        </div>
        <button className={styles.switchButton}>SIGN IN</button>
        <span className={styles.text}>Create account</span>
      </form>
    </div>
  );
};

export default Login;
