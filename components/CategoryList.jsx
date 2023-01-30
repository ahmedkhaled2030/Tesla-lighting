import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/CategoryList.module.scss";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  return (
    <div className={` innerWidth    ${styles.container}`}>
      <h1 className={`primaryText ${styles.title}`}>Shop by category</h1>

      <div className={`flexCenter yPaddings   ${styles.wrapper}`}>
        <CategoryCard img="/img/1.jpg" title="Chandelier" />
        <CategoryCard img="/img/2.jpg" title="PENDANT" />
        <CategoryCard img="/img/3.jpg" title="FLUSH MOUNT" />
        <CategoryCard img="/img/4.jpg" title="SCONE" />
        <CategoryCard img="/img/5.jpg" title="CONTEMPORARY VANITY LIGHT" />
        <CategoryCard img="/img/6.jpg" title="LAMPS" />
        <CategoryCard img="/img/7.jpg" title="TRACK LIGHT" />
        <CategoryCard img="/img/8.jpg" title="CEILING FAN" />
        <CategoryCard img="/img/9.jpg" title="LIGHTBULB" />
        <CategoryCard img="/img/10.jpg" title="MISC" />
      </div>
    </div>
  );
};

export default CategoryList;
