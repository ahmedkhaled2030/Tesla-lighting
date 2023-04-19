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
const Coupons = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://18.214.112.247:4000/dashboard/coupon/${id}`,

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
      router.push(`/dashboard/coupons/edit/${id}`);
    } catch (err) {
      ////console.log(err);
    }
  };
  const handleView = async (id) => {
    ////console.log(id)
    try {
      router.push(`/dashboard/coupons/view/${id}`);
    } catch (err) {
      ////console.log(err);
    }
  };
  const columns = [
    { field: "_id", headerName: "Coupon ID", width: 220 },
    {
      field: "code",
      headerName: "Code",
      width: 100,
    },
    {
      field: "discount",
      headerName: "Discount",
      width: 100,
    },
    {
      field: "limit",
      headerName: "Limit",
      type: "string",
      width: 100,
    },
    {
      field: "used",
      headerName: "Used",
      width: 100,
    },
    { 
      field: "active",
      headerName: "Active",
      width: 100,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
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
          <Link href="/dashboard/coupons/add" passHref>
            <Button variant="contained" color="success">
              Add Coupon
            </Button>
          </Link>
        </Box>

        <DataTableDashboard
          type="coupon"
          api="coupons"
          columns={columns}
          actionColumn={actionColumn}
          page="page"
        />
      </div>
    </div>
  );
};

export default Coupons;
