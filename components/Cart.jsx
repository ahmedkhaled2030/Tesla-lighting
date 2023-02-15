import { Close } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./../styles/Cart.module.scss";
import { Remove, Add } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
const Cart = ({ cartOpen , setCartOpen}) => {
  console.log(cartOpen)
  const cart = useSelector((state) => state.cart);
  const currency = "USD";

  const dispatch = useDispatch();
  const router = useRouter();
  const products = [
    {
      id: 1,
      img: "/img/arrival1.png",
      title:
        "Steel Round Frame with Crystal Rods and Frosted Glass Diffuser Flush Mount",
      price: "3,767.00",
    },
    {
      id: 2,
      img: "/img/arrival2.jpg",
      title:
        "Steel Round Frame with Crystal Rods and Frosted Glass Diffuser Flush Mount",
      price: "3,767.00",
    },
    {
      id: 3,
      img: "/img/arrival3.png",
      title:
        "Steel Round Frame with Crystal Rods and Frosted Glass Diffuser Flush Mount",
      price: "3,767.00",
    },
  ];

  return (
    <div className={`${styles.container}  ${cartOpen ? styles.open : " "} }`}>
      <div className={styles.top}>
        <h1 className={`primaryText ${styles.title}`}>Cart</h1>
        <Close onClick={() => setCartOpen(false)} />
      </div>
      <div className={styles.hr}></div>

      {products?.map((product, i) => (
        <div className={styles.bottom}>
          <div className={styles.imgContainer}>
            <Image
              src={product.img}
              alt=""
              height="250px"
              width="250px"
              objectFit="contain"
            />
          </div>
          <div className={styles.detailsContainer}>
            <span className={styles.title}>{product.title}</span>
            <div className={styles.price}>
              <div className={styles.number}>
                <span className={styles.control}>-</span>
                <span>1</span>
                <span className={styles.control}>+</span>
              </div>
              <span>${product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
