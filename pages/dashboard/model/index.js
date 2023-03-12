import styles from "../../../styles/ProductsDashboard.module.scss";
import React, { useEffect, useState } from "react";

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
import NavbarDashboard from "@/components/NavbarDashboard";
import Cookies from "js-cookie";
const Model = ({ categoryList }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState([]);
  const [selectedSubcategory, setSelectedSubCategory] = useState("");
  const [model, setModel] = useState("");
  const [status, setStatus] = useState("");

  const handleCategory = (event) => {
    setCategory(event.target.value);
    setSubCategory(event.target.value.subCategories);
  };

  const handleSubCategory = (e) => {
    ////console.log(e.target.value)
    setSelectedSubCategory(e.target.value);
  };
  const addSubCategory = async () => {
    try {
      const res = await axios.post(
        `http://18.214.112.247:4000/dashboard/category`,
        {
          name: subcategory,
          parent: category._id,
        },

        {
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await res;

      setStatus("SubCategory created successfully");
      setCategory("");
      setSubCategory("");
      // router.push("/dashboard/products");
    } catch (err) {
      setStatus("SubCategory with same name exist");
      setCategory("");
      setSubCategory("");
    }
  };

  const handleModel = (e) => {
    setModel(event.target.value);
  };
  const addModel = async () => {
    try {
      const res = await axios.post(
        `http://18.214.112.247:4000/dashboard/category`,
        {
          name: model,
          parent: selectedSubcategory,
        },

        {
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await res;

      setStatus("Model created successfully");
      setCategory("");
      setSubCategory("");
      setModel("");
      // router.push("/dashboard/products");
    } catch (err) {
      setStatus("Model with same name exist");
      setCategory("");
      setSubCategory("");
    }
  };
  return (
    <div className={styles.products}>
      <Sidebar />
      <div className={styles.productsContainer}>
        {/* categoryList */}
        <Box sx={{ mx: "auto", my: 2, width: 500 }}>
          <FormControl sx={{ minWidth: 500 }}>
            <InputLabel id="demo-simple-select-label">category</InputLabel>
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
        </Box>

        {/* SubcategoryList */}
        <Box sx={{ mx: "auto", my: 10, width: 500 }}>
          <FormControl sx={{ minWidth: 500 }}>
            <InputLabel id="demo-simple-select-label">sub Category</InputLabel>
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
        </Box>

        {/* add Model */}
        <Box sx={{ mx: "auto", my: 5, width: 500 }}>
          <TextField
            sx={{ my: 5, width: 500 }}
            id="outlined-basic"
            label="Select Model"
            value={model}
            variant="outlined"
            onChange={handleModel}
          />

          <Box sx={{ textAlign: "center" }}>
            <Button
              onClick={addModel}
              sx={{ my: 1, width: 150 }}
              variant="contained"
              color="success"
            >
              Add Model
            </Button>
          </Box>
        </Box>

        {status == "Model created successfully" && (
          <Box sx={{ mx: "auto", my: 5, width: 500 }}>
            <Box
              sx={{
                textAlign: "center",
                fontSize: "0.875rem",
                fontFamily: "sans",
              }}
            >
              <Image
                src="/img/done.png"
                alt=""
                height="150px"
                width="150px"
                objectFit="contain"
              />
              <h2>{status}</h2>
            </Box>
          </Box>
        )}
        {status == "Model with same name exist" && (
          <Box sx={{ mx: "auto", my: 5, width: 500 }}>
            <Box sx={{ textAlign: "center", fontSize: "0.875rem" }}>
              <Image
                src="/img/wrong.png"
                alt=""
                height="150px"
                width="150px"
                objectFit="contain"
              />
              <h2>{status}</h2>
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const token = ctx.req?.cookies.token || "";
  const res = await axios.get(
    // `http://18.214.112.247:4000/product/${params.id}`
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

export default Model;
