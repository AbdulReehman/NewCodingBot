import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BreadCrumb({ name }) {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      <NavLink to="/dashboard">
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      </NavLink>
    </Link>,

    <Typography key="2" color="#0a56a3">
      {name}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
