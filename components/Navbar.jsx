import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import {
  Search,
  PersonOutlineOutlined,
  WorkOutlineOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import Cart from "./Cart";
import { useState } from "react";
import primaryMenus from "../utils/navbar.json";
import CategoriesNavbar from "./CategoriesNavbar";
import { useSelector } from "react-redux";


const Navbar = ({ setCloseWishList, cartOpen, setCartOpen  }) => {
  console.log(setCloseWishList)
  const { menus } = primaryMenus;
  // console.log(menus , "menus");
  const [status, setStatus] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  return ( 
    <div className={`xPaddings ${styles.container}`}>
      <div className={styles.wrapper}>
      <div className={styles.item}>
        <Search className={styles.icon} />
      </div>
      <div className={styles.item}>
        <ul className={styles.listWrapper}>
          <li className={`secondaryText ${styles.listItem}`}>HOME</li>
          {/* <li className={`secondaryText ${styles.listItem}`}><CategoriesNavbar menus={menus} /></li> */}
          <li className={`secondaryText ${styles.listItem}`}>ABOUT</li>
          <Image src="/img/navbarLogo.png" alt="" width="200" height="100" objectFit="contain" /> 
          <li className={`secondaryText ${styles.listItem}`}>CONTACT</li>
          <li className={`secondaryText ${styles.listItem}`}>PORTFOLIO</li>
          <li className={`secondaryText ${styles.listItem}`}>FLYER</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.iconWrapper}>
          <PersonOutlineOutlined className={styles.icon} />
        </div>
          <div className={styles.iconWrapper} onClick={() => setCartOpen(true)} >
            <WorkOutlineOutlined className={styles.icon} />
   
          <span>{quantity}</span>
          </div>
         
          <div className={styles.iconWrapper} onClick={() => setCloseWishList(false)}>
            
          <FavoriteBorderOutlined className={styles.icon}  />
          <span>0</span>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Navbar;
