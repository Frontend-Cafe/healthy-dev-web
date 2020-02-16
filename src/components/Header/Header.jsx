import React from "react";
//style
import "./Header.sass";
//components
import { Typography } from "@material-ui/core";
import SearchBar from "components/SearchBar/SearchBar";

const Header = ({ isSearchBarVisible, sectionTitle }) => (
  <div className="main-header">
    <Typography align="center" className="mainTitle" color="primary" variant="h1">
      Healthy App
    </Typography>
    {isSearchBarVisible && <SearchBar />}
    <Typography align="center" className="mainTitle" color="secondary" variant="h3">
      {sectionTitle}
    </Typography>
  </div>
);

export default Header;
