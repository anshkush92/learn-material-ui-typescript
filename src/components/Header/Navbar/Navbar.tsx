// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";
import {
  AppBar,
  Typography,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  CatchingPokemon,
  LightMode,
  Mail,
  NotificationsActive,
  DarkMode,
} from "@mui/icons-material";

// Test -------------------------- Importing the styles / other components ----------------
import { UserBox } from "./UserBox";
import { Icons } from "./Icons";
import { Search } from "./Search";
import { StyledToolBar } from "./StyledToolbar";
import CustomBadge from "./CustomBadge";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const Navbar = () => {
  const [anchorElement, setOpenMenu] = useState<null | HTMLElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const open = Boolean(anchorElement);

  const toggleMode = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  const currentThemeIcon = isDarkMode ? (
    <DarkMode></DarkMode>
  ) : (
    <LightMode></LightMode>
  );

  const anchorElementClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log("ICon Butotn clicked");
    setOpenMenu(event.currentTarget);
  };

  const closeMenuHandler = () => {
    setOpenMenu(null);
  };

  return (
    <AppBar position="sticky">
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
          <Tooltip
            title="Change from dark mode to light mode and vice versa"
            arrow
          >
            <IconButton
              onClick={toggleMode}
              color="warning"
              sx={{ color: "white", p: "0" }}
            >
              {currentThemeIcon}
            </IconButton>
          </Tooltip>

          <Tooltip title="Mail Notification" arrow>
            <div>
              <CustomBadge
                icon={<Mail color="info" sx={{ color: "aquamarine" }}></Mail>}
                badgeContent={5}
              ></CustomBadge>
            </div>
          </Tooltip>

          <Tooltip title="Notifications" arrow>
            <div>
              <CustomBadge
                icon={<NotificationsActive></NotificationsActive>}
              ></CustomBadge>
            </div>
          </Tooltip>

          <Avatar
            alt="Ansh Singh"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            onClick={anchorElementClickHandler}
          ></Avatar>
        </Icons>

        <UserBox>
          <Avatar
            alt="Ansh Singh"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            onClick={anchorElementClickHandler}
          ></Avatar>
          <Typography variant="body1" component="span" sx={{ color: "white" }}>
            Ansh
          </Typography>
        </UserBox>
      </StyledToolBar>

      <Menu open={open} anchorEl={anchorElement} onClose={closeMenuHandler}>
        <MenuItem onClick={closeMenuHandler}>Profile</MenuItem>
        <MenuItem onClick={closeMenuHandler}>My Account</MenuItem>
        <MenuItem onClick={closeMenuHandler}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Navbar;
