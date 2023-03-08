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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const GetProduct = ({ categoryList, EditRes }) => {
  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData("Product ID", EditRes?.product?._id),
    createData("Title", EditRes?.product?.title),
    createData("Category", EditRes?.product?.category?.name),
    createData("SubCategory", EditRes?.product?.subCategory?.name),
    createData("Number", EditRes?.product?.number),
    createData("Price", EditRes?.product?.price + " " + "$"),
    createData("Discount", EditRes?.product?.discount + " " + "$"),
    createData("shippingCost", EditRes?.product?.shippingCost + " " + "$"),
    createData("Stock", EditRes?.product?.stock + " " + "items"),
    createData("No. of Favorite", EditRes?.product?.favorites),
    createData(
      "Sizes",
      <div>
        {EditRes?.product?.size.map((item) => (
          <h4>
            {item.value}" => {item.price} $
          </h4>
        ))}
      </div>
    ),
    createData(
      "Colors",
      <div>
        {EditRes?.product?.colors.map((item) => (
          <h4>{item}</h4>
        ))}
      </div>
    ),
  ];

  const editorRef = useRef(null);
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
  const router = useRouter();

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
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 10,
                    width: "800px",
                  }}
                  fullWidth
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {EditRes.product.images.map((img) => (
                        <Box sx={{ marginRight: "30px" }}>
                          <Image src={img.path} width="150" height="150" />
                        </Box>
                      ))}
                    </Box>

                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1050 }} aria-label="simple table">
                        <TableBody sx={{ fontWeight: "bold" }}>
                          {rows.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">{row.value}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
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
    `http://18.214.112.247:4000/category/list`,

    {
      headers: {
        Authorization: token,
      },
    }
  );

  const EditRes = await axios.get(
    `http://18.214.112.247:4000/product/${ctx.params.id}`,

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
