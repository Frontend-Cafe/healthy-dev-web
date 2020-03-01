// Hooks
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#26B0A1",
    },
    secondary: {
      main: "#dfe6e9",
    },
  },
  overrides: {
    MuiGridListTileBar: {
      root: {
        backgroundColor: "rgba(0,0,0,0)",
      },
    },
  },
});
