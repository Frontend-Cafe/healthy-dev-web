import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" />
        <Route exact component={Login} path="/login" />
      </Router>
    </div>
  );
}

export default App;
