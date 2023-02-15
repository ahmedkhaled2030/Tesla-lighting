import styles from "./../styles/Wishlist.module.scss";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import WishListList from "./WishListList";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";

const Wishlist = ({ setCloseWishList }) => {
  console.log(setCloseWishList ,'setCloseWishList')      
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
    <div  className = { styles.container } >
    
    <div className={styles.header}>
      <span onClick={() => setCloseWishList(true)} className={styles.close}>
        X
      </span>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.products}>
        <WishListList products={products} />
      </div>
    </div>
  </div>
)

};

export default Wishlist;
