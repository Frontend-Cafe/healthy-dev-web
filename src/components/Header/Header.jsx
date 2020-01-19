import React from "react";
//style
import "./Header.sass";

//components
import { Typography } from "@material-ui/core";

import { SearchBar } from "../SearchBar/SearchBar";

export const Header = ({ searchBarIsVisible, sectionTitle }) => {
  return (
    <>
      <Typography align="center" className="mainTitle" color="primary" variant="h1">
        Healthy App
      </Typography>
      {!searchBarIsVisible && <SearchBar />}
      <Typography align="center" className="mainTitle" color="secondary" variant="h3">
        {sectionTitle}
      </Typography>
    </>
  );
};
