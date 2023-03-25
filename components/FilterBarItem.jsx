import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/FilterBarItem.module.scss";
import { KeyboardArrowDownOutlined, Add, Remove } from "@mui/icons-material";
import { Box } from "@mui/system";
import Item from "./Item";

const FilterBarItem = ({
  item,
  handleCategories,
  handleSubCategories,
  handleModels,
}) => {
  const [open, setOpen] = useState(false);
  const [hideArrow, setHideArrow] = useState(null);
  // console.log(item, "item");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  // useEffect(() => {

  //   setSelectedCategory(item.name)
  //   // setSelectedSubCategory(item)

  // }, [selectedCategory, selectedSubCategory])

  // //console.log(selectedCategory, "selectedCategory");
  // //console.log(selectedSubCategory, "selectedSubCategory");

  // if (selectedModel) {
  //   console.log(selectedModel, "selectedModel");
  // }
  const handleCategory = (item) => {
    setHideArrow(true);
    setSelectedCategory(item);
    setSelectedSubCategory(item.subCategories);
    handleCategories(item);
  };
  const handleSubCategory = (category, sub) => {
    // console.log(sub, "sub");
    // setOpen(false);
    setSelectedSubCategory(sub);
    setSelectedModel(sub.subCategories);
    handleSubCategories(category, sub);
  };
  const handleModel = (cat, model, sub) => {
    console.log(model, 'model')
    if (model.name == 'All') {
      handleSubCategories(cat, sub);
    } else { 
      handleModels(cat, model);
    }
    
  };
  return (
    // <div className={styles.container}>
    //   <div
    //     className={
    //       open
    //         ? `${styles.sidebarItem} ${styles.open}`
    //         : `${styles.sidebarItem}`
    //     }
    //   >
    //     <div className={styles.sidebarTitle}>
    //       <div onClick={() => handleCategory(item)}>
    //         {item.name}
    //         {item.subCategories?.length >= 1 && (
    //           <KeyboardArrowDownOutlined
    //             onClick={() => setOpen((s) => (s === item.name ? null : item.name))}
    //             open={open === item.name}
    //             className={styles.toggleBtn}
    //           />
    //         )}
    //       </div>
    //     </div>
    //     {open && (
    //       <Box
    //         sx={{
    //           display: "flex",
    //           flexDirection: "column",
    //           justifyContent: "flex-start",
    //           alignItems: "flex-start",
    //           ml: 4,
    //         }}
    //         className={styles.sidebarContent}
    //       >
    //         {selectedSubCategory !== "" &&
    //           selectedSubCategory.length >= 1 &&
    //           selectedSubCategory.map((child, index) => (
    //             <Box
    //               sx={{
    //                 display: "flex",
    //                 flexDirection: "row",
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 mt: 2,
    //               }}
    //               key={index}
    //               onClick={() => handleSubCategory(item, child)}
    //             >
    //               <span>
    //                 {child.name}
    //                 {child?.subCategories?.length >= 1 && (
    //                   <KeyboardArrowDownOutlined />
    //                 )}
    //               </span>

    //               {/* {selectedModel} */}
    //             </Box>
    //           ))}
    //       </Box>
    //     )}

    //     {open && (
    //       <Box
    //         sx={{
    //           display: "flex",
    //           flexDirection: "column",
    //           justifyContent: "flex-start",
    //           alignItems: "flex-start",
    //           ml: 4,
    //         }}
    //         className={styles.sidebarContent}
    //       >
    //         {selectedModel !== "" &&
    //           selectedModel.length >= 1 &&
    //           selectedModel.map((child, index) => (
    //             <Box
    //               sx={{
    //                 display: "flex",
    //                 flexDirection: "row",
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 mt: 2,
    //               }}
    //               key={index}
    //               onClick={() => handleModel(selectedCategory , child)}
    //             >
    //               <span>{child.name}</span>

    //             </Box>
    //           ))}
    //       </Box>
    //     )}
    //   </div>
    // </div>

    <div className={styles.container}>
      {item.map((category,index) => (
        <Item category={category} key={index} setOpen={setOpen} handleCategory={handleCategory} handleSubCategory={handleSubCategory} handleModel={handleModel} />
      ))}
    </div>    
  );
};
export default FilterBarItem;
