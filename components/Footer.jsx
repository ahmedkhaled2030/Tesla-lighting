import styles from "../styles/Footer.module.scss";
import { MailOutline, Send } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.hr}></div>
      <div className={styles.top}>
        <div className={styles.item}>
          {/* <h1>Links</h1> */}
          <span>Search</span>
          <span>Terms of service</span>
          <span>Shipping & Return Policy</span>
          <span>Our Policy</span>
        </div>

        <div className={styles.item}>
          {/* <h1>Our Strategy</h1> */}
          <span>Sign up and save</span>
          <p>
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <div className={styles.mail}>
            <input
              type="text"
              placeholder="Enter your email"
              className={styles.input}
            />
            <button className={styles.send}>Send</button>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.left}>
          <span className={styles.logo}>Tesla Lighting</span>
          <span className={styles.copyright}>
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
