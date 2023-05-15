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
const EditCoupon = ({ editCouponProps }) => {
  console.log(editCouponProps, "editCouponProps");
  const editorRef = useRef(null);
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
  const router = useRouter();

  const [code, setCode] = useState(editCouponProps.code);
  const [discount, setDiscount] = useState(editCouponProps.discount);
  const [limit, setLimit] = useState(editCouponProps.limit);

  const editCoupon = (e) => {
    e.preventDefault();

    axios
      .put(
        `${process.env.NEXT_PUBLIC_GAID}/dashboard/coupon/${editCouponProps._id}`,
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
        console.log(error);
      });
  };

  return (
    <div className={styles.products}>
      <Sidebar />
      <div className={styles.productsContainer}>
        <div className={styles.new}>
          <div className={styles.newContainer}>
            <div className={styles.top}>
              <h1>Edit Coupon</h1>
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
                <TextField
                  sx={{ my: 5, mx: 1, width: 300 }}
                  id="outlined-basic"
                  label="Edit Code"
                  value={code}
                  variant="outlined"
                  onChange={(e) => setCode(e.target.value)}
                />
                <TextField
                  sx={{ my: 5, mx: 1, width: 200 }}
                  id="outlined-basic"
                  label="Edit Discount"
                  value={discount}
                  variant="outlined"
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <TextField
                  sx={{ my: 5, width: 200 }}
                  id="outlined-basic"
                  label="Edit Limit"
                  value={limit}
                  variant="outlined"
                  onChange={(e) => setLimit(e.target.value)}
                />

                <Box sx={{ margin: "auto" }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={editCoupon}
                  >
                    Edit Coupon
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
  const editCoupon = await axios.get(
    `${process.env.NEXT_PUBLIC_GAID}/dashboard/coupon/${ctx.params.id}`,

    {
      headers: {
        Authorization: token,
      },
    }
  );

  return {
    props: {
      editCouponProps: editCoupon.data.data,
    },
  };
};

export default EditCoupon;
