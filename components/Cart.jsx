import { Close } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./../styles/Cart.module.scss";
import { Remove, Add } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import { addCart, removeCart, removeBulk } from "../redux/cartSlice";
import { makingOrder } from "../redux/orderSlice";
import Cookies from "js-cookie";
const Cart = ({ cartOpen, setCartOpen }) => {
  const [token, setToken] = useState(Cookies.get("token"));
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  console.log(cart, "cart");
  const handleQuantity = (_id, price, quantity, type, size) => {
    //console.log(_id, price, quantity, type, size)
    if (type === "dec") {
      quantity > 1
        ? dispatch(removeCart({ _id, price, size }))
        : dispatch(removeBulk({ _id, price, size }));
    } else {
      dispatch(addCart({ _id, price, size }));
    }
  };


  const makeOrder = async () => {
    // console.log(cart.products, "cart");
    const checkoutProduct = cart.products.map((product) => {
      return {
        id: product._id,
        color: product.color,
        size: product.selectedSizeId,
        count: product.quantity,
      };
    });
    // console.log(checkoutProduct ,'checkoutProduct')
    const orderSchema = {
      address: "63ee4042a881d677137625d6",
      products: checkoutProduct,
    };
    console.log(orderSchema, "orderSchema");
    try {
      const res = await axios.post(
        "http://18.214.112.247:4000/order",
        orderSchema,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res.data.data, "res");

      dispatch(
        makingOrder({
          clientSecret: res.data.data.clientSecret,
          tax: res.data.data.tax,
          shippingCost: res.data.data.shippingCost,
          price: res.data.data.price,
          discount: res.data.data.discount,
        })
      );
      router.push("/checkout");
    } catch (err) {
      console.log(err);
    }
  };

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
                {/* <span className={styles.title}>
                  <strong>size :</strong> {product.size}"
                </span> */}
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
                  <span style={{marginLeft:"10px"}}>${(product.price* product.quantity) .toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}

          <div className={styles.bottom}>
            <div className={styles.hr}></div>
            <div className={styles.wrapper}>
              <span className={styles.title}>SUBTOTAL</span>
              <span className={styles.price} >$ {cart.total.toFixed(2)}</span>
            </div>
            <span className={styles.text}>
              Shipping, taxes, and discount codes calculated at checkout.
            </span>
              <button
                // onClick={makeOrder}
                className={styles.switchButton}>
              Check out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
