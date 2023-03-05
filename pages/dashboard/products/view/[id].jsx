import styles from "../../../../styles/addProductDashboard.module.scss";
import React, { useEffect, useRef, useState } from "react";

import Sidebar from "@/components/SideBarDashboard";
import DataTableDashboard from "@/components/DataTableDashboard";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Alert,
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
const GetProduct = ({ categoryList, EditRes }) => {
  console.log(EditRes.product, "EditRes");
  const editorRef = useRef(null);
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
  const router = useRouter();

  // images
  const [image, setImage] = useState([]);
  const [imagePath, setImagePath] = useState([]);
  const [imageScreens, setImageScreens] = useState(
    EditRes.product.images.map((item, i) => item.path)
  );
  const [uploading, setUploading] = useState(null);

  const handleImage = (e) => {
    // ////console.log(e.target.files);
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
        // ////console.log(res.data.data);
        res.data.data.map((item) => {
          setImagePath((oldArray) => [...oldArray, item._id]);
          setImageScreens((oldArray) => [...oldArray, item.path]);
        });
      })
      .catch((error) => {
        // ////console.log(error);
      });
  };
  // images
  // console.log(EditRes?.product?.category ,'EditRes?.product?.category')
  const editedCategory = categoryList.filter(
    (item) => item.name == EditRes?.product?.category.name
  );

  const [category, setCategory] = useState(editedCategory[0]);
  const [subcategory, setSubCategory] = useState([]);
  const [selectedSubcategory, setSelectedSubCategory] = useState(
    EditRes.product.subCategory
  );
  const [model, setModel] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [status, setStatus] = useState("");

  // ////console.log(
  //   category._id,
  //   "category",
  //   selectedSubcategory._id,
  //   "selectedSubcategory",
  //   selectedModel._id,
  //   "selectedModel"
  // );
  const handleCategory = (event) => {
    //console.log(event.target.value, "event.target.value");
    setCategory(event.target.value);
    setSubCategory(event.target.value.subCategories);
  };

  const handleSubCategory = (e) => {
    //console.log(e.target.value);
    setSelectedSubCategory(e.target.value);
    setModel(e.target.value.subCategories);
  };

  const handleModel = (e) => {
    setSelectedModel(e.target.value);
  };
  const [sale, setSale] = useState(EditRes.product.sale);
  const [isNew, setIsNew] = useState(EditRes.product.new);
  const [colors, setColors] = useState(EditRes.product.colors);
  const [description, setDescription] = useState(EditRes.product.description);

  ////console.log(colors, "colors");
  const handleSale = (e) => {
    console.log(e.target.value);
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

  const [size, seSize] = useState(EditRes.product.size);
  const [sizeInput, setSizeInput] = useState(null);

  ////console.log(size, "size");
  const handleSizeInputs = (e) => {
    ////console.log('')
    e.preventDefault();
    setSizeInput({ ...sizeInput, [e.target.name]: e.target.value });
  };

  const handleSize = (e) => {
    e.preventDefault();
    seSize((prev) => [...prev, sizeInput]);
  };
  const [addDataInputs, setAddDataInputs] = useState(null);
  ////console.log(addDataInputs, "addDataInputs");
  const addData = (e) => {
    e.preventDefault();
    setAddDataInputs({ ...addDataInputs, [e.target.name]: e.target.value });
  };
  const editProduct = (e) => {
    e.preventDefault();

    axios
      .put(
        `https://tesla-lightning.herokuapp.com/dashboard/product/${EditRes.product._id}`,
        {
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
        ////console.log(res.data.data);
        setImage([]);
        setImagePath([]);
        setImageScreens([]);
        setUploading(null);
        setCategory("");
        setSubCategory([]);
        setSelectedSubCategory("");
        setModel("");
        setSelectedModel("");
        setStatus("");
        setSale("");
        setIsNew("");
        setColors([]);
        setDescription("");
        seSize([]);
        setSizeInput(null);
      })
      .catch((error) => {
        ////console.log(error);
      });
  };
  const { title, shippingCost, discount, price, stock } = EditRes.product;
  // //console.log({ title, shippingCost ,discount ,price ,stock})
  const productInputs = [
    {
      id: 1,
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "Title",
      value: title,
    },

    {
      id: 2,
      label: "Price",
      type: "number",
      name: "price",
      placeholder: "Price",
      min: "1",
      value: price,
    },
    {
      id: 3,
      label: "ShippingCost",
      type: "number",
      name: "shippingCost",
      placeholder: "shippingCost",
      min: "1",
      value: shippingCost,
    },
    {
      id: 4,
      label: "Discount",
      type: "number",
      name: "discount",
      placeholder: "Discount",
      min: "1",
      value: discount,
    },
    {
      id: 5,
      label: "Stock",
      type: "number",
      name: "stock",
      placeholder: "Stock",
      min: "1",
      value: stock,
    },
  ];

  return (
    <div className={styles.products}>
      <Sidebar />
      <div className={styles.productsContainer}>
        <div className={styles.new}>
          <div className={styles.newContainer}>
            <div className={styles.top}>
              <h1>View Product</h1>
            </div>

            <div className={styles.bottom} style={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                style={{ width: "100%" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {imageScreens.map((img) => (
                    <Box sx={{ mr: 2 }}>
                      {" "}
                      <Image
                        src={img}
                        alt={img}
                        width="150"
                        height="150"
                        objectFit="contain"
                      />
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 10,
                    width: "800px",
                  }}
                  fullWidth
                >
                  <Alert icon={false} severity="success" fullWidth>
                    <Box
                      sx={{
                        mt: 2,
                      }}
                      style={{ width: "100%" }}
                    >
                      <h3>Product ID : {EditRes.product._id}</h3>
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                      }}
                    >
                      <h3>Title : {EditRes.product.title}</h3>
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                      }}
                    >
                      <h3>Category : {EditRes.product.category.name}</h3>
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                      }}
                    >
                      <h3>SubCategory : {EditRes.product.subCategory.name}</h3>
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                      }}
                    >
                      <h3>Number : {EditRes.product.number}</h3>
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                      }}
                    >
                      <h3>Price : {EditRes.product.price} $</h3>
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                      }}
                    >
                      <h3>Discount : {EditRes.product.discount} $</h3>
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                      }}
                    >
                      <h3>ShippingCost : {EditRes.product.shippingCost} $</h3>
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                      }}
                    >
                      <h3>Stock : {EditRes.product.stock} items</h3>
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                      }}
                    >
                      <h3>No. of Favorite : {EditRes.product.favorites}</h3>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        mt: 2,
                      }}
                    >
                      <h3>Colors :</h3>
                      {EditRes?.product?.colors.map((item) => (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          <h3>{item}</h3>
                        </Box>
                      ))}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        mt: 2,
                      }}
                    >
                      <h3>Sizes :</h3>
                      {EditRes?.product?.size.map((item) => (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          <h3>
                            {item.value}" => {item.price}${" "}
                          </h3>
                        </Box>
                      ))}
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                      }}
                    >
                      <h3>Description:</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: EditRes.product.description,
                        }}
                      ></p>
                    </Box>
                  </Alert>
                  <Box sx={{ mt: 5 }}>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() =>
                        router.push(`/product/${EditRes.product._id}`)
                      }
                    >
                      View this product as a user
                    </Button>
                  </Box>
                </Box>
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
  const categoryRes = await axios.get(
    `https://tesla-lightning.herokuapp.com/category/list`,

    {
      headers: {
        Authorization: token,
      },
    }
  );

  const EditRes = await axios.get(
    `https://tesla-lightning.herokuapp.com/product/${ctx.params.id}`,

    {
      headers: {
        Authorization: token,
      },
    }
  );

  return {
    props: {
      categoryList: categoryRes.data.data,
      EditRes: EditRes.data.data,
    },
  };
};

export default GetProduct;
