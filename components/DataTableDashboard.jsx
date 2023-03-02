import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import styles from "../styles/DataTableDashboard.module.scss";



const DataTableDashboard = ({ rowsList ,columns,actionColumn}) => {  
  console.log(rowsList);
  return (
    <div className={styles.datatable}>
      <DataGrid sx={{outline:"none"}}
        getRowId={(row) => row._id}
        rows={rowsList}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTableDashboard;
