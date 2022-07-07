// Test -------------------------- Importing the Packages ---------------------------------
import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Tooltip,
  CardActions,
  Button,
  Checkbox,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import { MoreVert, FavoriteBorder, Favorite } from "@mui/icons-material";
// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------
type PostProps = { name ?: string; date ?: string } & React.ComponentProps<
  typeof Card
> &
  React.ComponentProps<typeof CardHeader> &
  React.ComponentProps<typeof CardMedia> &
  React.ComponentProps<typeof CardActionArea> &
  React.ComponentProps<typeof CardActions>;

// Test -------------------------- The current component ----------------------------------
const Post = (props: PostProps) => {
  // Found <Card> and <CardContent> similar as the <AppBar> and <ToolBar>
  const [isLiked, setIsLiked] = useState(false);

  // Set Like on clicking the card
  const likeHandler = () => {
    console.log(isLiked);
    setIsLiked(true);
  };

  // Toggle on clicking the heart icon
  const toggleLikeHandler = () => {
    console.log(isLiked);
    setIsLiked((previousState) => !previousState);
  };

  return (
    <Card sx={{ margin: "20px 5px" }}>
      <CardActionArea onClick={likeHandler}>
        <CardHeader
          title={
            <Typography variant="h6" component="div" color="blue">
              {props.name}
            </Typography>
          }
          subheader={
            <Typography variant="subtitle2" color="red">
              {props.date}
            </Typography>
          }
          avatar={
            <Avatar
              alt="Ansh"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              sx={{ height: 56, width: 56 }}
            ></Avatar>
          }
          action={
            <Tooltip title="A random Tooltip" arrow>
              <MoreVert></MoreVert>
            </Tooltip>
          }
        ></CardHeader>
        <CardMedia
          component="img"
          height="272"
          image="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        ></CardMedia>
        <CardContent>
          <Typography variant="body2" component="div" color="brown">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like This impressive paella is a perfect party
            dish and a fun meal to cook together with your guests. Add 1 cup of
            frozen peas along with the mussels, if you like
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "red",
            "&:hover": { backgroundColor: "black" },
          }}
        >
          Button 1
        </Button>
        <Button variant="contained">Button 2</Button>
        <Checkbox
          onClick={toggleLikeHandler}
          checked={isLiked}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          sx={{
            "&.Mui-checked": {
              color: "red",
            },
          }}
        ></Checkbox>
      </CardActions>
    </Card>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Post;
