import React from "react";
import "./AccountManagement.css";
import BreadCrumb from "../../../../Components/BreadCrumb/BreadCrumb";

const AccountManagement = () => {
  return (
    <div>
      <div className="container">
        <BreadCrumb name="AccountManagement" />
        <h1>Account Management</h1>
      </div>
    </div>
  );
};

export default AccountManagement;
