import styles from "../../styles/Wishlist.module.scss";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import ProductsList from "@/components/ProductsList";

const Wishlist = () => {
  const products = [
    {
      id: 1,
      img: "/img/arrival1.png",
      title: "Aged Brass Frame with Etched Glass Shade Linear Pendant",
      price: "3,767.00",
    },
    {
      id: 2,
      img: "/img/arrival2.jpg",
      title:
        "LED Steel Frame Wrapped with Clear Crystal Double Layer Chandelier",
      price: "3,767.00",
    },
    {
      id: 3,
      img: "/img/arrival3.png",
      title: "Aged Brass and Black Rod with Adjustable Arch Arm Chandelier",
      price: "3,767.00",
    },
    {
      id: 4,
      img: "/img/arrival4.png",
      title: "Gold Leaf Leafy Bohemian Shade Wall Sconce",
      price: "3,767.00",
    },
    {
      id: 5,
      img: "/img/arrival5.png",
      title:
        "Handcrafted Wallflower Frame with Opal Matte Glass Globe Pendant / Chandelier",
      price: "3,767.00",
    },
  ];
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
    

      <div className={styles.products}>
        <ProductsList title="my wishlist" products={products} type="wishlist" />
      </div>
    </div>
  )
}

export default Wishlist