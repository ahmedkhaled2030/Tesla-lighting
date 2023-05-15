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
        `${process.env.NEXT_PUBLIC_GAID}/dashboard/user/${id}`,

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
      router.push(`/dashboard/users/edit/${id}`);
    } catch (err) {
      ////console.log(err);
    }
  };
  const handleView = async (id) => {
    ////console.log(id)
    try {
      router.push(`/dashboard/users/view/${id}`);
    } catch (err) {
      ////console.log(err);
    }
  };
  const columns = [
    { field: "_id", headerName: "User ID", width: 220 },
    {
      field: "email",
      headerName: "Email",

      width: 350,
    },

    {
      field: "role",
      headerName: "Role",
      type: "string",
      width: 150,
    },

    {
      field: "firstName",
      headerName: "FirstName",
      type: "string",
      width: 200,
    },
    {
      field: "lastName",
      headerName: "LastName",
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
    <div className={styles.products}>
      <Sidebar />

      <div className={styles.productsContainer}>
        <Box sx={{ m: "2rem" }}>
          <Link href="/dashboard/users/add" passHref>
            <Button variant="contained" color="success">
              Add User
            </Button>
          </Link>
        </Box>

        <DataTableDashboard
          type="user"
          api="users"
          columns={columns}
          actionColumn={actionColumn}
          page="page"
        />
      </div>
    </div>
  );
};

export default Products;
