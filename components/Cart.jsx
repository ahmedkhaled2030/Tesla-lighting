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
import { Alert, Snackbar } from "@mui/material";
import Link from "next/link";
const Cart = ({ cartOpen, setCartOpen }) => {
  const [token, setToken] = useState(Cookies.get("token"));
  console.log(token ,'token')
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state.cart);


  //snackbar
  const [rejectText, setRejectText] = useState("")
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "left",
  });
  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => {
    console.log("checked")          
    //console.log(newState, "newState");
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
 //snackbar






  const handleQuantity = (_id, price, quantity, type, size) => {
    ////console.log(_id, price, quantity, type, size)
    if (type === "dec") {
      quantity > 1
        ? dispatch(removeCart({ _id, price, size }))
        : dispatch(removeBulk({ _id, price, size }));
    } else {
      dispatch(addCart({ _id, price, size }));
    }
  };

  const makeOrder = async () => {
//     console.log('aaaaaaaaaa')
//  console.log(cart.products, "cart");
    const checkoutProduct = cart.products.map((product) => {
      return {
        id: product._id,
        // color: product.color,
        // size: product.selectedSizeId,
        count: product.quantity,
      };
    });
  console.log(checkoutProduct ,'checkoutProduct')
    const orderSchema = {
      // address: "63ee4042a881d677137625d6",
      products: checkoutProduct,
    };
    console.log(orderSchema, "orderSchema");
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_GAID}/order`,
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
          orderId: res.data.data.orderId,
          count : res.data.data.count , 
          clientSecret: res.data.data.clientSecret,   
          tax: res.data.data.tax,
          shippingCost: res.data.data.shippingCost,
          price: res.data.data.price,
          discount: res.data.data.discount, 
        })
      );
      if (token == undefined) {
        setRejectText("Complete the order")
        handleClick({
          vertical: "top",
          horizontal: "left",
        });
      } else {
        router.push("/checkout");
      }
      
    } catch (err) {
      console.log(err);
    }
  };
  const loginButton = () => {
    router.push("/login"); 
}
  return (
    <div className={`${styles.container}  ${cartOpen ? styles.open : " "} `}>
      {token == undefined && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            PLEASE  
             <Link
              href={`/login`}
              passHref
              className={styles.link}
              styles={{ color: "#000 !important", textDecoration: "inherit !important" }}
            >
             
                      LOGIN
            </Link>   
            TO {rejectText}
          </Alert>
        </Snackbar>
      )}
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
                  height="150px"
                  width="150px"
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
                  <span style={{ marginLeft: "10px" }}>
                    ${(product.price * product.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className={styles.bottom}>
            <div className={styles.hr}></div>
            <div className={styles.wrapper}>
              <span className={styles.title}>SUBTOTAL</span>
              <span className={styles.price}>$ {cart.total.toFixed(2)}</span>
            </div>
            <span className={styles.text}>
              Shipping, taxes, and discount codes calculated at checkout.
              </span>
              {token == undefined ? (<button
              onClick={loginButton}
              className={styles.switchButton}
            >
              Login to proceed
            </button>): (<button
              onClick={makeOrder}
              className={styles.switchButton}
            >
              Check out
            </button>)}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
