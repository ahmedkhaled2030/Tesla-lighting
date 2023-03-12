import styles from "../../../../styles/addProductDashboard.module.scss";
import React, { useEffect, useRef, useState } from "react";

import Sidebar from "@/components/SideBarDashboard";
import DataTableDashboard from "@/components/DataTableDashboard";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Button,
  FormControl,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/joy/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import Image from "next/image";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { Editor } from "@tinymce/tinymce-react";
import NavbarDashboard from "@/components/NavbarDashboard";
import Cookies from "js-cookie";
const AddProduct = ({ categoryList }) => {
  const editorRef = useRef(null);
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
  const router = useRouter();

  const [role, setRole] = useState("");

  ////console.log(colors, "colors");
  const handleRole = (e) => {
    //console.log(e.target.value, "e.target.value");
    setRole(e.target.value);
  };

  const [addDataInputs, setAddDataInputs] = useState(null);
  ////console.log(addDataInputs, "addDataInputs");
  const addData = (e) => {
    e.preventDefault();
    setAddDataInputs({ ...addDataInputs, [e.target.name]: e.target.value });
  };

  const addUser = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://18.214.112.247:4000/user/register",
        {
          role: role,

          ...addDataInputs,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        router.push(`/dashboard/users`);
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  const productInputs = [
    {
      id: 1,
      label: "FirstName",
      name: "firstName",
      type: "text",
      placeholder: "FirstName",
      value: "",
    },

    {
      id: 2,
      label: "LastName",
      name: "lastName",
      type: "text",
      placeholder: "LastName",
      value: "",
    },

    {
      id: 3,
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Password",
      min: "1",
      value: "",
    },
    {
      id: 4,
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Email",
      min: "1",
      value: "",
    },
  ];

  //console.log(productInputs, "productInputs");

  return (
    <div className={styles.products}>
      <Sidebar />
      <div className={styles.productsContainer}>
        <div className={styles.new}>
          <div className={styles.newContainer}>
            <div className={styles.top}>
              <h1>Add User</h1>
            </div>
            <div className={styles.bottom}>
              <Box
                className={styles.right}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <form>
                  {productInputs.map((input) => (
                    <div key={input.id}>
                      <TextField
                        sx={{ width: 250 }}
                        id="outlined-basic"
                        label={input.label}
                        variant="outlined"
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        min={input.min}
                        onChange={addData}
                      />
                    </div>
                  ))}

                  {/* Role */}

                  <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      label="Role"
                      onChange={handleRole}
                    >
                      <MenuItem value={"admin"}>admin</MenuItem>
                      <MenuItem value={"user"}>user</MenuItem>
                    </Select>
                  </FormControl>
                </form>

                <Box sx={{ margin: "auto", marginTop: "20px" }}>
                  <Button variant="contained" color="success" onClick={addUser}>
                    Add User
                  </Button>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const token = ctx.req?.cookies.token || "";
  const res = await axios.get(
    `http://18.214.112.247:4000/category/list`,

    {
      headers: {
        Authorization: token,
      },
    }
  );

  return {
    props: {
      categoryList: res.data.data,
    },
  };
};

export default AddProduct;
