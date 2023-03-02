import styles from "../../../../styles/addProductDashboard.module.scss";
import React, { useEffect, useRef, useState } from "react";

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
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import Image from "next/image";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { Editor } from "@tinymce/tinymce-react";
import NavbarDashboard from "@/components/NavbarDashboard";
import Cookies from "js-cookie";
const AddProduct = ({ categoryList }) => {
  const editorRef = useRef(null);
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
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
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data.data);
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

  console.log(
    category._id,
    "category",
    selectedSubcategory._id,
    "selectedSubcategory",
    selectedModel._id,
    "selectedModel"
  );
  const handleCategory = (event) => {
    console.log(event.target.value, "event.target.value");
    setCategory(event.target.value);
    setSubCategory(event.target.value.subCategories);
  };

  const handleSubCategory = (e) => {
    console.log(e.target.value);
    setSelectedSubCategory(e.target.value);
    setModel(e.target.value.subCategories);
  };

  const handleModel = (e) => {
    setSelectedModel(e.target.value);
  };
  const [sale, setSale] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [colors, setColors] = useState([]);
  const [description, setDescription] = useState(
    "write here what you need to explain about product"
  );

  console.log(colors, "colors");
  const handleSale = (e) => {
    setSale(e.target.value);
  };

  const handleIsNew = (e) => {
    setIsNew(e.target.value);
  };
  const handleColors = (e) => {
    setColors((prev) => [...prev, e.target.value]);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const [size, seSize] = useState([]);
  const [sizeInput, setSizeInput] = useState(null);

  console.log(size, "size");
  const handleSizeInputs = (e) => {
    console.log('')
    e.preventDefault();
    setSizeInput({ ...sizeInput, [e.target.name]: e.target.value });
  };

  const handleSize = (e) => {
    e.preventDefault();
    seSize((prev) => [...prev, sizeInput]);
  };
  const [addDataInputs, setAddDataInputs] = useState(null);
  console.log(addDataInputs, "addDataInputs");
  const addData = (e) => {
    e.preventDefault();
    setAddDataInputs({ ...addDataInputs, [e.target.name]: e.target.value });
  };
  const addProduct = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://tesla-lightning.herokuapp.com/product",
        {
          category: category._id,
          subCategory: selectedSubcategory._id,
          model: selectedModel._id,
          sale: sale,
          new: isNew,
          colors: colors,
          size: size,
          cover: imagePath[0],
          images: imagePath,
          description: editorRef.current.getContent(),
          ...addDataInputs,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setImage([])
        setImagePath([])
        setImageScreens([])
        setUploading(null)
        setCategory("")
        setSubCategory([])
        setSelectedSubCategory("")
        setModel("")
        setSelectedModel("")
        setStatus("")
        setSale("")
        setIsNew("")
        setColors([])
        setDescription('')
        seSize([])
        setSizeInput(null)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const productInputs = [
    {
      id: 1,
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "Title",
    },

    {
      id: 2,
      label: "Price",
      type: "number",
      name: "price",
      placeholder: "shippingCost",
      min: "1",
    },
    {
      id: 3,
      label: "ShippingCost",
      type: "number",
      name: "shippingCost",
      placeholder: "shippingCost",
      min: "1",
    },
    {
      id: 4,
      label: "Discount",
      type: "number",
      name: "discount",
      placeholder: "Discount",
      min: "1",
    },
    {
      id: 5,
      label: "Stock",
      type: "number",
      name: "stock",
      placeholder: "Stock",
      min: "1",
    },
  ];

  return (
    <div className={styles.products}>
      <Sidebar />
      <div className={styles.productsContainer}>
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
              <Box className={styles.right} sx={{  display: 'flex' ,justifyContent: 'flex-start' ,flexWrap: 'wrap' }}>
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
                    <button onClick={uploadImages}  className={styles.buttonTeal}>Upload Images</button>
                    <Box sx={{ position: "relative" }}>
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

         
                    <FormControl sx={{ minWidth: 200 }}>
                      <InputLabel id="demo-simple-select-label">
                        category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={handleCategory}
                      >
                        {categoryList.map((item) => (
                          <MenuItem value={item} key={item._id}>
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
               

                  {/* SubcategoryList */}
       
                    <FormControl sx={{ minWidth: 200 }}>
                      <InputLabel id="demo-simple-select-label">
                        sub Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedSubcategory}
                        label="subcategory"
                        onChange={handleSubCategory}
                      >
                        {subcategory.length > 0 &&
                          subcategory.map((item) => (
                            <MenuItem value={item} key={item._id}>
                              {item.name}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
           

                  {/* Model */}
              
                    <FormControl sx={{ minWidth: 200 }}>
                      <InputLabel id="demo-simple-select-label">
                        Model
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedModel}
                        label="model"
                        onChange={handleModel}
                      >
                        {model.length > 0 &&
                          model.map((item) => (
                            <MenuItem value={item} key={item._id}>
                              {item.name}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
         
                  {/* Sale */}
               
                    <FormControl sx={{ minWidth: 200 }}>
                      <InputLabel id="demo-simple-select-label">
                        Sale
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sale}
                        label="sale"
                        onChange={handleSale}
                      >
                        <MenuItem value={true}>true</MenuItem>
                        <MenuItem value={false}>false</MenuItem>
                      </Select>
                    </FormControl>
              
                  {/* isNew */}
      
                    <FormControl sx={{ minWidth: 200 }}>
                      <InputLabel id="demo-simple-select-label">
                        isNew
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={isNew}
                        label="isNew"
                        onChange={handleIsNew}
                      >
                        <MenuItem value={true}>true</MenuItem>
                        <MenuItem value={false}>false</MenuItem>
                      </Select>
                    </FormControl>
              
                  {/* Colors */}
        
                    <FormControl sx={{ width: 200 }}>
                      <InputLabel id="demo-simple-select-label">
                        Colors
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={colors}
                        label="colors"
                        onChange={handleColors}
                      >
                        <MenuItem value={"Gold"}>Gold</MenuItem>
                        <MenuItem value={"Black"}>Black</MenuItem>
                        <MenuItem value={"Brown"}>Brown</MenuItem>
                        <MenuItem value={"Blue"}>Blue</MenuItem>
                        <MenuItem value={"Green"}>Green</MenuItem>
                      </Select>
                      {colors?.map((color) => (
                        <span>{color}</span>
                      ))}
                    </FormControl>
           
  
                    {productInputs.map((input) => (
                      <div key={input.id}>
                        <TextField
                          sx={{ width: 250 }}
                          id="outlined-basic"
                          label={input.label}
                          variant="outlined"
                          type={input.type}
                          name={input.name}
                          placeholder={input.placeholder}
                          min={input.min}
                          onChange={addData}
                        />
                      </div>
                    ))}
            


                     <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor link lists",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount ",
          ],
          toolbar:
            "undo redo | formatselect | lists" +
            " fontsize fontfamily  | copy blockquote forecolor   backcolor  | strikethrough    " +
            "bold italic  underline | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
            />
                
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                        my:2
                      }}
                  >
                        <label className={styles.label}>Size</label>
                      <TextField
                        id="outlined-basic"
                        label="value"
                      variant="outlined"
                      name="value"
                        onChange={handleSizeInputs}
                      />
                      <TextField
                        id="outlined-basic"
                      label="Price"
                      name="price"
                        variant="outlined"
                        onChange={handleSizeInputs}
                      />

                      <Button
                        variant="contained"
                        color="success"
                        onClick={handleSize}
                      >
                        Add Size
                    </Button>
                    
                    <div className={styles.extraItems}>
                      {size.map((option) => (
                        <span key={option.value} className={styles.extraItem}>
                          {option.value} => {option.price} $
                        </span>
                      ))}
                    </div>
                    </Box>
                    
                    

                  <Button
                    variant="contained"
                    color="success"
                    onClick={addProduct}
             className={styles.buttonTeal}
                  >
                    Add Product
                  </Button>
                </form>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const token = ctx.req?.cookies.token || "";
  const res = await axios.get(
    `https://tesla-lightning.herokuapp.com/category/list`,

    {
      headers: {
        Authorization: token,
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
