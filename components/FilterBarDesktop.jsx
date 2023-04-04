import styles from "./../styles/FilterBarDesktop.module.css";
import FilterBarItem from "./FilterBarItem";
import primaryMenus from "../utils/navbar.json";
import { Close } from "@mui/icons-material";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
const FilterBarDesktop = ({
    setOpenDesktop,
  openDesktop,
  handleFilter,
  categoryProps,
  handleCategories,
  handleSubCategories,
  handleModels
}) => {

  const { menus } = primaryMenus;
  const [value, setValue] = useState([0, 30000]);

  useEffect(() => {
    setValue[(0, 30000)];
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const FilterButton = () => {
    handleFilter(value);
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <h1 className={`primaryText ${styles.title}`}>Filter</h1>
        {/* <Close onClick={() => setOpenDesktop(false)} className={styles.close} /> */}
      </div>
      <div className={styles.hr}></div>
      <div className={styles.wrapper}>
        {/* <span>{categoryProps.map((item, i) => (
          item.name
        ))}</span> */}
        {/* {categoryProps.map((item, i) => ( */}
          <FilterBarItem
            // key={i}
            item={categoryProps}
            handleCategories={handleCategories}
            handleSubCategories={handleSubCategories}
            handleModels={handleModels}
          />
        {/* ))} */}
      </div>
      <div className={styles.hr}></div>
      <h1 className={`primaryText ${styles.title}`}>Price</h1>
      <Box
        // className={styles.bottom}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={30000}
          className={styles.slider}
        />
        <span className={styles.prices}>Price: $0.00 – $30000.00</span>
        <Button
          variant="contained"
          color="success"
          sx={{
            width: "40% !important",
            color: "white !important",
            background: "black !important",
            padding: "10px 15px !important",
            margin: "20px 0px 40px !important",
          }}
          onClick={FilterButton}
        >
          Filter
        </Button>
      </Box>
    </div>
  );
};

export default FilterBarDesktop;