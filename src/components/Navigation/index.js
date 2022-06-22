import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";

export const Navigation = () => {
  return (
    <Box
      paddingY="10px"
      display="flex"
      justifyContent="space-between"
      component="nav"
    >
      <Link to="/" component={RouterLink} underline="hover" color="MenuText">
        Home
      </Link>
      <Link
        to="about"
        component={RouterLink}
        underline="hover"
        color="MenuText"
      >
        About
      </Link>
      <Link
        to="contact"
        component={RouterLink}
        underline="hover"
        color="MenuText"
      >
        Contact
      </Link>
      <Link
        to="todos"
        component={RouterLink}
        underline="hover"
        color="MenuText"
      >
        Todos
      </Link>
      <Link
        to="users"
        component={RouterLink}
        underline="hover"
        color="MenuText"
      >
        Users
      </Link>
    </Box>
  );
};
