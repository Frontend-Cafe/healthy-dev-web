import React from "react";
// Routing
import { Link } from "react-router-dom";
// icons
import HomeIcon from "@material-ui/icons/Home";
import KitchenIcon from "@material-ui/icons/Kitchen";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
// components
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
// style
import "./BottomNavbar.sass";

const BottomNavbar = () => (
  <BottomNavigation className="bottomNav">
    <Link to="/">
      <BottomNavigationAction icon={<HomeIcon />} showLabel="false" />
    </Link>
    <Link to="/">
      <BottomNavigationAction icon={<KitchenIcon />} showLabel="false" />
    </Link>
    <Link to="/">
      <BottomNavigationAction icon={<FavoriteIcon />} showLabel="false" />
    </Link>
    <Link to="/profile">
      <BottomNavigationAction icon={<PersonIcon />} showLabel="false" />
    </Link>
  </BottomNavigation>
);

export default BottomNavbar;
