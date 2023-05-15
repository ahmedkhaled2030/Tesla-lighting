import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import styles from "./../styles/SearchBar.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import { Search } from "@mui/icons-material";
import useDebounce from "../hooks/useDebounce";
import Image from "next/image";
import Link from "next/link";
import { SwipeRightAlt } from "@mui/icons-material";
const SearchBar = ({ searchOpen, setSearchOpen, searchValue }) => {
  const [searchText, setSearchText] = useState("");
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [nullProducts, setNullProducts] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(searchText);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  useEffect(async () => {
    ////console.log(searchText, "searchText");
    if (searchText == "") {
      ////console.log("empty");
      setSearchedProduct(null);
    }

    ////console.log(debouncedValue, "debouncedValue");
    ////console.log(searchedProduct, "searchedProduct");
    const id = setTimeout(() => {
      setDebouncedValue(searchText);
    }, 500);

    if (searchText == "" && focused == true) {
      ////console.log("empty2");
      setSearchedProduct(null);
      setNullProducts("No matched products");
    }
    if (searchText !== "") {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_GAID}/product/search`,
          {
            text: debouncedValue,
          }
        );

        const data = await res.data.data.products;
        ////console.log(data, "data");
        if (data.length < 1) {
          setSearchedProduct(null);
        }
        if (data.length >= 1) {
          setSearchedProduct(data);
        }
      } catch (err) {
        ////console.log(err);
      }
    }

    return () => {
      clearTimeout(id);
      setSearchOpen(false);
    };
  }, [searchText, debouncedValue]);

  const closeHandler = () => {
    setSearchOpen(false);
    setSearchText("");
    setSearchedProduct([]);
    setFocused(false);
  };

  return (
    <div className={`${styles.container}  ${searchOpen ? styles.open : " "} `}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Search className={styles.icon} />
          <input
            placeholder="Search our store"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        <div className={styles.right}>
          <Close onClick={closeHandler} />
        </div>
      </div>

      <div className={styles.modal}>
        {searchedProduct !== null &&
        searchedProduct.length > 0 &&
        searchText !== "" ? (
          searchedProduct?.slice(0, 3).map((item, i) => (
            <div className={styles.productWrapper} key={i}>
              <Link href={`/product/${item._id}`}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_OLDPATH}/${item?.cover}`}
                  alt={item?.title}
                  width="275px"
                  height="275px"
                  objectFit="contain"
                  className={styles.image}
                />
              </Link>
              <span>{item?.title.substring(0, 30)}</span>
            </div>
          ))
        ) : (
          <span className="styles.nullText">{nullProducts}</span>
        )}
        {/* <div className={styles.swiper}>
        <SwipeRightAlt className={styles.swipe} />
          <span>Swipe Right</span> */}

        {/* </div> */}
      </div>
    </div>
  );
};

export default SearchBar;
