// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import { styled } from "@mui/material";
import { Button } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const UniqueButton = () => {
  // This is how we can create a custom button and re-use using the SCSS, need to tell which "HTML" element we wanna customize
  const UniqueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,

    "&:hover": {
      backgroundColor: "lightblue",
    },

    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });

  return <UniqueButton variant="contained" disableElevation>Button</UniqueButton>;
};

// Test -------------------------- Exporting the current component ------------------------
export default UniqueButton;
