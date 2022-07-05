import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar/Navbar";
import LeftSideBar from "./components/Sidebar/left-side-bar/left-side-bar";
import RightSideBar from "./components/Sidebar/right-side-bar/right-side-bar";

function App() {
  return (
    <Box>
      <Stack direction="column" spacing={1.5}>
        <Stack spacing={2} justifyContent="space-between" direction="row">
          <LeftSideBar></LeftSideBar>
          <Navbar></Navbar>
          <RightSideBar></RightSideBar>
        </Stack>

        <Footer></Footer>
      </Stack>
    </Box>
  );
}

export default App;
