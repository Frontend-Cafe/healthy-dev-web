import React from "react";
//style
//import "./Header.sass";
//components
import { Typography, Box, AppBar } from "@material-ui/core";
import SearchBar from "components/SearchBar/SearchBar";

const Header = ({ isSearchBarVisible, sectionTitle }) => (
  <AppBar>
    <Box display="flex" flexDirection="column" justifyContent="center" m={2}>
      <Typography align="center" variant="h3">
        Healthy App
      </Typography>
      {isSearchBarVisible && <SearchBar />}
      <Box mb={0} mt={1}>
        <Typography align="center" variant="h5">
          {sectionTitle}
        </Typography>
      </Box>
    </Box>
  </AppBar>
);

export default Header;
