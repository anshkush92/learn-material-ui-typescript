// Test -------------------------- Importing the Packages ---------------------------------
import { AvatarGroup, Tooltip, Avatar } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import { avatarImageData } from "./avatar-image";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------

const AvatarGroupList = () => {
  return (
    <AvatarGroup
      total={20}
      max={6}
      spacing="medium"
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {avatarImageData.map((img) => (
        <Tooltip title={img.alt} arrow>
          <Avatar alt={img.alt} src={img.src}></Avatar>
        </Tooltip>
      ))}
    </AvatarGroup>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default AvatarGroupList;
