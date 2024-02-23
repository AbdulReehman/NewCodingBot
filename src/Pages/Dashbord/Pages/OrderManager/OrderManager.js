import React, { useState } from "react";
import "./OrderManager.css";
import BreadCrumb from "../../../../Components/BreadCrumb/BreadCrumb";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Table from "../../../../Components/Table/Table";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";

const OrderManager = () => {
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(true);
  const handlearrowclick = () => {
    setIsSubmissionOpen(!isSubmissionOpen);
    console.log("clicked");
  };

  const tabledata2 = [
    {
      No: "01",
      Reservation: "21474B3647",
      ContactName: "Stinger&Griffin FH (Jasper)",
      Subject: "Verda c.Wimberly",
      AccountType: "Funeral",
      CompletedDate: "12-25-2023 10:45 PM",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Redo: "Reopen",
    },
    {
      No: "01",
      Reservation: "21474B3647",
      ContactName: "Stinger&Griffin FH (Jasper)",
      Subject: "Verda c.Wimberly",
      AccountType: "Funeral",
      CompletedDate: "12-25-2023 10:45 PM",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Redo: "Reopen",
    },
    {
      No: "01",
      Reservation: "21474B3647",
      ContactName: "Stinger&Griffin FH (Jasper)",
      Subject: "Verda c.Wimberly",
      AccountType: "Funeral",
      CompletedDate: "12-25-2023 10:45 PM",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Redo: "Reopen",
    },
    {
      No: "01",
      Reservation: "21474B3647",
      ContactName: "Stinger&Griffin FH (Jasper)",
      Subject: "Verda c.Wimberly",
      AccountType: "Funeral",
      CompletedDate: "12-25-2023 10:45 PM",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Redo: "Reopen",
    },
    {
      No: "01",
      Reservation: "21474B3647",
      ContactName: "Stinger&Griffin FH (Jasper)",
      Subject: "Verda c.Wimberly",
      AccountType: "Funeral",
      CompletedDate: "12-25-2023 10:45 PM",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Redo: "Reopen",
    },
    {
      No: "01",
      Reservation: "21474B3647",
      ContactName: "Stinger&Griffin FH (Jasper)",
      Subject: "Verda c.Wimberly",
      AccountType: "Funeral",
      CompletedDate: "12-25-2023 10:45 PM",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Redo: "Reopen",
    },
    {
      No: "01",
      Reservation: "21474B3647",
      ContactName: "Stinger&Griffin FH (Jasper)",
      Subject: "Verda c.Wimberly",
      AccountType: "Funeral",
      CompletedDate: "12-25-2023 10:45 PM",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Redo: "Reopen",
    },
    {
      No: "01",
      Reservation: "21474B3647",
      ContactName: "Stinger&Griffin FH (Jasper)",
      Subject: "Verda c.Wimberly",
      AccountType: "Funeral",
      CompletedDate: "12-25-2023 10:45 PM",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Redo: "Reopen",
    },
    {
      No: "01",
      Reservation: "21474B3647",
      ContactName: "Stinger&Griffin FH (Jasper)",
      Subject: "Verda c.Wimberly",
      AccountType: "Funeral",
      CompletedDate: "12-25-2023 10:45 PM",
      Review: <RateReviewOutlinedIcon id="reviewicon" />,
      Redo: "Reopen",
    },
  ];
  return (
    <div>
      <div className="container">
        <BreadCrumb name="OrderManager" />
        <h1>Order Manager</h1>
        <div className="ordermanager-section">
          <div className="flex-box">
            <h2>Filters</h2>
            <div className="arrow-icon" onClick={handlearrowclick}>
              <KeyboardArrowUpIcon />
            </div>
          </div>

          <div className={`subbmission ${!isSubmissionOpen ? "closed" : ""}`}>
            <div className="input-wrapper">
              <input type="text" placeholder="Completed After Date" />
              <DateRangeIcon />
            </div>
            <div className="input-wrapper">
              <input type="text" placeholder="Completed before Date" />
              <DateRangeIcon />
            </div>
            <button>Search</button>
            <button>Clear</button>
          </div>

          <div className="table-wrapper">
            <h1>Order Manager</h1>
            <Table tabledata={tabledata2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManager;
