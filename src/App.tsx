import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import AddPost from "./components/AddPost/AddPost";
import Footer from "./components/Footer/Footer";
import Feed from "./components/Header/Feed/feed";
import Navbar from "./components/Header/Navbar/Navbar";
import LeftSideBar from "./components/Sidebar/left-side-bar/left-side-bar";
import RightSideBar from "./components/Sidebar/right-side-bar/right-side-bar";

function App() {
  return (
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
  );
}

export default App;
