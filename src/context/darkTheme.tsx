// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const DarkThemeContext = React.createContext({
  isDarkMode: false,
  toggleMode: () => {},
});

// Test -------------------------- Exporting the current component ------------------------
export default DarkThemeContext;
