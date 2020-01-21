import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import { theme } from "./styles/theme";
import "./App.scss";
import tipStates from "./mockData";
import TipList from "./components/ListTips/TipList.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Route exact path="/" />
          <TipList tipStates={tipStates} />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
