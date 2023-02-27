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
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import Image from "next/image";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import NavbarDashboard from "@/components/NavbarDashboard";

const AddProduct = ({ categoryList }) => {
  const router = useRouter();

  // images
  const [image, setImage] = useState([]);
  const [imagePath, setImagePath] = useState([]);
  const [imageScreens, setImageScreens] = useState([]);
  const [uploading, setUploading] = useState(null);
  console.log(imageScreens, "imageScreens");

  const handleImage = (e) => {
    console.log(e.target.files);
    setImage(e.target.files);
  };
  const uploadImages = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (var item of image) {
      formData.append("image", item);
    }

    axios
      .post("https://tesla-lightning.herokuapp.com/product/upload", formData, {
        onUploadProgress: (data) => {
          setUploading(Math.round((data.loaded / data.total) * 100));
        },
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlNjBhZDdiOWZiNDZkZjI4MzZkNzkiLCJpYXQiOjE2NzU1MTg2MDQsImV4cCI6MjI4MDMxODYwNH0.n-_K3QKqNB612L6wD9cCTFNp76DycxFlrJVQMlZE9C0",
        },
      })
      .then((res) => {
        console.log(res.data.data)
        res.data.data.map((item) => {
          setImagePath((oldArray) => [...oldArray, item._id]);
          setImageScreens((oldArray) => [...oldArray, item.path]);
          
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // images


  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState([]);
  const [selectedSubcategory, setSelectedSubCategory] = useState("");
  const [model, setModel] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [status, setStatus] = useState(""); 

  // console.log(category._id ,'category' ,selectedSubcategory._id ,"selectedSubcategory" ,selectedModel._id ,"selectedModel")
  const handleCategory = (event) => {
    console.log(event.target.value
      ,"event.target.value")
      setCategory(event.target.value);
      setSubCategory(event.target.value.subCategories);
    };
   
  
    const handleSubCategory = (e) => {
      console.log(e.target.value)
      setSelectedSubCategory(e.target.value);
      setModel(e.target.value.subCategories);
    };

  
    const handleModel = (e) => {
      setSelectedModel(e.target.value);
    }


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
   
                {imageScreens.map((img) => (
                  <Image
          src={img}
          alt={img}
          width="100"
          height="100"
          objectFit="contain"
        />
           
                ))}
               
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
                      multiple
                      onChange={handleImage}
                      style={{ display: "none" }}
                    />
                    <button onClick={uploadImages}>Upload Images</button>
                    <Box sx={{ position: "relative", display: "inline-flex",mx:5 }}>
                      {uploading && (
                        <CircularProgress
                          variant="determinate"
                          value={uploading}
                        />
                      )}
                      {uploading && (
                        <Box   
                          sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            variant="caption"
                            component="div"
                            color="text.secondary"
                          >
                            {uploading}%
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </div>


                  <Box sx={{ mx: "auto", my: 2, width: 500 }}>
      <FormControl sx={{  minWidth: 500 }} > 
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleCategory}
            >
              {categoryList.map((item) => (
                <MenuItem value={item} key={item._id}>{item.name}</MenuItem>
              ))}
     
     
        </Select>
      </FormControl>
        </Box>

       {/* SubcategoryList */} 
        <Box sx={{ mx: "auto", my: 10, width: 500 }}>
      <FormControl sx={{  minWidth: 500 }} > 
        <InputLabel id="demo-simple-select-label">sub Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedSubcategory}
          label="subcategory"
          onChange={handleSubCategory}
            >
              {subcategory.length >0 && subcategory.map((item) => (
                <MenuItem value={item} key={item._id}>{item.name}</MenuItem>
              ))}
     
     
        </Select>
      </FormControl>
        </Box>
        
  {/* Model */} 
  <Box sx={{ mx: "auto", my: 10, width: 500 }}>
      <FormControl sx={{  minWidth: 500 }} > 
        <InputLabel id="demo-simple-select-label">Model</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedModel}
          label="model"
          onChange={handleModel}
            >
              {model.length >0 && model.map((item) => (
                <MenuItem value={item} key={item._id}>{item.name}</MenuItem>
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
