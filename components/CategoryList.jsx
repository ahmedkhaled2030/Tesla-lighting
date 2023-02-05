import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/CategoryList.module.scss";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  const categories = [
    {
      img: "/img/1.jpg",
      title: "TRACK LIGHT",
    },
    {
      img: "/img/2.jpg",
      title: "MISC",
    },
    {
      img: "/img/3.jpg",
      title: "Chandelier",
    },
    {
      img: "/img/4.jpg",
      title: "LIGHTBULB",
    },
    {
      img: "/img/5.jpg",
      title: "CEILING FAN",
    },
    {
      img: "/img/6.jpg",
      title: "TRACK LIGHT",
    },
    {
      img: "/img/7.jpg",
      title: "LAMPS",
    },
    {
      img: "/img/8.jpg",
      title: "CONTEMPORARY VANITY LIGHT",
    },
    {
      img: "/img/9.jpg",
      title: "SCONE",
    },
    {
      img: "/img/10.jpg",
      title: "FLUSH MOUNT",
    },

  ];
  return (
    <div className={` innerWidth  yPaddings  ${styles.container}`}>
      <h1 className={`primaryText paddings ${styles.title}`}>Shop by category</h1>
      <div className={styles.wrapper} >
      {categories?.map((category, i) => (
    
          <CategoryCard img={category.img} title={category.title} key={i} />
     
      ))}
      </div>
    </div>
  );
};

export default CategoryList;
