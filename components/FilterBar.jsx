import styles from "./../styles/FilterBar.module.css";
import FilterBarItem from "./FilterBarItem";
import primaryMenus from "../utils/navbar.json";
import { Close } from "@mui/icons-material";
import Slider from "@mui/material/Slider";
import { useState } from "react";
const FilterBar = ({ FilterOpen, setFilterOpen }) => {
  const { menus } = primaryMenus;
  const [value, setValue] = useState([0, 20000]);
  const handleChange = (event, newValue) => {
    //console.log(value);
    setValue(newValue);
  };
  return (
    <div className={`${styles.sidebar}  ${FilterOpen ? styles.open : " "} `}>
      <div className={styles.top}>
        <h1 className={`primaryText ${styles.title}`}>Filter</h1>
        <Close onClick={() => setFilterOpen(false)} className={styles.close} />
      </div>
      <div className={styles.hr}></div>
      <div className={styles.wrapper}>
        {menus.map((item, i) => (
          <FilterBarItem key={i} item={item} />
        ))}
      </div>
      <div className={styles.hr}></div>
      <div className={styles.bottom}>
        <h1 className={`primaryText ${styles.title}`}>Price</h1>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={20000}
          className={styles.slider}
        />
        <span className={styles.prices}>Price: $0.00 – $2000.00</span>
      </div>
    </div>
  );
};

export default FilterBar;
