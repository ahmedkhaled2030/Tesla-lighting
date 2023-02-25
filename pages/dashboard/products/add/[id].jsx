import styles from "../../../../styles/addProductDashboard.module.scss";
import React, { useState } from "react";

import Sidebar from "@/components/SideBarDashboard";
import DataTableDashboard from "@/components/DataTableDashboard";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import NavbarDashboard from "@/components/NavbarDashboard";

const AddProduct = ({ categoryList }) => {

  const router = useRouter();
    const [category, setCategory] = useState({});
    const [subCategory, setSubCategory] = useState([]);
  const [status, setStatus] = useState("");

  const [file, setFile] = useState("");
// console.log(subCategory ,'subCategory')
  const addCategory = async () => {
    try {
      const res = await axios.post(
        `https://tesla-lightning.herokuapp.com/dashboard/category`,
        {
          name: category,
        },

        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlNjBhZDdiOWZiNDZkZjI4MzZkNzkiLCJpYXQiOjE2NzU1MTg2MDQsImV4cCI6MjI4MDMxODYwNH0.n-_K3QKqNB612L6wD9cCTFNp76DycxFlrJVQMlZE9C0",
          },
        }
      );

      const data = await res;
      console.log(data.data.message, "data");
      setStatus(data.data.message);
      setCategory("");
      // router.push("/dashboard/products");
    } catch (err) {
      console.log(err.message);
      setStatus("Category with same name exist");
      setCategory("");
    }
  };
 
  const handleCategory = (e) => {    
    //   console.log(e.target.value);
      setCategory(e.target.value);
      setSubCategory(e.target.value.subCategories)
    //   console.log(subCategory ,'subCategory')
    };
    
  const  handleSubCategory = (e) => {    

   
  };     
  console.log(category ,'category' )  
console.log(subCategory ,'subCategory' )        
  const productInputs = [
    { 
      id: 1,
      label: "Title",
      type: "text",
      placeholder: "Title",
    },
    
    {
      id: 5,
      label: "ShippingCost",
      type: "number",
      placeholder: "shippingCost",
      min: "1",
    },
    {
      id: 6,
      label: "Sale",
      type: "number",
      placeholder: "sale",
      min: "1",
    },
    {
      id: 7,
      label: "Discount",
      type: "number",
      placeholder: "discount",
      min: "1",
    },
    {
      id: 8,
      label: "Stock",
      type: "text",
      placeholder: "stock",
    },
    {
      id: 9,
      label: "New",
      type: "text",
      placeholder: "new",
    },
    {
      id: 10,
      label: "Colors",
      type: "text",
      placeholder: "colors",
    },
    {
      id: 11,
      label: "Size",
      type: "text",
      placeholder: "size",
    },
    {
      id: 12,
      label: "Description",
      type: "text",
      placeholder: "description",
    },
  ];
  return (
    <div className={styles.products}>
      <Sidebar />
      <div className={styles.productsContainer}>
        <NavbarDashboard />
        <div className={styles.new}>
          <div className={styles.newContainer}>
            <div className={styles.top}>
              <h1>Add Product</h1>
            </div>
            <div className={styles.bottom}>
              <div className={styles.left}>
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt=""
                />
              </div>
              <div className={styles.right}>
                <form>
                  <div className={styles.formInput}>
                    <label htmlFor="file">
                      Image:{" "}
                      <DriveFolderUploadOutlined className={styles.icon} />
                    </label>
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                  </div>
                  <Box sx={{ mx: "auto", my: 2, width: 500 }}>
                    <FormControl sx={{ minWidth: 500 }}>
                      <InputLabel id="demo-simple-select-label">
                        category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="category"
                        onChange={handleCategory}
                      >
                        {categoryList.map((category) => (
                          <MenuItem value={category} key={category._id}>
                            {category.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ mx: "auto", my: 2, width: 500 }}>
                    <FormControl sx={{ minWidth: 500 }}>
                      <InputLabel id="demo-simple-select-label">
                        subCategory
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={subCategory.name}
                        label="subCategory" 
                        onChange={handleSubCategory}
                      >
                        {subCategory.map((sub) => (
                          <MenuItem value={sub} key={sub._id}>
                            {sub.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  {productInputs.map((input) => (
                    <div className={styles.formInput} key={input.id}>
                      <label>{input.label}</label>

                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        min={input.min}
                      />
                    </div>
                  ))}

                  <button>Add Product</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  console.log(params, "params");
  const res = await axios.get(
    `https://tesla-lightning.herokuapp.com/category/list`,

    {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlNjBhZDdiOWZiNDZkZjI4MzZkNzkiLCJpYXQiOjE2NzU1MTg2MDQsImV4cCI6MjI4MDMxODYwNH0.n-_K3QKqNB612L6wD9cCTFNp76DycxFlrJVQMlZE9C0",
      },
    }
  );

  return {
    props: {
      categoryList: res.data.data,
    },
  };
};

export default AddProduct;
