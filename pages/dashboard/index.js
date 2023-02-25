import styles from "../../styles/DashboardHome.module.scss";
import React from "react";
import NavbarDashboard from "@/components/NavbarDashboard";



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
