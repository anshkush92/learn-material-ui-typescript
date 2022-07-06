import { styled, Box } from "@mui/material";

export const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
