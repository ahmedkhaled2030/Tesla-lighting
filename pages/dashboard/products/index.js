import styles from "../../../styles/ProductsDashboard.module.scss";
import React from "react";
import NavbarDashboard from "@/components/navbarDashboard";
import Sidebar from "@/components/SideBarDashboard";
import DataTableDashboard from "@/components/DataTableDashboard";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const Products = ({ productsList }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://tesla-lightning.herokuapp.com/dashboard/product/${id}`,

        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlNjBhZDdiOWZiNDZkZjI4MzZkNzkiLCJpYXQiOjE2NzU1MTg2MDQsImV4cCI6MjI4MDMxODYwNH0.n-_K3QKqNB612L6wD9cCTFNp76DycxFlrJVQMlZE9C0",
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
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "title",
      headerName: "ProductTitle",
      description: "This column has a value getter and is not sortable.",
       width: 300

    },

    {
      field: "number",
      headerName: "Number",
      type: "string",
      width: 150,
    },
    {
      field: "category",
      headerName: "Category",
      type: "string",
      width: 100,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 100,
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
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
        <NavbarDashboard />
        <DataTableDashboard
          rowsList={productsList.products}
          columns={columns}
          actionColumn={actionColumn}
        />
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  console.log(params, "params");
  const res = await axios.get(
    // `https://tesla-lightning.herokuapp.com/product/${params.id}`
    `https://tesla-lightning.herokuapp.com/dashboard/product`,

    {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlNjBhZDdiOWZiNDZkZjI4MzZkNzkiLCJpYXQiOjE2NzU1MTg2MDQsImV4cCI6MjI4MDMxODYwNH0.n-_K3QKqNB612L6wD9cCTFNp76DycxFlrJVQMlZE9C0",
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
