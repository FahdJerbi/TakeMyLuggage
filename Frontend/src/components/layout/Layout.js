import React from "react";
import Navbar from "./Navbar";
import SideList from "./SideList";
import MyMap from "../map/MyMap";
import { Outlet, Routes, Router, Route, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div
    // style={{
    //   display: "flex"
    //   // flexDirection: "column"
    // }}
    >
      <Navbar />

      {/* <SideList /> */}

      <div style={{ marginTop: "63px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
