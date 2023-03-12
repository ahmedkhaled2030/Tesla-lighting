import styles from "./../styles/Wishlist.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import Head from "next/head";
import WishListList from "./WishListList";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import axios from "axios";

const Wishlist = ({ setCloseWishList }) => {
  const [favProducts, setFavProducts] = useState([]);
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
  ];

  useEffect(async () => {
    const token = localStorage.getItem("token");

    const profileFavs = await axios.get(
      `http://18.214.112.247:4000/user/favorites`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    ////console.log(profileFavs.data.data)
    setFavProducts(profileFavs?.data?.data);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span onClick={() => setCloseWishList(true)} className={styles.close}>
          X
        </span>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.products}>
          {favProducts.length > 0 ? (
            <WishListList favProducts={favProducts} />
          ) : (
            <h2 className={styles.noText}>No Favourite Yet !</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
