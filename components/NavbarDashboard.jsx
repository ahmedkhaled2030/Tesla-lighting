import SearchOutlined from "@mui/icons-material/SearchOutlined";
import styles from "../styles/navbarDashboard.module.scss";

const NavbarDashboard = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
