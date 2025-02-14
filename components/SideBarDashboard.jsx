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
  RateReview,
  Redeem,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}  styles={{borderTop:'2px solid gray'}}>
      <div className={styles.top}>
        <Link href="/dashboard" style={{ textDecoration: "none" }} passHref>
          <span className={styles.logo}>Tesla Dashboard</span>
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
          <Link
            href="/dashboard/users"
            style={{ textDecoration: "none" }}
            passHref
          >
            <li>
              <PersonOutline className={styles.icon} />
              <span>Users</span>
            </li>
          </Link>
          <Link
            href="/dashboard/products"
            style={{ textDecoration: "none" }}
            passHref
          >
            <li>
              <Store className={styles.icon} />
              <span>Products</span>
            </li>
          </Link>
          <Link
            href="/dashboard/orders"
            style={{ textDecoration: "none" }}
            passHref
          >
            <li>
              <CreditCard className={styles.icon} />
              <span>Orders</span>
            </li>
          </Link>

          <p className={styles.title}>Category</p>
          <Link
            href="/dashboard/category"
            style={{ textDecoration: "none" }}
            passHref
          >
            <li>
              <Category className={styles.icon} />
              <span>Category</span>
            </li>
          </Link>
          <Link
            href="/dashboard/subcategory"
            style={{ textDecoration: "none" }}
            passHref
          >
            <li>
              <Category className={styles.icon} />
              <span>SubCategory</span>
            </li>
          </Link>
          <Link
            href="/dashboard/model"
            style={{ textDecoration: "none" }}
            passHref
          >
            <li>
              <Category className={styles.icon} />
              <span>Model</span>
            </li>
          </Link>
          {/* <p className={styles.title}>Promo Codes</p>
          <Link href="/dashboard/products" style={{ textDecoration: "none" }} passHref>
            <li>
              <LocalOffer className={styles.icon} />
              <span>Promo Codes</span>
            </li>
          </Link> */}
          <p className={styles.title}>Reviews</p>
          <Link
            href="/dashboard/reviews"
            style={{ textDecoration: "none" }}
            passHref
          >
            <li>
              <RateReview className={styles.icon} />

              <span>Reviews</span>
            </li>
          </Link>
          <p className={styles.title}>HomePage</p>
          <Link
            href="/dashboard/promoslider"
            style={{ textDecoration: "none" }}
            passHref
          >
            <li>
              <Home className={styles.icon} />
              <span>PromoSlider</span>
            </li>
          </Link>
          <Link
            href="/dashboard/headerslider"
            style={{ textDecoration: "none" }}
            passHref
          >
            <li>
              <Home className={styles.icon} />
              <span>HeaderSlider</span>
            </li>
          </Link>
          <Link
            href="/dashboard/partners"
            style={{ textDecoration: "none" }}
            passHref
          >
            <li>
              <Home className={styles.icon} />
              <span>Partners</span>
            </li>
          </Link>
          <Link
            href="/dashboard/video"
            style={{ textDecoration: "none" }}
            passHref
          >
            <li>
              <Home className={styles.icon} />
              <span>Video</span>
            </li>
          </Link>
          <Link
            href="/dashboard/storeinfo"
            style={{ textDecoration: "none" }}
            passHref
          >
            <li>
              <Home className={styles.icon} />
              <span>Store Info</span>
            </li>
          </Link>
          <Link
            href="/dashboard/storetime"
            style={{ textDecoration: "none" }}
            passHref
          >
            <li>
              <Home className={styles.icon} />
              <span>Store Times</span>
            </li>
          </Link>
          <p className={styles.title}>Coupons</p>
          <Link
            href="/dashboard/coupons"
            style={{ textDecoration: "none" }}
            passHref
          >
            <li>
              <Redeem className={styles.icon} /> 
              <span>Coupons</span>
            </li> 
          </Link>
          <p className={styles.title}>Pages</p>
         <Link href="/dashboard/about" style={{ textDecoration: "none" }} passHref>
            <li>
              <Layers className={styles.icon} />
              <span>About Us</span>
            </li>  
          </Link> 
                   <Link href="/dashboard/policy" style={{ textDecoration: "none" }} passHref>
            <li>
              <Layers className={styles.icon} />
              <span>Shipping & Return Policy</span>
            </li>
          </Link> 
      <Link href="/dashboard/contact" style={{ textDecoration: "none" }} passHref>
            <li>
              <Layers className={styles.icon} />
              <span>Contact Us</span>
            </li>
          </Link> 
          <Link
            href="/dashboard/terms"
            style={{ textDecoration: "none" }}
            passHref
          >
            <li>
              <Layers className={styles.icon} />
              <span>Terms of service</span>
            </li> 
          </Link>
        
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
