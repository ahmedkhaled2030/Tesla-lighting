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
  ListItem,
  MenuItem,
  Select,
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
const AddCategory = ({ categoryList }) => {
  const colors = ["Gold", "Black", "Brown", "Blue", "Green"];

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
      .post("http://18.214.112.247:4000/product/upload", formData, {
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

  const [name, setName] = useState("");

  const handleCategory = (event) => {
    //console.log(event.target.value, "event.target.value");
    setName(event.target.value);
  };
  const addCategory = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://18.214.112.247:4000/dashboard/category",
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
        router.push(`/dashboard/category`);
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  return (
    <div className={styles.products}>
      <Sidebar />
      <div className={styles.productsContainer}>
        <div className={styles.new}>
          <div className={styles.newContainer}>
            <div className={styles.top}>
              <h1>Add Category</h1>
            </div>
            <div className={styles.bottom}>
              <div className={styles.left}>
                {imageScreens.map((img) => (
                  <Image
                    src={`http://18.214.112.247:4000/${img}`}
                    alt={img}
                    width="100"
                    height="100"
                    objectFit="contain"
                  />
                ))}
              </div>

              <Box
                className={styles.right}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <form>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <label htmlFor="file">
                      Image:
                      <DriveFolderUploadOutlined className={styles.icon} />
                    </label>
                    <input
                      type="file"
                      id="file"
                      multiple
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
                      Upload Images
                    </Button>
                    <Box
                      sx={{
                        position: "relative",
                        display: "inline-flex",
                        mx: 5,
                      }}
                    >
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
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 2,
                      my: 2,
                    }}
                  >
                    <label className={styles.label}>Name</label>
                    <TextField
                      id="outlined-basic"
                      label="name"
                      variant="outlined"
                      name="name"
                      onChange={handleCategory}
                    />
                  </Box>
                </form>

                <Box sx={{ margin: "auto", marginTop: "20px" }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={addCategory}
                  >
                    Add Category
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
  const res = await axios.get(
    `http://18.214.112.247:4000/category/list`,

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

export default AddCategory;
