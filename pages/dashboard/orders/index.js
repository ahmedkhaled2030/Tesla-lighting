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
const Orders = ({ordersList}) => {

  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
  const router = useRouter();
  const handleDelete = async (id) => {
    console.log(id)
    try {
      const res = await axios.delete(
        `https://tesla-lightning.herokuapp.com/dashboard/order/${id}`,


        {
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await res;
      //console.log(data, "data");
      router.reload(window.location.pathname)
    } catch (err) {
      //console.log(err);
    }
  };
 
  const handleView = async (id) => {
    //console.log(id)
    try {
      router.push(`/dashboard/orders/view/${id}`)
    } catch (err) {
      //console.log(err);
    }
  };




  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "status",
      headerName: "Status",
      description: "This column has a value getter and is not sortable.",
      width: 100,
    },

    {
      field: "shippingCost",
      headerName: "ShippingCost",
      type: "string",
      width: 100,
    },

    {
      field: "price",
      headerName: "Price",
      type: "string",
      width: 100,
    },
    {
      field: "createdAt",
      headerName: "createdAt",
      type: "string",
      width: 200,
    }

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

  //console.log(productsList, "productsList");
  return (
    <div className={styles.products}>
      <Sidebar />

      <div className={styles.productsContainer}>
  

        <DataTableDashboard
          type="order"
          api="orders"
          columns={columns}
          actionColumn={actionColumn}
          page="page"
        />
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const token = ctx.req?.cookies.token || "";
  const res = await axios.get(
    `https://tesla-lightning.herokuapp.com/dashboard/order`,

    {
      headers: {
        Authorization: token,
      },
    }
  );
  console.log(res.data , "resssssss") 

  return {
    props: {
      ordersList: res.data.data,
      // numberOfRecors : 
    },
  };
};

export default Orders;
