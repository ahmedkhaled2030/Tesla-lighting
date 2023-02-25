import styles from "../../styles/Portfolio.module.scss";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
const Portfolio = () => {
  return (
    <div className={`paddings  flexCenter ${styles.container}`}>

<h1 className={`primaryText ${styles.title}`}>Portfolio</h1>
       
          <div className={styles.imgContainer}>
          <iframe width="350" height="215" src="https://www.youtube.com/embed/bdgr_dzDLO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
      </div>
  )
}

export default Portfolio