// Test -------------------------- Importing the Packages ---------------------------------
import React, { useState } from "react";
import DarkThemeContext from "./darkTheme";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------
type DarkThemeContextProviderProps = {
  children: React.ReactNode;
};

// Test -------------------------- The current component ----------------------------------
const DarkThemeContextProvider = ({
  children,
}: DarkThemeContextProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  return (
    <DarkThemeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default DarkThemeContextProvider;
