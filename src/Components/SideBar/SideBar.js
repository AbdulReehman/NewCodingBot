import React, { useState } from "react";
import "./SideBar.css";
import orderimage from "../../Assets/Images/order-manger-icon.svg";
import cteateOrderImage from "../../Assets/Images/Create-order-icon.svg";
import employeeAccountImage from "../../Assets/Images/employee-account-icon.svg";
import accountMnagementImage from "../../Assets/Images/account-management-icon.svg";
import promoCode from "../../Assets/Images/promo-code-icon.svg";
import tributeLogo from "../../Assets/Images/Tribute logo 2.svg";
import { NavLink } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleHamburger = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("clicked");
  };

  return (
    <div>
      <div className={`sideBar ${!isSidebarOpen ? "closed" : ""}`} id="sideBar">
        <ul>
          <li>
            <img src={orderimage} alt="Order Manager" />
            <NavLink className="navlink" to="/dashboard/ordermanager">
              Order Manager
            </NavLink>
          </li>
          <li>
            <img src={cteateOrderImage} alt="cteateOrderImage" />
            <NavLink className="navlink" to="/dashboard/Create-order">
              Create Order
            </NavLink>
          </li>
          <li>
            <img src={employeeAccountImage} alt="employeeAccountImage" />
            <NavLink className="navlink" to="/dashboard/Employe-Account">
              Employe Account
            </NavLink>
          </li>
          <li>
            <img src={accountMnagementImage} alt="accountMnagementImage" />
            <NavLink className="navlink" to="/dashboard/Account-Management">
              Account Management
            </NavLink>
          </li>
          <li>
            <img src={promoCode} alt="promoCode" />
            <NavLink className="navlink" to="/dashboard/Promo-Coder">
              Promo Code
            </NavLink>
          </li>
        </ul>
        <div className="tributeLogo">
          <img src={tributeLogo} alt="tributeLogo" />
        </div>
        <div className="hamburger-wrapper">
          <button onClick={handleHamburger}>
            <ChevronLeftIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
