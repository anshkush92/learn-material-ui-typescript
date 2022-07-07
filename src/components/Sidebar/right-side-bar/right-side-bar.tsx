// Test -------------------------- Importing the Packages ---------------------------------
import { Box, Typography, List } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import AvatarGroupList from "./AvatarGroupList";
import ConversationList from "./ConversationList";
import PhotosList from "./PhotosList";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const RightSideBar = () => {
  return (
    <Box
      bgcolor="pink"
      flex={1.5}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Typography variant="h5" component="div" color="black" gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroupList></AvatarGroupList>

      <Typography variant="h5" component="div" color="black" mt={3}>
        Latest Photos
      </Typography>
      <PhotosList></PhotosList>

      <Typography variant="h5" component="div" color="black" mt={3}>
        Latest Conversation
      </Typography>
      <List sx={{ backgroundColor: "orange" }}>
        <ConversationList></ConversationList>
        <ConversationList></ConversationList>
        <ConversationList></ConversationList>
        <ConversationList></ConversationList>
      </List>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default RightSideBar;
