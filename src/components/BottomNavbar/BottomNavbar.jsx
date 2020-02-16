import React from "react";
// Routing
import { NavLink } from "react-router-dom";
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
    <BottomNavigationAction
      exact
      activeStyle={{ color: "white", width: "35px", borderBottom: "solid 5px white" }}
      component={NavLink}
      icon={<HomeIcon />}
      showLabel={false}
      to={"/"}
    />
    <BottomNavigationAction
      activeStyle={{ color: "white", width: "35px", borderBottom: "solid 5px white" }}
      component={NavLink}
      icon={<KitchenIcon />}
      showLabel={false}
      to="/comida"
    />
    <BottomNavigationAction
      activeStyle={{ color: "white", width: "35px", borderBottom: "solid 5px white" }}
      component={NavLink}
      icon={<FavoriteIcon />}
      showLabel={false}
      to="/salud"
    />
    <BottomNavigationAction
      activeStyle={{ color: "white", width: "35px", borderBottom: "solid 5px white" }}
      component={NavLink}
      icon={<PersonIcon />}
      showLabel={false}
      to="/profile"
    />
  </BottomNavigation>
);

export default BottomNavbar;
