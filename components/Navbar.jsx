import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import {
  Search,
  PersonOutlineOutlined,
  WorkOutlineOutlined,
  FavoriteBorderOutlined,
  Menu,
  Close,
} from "@mui/icons-material";
import Cart from "./Cart";
import { useRef, useState } from "react";
import primaryMenus from "../utils/navbar.json";
import CategoriesNavbar from "./CategoriesNavbar";
import { useSelector } from "react-redux";

import Link from "next/link";
const Navbar = ({ setCloseWishList, setCartOpen, setSearchOpen }) => {
  const { menus } = primaryMenus;
  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef();
  // console.log(menus , "menus");
  const [status, setStatus] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.mobileWrapper}>
        <div
          className={`${styles.listWrapper}  ${
            menuOpened ? styles.open : " "
          } `}
        >
          <div className={styles.close} onClick={() => setMenuOpened(false)}>
            <Close />
          </div>
          <div className={`secondaryText ${styles.listItem}`}>HOME</div>
          <div className={`secondaryText ${styles.listItem}`}>CATEGORIES</div>
          <div className={`secondaryText ${styles.listItem}`}>ABOUT</div>
          <div className={`secondaryText ${styles.listItem}`}>CONTACT</div>
          <div className={`secondaryText ${styles.listItem}`}>PORTFOLIO</div>
          <div className={`secondaryText ${styles.listItem}`}>FLYER</div>
          <div className={`secondaryText ${styles.listItem}`}>LOGIN</div>
        </div>
        <div className={styles.left}>
          <Menu onClick={() => setMenuOpened((prev) => !prev)} />
        </div>

        {/* <div className={styles.center}>
          <Image
            src="/img/logo.png"
            alt=""
            width="100"
            height="100"
            objectFit="contain"
          />
        </div> */}

        <div className={styles.right}>
          <div className={styles.iconWrapper}>
            <PersonOutlineOutlined className={styles.icon} />
          </div>
          <div className={styles.iconWrapper} onClick={() => setCartOpen(true)}>
            <WorkOutlineOutlined className={styles.icon} />

            <span>{quantity}</span>
          </div>

          <div
            className={styles.iconWrapper}
            onClick={() => setCloseWishList(false)}
          >
            <FavoriteBorderOutlined className={styles.icon} />
            <span>0</span>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.item} onClick={() => setSearchOpen(true)}>
          <Search className={styles.icon} />
        </div>
        <div className={styles.item}>
          <ul className={styles.listWrapper}>
            <li className={`secondaryText ${styles.listItem}`}>HOME</li>
            <li className={`secondaryText ${styles.listItem}`}>CATEGORIES</li>
            <li className={`secondaryText ${styles.listItem}`}>ABOUT</li>
            <Link href={`/`} passHref>
              <Image
                src="/img/logo.png"
                alt=""
                width="200"
                height="150"
                objectFit="contain"
              />
            </Link>
            <li className={`secondaryText ${styles.listItem}`}>CONTACT</li>
            <li className={`secondaryText ${styles.listItem}`}>PORTFOLIO</li>
            <li className={`secondaryText ${styles.listItem}`}>FLYER</li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <PersonOutlineOutlined className={styles.icon} />
          </div>
          <div className={styles.iconWrapper} onClick={() => setCartOpen(true)}>
            <WorkOutlineOutlined className={styles.icon} />

            <span>{quantity}</span>
          </div>

          <div
            className={styles.iconWrapper}
            onClick={() => setCloseWishList(false)}
          >
            <FavoriteBorderOutlined className={styles.icon} />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
