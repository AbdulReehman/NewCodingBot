import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Dashboard from "./Pages/Dashbord/Dashboard";
import OrderManager from "./Pages/Dashbord/Pages/OrderManager/OrderManager";
import CreateOrder from "./Pages/Dashbord/Pages/CreateOrder/CreateOrder";
import EmployeAccount from "./Pages/Dashbord/Pages/EmployeAccount/EmployeAccount";
import AccountManagement from "./Pages/Dashbord/Pages/AccountManagement/AccountManagement";
import PromoCode from "./Pages/Dashbord/Pages/PromoCode/PromoCode";
import MyAccount from "./Pages/Dashbord/Pages/MyAccount/MyAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <MyAccount />,
          },

          {
            path: "ordermanager",
            element: <OrderManager />,
          },
          {
            path: "Create-order",
            element: <CreateOrder />,
          },
          {
            path: "Employe-Account",
            element: <EmployeAccount />,
          },
          {
            path: "Account-Management",
            element: <AccountManagement />,
          },
          {
            path: "Promo-Coder",
            element: <PromoCode />,
          },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
