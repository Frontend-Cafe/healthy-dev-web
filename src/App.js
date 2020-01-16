import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";

import "./utils/styles/styles.scss";
import tipState from "./mockData";
import ListTips from "./components/ListTips/ListTips.jsx";

const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: "jss-insertion-point",
});

function App() {
  return (
    <StylesProvider jss={jss}>
      <div className="App">
        <Router>
          <Route exact path="/" />
          <ListTips tipState={tipState} />
        </Router>
      </div>
    </StylesProvider>
  );
}

export default App;
