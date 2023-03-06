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
  Chip,
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
const GetOrder = ({ orderProps }) => {
 // console.log(orderProps, "orderProps");

  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
  const router = useRouter();

  // const [sale, setSale] = useState(orderProps.product.sale);
  // const [isNew, setIsNew] = useState(orderProps.product.new);
  // const [colors, setColors] = useState(orderProps.product.colors);
  // const [description, setDescription] = useState(orderProps.product.description);

  // ////console.log(colors, "colors");
  // const handleSale = (e) => {
  //   console.log(e.target.value);
  //   setSale(e.target.value);
  // };

  // const handleIsNew = (e) => {
  //   setIsNew(e.target.value);
  // };
  // const handleColors = (e) => {
  //   setColors((prev) => [...prev, e.target.value]);
  // };

  // const handleDescription = (e) => {
  //   setDescription(e.target.value);
  // };

  // const [size, seSize] = useState(orderProps.product.size);
  // const [sizeInput, setSizeInput] = useState(null);

  // ////console.log(size, "size");
  // const handleSizeInputs = (e) => {
  //   ////console.log('')
  //   e.preventDefault();
  //   setSizeInput({ ...sizeInput, [e.target.name]: e.target.value });
  // };

  // const handleSize = (e) => {
  //   e.preventDefault();
  //   seSize((prev) => [...prev, sizeInput]);
  // };
  // const [addDataInputs, setAddDataInputs] = useState(null);
  // ////console.log(addDataInputs, "addDataInputs");
  // const addData = (e) => {
  //   e.preventDefault();
  //   setAddDataInputs({ ...addDataInputs, [e.target.name]: e.target.value });
  // };
  // const editProduct = (e) => {
  //   e.preventDefault();

  //   axios
  //     .put(
  //       `https://tesla-lightning.herokuapp.com/dashboard/product/${orderProps.product._id}`,
  //       {
  //         sale: sale,
  //         new: isNew,
  //         colors: colors,
  //         size: size,
  //         cover: imagePath[0],
  //         images: imagePath,
  //         description: editorRef.current.getContent(),
  //         ...addDataInputs,
  //       },
  //       {
  //         headers: {
  //           Authorization: token,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       ////console.log(res.data.data);
  //       setImage([]);
  //       setImagePath([]);
  //       setImageScreens([]);
  //       setUploading(null);
  //       setCategory("");
  //       setSubCategory([]);
  //       setSelectedSubCategory("");
  //       setModel("");
  //       setSelectedModel("");
  //       setStatus("");
  //       setSale("");
  //       setIsNew("");
  //       setColors([]);
  //       setDescription("");
  //       seSize([]);
  //       setSizeInput(null);
  //     })
  //     .catch((error) => {
  //       ////console.log(error);
  //     });
  // };
  // const { title, shippingCost, discount, price, stock } = orderProps.product;
  // // //console.log({ title, shippingCost ,discount ,price ,stock})
  // const productInputs = [
  //   {
  //     id: 1,
  //     label: "Title",
  //     name: "title",
  //     type: "text",
  //     placeholder: "Title",
  //     value: title,
  //   },

  //   {
  //     id: 2,
  //     label: "Price",
  //     type: "number",
  //     name: "price",
  //     placeholder: "Price",
  //     min: "1",
  //     value: price,
  //   },
  //   {
  //     id: 3,
  //     label: "ShippingCost",
  //     type: "number",
  //     name: "shippingCost",
  //     placeholder: "shippingCost",
  //     min: "1",
  //     value: shippingCost,
  //   },
  //   {
  //     id: 4,
  //     label: "Discount",
  //     type: "number",
  //     name: "discount",
  //     placeholder: "Discount",
  //     min: "1",
  //     value: discount,
  //   },
  //   {
  //     id: 5,
  //     label: "Stock",
  //     type: "number",
  //     name: "stock",
  //     placeholder: "Stock",
  //     min: "1",
  //     value: stock,
  //   },
  // ];

  return (
    <div className={styles.products}>
      <Sidebar />
      <div className={styles.productsContainer}>
        <div className={styles.new}>
          <div className={styles.newContainer}>
            <div className={styles.top}>
              <h1>View Order Details</h1>
            </div>

            <div className={styles.bottom} style={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Box>
                    <h3>Order ID : {orderProps?._id}</h3>
                    <h3>CreatedAt : {orderProps?.createdAt}</h3>
                    <h3>Status : {orderProps?.status}</h3>
                    <h3>Price : {orderProps?.price} $</h3>
                    <h3>ShippingCost : {orderProps?.shippingCost} $</h3>
                  </Box>
                  <Box>
                    <span>Address</span>
                    <h3>Address ID : {orderProps?.address?._id} </h3>
                    <h3>User ID : {orderProps?.address?.user} </h3>
                    <h3>Address : {orderProps?.address?.address} </h3>
                    <h3>City : {orderProps?.address?.city} </h3>
                    <h3>state : {orderProps?.address?.state} </h3>
                  </Box>
                </Box>

        
                <Box
                  sx={{
                    mt: 2,
                  }}
                >
                  <span>User</span>
                  <h3>User ID : {orderProps?.user?._id} </h3>
                  <h3>Email : {orderProps?.user?.email} </h3>
                  <h3>
                    Name : {orderProps?.user?.firstName}{" "}
                    {orderProps?.user?.lastName}{" "}
                  </h3>
                </Box>

                <Box
                  sx={{
                    mt: 2,
                  }}
                >
                  <span>Products</span>
                  {orderProps?.products?.map((item, i) => (
                    <Box>
                      {i}
                      <h3>Product ID : {item?._id} </h3>
                      <h3>Count : {item?.count} </h3>
                      <h3>Color : {item?.color} </h3>
                      <h3>Size : {item?.size} </h3>
                    </Box>
                  ))}
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
 // console.log(token, "token");

  const getOrderRes = await axios.get(
    `https://tesla-lightning.herokuapp.com/dashboard/order/${ctx.params.id}`,

    {
      headers: {
        Authorization: token,
      },
    }
  );

  //console.log(getOrderRes.data.data, "getOrderRes.data.data");
  return {
    props: {
      orderProps: getOrderRes.data.data,
    },
  };
};

export default GetOrder;
