import React from "react";
//components
import { ThemeProvider } from "@material-ui/core";
import TipsLayout from "components/TipsLayout/TipsLayout";

import tipStates from "./lib/mockData";
import "./App.scss";
import { theme } from "./styles/theme";
import TipList from "./components/TipList/TipList.jsx";

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <TipsLayout sectionTitle="Fitness Tips" />
      <Router>
        <Route exact path="/" />
        <TipList tipStates={tipStates} />
      </Router>
    </div>
  </ThemeProvider>
);

export default App;
