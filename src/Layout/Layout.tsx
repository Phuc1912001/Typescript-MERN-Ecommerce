import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";

const Layout = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
