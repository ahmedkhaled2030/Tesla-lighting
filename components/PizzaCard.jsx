import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/PizzaCard.module.scss";
const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>  Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default PizzaCard

//please give me the user and password for the excising database