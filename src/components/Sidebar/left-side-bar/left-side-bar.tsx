// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import { Box, List } from "@mui/material";
import {
  ContactPage,
  Group,
  Home,
  Person,
  Settings,
  Storefront,
  TextSnippet,
} from "@mui/icons-material";

// Test -------------------------- Importing the styles / other components ----------------
import ListWhole from "./ListWhole";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const LeftSideBar = () => {
  return (
    <Box
      bgcolor="burlywood"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List>
        <ListWhole icon={<Home></Home>} link="/home">Home</ListWhole>
        <ListWhole icon={<TextSnippet></TextSnippet>} link="/pages">Pages</ListWhole>
        <ListWhole icon={<Group></Group>} link="/group">Group</ListWhole>
        <ListWhole icon={<Storefront></Storefront>} link="/market">Marketplace</ListWhole>
        <ListWhole icon={<Person></Person>} link="/friends">Friends</ListWhole>
        <ListWhole icon={<Settings></Settings>} link="/settings">Settings</ListWhole>
        <ListWhole icon={<ContactPage></ContactPage>} link="/profile">Profile</ListWhole>
      </List>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default LeftSideBar;
