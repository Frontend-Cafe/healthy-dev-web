import React from "react";
//icons
import HomeIcon from "@material-ui/icons/Home";
import KitchenIcon from "@material-ui/icons/Kitchen";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
//components
import { BottomNavigation, BottomNavigationAction, Box } from "@material-ui/core";
//style
//import "./BottomNavbar.sass";

const BottomNavbar = () => (
  <Box clone bgcolor="primary.main" bottom={0} component="footer" left={0} position="fixed" width={1} zIndex="appBar">
    <BottomNavigation component="footer">
      <BottomNavigationAction icon={<HomeIcon />} showLabel="false" />
      <BottomNavigationAction icon={<KitchenIcon />} showLabel="false" />
      <BottomNavigationAction icon={<FavoriteIcon />} showLabel="false" />
      <BottomNavigationAction icon={<PersonIcon />} showLabel="false" />
    </BottomNavigation>
  </Box>
);

export default BottomNavbar;
