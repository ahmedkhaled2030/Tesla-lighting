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
  ListItem,
  MenuItem,
  Select,
  Snackbar,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/joy/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import Image from "next/image";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { Editor } from "@tinymce/tinymce-react";
import NavbarDashboard from "@/components/NavbarDashboard";
import Cookies from "js-cookie";
const EditProduct = ({ categoryList, editProps }) => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "left",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => {
    console.log(newState, "newState");
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const editorRef = useRef(null);
  const [token, setToken] = useState("");
  console.log(token, "token");
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
    //console.log(e.target.files);
    setImage(e.target.files);
  };
  const uploadImages = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (var item of image) {
      formData.append("image", item);
    }

    axios
      .post(`${NEXT_PUBLIC_GAID}/product/upload`, formData, {
        onUploadProgress: (data) => {
          setUploading(Math.round((data.loaded / data.total) * 100));
        },
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        //console.log(res.data.data);
        res.data.data.map((item) => {
          setImagePath((oldArray) => [...oldArray, item._id]);
          setImageScreens((oldArray) => [...oldArray, item.path]);
        });
      })
      .catch((error) => {
        //console.log(error);
      });
  };
  // images

  const [name, setName] = useState(editProps.product.category);

  const handleCategory = (event) => {
    //console.log(event.target.value, "event.target.value");
    setName(event.target.value);
  };

  const editCategory = (e) => {
    e.preventDefault();

    console.log({
      name,
      image: imagePath,
    });

    axios
      .put(
        `${process.env.NEXT_PUBLIC_GAID}/dashboard/category/${editProps.product._id}`,
        {
          name,
          image: imagePath,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        handleClick({
          vertical: "top",
          horizontal: "left",
        });
        router.push(`/dashboard/category`);
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  return (
    <div className={styles.products}>
      <Sidebar />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
      <div className={styles.productsContainer}>
        <div className={styles.new}>
          <div className={styles.newContainer}>
            <div className={styles.top}>
              <h1>Edit Category</h1>
            </div>
            <div className={styles.bottom}>
              <Box
                className={styles.right}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <form>
                  <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-label">Name</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={name}
                      label="name"
                      onChange={handleSale}
                    >
                      <MenuItem value={true}>true</MenuItem>
                      <MenuItem value={false}>false</MenuItem>
                    </Select>
                  </FormControl>
                </form>

                <Box sx={{ margin: "auto", marginTop: "20px" }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={editCategory}
                  >
                    Edit Category
                  </Button>
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
  console.log(ctx.params.id);

  const editRes = await axios.get(
    `${process.env.PRIVATE_URL}/product/${ctx.params.id}`,

    { 
      headers: {
        Authorization: token,
      },
    }
  );

  return {
    props: {
      categoryList: categoryRes.data.data,
      editProps: editRes.data.data,
    },
  };
};

export default EditProduct;
