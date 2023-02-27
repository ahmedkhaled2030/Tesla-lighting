import styles from "./../styles/SideBarDashboard.module.scss";
import {
  Dashboard,
  PersonOutline,
  LocalShipping,
  CreditCard,
  Store,
  ExitToApp,
  Category,
  LocalOffer,
  Home,
  Layers,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <Link href="/dashboard" style={{ textDecoration: "none" }} passHref>
          <span className={styles.logo}>Tesla Lighting</span> 
        </Link>
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
          {/* <p className={styles.title}>MAIN</p> */}
          {/* <Link href="/dashboard" style={{ textDecoration: "none" }} passHref>
          <li>
            <Dashboard className={styles.icon} />
            <span>Home</span>
            </li>
            </Link> */}
          <p className={styles.title}>LISTS</p>
          <Link href="/dashboard/users" style={{ textDecoration: "none" }} passHref>
            <li>
              <PersonOutline className={styles.icon} />
              <span>Users</span>
            </li>
          </Link>
          <Link href="/dashboard/products" style={{ textDecoration: "none" }} passHref>
            <li>
              <Store className={styles.icon} />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCard className={styles.icon} />
            <span>Orders</span>
          </li>


          <p className={styles.title}>Category</p>
          <Link href="/dashboard/category" style={{ textDecoration: "none" }} passHref>
            <li>
              <Category className={styles.icon} />
              <span>Add Category</span>
            </li>
          </Link>
          <Link href="/dashboard/subcategory" style={{ textDecoration: "none" }} passHref>
            <li>
              <Category className={styles.icon} />
              <span>Add SubCategory</span>
            </li>
          </Link>
          <Link href="/dashboard/model" style={{ textDecoration: "none" }} passHref>
            <li>
              <Category className={styles.icon} />
              <span>Add Model</span>
            </li>
          </Link>
          <p className={styles.title}>Promo Codes</p>
          <Link href="/dashboard/products" style={{ textDecoration: "none" }} passHref>
            <li>
              <LocalOffer className={styles.icon} />
              <span>Promo Codes</span>
            </li>
          </Link>
          <p className={styles.title}>HomePage</p>
          <Link href="/dashboard/products" style={{ textDecoration: "none" }} passHref>
            <li>
              <Home className={styles.icon} />
              <span>HomePage</span>
            </li>
          </Link>
          <p className={styles.title}>Pages</p>
          <Link href="/dashboard/products" style={{ textDecoration: "none" }} passHref>
            <li>
              <Layers className={styles.icon} />
              <span>About Us</span>
            </li>
          </Link>
          <Link href="/dashboard/products" style={{ textDecoration: "none" }} passHref>
            <li>
              <Layers className={styles.icon} />
              <span>Shipping</span>
            </li>
          </Link>
          <Link href="/dashboard/products" style={{ textDecoration: "none" }} passHref>
            <li>
              <Layers className={styles.icon} />
              <span>Terms</span>
            </li>
            </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
