// Test -------------------------- Importing the Packages ---------------------------------
import {
  ListItem,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------

const ConversationList = () => {
  return (
    <>
      <ListItem sx={{ gap: 1 }}>
        <Avatar
          alt="Ansh"
          src="https://mui.com/static/images/avatar/5.jpg"
          sx={{ height: 55, width: 55 }}
        ></Avatar>
        <ListItemText
          primary="Heading"
          secondary={
            <>
              <Typography
                variant="body2"
                component="span"
                sx={{ color: "red" }}
              >
                My Name
              </Typography>
              {" - Your Friendly Neighbourhood Spiderman"}
            </>
          }
        ></ListItemText>
      </ListItem>
      <Divider variant="middle" component="li"></Divider>
    </>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default ConversationList;
