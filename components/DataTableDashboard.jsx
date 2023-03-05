import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/DataTableDashboard.module.scss";
import { useDemoData } from "@mui/x-data-grid-generator";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
const DataTableDashboard = ({ type,api , columns, actionColumn ,page ,recordsHandler}) => {
    const router = useRouter();

  const [token, setToken] = useState(Cookies.get("token"));




  const [pageState, setPageState] = useState({
    isLoading: false,
    data: [],
    total: 0,
    page: 1,
    pageSize: 10,
  });

  if (page == "page") {
    useEffect(() => {

      const fetchData = async () => {
        await setToken(Cookies.get("token"));
        await setPageState((old) => ({ ...old, isLoading: true }));
  
        const res = await axios.get(
          `https://tesla-lightning.herokuapp.com/dashboard/${type}?page=${pageState.page}&limit=${pageState.pageSize}`,
  
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const json = await res.data.data;
  
        console.log(json, "json");
        setPageState((old) => ({
          ...old,
          isLoading: false,
          data: json[api],
          total: json.count,
        }));
      };
      fetchData();
    }, [pageState.page, pageState.pageSize, token]);
  }

  if (page == 'section') {
    console.log(type , 'section')
    useEffect(() => {

      const fetchData = async () => {
        await setToken(Cookies.get("token"));
        await setPageState((old) => ({ ...old, isLoading: true }));
  
        const res = await axios.get(
          `https://tesla-lightning.herokuapp.com/dashboard/section/${type}?page=${pageState.page}&limit=${pageState.pageSize}`,
  
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const json = await res.data.data;
  
        console.log(json, "json");
        
        console.log(Array.isArray(json))
        if (Array.isArray(json)) {
          recordsHandler(json.length)
          setPageState((old) => ({
            ...old,
            isLoading: false,
            data: json,
            total: json.count,
          }));
        } else {
          recordsHandler(json.length)
          setPageState((old) => ({
            ...old,
            isLoading: false,
            data: [json],
            total: json.count,
          }));
        }
        
      };
      fetchData();
    }, [pageState.page, pageState.pageSize, token]);
  }


  return (
    <div className={styles.datatable}>
      {/* <DataGrid
        sx={{ outline: "none" }}
        getRowId={(row) => row._id+ row.price}
        rows={rowsList}
        columns={columns.concat(actionColumn)}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        pagination

      /> */}
      <DataGrid
        autoHeight
        getRowId={(row) => row._id+Date.now()}
        rows={pageState.data}
        rowCount={pageState.total}
        loading={pageState.isLoading}
        rowsPerPageOptions={[10, 20, 30, 40, 50]}
        pagination
        page={pageState.page - 1}
        pageSize={pageState.pageSize}
        paginationMode="server"
        onPageChange={(newPage) => {
          setPageState((old) => ({ ...old, page: newPage + 1 }));
        }}
        onPageSizeChange={(newPageSize) =>
          setPageState((old) => ({ ...old, pageSize: newPageSize }))
        }
        columns={columns.concat(actionColumn)}
      />
    </div>
  );
};

export default DataTableDashboard;
