import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "./DashboardSideBar";

function Dashboard() {
  return (
    <div>
      <DashboardSideBar />
      <div style={{ border: "2px red solid", marginTop: "70px" }}>
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
