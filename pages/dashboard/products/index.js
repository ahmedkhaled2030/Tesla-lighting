import styles from "../../../styles/ProductsDashboard.module.scss";
import React, { useEffect, useState } from "react";

import Sidebar from "@/components/SideBarDashboard";
import DataTableDashboard from "@/components/DataTableDashboard";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import NavbarDashboard from "@/components/NavbarDashboard";
import Cookies from "js-cookie";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
const Products = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_GAID}/dashboard/product/${id}`,

        {
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await res;
      ////console.log(data, "data");
      router.reload(window.location.pathname);
    } catch (err) {
      ////console.log(err);
    }
  };
  const handleEdit = async (id) => {
    ////console.log(id)
    try {
      router.push(`/dashboard/products/edit/${id}`);
    } catch (err) {
      ////console.log(err);
    }
  };
  const handleView = async (id) => {
    ////console.log(id)
    try {
      router.push(`/dashboard/products/view/${id}`);
    } catch (err) {
      ////console.log(err);
    }
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "title",
      headerName: "ProductTitle",
      description: "This column has a value getter and is not sortable.",
      width: 350,
    },

    // {
    //   field: "number",
    //   headerName: "Number",
    //   type: "string",
    //   width: 150,
    // },

    {
      field: "price",
      headerName: "Price",
      type: "string",
      width: 50,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      type: "string",
      width: 200,
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 400,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <div
              className={styles.viewButton}
              onClick={() => handleView(params.row._id)}
            >
              View
            </div>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleEdit(params.row._id)}
            >
              Edit
            </Button>

            <div
              className={styles.deleteButton}
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className={styles.products}  styles={{borderTop:'2px solid gray'}}>
      <Sidebar />

      <div className={styles.productsContainer}>
        <Box sx={{ m: "2rem" }}>
          <Link href="/dashboard/products/add" passHref>
            <Button variant="contained" color="success">
              Add Product
            </Button>
          </Link>
        </Box>

        <DataTableDashboard
          type="product"
          api="products"
          columns={columns}
          actionColumn={actionColumn}
          page="page"
        />
      </div>
    </div>
  );
};

export default Products;
