// Test -------------------------- Importing the Packages ---------------------------------
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
} from "@mui/material";
import { theme } from "../../Test/theme/theme";
import { CatchingPokemon, Mail } from "@mui/icons-material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const Navbar = () => {
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    flex: "1",
  });

  const Search = styled("div")({
    backgroundColor: "aquamarine",
    color: "black",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  });

  const Icons = styled(Box)({});

  return (
    <AppBar position="static">
      <StyledToolBar>
        <Typography
          variant="h4"
          component="div"
          mr={2}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Material UI
        </Typography>
        <CatchingPokemon
          fontSize="large"
          sx={{ display: { xs: "block", sm: "none" } }}
        ></CatchingPokemon>
        <Search>
          <InputBase
            sx={{ backgroundColor: "navajowhite" }}
            placeholder="Search..."
          ></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="info" sx={{ color: "aquamarine" }}></Mail>
          </Badge>
        </Icons>
      </StyledToolBar>
    </AppBar>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Navbar;
