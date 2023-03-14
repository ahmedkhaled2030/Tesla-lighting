import styles from "./../styles/Wishlist.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import Head from "next/head";
import WishListList from "./WishListList";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import axios from "axios";
import Cookies from "js-cookie";
const Wishlist = ({ setCloseWishList }) => {
  const [token, setToken] = useState(Cookies.get("token"))  

  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
  const [favProducts, setFavProducts] = useState([]);
  

  useEffect(async () => {


    const profileFavs = await axios.get(
      `${process.env.NEXT_PUBLIC_GAID}/user/favorites`,
      {
        headers: {
          Authorization: token,
        } 
      }
    );

    setFavProducts(profileFavs?.data.data); 
  }, [token,favProducts]); 

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
