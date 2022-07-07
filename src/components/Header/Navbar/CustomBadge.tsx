// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import { Badge } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------
type CustomBadgeProps = {
  icon?: JSX.Element;
} & React.ComponentProps<typeof Badge>;

// Test -------------------------- The current component ----------------------------------
const CustomBadge = (props: CustomBadgeProps) => {
  return (
    <Badge
      badgeContent={props.badgeContent}
      color={`${props.color ? props.color : "error"}`}
    >
      {props.icon}
    </Badge>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CustomBadge;
