// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------
import { ListWholeProps } from "./ListWhole.type";

// Test -------------------------- The current component ----------------------------------
const ListWhole = ({ children, icon, link }: ListWholeProps) => {
  return (
    <ListItem disablePadding component={Link} to={link}>
      <ListItemButton>
        <ListItemIcon>{icon ? icon : <Home></Home>}</ListItemIcon>
        <ListItemText primary={children}></ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default ListWhole;
