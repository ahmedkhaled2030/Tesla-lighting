import styles from "../../styles/DashboardHome.module.scss";
import React from "react";
import NavbarDashboard from "@/components/NavbarDashboard";
import Sidebar from "@/components/SideBarDashboard";



const Dashboard = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.homeContainer}>
        <NavbarDashboard />
        Home
      </div>
    </div>
  );
};

export default Dashboard;
