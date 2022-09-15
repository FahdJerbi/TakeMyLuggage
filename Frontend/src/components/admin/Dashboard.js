import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "./DashboardSideBar";

function Dashboard() {
  return (
    <div>
      <DashboardSideBar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
