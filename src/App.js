import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./pages/Login/index";
import PATH from "./constants/paths";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path={PATH.home} />
        <Route exact component={Login} path={PATH.login} />
      </Router>
    </div>
  );
};

export default App;
