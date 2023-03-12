import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/ProductsCard.module.scss";
import { Close, Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import Link from "next/link";

const ProductsCard = ({ id, img, title, price, type, isFavorited }) => {
  const handleFavourite = async () => {
    ////console.log("object");

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_GAID}/product/favorite/${id}`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await res.data.message;
      ////console.log(data);
      if (data == "Product added to favorites successfully") {
        setIsFavourited(true);
      }
      if (data == "Favorite removed successfully") {
        setIsFavourited(false);
      }
    } catch (err) {
      ////console.log(err);
    }
  };
  //console.log(img,'img111')
  return (
    <div className={styles.container}>
      <Link href={`/product/${id}`} passHref>
        <div>
          <Image
            src={img}
            alt={title}
            width="275"
            height="275"
            objectFit="contain"
          />

          <h1 className={`thirdText ${styles.title}`}>{title}</h1>

          <div className={styles.iconWrapper}>
            {isFavorited ? (
              <Favorite onClick={handleFavourite} />
            ) : (
              <FavoriteBorderOutlined onClick={handleFavourite} />
            )}
          </div>

          <span className="secondaryText">${price}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductsCard;
