// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import { Box } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

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
      LeftSideBar
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default LeftSideBar;
