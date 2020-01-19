import React from "react";
//icons
import HomeIcon from "@material-ui/icons/Home";
import KitchenIcon from "@material-ui/icons/Kitchen";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
//components
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
//style
import "./BottomNavbar.sass";

export const BottomNavbar = () => (
  <BottomNavigation className="bottomNav">
    <BottomNavigationAction icon={<HomeIcon />} showLabel="false" />
    <BottomNavigationAction icon={<KitchenIcon />} showLabel="false" />
    <BottomNavigationAction icon={<FavoriteIcon />} showLabel="false" />
    <BottomNavigationAction icon={<PersonIcon />} showLabel="false" />
  </BottomNavigation>
);
