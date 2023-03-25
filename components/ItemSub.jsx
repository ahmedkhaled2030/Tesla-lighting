import React, { useState } from 'react'
import styles from "../styles/FilterBarItem.module.scss";
import { KeyboardArrowDownOutlined, Add, Remove } from "@mui/icons-material";
import ItemModel from './ItemModel';

const ItemSub = ({ sub,handleSubCategory ,category ,handleModel}) => { 
    // console.log(sub,'sub')
    const [open, setOpen] = useState(false);
  return (
    <div className={styles.title} >
          <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{fontWeight:"500"}} onClick={() => handleSubCategory(category ,sub)}>{sub.name}</span>
    {open ? (
      <Remove className={styles.icon} onClick={() => setOpen(!open)} />
    ) : (
      <Add className={styles.icon} onClick={() => setOpen(!open)} />
          )}
               
 </div>
 <div className={styles.model}>
        {open && sub?.subCategories.map((model) => <ItemModel model={model} category={category} sub={sub} handleModel={handleModel}  />)}
      </div>
  </div>
  )
}

export default ItemSub