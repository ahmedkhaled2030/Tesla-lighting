import styles from "../../../styles/ProductsDashboard.module.scss";
import React, { useEffect, useState } from "react";

import Sidebar from "@/components/SideBarDashboard";
import DataTableDashboard from "@/components/DataTableDashboard";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import NavbarDashboard from "@/components/NavbarDashboard";
import Cookies from "js-cookie";
const Category = () => {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [token, setToken] = useState("");
  ////console.log(token , "111111111111")
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const addCategory = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_GAID}/dashboard/category`,
        {
          name: category,
        },

        {
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await res;
      ////console.log(data.data.message, "data");
      setStatus(data.data.message);
      setCategory("");
      // router.push("/dashboard/products");
    } catch (err) {
      ////console.log(err.message);
      setStatus("Category with same name exist");
      setCategory("");
    }
  };

  return (
    <div className={styles.products}>
      <Sidebar />
      <div className={styles.productsContainer}>
        <Box sx={{ mx: "auto", my: 2, width: 500 }}>
          <TextField
            sx={{ my: 5, width: 500 }}
            id="outlined-basic"
            label="Add Category"
            value={category}
            variant="outlined"
            onChange={handleCategory}
          />
          <Box sx={{ textAlign: "center" }}>
            <Button
              onClick={addCategory}
              sx={{ my: 1, width: 150 }}
              variant="contained"
              color="success"
            >
              Add Category
            </Button>
          </Box>
        </Box>

        {status == "Category created successfully" && (
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
        {status == "Category with same name exist" && (
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

export default Category;
