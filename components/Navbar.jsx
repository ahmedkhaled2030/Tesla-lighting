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
import { useRouter } from "next/router";
import Link from "next/link";
const Navbar = ({ setCloseWishList, setCartOpen, setSearchOpen }) => {
  const router = useRouter();

  const { menus } = primaryMenus;
  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef();
  // ////console.log(menus , "menus");
  const [status, setStatus] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.auth.firstName);
  let url;
  if (user) {
    url = "/account";
  } else {
    url = "/login";
  }

  const openFavourite = () => {
    if (user) {
      setCloseWishList(false);
    } else {
      router.push("/login");
    }
  };
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

          <div className={styles.hr}></div>
          <Link href={url} passHref>
            <div
              className={`secondaryText ${styles.listItem}`}
              onClick={() => setMenuOpened(false)}
            >
              PROFILE
            </div>
          </Link>

          {!user && (
            <>
              {" "}
              <div className={styles.hr}></div>
              <Link href={`/login`} passHref>
                <div
                  className={`secondaryText ${styles.listItem}`}
                  onClick={() => setMenuOpened(false)}
                >
                  LOGIN
                </div>
              </Link>
            </>
          )}

          {!user && (
            <>
              {" "}
              <div className={styles.hr}></div>
              <Link href={`/signup`} passHref>
                <div
                  className={`secondaryText ${styles.listItem}`}
                  onClick={() => setMenuOpened(false)}
                >
                  SIGNUP
                </div>
              </Link>
            </>
          )}

          <div className={styles.hr}></div>
          <Link href={`/`} passHref>
            <div
              className={`secondaryText ${styles.listItem}`}
              onClick={() => setMenuOpened(false)}
            >
              HOME
            </div>
          </Link>

          <div className={styles.hr}></div>
          <Link href={`/categories`} passHref>
            <div
              className={`secondaryText ${styles.listItem}`}
              onClick={() => setMenuOpened(false)}
            >
              CATEGORIES
            </div>
          </Link>

          <div className={styles.hr}></div>
          <Link href={`/about`} passHref>
            <div
              className={`secondaryText ${styles.listItem}`}
              onClick={() => setMenuOpened(false)}
            >
              ABOUT
            </div>
          </Link>

          <div className={styles.hr}></div>
          <Link href={`/contact`} passHref>
            <div
              className={`secondaryText ${styles.listItem}`}
              onClick={() => setMenuOpened(false)}
            >
              CONTACT
            </div>
          </Link>
          <div className={styles.hr}></div>
          <Link href={`/portfolio`} passHref>
            <div
              className={`secondaryText ${styles.listItem}`}
              onClick={() => setMenuOpened(false)}
            >
              PORTFOLIO
            </div>
          </Link>
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
          <div className={styles.item} onClick={() => setSearchOpen(true)}>
            <Search className={styles.icon} />
          </div>

          <div className={styles.iconWrapper} onClick={() => setCartOpen(true)}>
            <WorkOutlineOutlined className={styles.icon} />

            <span>{quantity}</span>
          </div>

          <div className={styles.iconWrapper} onClick={openFavourite}>
            <FavoriteBorderOutlined className={styles.icon} />
            <span></span>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.item} onClick={() => setSearchOpen(true)}>
          <Search className={styles.icon} />
        </div>
        <div className={styles.item}>
          <ul className={styles.listWrapper}>
            <Link href={`/`} passHref>
              <li className={`secondaryText ${styles.listItem}`}>HOME</li>
            </Link>
            <Link href={`/categories`} passHref>
              <li className={`secondaryText ${styles.listItem}`}>CATEGORIES</li>
            </Link>
            <Link href={`/about`} passHref>
              <li className={`secondaryText ${styles.listItem}`}>ABOUT</li>
            </Link>

            <Link href={`/`} passHref>
              <Image
                src="/img/logo.png"
                alt=""
                width="200"
                height="150"
                objectFit="contain"
              />
            </Link>
            <Link href={`/contact`} passHref>
              <li className={`secondaryText ${styles.listItem}`}>CONTACT</li>
            </Link>
            <Link href={url} passHref>
              <li className={`secondaryText ${styles.listItem}`}>PORTFOLIO</li>
            </Link>
            <Link href={`/`} passHref>
              <li className={`secondaryText ${styles.listItem}`}>POLICY</li>
            </Link>
          </ul>
        </div>
        <div className={styles.item}>
          <Link href={url} passHref>
            <div className={styles.iconWrapper}>
              <PersonOutlineOutlined className={styles.icon} />
            </div>
          </Link>

          <div className={styles.iconWrapper} onClick={() => setCartOpen(true)}>
            <WorkOutlineOutlined className={styles.icon} />

            <span>{quantity}</span>
          </div>

          <div className={styles.iconWrapper} onClick={openFavourite}>
            <FavoriteBorderOutlined className={styles.icon} />
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
