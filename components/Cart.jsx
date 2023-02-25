import { Close } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./../styles/Cart.module.scss";
import { Remove, Add } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import { addCart, removeCart ,removeBulk } from "../redux/cartSlice";
const Cart = ({ cartOpen, setCartOpen }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const handleQuantity = (_id, price, quantity, type, size) => {
    console.log(_id, price, quantity, type, size)
    if (type === "dec") {
      quantity > 1 ? (dispatch(removeCart({ _id, price, size }))) : (dispatch(removeBulk({ _id, price, size })))
    } else {
      dispatch(addCart({ _id, price,  size }));
    }
  };

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
      id: 2,
      img: "/img/arrival2.jpg",
      title:
        "Steel Round Frame with Crystal Rods and Frosted Glass Diffuser Flush Mount",
      price: "3,767.00",
    },    {
      id: 2,
      img: "/img/arrival2.jpg",
      title:
        "Steel Round Frame with Crystal Rods and Frosted Glass Diffuser Flush Mount",
      price: "3,767.00",
    },    {
      id: 2,
      img: "/img/arrival2.jpg",
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
      id: 2,
      img: "/img/arrival2.jpg",
      title:
        "Steel Round Frame with Crystal Rods and Frosted Glass Diffuser Flush Mount",
      price: "3,767.00",
    },
  ];

  return (
    <div className={`${styles.container}  ${cartOpen ? styles.open : " "} `}>
      <div className={styles.top}>
        <h1 className={`primaryText ${styles.title}`}>Cart</h1>
        <Close onClick={() => setCartOpen(false)} className={styles.close} />
      </div>
      <div className={styles.hr}></div>
      {cart.products.length < 1 ? (
        <span>Your cart is currently empty.</span>
      ) : (
        <div>
          {cart.products?.map((product, i) => (
            <div className={styles.center} key={i}>
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
                <span className={styles.title}>
                  <strong>size :</strong> {product.size}"
                </span>
                <div className={styles.price}>
                  <div className={styles.number}>
                    <button
                      className={styles.control}
                      onClick={() =>
                        handleQuantity(
                          product._id,
                          product.price,
                          product.quantity,
                          "dec",
                      
                          product.size
                        )
                      }
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      className={styles.control}
                      onClick={() =>
                        handleQuantity(
                          product._id,
                          product.price,
                          product.quantity,
                          "inc",

                          product.size
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <span>${product.price * product.quantity}</span>
                </div>
              </div>
            </div>
          ))}

          <div className={styles.bottom}>
            <div className={styles.hr}></div>
            <div className={styles.wrapper}>
              <span className={styles.title}>SUBTOTAL</span>
              <span className={styles.price}>$ {cart.total}</span>
            </div>
            <span className={styles.text}>
              Shipping, taxes, and discount codes calculated at checkout.
            </span>
            <button className={styles.switchButton}>Check out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
