import React from "react";
import { useState } from "react";
import styles from "../styles/FilterBarItem.module.css";
import {KeyboardArrowDownOutlined} from '@mui/icons-material';

const FilterBarItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={
          open
            ? `${styles.sidebarItem} ${styles.open}`
            : `${styles.sidebarItem}`
        }
      >
        <div className={styles.sidebarTitle} onClick={() => setOpen(!open)}>
          <span>

            {item.megaMenuTitle}
            {item.haveIcon && <KeyboardArrowDownOutlined className={styles.toggleBtn} />}
          </span>
          <i
            className="bi-chevron-down toggle-btn"
            onClick={() => setOpen(!open)}
          ></i>
        </div>
        <div className={styles.sidebarContent}>
          {item?.megaMenus?.map((child, index) => (
            <FilterBarItem key={index} item={child}  />
          ))}
        </div>
      </div> 
    </div>
  );
};
export default FilterBarItem;
