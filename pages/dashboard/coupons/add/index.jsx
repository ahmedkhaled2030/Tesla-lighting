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
const AddCoupon = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
  const router = useRouter();

  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [limit, setLimit] = useState("");

  const handleCode = (e) => {
    e.preventDefault();
    setCode(e.target.value)
  } 

  const handleDiscount = (e) => {
    e.preventDefault();
    setDiscount(e.target.value)
  } 

  const handleLimit = (e) => {
    e.preventDefault();
    setLimit(e.target.value)
  } 

  const addCoupon = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://18.214.112.247:4000/dashboard/coupon",
        {
          code: code,
          discount: discount,
          limit: limit,
      
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        router.push(`/dashboard/coupons`);
      })
      .catch((error) => {
console.log(error)
      })
  };

  return (
    <div className={styles.products}>
      <Sidebar />
      <div className={styles.productsContainer}>
        <div className={styles.new}>
          <div className={styles.newContainer}>
            <div className={styles.top}>
              <h1>Add Coupon</h1>
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
                    <TextField
                      id="outlined-basic"
                      label="Code"
                      variant="outlined"
                      name="code"
                      onChange={handleCode}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Discount"
                      name="discount"
                      variant="outlined"
                      onChange={handleDiscount}
                    />

                    <TextField
                      id="outlined-basic"
                      label="Limit"
                      name="limit"
                      variant="outlined"
                      onChange={handleLimit}
                    />
                  </Box>
                </form>

                <Box sx={{ margin: "auto", marginTop: "20px" }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={addCoupon}
                  >
                    Add Coupon
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

export default AddCoupon;
