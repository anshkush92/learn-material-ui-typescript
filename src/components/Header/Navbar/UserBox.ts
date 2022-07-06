import { styled, Box } from "@mui/material";

export const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "5px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));
