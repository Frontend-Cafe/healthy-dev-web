import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { FaSearch } from "react-icons/fa";
import { TextField, ThemeProvider } from "@material-ui/core";
import "./SearchBar.sass";

export function SearchBar() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#ffffff",
            },
            secondary: {
                main: "#dfe6e9",
            },
            contrastThreshold: 3,
            tonalOffset: 0.2,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <TextField
                color="primary"
                id="standard-search"
                InputProps={{
                    endAdornment: (
                        <a href="#">
                            <FaSearch className="searchIco" />
                        </a>
                    ),
                }}
                label="Buscar"
                type="search"
            />
        </ThemeProvider>
    );
}
