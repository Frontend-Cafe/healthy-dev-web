import React from "react";
import "./App.scss";
//components
import { ThemeProvider } from "@material-ui/core";
import TipsLayout from "components/TipsLayout/TipsLayout";

import { theme } from "./styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <TipsLayout sectionTitle="Fitness Tips" />
    </div>
  </ThemeProvider>
);

export default App;
