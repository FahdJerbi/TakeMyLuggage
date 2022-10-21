import React from "react";
import Navbar from "../layout/Navbar";
import { Outlet } from "react-router-dom";
import HomePage from "../landing-page/HomePage";

const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HomePage />
      <Outlet />
    </div>
  );
};

export default Layout;
