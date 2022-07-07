// Test -------------------------- Importing the Packages ---------------------------------
import { ImageList, ImageListItem } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import { imagePhotosData } from "./photos-images-data";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const PhotosList = () => {
  return (
    <ImageList sx={{ height: 150 }} cols={3} rowHeight={100}>
      {imagePhotosData.map((image) => (
        <ImageListItem key={image.img}>
          <img src={image.img} alt={image.title} loading="lazy"></img>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default PhotosList;
