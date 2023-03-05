import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/WishListCard.module.scss";
import { Close, FavoriteBorderOutlined } from "@mui/icons-material";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";

const WishListCard = ({ product }) => {
  //console.log(product ,"productproductproduct" )
  const dispatch = useDispatch();
  const handleCart = () => {
    //console.log("cart");
    const price = product?.price;
    // dispatch(addProduct({ ...productDetails,  price, quantity }));
    dispatch(addProduct({ ...product, price }));
  };
  return (
    <div className={styles.container}>
      <Link href={`/product/${product._id}`} passHref>
        <Image
          // src={product?.cover}
          src="https://res.cloudinary.com/dsz4anlgs/image/upload/v1677345080/1677345080778.jpg"
          alt={product?.title}
          width="275"
          height="275"
          objectFit="contain"
        />
      </Link>
      <h1 className={`thirdText ${styles.title}`}>{product?.title}</h1>

      <div className={styles.iconWrapper}>
        <FavoriteBorderOutlined />
      </div>

      <div className={styles.closeIcon}>
        <Close />
      </div>

      <span className="secondaryText">${product?.price}</span>

      <button className={` button ${styles.wishlist} `} onClick={handleCart}>
        MOVE TO CART
      </button>
    </div>
  );
};

export default WishListCard;
