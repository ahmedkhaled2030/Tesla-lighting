import { Link } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/CategoryList.module.scss";
import CategoryCard from "./CategoryCard";

const CategoryList = ({ categories, title, categoryResProps }) => {
  //console.log(categoryResProps, "categoryResProps");

  {
    /* <CategoryCard img={category.img} title={category.title} key={i} /> */
  }
  return (
    <div className={` innerWidth    ${styles.container}`}>
      <h1 className={`primaryText paddings ${styles.title}`}>{title}</h1>
      <div className={styles.wrapper}>
        {categoryResProps?.map((category, i) => (
          <CategoryCard category={category} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
