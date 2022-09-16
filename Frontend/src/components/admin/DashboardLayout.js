import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "./DashboardSideBar";

function DashboardLayout() {
  return (
    <div>
      <DashboardSideBar />
      <div
        style={{
          border: "2px red solid",
          marginTop: "70px",
          width: "82%",
          marginLeft: "240px",
        }}
      >
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
