// https://mui.com/material-ui/customization/breakpoints/#default-breakpoints
// https://mui.com/material-ui/react-badge/#api
// https://mui.com/material-ui/react-avatar/#image-avatars

// Test -------------------------- Importing the Packages ---------------------------------
import { AppBar, Typography, InputBase, Badge, Avatar } from "@mui/material";
import {
  CatchingPokemon,
  Mail,
  NotificationsActive,
} from "@mui/icons-material";

// Test -------------------------- Importing the styles / other components ----------------
import { UserBox } from "./UserBox";
import { Icons } from "./Icons";
import { Search } from "./Search";
import { StyledToolBar } from "./StyledToolbar";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const Navbar = () => {
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
          <Badge badgeContent={8} color="error">
            <NotificationsActive></NotificationsActive>
          </Badge>
          <Avatar
            alt="Ansh Singh"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          ></Avatar>
        </Icons>

        <UserBox>
          <Avatar
            alt="Ansh Singh"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          ></Avatar>
          <Typography variant="body1" component="span">
            Ansh
          </Typography>
        </UserBox>
      </StyledToolBar>
    </AppBar>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Navbar;
