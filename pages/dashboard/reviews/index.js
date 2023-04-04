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
const Reviews = () => {
  const [token, setToken] = useState(Cookies.get("token"));
  useEffect(() => {
    setToken(Cookies.get("token")); 
  }, [token]);
  const router = useRouter();
  const approve = async (id) => {
    //console.log(id)
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_GAID}/dashboard/review/${id}/approve`,
        {},  
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await res;

      router.reload(window.location.pathname);
    } catch (err) {
      ////console.log(err);
    }
  };
  const disapprove = async (id) => {
    //console.log(id)
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_GAID}/dashboard/review/${id}/disapprove`,
{},
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await res;

      router.reload(window.location.pathname);
    } catch (err) {
      ////console.log(err);
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      width: 190,
    },
    {
      field: "approved",
      headerName: "Status",
      width: 90,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 60,
    },
    {
      field: "title",
      headerName: "ReviewTitle",
      width: 150,
    },
    {
      field: "text",
      headerName: "ReviewText",
      width: 500,
    },
  ];

  const actionColumn = [
    {
      field: "Action",
      headerName: "action",
      width: 100,
      renderCell: (params) => {
        console.log(params.row, "1");
        return (
          <div className={styles.cellAction}>
            {params.row.approved == true ? (
              <Button
                variant="contained"
                color="error"
                onClick={() => disapprove(params.row._id)}
              >
                Disapprove
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                onClick={() => approve(params.row._id)}
              >
                Approve
              </Button>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div className={styles.products}>
      <Sidebar />

      <div className={styles.productsContainer}>
        {/* <Box sx={{ m: "2rem" }}>
          <Link href="/dashboard/category/add" passHref>
            <Button variant="contained" color="success">
              Add Category
            </Button>
          </Link>
        </Box> */}

        <DataTableDashboard
          type="review"
          api="review"
          columns={columns}
          actionColumn={actionColumn}
          page="review"
        />
      </div>
    </div>
  );
};

export default Reviews;
