import React, { useState } from "react";
import styles from "../styles/FilterBarItem.module.scss";
import { KeyboardArrowDownOutlined, Add, Remove } from "@mui/icons-material";
import ItemSub from "./ItemSub";

const Item = ({ category ,handleCategory ,handleSubCategory ,handleModel}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={open ? `${styles.title} ${styles.open}` : `${styles.title}`}
    >
      <div style={{ display: "flex", alignItems: "center" ,justifyContent:"space-between"}}>
        <span style={{fontWeight:"700",marginRight:"20px"}} onClick={() => handleCategory(category)}>{category.name}</span>
        {open ? (
          <Remove className={styles.icon} onClick={() => setOpen(!open)} />
        ) : (
          <Add className={styles.icon} onClick={() => setOpen(!open)} />
        )}
      </div>
      <div className={styles.sub}>
        {open && category.subCategories.map((sub) => <ItemSub sub={sub} handleSubCategory={handleSubCategory} category={category} handleModel={handleModel} />)}
      </div>
    </div>
  );
};

export default Item;
