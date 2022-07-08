import { Stack, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import DarkThemeContext from "./context/darkTheme";
import Box from "@mui/material/Box";
import AddPost from "./components/AddPost/AddPost";
import Footer from "./components/Footer/Footer";
import Feed from "./components/Header/Feed/feed";
import Navbar from "./components/Header/Navbar/Navbar";
import LeftSideBar from "./components/Sidebar/left-side-bar/left-side-bar";
import RightSideBar from "./components/Sidebar/right-side-bar/right-side-bar";

import createTheme from "@mui/material/styles/createTheme";

function App() {
  const { isDarkMode } = useContext(DarkThemeContext);

  const darkMode = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkMode}>
      <Box>
        <Stack direction="column" spacing={1.5}>
          <Navbar></Navbar>
          <Stack spacing={1.5} justifyContent="space-between" direction="row">
            <LeftSideBar></LeftSideBar>
            <Feed></Feed>
            <RightSideBar></RightSideBar>
          </Stack>
          <Footer></Footer>
          <AddPost></AddPost>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
