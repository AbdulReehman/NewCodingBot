import React from "react";
import "./MyAccount.css";
import BreadCrumb from "../../../../Components/BreadCrumb/BreadCrumb";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import Table from "../../../../Components/Table/Table";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";

const MyAccount = () => {
  const accountData = [
    {
      No: "",
      Reservation: "",
      Account: "",
      Subject: "",
      Reopen: "",
      RequestedPST: "",
      AssignedTo: "",
      Status: "",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Delete: <DeleteForeverRoundedIcon id="deleteicon" />,
    },
    {
      No: "01",
      Reservation: "21474B3647",
      Account: "-",
      Subject: "Test Funeral",
      Reopen: "-",
      RequestedPST: "12-25-2023 10:45 PM",
      AssignedTo: "-",
      Status: "in Queue",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Delete: <DeleteForeverRoundedIcon id="deleteicon" />,
    },
    {
      No: "02",
      Reservation: "21474B3647",
      Account: "-",
      Subject: "Test Funeral",
      Reopen: "-",
      RequestedPST: "12-25-2023 10:45 PM",
      AssignedTo: "-",
      Status: "in Queue",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Delete: <DeleteForeverRoundedIcon id="deleteicon" />,
    },
    {
      No: "03",
      Reservation: "21474B3647",
      Account: "-",
      Subject: "Test Funeral",
      Reopen: "-",
      RequestedPST: "12-25-2023 10:45 PM",
      AssignedTo: "-",
      Status: "in Queue",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Delete: <DeleteForeverRoundedIcon id="deleteicon" />,
    },
    {
      No: "04",
      Reservation: "21474B3647",
      Account: "-",
      Subject: "Test Funeral",
      Reopen: "-",
      RequestedPST: "12-25-2023 10:45 PM",
      AssignedTo: "-",
      Status: "in Queue",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Delete: <DeleteForeverRoundedIcon id="deleteicon" />,
    },
    {
      No: "05",
      Reservation: "21474B3647",
      Account: "-",
      Subject: "Test Funeral",
      Reopen: "-",
      RequestedPST: "12-25-2023 10:45 PM",
      AssignedTo: "-",
      Status: "in Queue",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Delete: <DeleteForeverRoundedIcon id="deleteicon" />,
    },
    {
      No: "06",
      Reservation: "21474B3647",
      Account: "-",
      Subject: "Test Funeral",
      Reopen: "-",
      RequestedPST: "12-25-2023 10:45 PM",
      AssignedTo: "-",
      Status: "in Queue",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Delete: <DeleteForeverRoundedIcon id="deleteicon" />,
    },
    {
      No: "07",
      Reservation: "21474B3647",
      Account: "-",
      Subject: "Test Funeral",
      Reopen: "-",
      RequestedPST: "12-25-2023 10:45 PM",
      AssignedTo: "-",
      Status: "in Queue",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Delete: <DeleteForeverRoundedIcon id="deleteicon" />,
    },
    {
      No: "08",
      Reservation: "21474B3647",
      Account: "-",
      Subject: "Test Funeral",
      Reopen: "-",
      RequestedPST: "12-25-2023 10:45 PM",
      AssignedTo: "-",
      Status: "in Queue",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Delete: <DeleteForeverRoundedIcon id="deleteicon" />,
    },
    {
      No: "09",
      Reservation: "21474B3647",
      Account: "-",
      Subject: "Test Funeral",
      Reopen: "-",
      RequestedPST: "12-25-2023 10:45 PM",
      AssignedTo: "-",
      Status: "in Queue",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Delete: <DeleteForeverRoundedIcon id="deleteicon" />,
    },
  ];
  return (
    <div className="account-section-wrapper">
      <div className="container">
        <BreadCrumb name="Account" />
        <h1>My Account</h1>
        <div className="account-section">
          <div className="heading">
            <h2>Account</h2>
            <div id="Account-btn">
              <button>
                Customer Order
                <TrendingFlatOutlinedIcon />
              </button>
              <button>
                Funeral Home Order
                <TrendingFlatOutlinedIcon />
              </button>
            </div>
          </div>
          <table>
            <Table tabledata={accountData} />
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
