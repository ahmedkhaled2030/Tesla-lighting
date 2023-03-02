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
const Products = ({ productsList }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://tesla-lightning.herokuapp.com/dashboard/product/${id}`,

        {
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await res;
      console.log(data, "data");
      router.push("/dashboard/products");
    } catch (err) {
      console.log(err);
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

    {
      field: "number",
      headerName: "Number",
      type: "string",
      width: 150,
    },

    {
      field: "price",
      headerName: "Price",
      type: "string",
      width: 50,
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
            <Link
              href="/dashboard/products/1"
              style={{ textDecoration: "none" }}
              passHref
            >
              <div className={styles.viewButton}>View</div>
            </Link>
            <Link
              href="/dashboard/products/1"
              style={{ textDecoration: "none", backgroundColor: "green" }}
              passHref
            >
              <Button variant="contained" color="secondary">
                Edit
              </Button>
            </Link>
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

  console.log(productsList, "productsList");
  return (
    <div className={styles.products}>
      <Sidebar />
                  
      <div className={styles.productsContainer}>
        <Box sx={{ m: '2rem' }}> 
        <Link
              href="/dashboard/products/add"
          
              passHref
            >
              <Button variant="contained" color="success"  >
                Add Product
              </Button>
            </Link>
        </Box>
  
        <DataTableDashboard 
          rowsList={productsList.products}
          columns={columns}
          actionColumn={actionColumn}
        />
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const token = ctx.req?.cookies.token || "";
  const res = await axios.get(
    `https://tesla-lightning.herokuapp.com/dashboard/product`,

    {
      headers: {
        Authorization: token,
      },
    }
  );

  return {
    props: {
      productsList: res.data.data,
    },
  };
};

export default Products;
