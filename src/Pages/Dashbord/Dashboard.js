import React from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";

import "./Dashboard.css";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className=" page-content ">
        <div className="left-bar">
          <SideBar />
        </div>
        <div className="right-bar">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
