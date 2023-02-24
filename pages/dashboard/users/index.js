import styles from "../../../styles/UsersDashboard.module.scss";
import React from "react";
import NavbarDashboard from "@/components/navbarDashboard";
import Sidebar from "@/components/SideBarDashboard";
import DataTableDashboard from "@/components/DataTableDashboard";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const Users = ({ usersList }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://tesla-lightning.herokuapp.com/dashboard/user/${id}`,

        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlNjBhZDdiOWZiNDZkZjI4MzZkNzkiLCJpYXQiOjE2NzU1MTg2MDQsImV4cCI6MjI4MDMxODYwNH0.n-_K3QKqNB612L6wD9cCTFNp76DycxFlrJVQMlZE9C0",
          },
        }
      );

      const data = await res;
      console.log(data, "data");
      router.push("/dashboard/users");
    } catch (err) {
      console.log(err);
    }
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 300 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",

      width: 250,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },

    {
      field: "email",
      headerName: "Email",
      type: "email",
      width: 250,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      type: "date",
      width: 150,
      valueGetter: (params) => `${params.row.createdAt.split("T")[0]}`,
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
              href="/dashboard/users/1"
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

  console.log(usersList, "usersList");
  return (
    <div className={styles.users}>
      <Sidebar />
      <div className={styles.usersContainer}>
        <NavbarDashboard />
        <DataTableDashboard
          rowsList={usersList}
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
    `https://tesla-lightning.herokuapp.com/dashboard/user`,

    {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlNjBhZDdiOWZiNDZkZjI4MzZkNzkiLCJpYXQiOjE2NzU1MTg2MDQsImV4cCI6MjI4MDMxODYwNH0.n-_K3QKqNB612L6wD9cCTFNp76DycxFlrJVQMlZE9C0",
      },
    }
  );

  return {
    props: {
      usersList: res.data.data,
    },
  };
};

export default Users;
