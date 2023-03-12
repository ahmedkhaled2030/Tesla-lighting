import styles from "../../styles/DashboardHome.module.scss";
import React from "react";
import NavbarDashboard from "@/components/NavbarDashboard";
import Sidebar from "@/components/SideBarDashboard";

const Dashboard = () => {
  //console.log(process.env.NEXT_PUBLIC_GAID)
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.homeContainer}></div>
    </div>
  );
};

export default Dashboard;
