import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import styles from "../../styles/Contact.module.scss";

const Contact = () => {
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
      <h1 className={`primaryText ${styles.title}`}>contact us</h1>
      <p className={styles.address}>
        Address : 7991 Alderbridge Way, Richmond, BC V6X 2A4
      </p>
      <p className={styles.paragraph}>
        Tel : <a href="tel:(604-233-1998)">604-233-1998</a>
      </p>
      <p className={styles.paragraph}>
        Fax : <a href="tel:(604-233-1998)">604-233-1998</a>
      </p>
      <p className={styles.paragraph}>
        Email: <a href="mailto:(sales@lvlighting.ca)">sales@lvlighting.ca</a>
      </p>
      <p className={styles.hours}>
        Store Hours :<br />
        Monday&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10a.m.–7p.m.
        <br />
        Tuesday &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10a.m.–7p.m.
        <br />
        Wednesday&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10a.m.–7p.m.
        <br />
        Thursday &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10a.m.–7p.m.
        <br />
        Friday &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10a.m.–7p.m.
        <br />
      </p>

      <form className={styles.form}>
        <div className={styles.top}>
          <div className={styles.inputs}>
            <label>NAME</label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.inputs}>
            <label>Email</label>
            <input type="text" className={styles.input} />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.inputs}>
            <label>Message</label>
            <textarea type="text" rows="6" className={styles.input} />
          </div>
        </div>
        <button>SEND</button>
      </form>
    </div>
  );
};

export default Contact;
