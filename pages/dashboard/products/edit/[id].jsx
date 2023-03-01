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

const EditProduct = ({ getById }) => {
    console.log(getById,'getById')
  const router = useRouter();

  // images
  const [image, setImage] = useState([]);
  const [imagePath, setImagePath] = useState([]);
  const [imageScreens, setImageScreens] = useState([]);
  const [uploading, setUploading] = useState(null);


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
  

  console.log(category._id ,'category' ,selectedSubcategory._id ,"selectedSubcategory" ,selectedModel._id ,"selectedModel")
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
    const [sale, setSale] = useState(false); 
  const [isNew, setIsNew] = useState(false); 
  const [colors, setColors] = useState([]); 
  const [description, setDescription] = useState("write here what you need to explain about product"); 

  console.log(colors,'colors')
  const handleSale = (e) => {
 
  setSale(e.target.value)
  }

  const handleIsNew = (e) => {
  
    setIsNew(e.target.value)
}
  const handleColors = (e) => {
   setColors((prev) => [...prev, e.target.value])
  }


  const handleDescription = (e) => {
    setDescription(e.target.value)
   }
  

  const [size, seSize] = useState([]);
  const [sizeInput, setSizeInput] = useState(null);

console.log(size ,"size")
  const handleSizeInputs = (e) => {
    e.preventDefault();
    setSizeInput({ ...sizeInput, [e.target.name]: e.target.value });
  };

  const handleSize = (e) => {
    e.preventDefault();
    seSize((prev) => [...prev, sizeInput]);
  };
  const [addDataInputs, setAddDataInputs] = useState(null);
  console.log(addDataInputs ,"addDataInputs")
const addData =(e) => {
    e.preventDefault(); 
    setAddDataInputs({ ...addDataInputs, [e.target.name]: e.target.value });
}
  const addProduct = (e) => {
    e.preventDefault();

    axios
      .post("https://tesla-lightning.herokuapp.com/dashboard/product/63f73b458d582e1e78c4037e", {
       
        "category": category._id,
        "subCategory": selectedSubcategory._id,
        "model": selectedModel._id,
        "sale": sale,
        "new": isNew,
        "colors": colors,
        "size": size,
        "cover": imagePath[0],
        "images":imagePath ,
        "description": description,
        ...addDataInputs
    },{
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

    const productInputs = [
      { 
        id: 1,
        label: "Title",
        name:"title",
        type: "text",
        placeholder: "Title",
      },
      
      {
        id: 2,
        label: "Price",
        type: "number",
        name:"price",
        placeholder: "shippingCost",
        min: "1",
      },
      {
        id: 3,
        label: "ShippingCost",
        type: "number",
        name:"shippingCost",
        placeholder: "shippingCost",
        min: "1",
      },
      {
        id: 4,
        label: "Discount",
        type: "number",
        name:"discount",
        placeholder: "Discount",
        min: "1",
      },
      {
        id: 5,
        label: "Stock",
        type: "number",
        name:"stock",
        placeholder: "Stock",
        min: "1",
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
  {/* Sale */} 
        <Box sx={{ mx: "auto", my: 10, width: 500 }}>
      <FormControl sx={{  minWidth: 500 }} > 
        <InputLabel id="demo-simple-select-label">Sale</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sale}
          label="sale"
          onChange={handleSale}
            >
           
                <MenuItem value={true} >true</MenuItem>
                <MenuItem value={false} >false</MenuItem>
     
     
        </Select>
      </FormControl>
                  </Box>
                    {/* isNew */} 
        <Box sx={{ mx: "auto", my: 10, width: 500 }}>
      <FormControl sx={{  minWidth: 500 }} > 
        <InputLabel id="demo-simple-select-label">isNew</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={isNew}
          label="isNew"
          onChange={handleIsNew}
            >
           
                <MenuItem value={true} >true</MenuItem>
                <MenuItem value={false} >false</MenuItem>
     
     
        </Select>
      </FormControl>
                  </Box>
                                      {/* Colors */} 
        <Box sx={{ mx: "auto", my: 10, width: 500 }}>
      <FormControl sx={{  minWidth: 500 }} > 
        <InputLabel id="demo-simple-select-label">Colors</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={colors}
          label="colors"
          onChange={handleColors}
            >
           
                        <MenuItem value={"Gold"} >Gold</MenuItem>
                        <MenuItem value={"Black"} >Black</MenuItem>
                        <MenuItem value={"Brown"} >Brown</MenuItem>
                        <MenuItem value={"Blue"} >Blue</MenuItem> 
                        <MenuItem value={"Green"} >Green</MenuItem>
                      </Select>
                      {colors?.map((color) => (
                        <span>{color}</span>
                      ))}
      </FormControl>
        </Box>
                  {productInputs.map((input) => (
                    <div className={styles.formInput} key={input.id}>
                      <label>{input.label}</label>

                      <input
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        min={input.min}
                        onChange = {addData}
                      />
                    </div>
                  ))}
                  <textarea onChange={handleDescription } value = {description} />
                  
                  <div className={styles.item}>
          <label className={styles.label}>Extra</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="value"
              placeholder="value"
              name="value"
              onChange={handleSizeInputs}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleSizeInputs}
            />
            <button className={styles.extraButton} onClick={handleSize}>
              Add Size
            </button>
          </div>
          <div className={styles.extraItems}>
            {size.map((option) => (
              <span key={option.value} className={styles.extraItem}>
                {option.value} => {option.price} $
              </span>
            ))}
          </div>
        </div>
                  <button onClick={addProduct}>Add Product</button>
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
    `https://tesla-lightning.herokuapp.com/dashboard/product/63defab477182fb0bdf96568`,

    {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlNjBhZDdiOWZiNDZkZjI4MzZkNzkiLCJpYXQiOjE2NzU1MTg2MDQsImV4cCI6MjI4MDMxODYwNH0.n-_K3QKqNB612L6wD9cCTFNp76DycxFlrJVQMlZE9C0",
      },
    }
  );

  return {
    props: {
      getById: res.data.data,
    },
  };
};

export default EditProduct;
