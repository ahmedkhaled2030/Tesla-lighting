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
const EditCategory = ({ editProps }) => {
  console.log(editProps ,'editProps')
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
  const [imagePath, setImagePath] = useState();
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
      .post(`${process.env.NEXT_PUBLIC_GAID}/product/upload`, formData, {
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
          setImagePath(item._id);
          setImageScreens((oldArray) => [...oldArray, item.path]);
        });
      })
      .catch((error) => {
        //console.log(error);
      });
  };
  // images

  const [name, setName] = useState(editProps.name);

  const handleCategoryName = (event) => {
    //console.log(event.target.value, "event.target.value");
    setName(event.target.value);
  };

  const editCategory = (e) => {
    e.preventDefault();

    console.log({
      name:name,
      image: imagePath,
    });

    axios
      .put(
        `${process.env.NEXT_PUBLIC_GAID}/dashboard/category/${editProps._id}`,
        {
          name:name,
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
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <form>
                <Box sx={{ mx: "auto", my: 2, width: 500 }}>
            <label htmlFor="file">
              Image: <DriveFolderUploadOutlined className={styles.icon} />
            </label>
            <input
              type="file"
              id="file"
              onChange={handleImage}
              style={{ display: "none" }}
            />

            <Button
              onClick={uploadImages}
              sx={{ my: 1, mx: 5, width: 150 }}
              variant="contained"
              color="secondary"
              disabled={image.length == 0}
            >
              Upload Image
            </Button>
            <Box sx={{ position: "relative", display: "inline-flex", mx: 5 }}>
              {uploading && (
                <CircularProgress variant="determinate" value={uploading} />
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
                  </Box>
                  <Box>
                  <TextField
              sx={{ my: 5, width: 500 }}
              id="outlined-basic"
              label="Edit Category Name"
              value={name}
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
                  </Box>
                 
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
    `${process.env.PRIVATE_URL}/dashboard/category/${ctx.params.id}`,

    { 
      headers: {
        Authorization: token,
      },
    }
  );

  return {
    props: {

      editProps: editRes.data.data,
    },
  };
};

export default EditCategory;
