import styles from "../../styles/Categories.module.scss";
import Image from "next/image";
import { useState } from "react";

import {
  Search,
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
  Check,
} from "@mui/icons-material";
import Head from "next/head";
import ProductsList from "@/components/ProductsList";
import { FilterAltOutlined } from "@mui/icons-material";
import CategoryList from "@/components/CategoryList";
const Categories = () => {
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
    <div className={styles.container}>
      <Head>
        <title>Categories</title>
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
      
      
      
      <div className={`innerWidth    ${styles.wrapper}`}>

        <CategoryList categories={categories} title="CATALOG" />
      </div>
    </div>
  );
};

export default Categories;
