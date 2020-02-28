import React from "react";
//style
//import "./Header.sass";
//components
import { Typography, Box } from "@material-ui/core";
import SearchBar from "components/SearchBar/SearchBar";

const Header = ({ isSearchBarVisible, sectionTitle }) => (
  <Box display="flex" flexDirection="column" justifyContent="center" m={2}>
    <Typography align="center" variant="h3">
      Healthy App
    </Typography>
    {isSearchBarVisible && <SearchBar />}
    <Typography align="center" m={2} variant="h5">
      {sectionTitle}
    </Typography>
  </Box>
);

export default Header;
