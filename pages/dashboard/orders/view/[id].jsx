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
  Divider,
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
const GetOrder = ({ orderProps }) => {
  console.log(orderProps ,'orderProps')
  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData("Order ID", orderProps._id),
    createData("Status ", orderProps?.status),
    createData("CreatedAt", orderProps?.createdAt),
    createData("Price", orderProps.price + " " + "$"),
    createData("Discount", orderProps.discount + " " + "$"),
    createData("ShippingCost ", orderProps?.shippingCost + " " + "$"),
    createData("User ID", orderProps?.address?.user),
    createData("User Address", orderProps?.address?.address),
    createData("User Phone", orderProps?.phone),
    createData("City", orderProps?.address?.city),
    createData("state", orderProps?.address?.state),
    createData("Email", orderProps?.user?.email),
    createData(
      "Name",
      orderProps?.user?.firstName + orderProps?.user?.lastName
    ),
    createData(
      "Products",
      <div>
        {orderProps?.products?.map((item, i) => (
          <Box>
            <h4>Product ID : {item?._id} </h4>
            <h4>Count : {item?.count} </h4>
            <h4>Color : {item?.color} </h4>
            <h3>Size : {item?.size} </h3>
            <Divider />
          </Box>
        ))}
      </div>
    ),
    // createData("SubCategory", EditRes.product.subCategory.name),
    // createData("Number", EditRes.product.number),
    // createData("Price", EditRes.product.price + " " + "$"),
    // createData("Discount", EditRes.product.discount + " " + "$"),
    // createData("shippingCost", EditRes.product.shippingCost + " " + "$"),
    // createData("Stock", EditRes.product.stock + " " + "items"),
    // createData("No. of Favorite", EditRes.product.favorites),
    // createData(
    //   "Sizes",
    //   <div>
    //     {EditRes.product.size.map((item) => (
    //       <h4>
    //         {item.value}" => {item.price} $
    //       </h4>
    //     ))}
    //   </div>
    // ),
    // createData(
    //   "Colors",
    //   <div>
    //     {EditRes.product.colors.map((item) => (
    //       <h4>{item}</h4>
    //     ))}
    //   </div>
    // ),
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
              <h1>View Order</h1>
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
    `${process.env.NEXT_PUBLIC_GAID}/category/list`,

    {
      headers: {
        Authorization: token,
      },
    }
  );

  const getOrderRes = await axios.get(
    `${process.env.NEXT_PUBLIC_GAID}/dashboard/order/${ctx.params.id}`,

    {
      headers: {
        Authorization: token,
      },
    }
  );

  return {
    props: {
      orderProps: getOrderRes.data.data,
    },
  };
};

export default GetOrder;
