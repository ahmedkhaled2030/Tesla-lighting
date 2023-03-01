import styles from "../../../styles/ProductsDashboard.module.scss";
import React, { useEffect, useState } from "react";

import Sidebar from "@/components/SideBarDashboard";
import DataTableDashboard from "@/components/DataTableDashboard";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import NavbarDashboard from "@/components/NavbarDashboard";
import Cookies from 'js-cookie';
const SubCategory = ({ categoryList }) => {
  const [token,setToken] = useState("")
  useEffect(() => {
    setToken(  Cookies.get('token'))
 
  } , [token])
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [status, setStatus] = useState("");

console.log(category ,"category")
  const handleCategory = (event) => {
  console.log(event.target.value  ,"event.target.value ")
    setCategory(event.target.value );
  };
 

  const handleSubCategory = (e) => {
    setSubCategory(e.target.value);
  };
  const addSubCategory = async () => {
    try {
      const res = await axios.post(
        `https://tesla-lightning.herokuapp.com/dashboard/category`,
        {
          name: subcategory,
         parent:category._id
        },

        {
          headers: {
            Authorization:
            token
          },
        }
      );

      const data = await res;

      setStatus('SubCategory created successfully');
      setCategory("");
      setSubCategory("");
      // router.push("/dashboard/products");
    } catch (err) {

      setStatus("SubCategory with same name exist");
      setCategory("");
      setSubCategory("");
    }
  };


  return (
    <div className={styles.products}>
      <Sidebar />
      <div className={styles.productsContainer}>
        <NavbarDashboard />

        <Box sx={{ mx: "auto", my: 2, width: 500 }}>
      <FormControl sx={{  minWidth: 500 }} > 
        <InputLabel id="demo-simple-select-label">select category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"  
          onChange={handleCategory}
            >
              {categoryList.map((category) => (
                <MenuItem value={category} key={category._id}>{category.name}</MenuItem>
              ))}
     
     
        </Select>
      </FormControl>
    </Box>
        <Box sx={{ mx: "auto", my: 5, width: 500 }}>
          <TextField
            sx={{ my: 5, width: 500 }}
            id="outlined-basic"
            label="Add SubCategory"
            value={subcategory}
            variant="outlined"
            onChange={handleSubCategory}
          />
          <Box sx={{ textAlign: 'center', }}>
          <Button
            onClick={addSubCategory}
            sx={{ my: 1, width: 150 }}
            variant="contained"
            color="success"
          >
            Add Sub Category
          </Button>
               </Box>
       
        </Box>
        
        {status == "SubCategory created successfully" && (
          <Box sx={{ mx: "auto", my: 5, width: 500 }}>
          <Box  sx={{  textAlign: 'center',   fontSize: '0.875rem',    fontFamily: 'sans',}}>
              <Image
                src="/img/done.png"
                alt=""
                height="150px"
                width="150px"
                objectFit="contain"
              />
               <h2 >{status}</h2>
            </Box>

           
          </Box>
        )}
        {status == "SubCategory with same name exist" && (
          <Box sx={{ mx: "auto", my: 5, width: 500 }}>
            <Box  sx={{  textAlign: 'center',   fontSize: '0.875rem',}}>
              <Image
                src="/img/wrong.png"
                alt=""
                height="150px"
                width="150px"
                objectFit="contain"
              />
              <h2>{status}</h2>
            </Box>

            
          </Box>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const token = ctx.req?.cookies.token || "";
  const res = await axios.get(
    // `https://tesla-lightning.herokuapp.com/product/${params.id}`
    `https://tesla-lightning.herokuapp.com/category/list`,

    {
      headers: {
        Authorization:token
          
      },
    }
  );

  return {
    props: {
      categoryList: res.data.data,
    },
  };
};

export default SubCategory;
