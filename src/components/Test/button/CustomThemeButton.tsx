// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import { Button, styled } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------

const CustomThemeButton = () => {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
  }));

  return <CustomButton>CustomThemeButton</CustomButton>;
};

// Test -------------------------- Exporting the current component ------------------------
export default CustomThemeButton;
