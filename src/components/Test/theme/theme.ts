// Test -------------------------- Importing the Packages ---------------------------------
import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
export const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#15c630",
    },
    otherColor: {
      main: colors.grey[500],
    },
  },
});
