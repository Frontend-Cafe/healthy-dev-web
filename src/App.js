import React from "react";
//components
import { ThemeProvider } from "@material-ui/core";
import TipsLayout from "components/TipsLayout/TipsLayout";

import { theme } from "./styles/theme";
import "./App.scss";
import tipStates from "./mockData";
import TipList from "./components/ListTips/TipList.jsx";

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <TipsLayout sectionTitle="Fitness Tips" />
    </div>
  </ThemeProvider>
);

export default App;
