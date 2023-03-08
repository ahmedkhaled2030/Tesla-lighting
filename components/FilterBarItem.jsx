import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/FilterBarItem.module.css";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Box } from "@mui/system";

const FilterBarItem = ({ item ,handleCategories }) => {
  // console.log(item, "item");
  const [open, setOpen] = useState(false);
  // console.log(open, "open");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  // useEffect(() => {
  //   setSelectedCategory(item.name)
  //   // setSelectedSubCategory(item)

  // }, [selectedCategory, selectedSubCategory])

  // console.log(selectedCategory, "selectedCategory");
  // console.log(selectedSubCategory, "selectedSubCategory");

  const handleCategory = (item) => {
    setSelectedCategory(item);
    setSelectedSubCategory(item.subCategories);
    setOpen(true);
    handleCategories(item , "category")
  };
  const handleSubCategory = (sub) => {

    setSelectedSubCategory(sub);
    setOpen(true)
    handleCategories(sub , "Subcategory")
  };
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
          <div onClick={() => handleCategory(item)}>{item.name}</div>
          {/* {item?.subCategories?.length >= 1 && (  */}
          <KeyboardArrowDownOutlined className={styles.toggleBtn} />
          {/* )} */}
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            ml: 4,
          }}
          className={styles.sidebarContent}
        >
          {selectedSubCategory !== "" &&
            selectedSubCategory.length >= 1 &&
            selectedSubCategory.map((child, index) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                }}
                key={index}
                onClick={() => handleSubCategory(child)}
              >
                {child.name}
                {/* {child?.subCategories?.length >= 1 && (
                    <KeyboardArrowDownOutlined  />
                  )} */}
              </Box>
            ))}
        </Box>
        {/* <div className={styles.sidebarContent}>
          {selectedModel !== "" && selectedModel.length > 1 &&
            selectedSubCategory.map((child, index) => (
              <div style={{ color: "red !important" }} key={index}  onClick={() => setSelectedSubCategory(child)}>
                {child.name}
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );
};
export default FilterBarItem;
