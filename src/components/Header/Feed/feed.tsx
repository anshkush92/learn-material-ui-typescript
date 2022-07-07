// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/system";

// Test -------------------------- Importing the styles / other components ----------------
import Post from "../Post/Post";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const Feed = () => {
  return (
    <Box bgcolor="violet" flex={5} p={2} m={0} sx={{ ml: { xs: "0" } }}>
      <Post name="Ansh Singh" date="1st July 2022"></Post>
      <Post name="Adarsh Pandey" date="26th July 2022"></Post>
      <Post name="Rohit Lakra" date="3rd July 2022"></Post>
      <Post name="Rishabh Kumar" date="2nd July 2022"></Post>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Feed;
