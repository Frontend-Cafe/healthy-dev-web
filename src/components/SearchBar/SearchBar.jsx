import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";
import "./SearchBar.sass";

const SearchBar = () => (
  <TextField
    color="primary"
    id="standard-search"
    InputProps={{
      endAdornment: <SearchIcon className="searchIco" />
    }}
    label="Buscar"
    type="search"
  />
);

export default SearchBar;
