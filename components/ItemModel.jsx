import React, { useState } from 'react'
import styles from "../styles/FilterBarItem.module.scss";
import { KeyboardArrowDownOutlined, Add, Remove } from "@mui/icons-material";
import {FiberManualRecord} from '@mui/icons-material';

const ItemModel = ({model ,category ,sub, handleModel}) => { 
    const [open, setOpen] = useState(false);
    // console.log(model,'model')
  return (
    <div className={styles.title} >
          <div style={{ display: "flex", alignItems: "center" }}>
         <FiberManualRecord/> <span style={{marginLeft:"20px"}} onClick={() => handleModel(category ,model,sub)}>{model.name}</span>
    
               
 </div>

  </div>
  )
}

export default ItemModel