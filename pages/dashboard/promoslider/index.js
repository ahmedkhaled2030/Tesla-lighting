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
const Promo = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);

  const [records, setRecords] = useState("");
  const recordsHandler = (record) => {
    //console.log(record)
    setRecords(record);
  };
  const handleEdit = async (id) => {
    //console.log(id)
    try {
      router.push(`/dashboard/promoslider/edit/${id}`);
    } catch (err) {
      ////console.log(err);
    }
  };
  const handleView = async (id) => {
    ////console.log(id)
    try {
      router.push(`/dashboard/promoslider/view/${id}`);
    } catch (err) {
      ////console.log(err);
    }
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      type: "string",
      width: 100,
    },

    {
      field: "text",
      headerName: "Text",
      type: "string",
      width: 500,
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
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleEdit(params.row._id)}
            >
              Edit
            </Button>
          </div>
        );
      },
    },
  ];

  ////console.log(productsList, "productsList");
  return (
    <div className={styles.products}>
      <Sidebar />

      <div className={styles.productsContainer}>
        <Box sx={{ m: "2rem" }}>
          <Link href="/dashboard/promoslider/add" passHref>
            <Button variant="contained" color="success">
              Add New Promo
            </Button>
          </Link>
        </Box>

        <DataTableDashboard
          type="promos"
          api="promos"
          columns={columns}
          actionColumn={actionColumn}
          page="section"
          recordsHandler={recordsHandler}
        />
      </div>
    </div>
  );
};

export default Promo;
