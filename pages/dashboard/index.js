import styles from "../../styles/DashboardHome.module.scss";
import React from "react";
import Sidebar from "@/components/SideBarDashboard";
import NavbarDashboard from "@/components/navbarDashboard";

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
