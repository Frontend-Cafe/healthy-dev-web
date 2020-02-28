import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";
//import "./SearchBar.sass";

const SearchBar = () => (
  <TextField
    InputProps={{
      endAdornment: <SearchIcon />,
    }}
    label="Buscar"
    type="search"
  />
);

export default SearchBar;
