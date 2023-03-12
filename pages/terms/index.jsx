import styles from "../../styles/About.module.scss";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import axios from "axios";
const Terms = ({pageProps}) => {
  return (
    <div className={`paddings innerWidth flexCenter ${styles.container}`}>

          <div className={`primaryText ${styles.title}`}>Terms</div>
          <p className={styles.paragraph}  dangerouslySetInnerHTML={{ __html: pageProps.text }}></p>
     
      </div>
  )
}



export const getServerSideProps = async (ctx) => {
  const token = ctx.req?.cookies.token || "";
  const pageRes = await axios.get(
    `${process.env.PRIVATE_URL}/dashboard/page/terms-conditions`
  );

  return {
    props: {
      pageProps: pageRes.data.data,

    },
  };
}
export default Terms