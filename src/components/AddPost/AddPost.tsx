// Test -------------------------- Importing the Packages ---------------------------------
import { Fab, Tooltip } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const AddPost = () => {
  return (
    <Tooltip title="Add a Post" arrow>
      <Fab
        size="small"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
          color: "white",
          "&: hover": { color: "black" },
          position: "fixed",
          zIndex: 5000,
          right: 50,
          bottom: 25,
        }}
      >
        <AddIcon></AddIcon>
      </Fab>
    </Tooltip>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default AddPost;
