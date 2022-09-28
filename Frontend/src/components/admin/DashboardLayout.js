import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "./DashboardSideBar";
import AdminNavbar from "./navbar/AdminNavbar";
import "./Dashboard.css";

function DashboardLayout() {
  return (
    <div className="dashboard-outlet">
      <AdminNavbar />
      <DashboardSideBar />
      <div
        style={{
          border: "0.5px grey solid",
          marginTop: "70px",
          width: "82%",
          marginLeft: "240px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
