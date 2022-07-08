// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";
import {
  Fab,
  Modal,
  Tooltip,
  Typography,
  Button,
  Box,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
} from "@mui/material";
import {
  Add as AddIcon,
  EmojiEmotions,
  PersonAdd,
  VideoCameraBack,
  Image,
} from "@mui/icons-material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const AddPost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Tooltip title="Add a Post" arrow>
        <Fab
          onClick={openModal}
          size="small"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "green",
            color: "white",
            "&: hover": { color: "black" },
            position: "fixed",
            zIndex: 500,
            right: 50,
            bottom: 25,
          }}
        >
          <AddIcon></AddIcon>
        </Fab>
      </Tooltip>

      <Modal open={isModalOpen} onClose={closeModal} disableScrollLock={true}>
        <Box sx={style}>
          <Typography variant="h4" component="div" textAlign="center" mb={1.5}>
            Create Post
          </Typography>
          <Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
            <Avatar
              alt="Ansh Singh"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ height: 60, width: 60 }}
            ></Avatar>
            <Stack spacing={-0.5}>
              <Typography variant="body1" component="div">
                Ansh Singh
              </Typography>
              <Typography variant="subtitle2" component="div">
                8th July 2022
              </Typography>
            </Stack>
          </Stack>
          <TextField
            variant="standard"
            fullWidth
            multiline
            placeholder="What's on your Mind ?"
            maxRows={4}
          ></TextField>
          <Stack direction="row" spacing={1.25} mt={1.25} mb={2}>
            <EmojiEmotions color="primary"></EmojiEmotions>
            <Image color="warning"></Image>
            <VideoCameraBack color="info"></VideoCameraBack>
            <PersonAdd color="error"></PersonAdd>
          </Stack>
          <ButtonGroup fullWidth={true}>
            <Button variant="contained">Post</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default AddPost;
