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
const Category = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
  const router = useRouter();
  const handleDelete = async (id) => {
    console.log(id)
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_GAID}/dashboard/category/${id}`,

        {
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await res;
      //console.log(data, "data");
      router.reload(window.location.pathname);
    } catch (err) {
      //console.log(err);
    }
  };
  const handleEdit = async (id) => {
    //console.log(id)
    try {
      router.push(`/dashboard/category/edit/${id}`);
    } catch (err) {
      //console.log(err);
    }
  };
  const handleView = async (id) => {
    //console.log(id)
    try {
      router.push(`/dashboard/category/view/${id}`);
    } catch (err) {
      //console.log(err);
    }
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "name",
      headerName: "Name",
      width: 350,
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
            {/* <div
              className={styles.viewButton}
              onClick={() => handleView(params.row._id)}
            >
              View
            </div> */}

            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleEdit(params.row._id)}
            >
              Edit
            </Button>

            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className={styles.products}>
      <Sidebar />

      <div className={styles.productsContainer}>
        <Box sx={{ m: "2rem" }}>
          <Link href="/dashboard/category/add" passHref>
            <Button variant="contained" color="success">
              Add Category
            </Button>
          </Link>
        </Box>

        <DataTableDashboard
          type="category"
          api="category"
          columns={columns}
          actionColumn={actionColumn}
          page="category"
        />
      </div>
    </div>
  );
};

export default Category;
