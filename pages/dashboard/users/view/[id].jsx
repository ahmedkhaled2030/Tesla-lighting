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
const GetProduct = ({ UserResProps }) => {

  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData("User ID", UserResProps?._id),
    createData("Email", UserResProps?.email),
    createData("FirstName", UserResProps?.firstName),
    createData("LastName", UserResProps?.lastName),
    createData("Role", UserResProps?.role),
    createData("CreatedAt", UserResProps?.createdAt),

    // createData("Title", EditRes?.product?.title),
    // createData("Category", EditRes?.product?.category?.name),
    // createData("SubCategory", EditRes?.product?.subCategory?.name),
    // createData("Number", EditRes?.product?.number),
    // createData("Price", EditRes?.product?.price + " " + "$"),
    // createData("Discount", EditRes?.product?.discount + " " + "$"),
    // createData("shippingCost", EditRes?.product?.shippingCost + " " + "$"),
    // createData("Stock", EditRes?.product?.stock + " " + "items"),
    // createData("No. of Favorite", EditRes?.product?.favorites),
    // createData(
    //   "Sizes",
    //   <div>
    //     {EditRes?.product?.size.map((item) => (
    //       <h4>
    //         {item.value}" => {item.price} $
    //       </h4>
    //     ))}
    //   </div>
    // ),
    // createData(
    //   "Colors",
    //   <div>
    //     {EditRes?.product?.colors.map((item) => (
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
              <h1>View User</h1>
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
                  <Box >

                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1050  }} aria-label="simple table">
                        <TableBody sx={{ fontWeight: "bold"  }}>
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
                              <TableCell align="right">
                                {row.value}
                              </TableCell>
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
 

  const UserRes = await axios.get(
    `https://tesla-lightning.herokuapp.com/dashboard/user/${ctx.params.id}`,

    {
      headers: {
        Authorization: token,
      },
    }
  );

  return {
    props: {
    
      UserResProps: UserRes.data.data,
    },
  };
};

export default GetProduct;
