import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#C4C4C4",
      dark: "#212121",
    },
    secondary: {
      main: "#dfe6e9",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
