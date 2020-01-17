import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";

import "./styles/styles.scss";
import mockData from "./mockData";
import TipList from "./components/ListTips/TipList.jsx";

const jss = create({
  // Necessary to override Material IU styles.
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: document.getElementById("jss-insertion-point"),
});

function App() {
  return (
    <StylesProvider jss={jss}>
      <div className="App">
        <Router>
          <Route exact path="/" />
          <TipList tipStates={mockData} />
        </Router>
      </div>
    </StylesProvider>
  );
}

export default App;
