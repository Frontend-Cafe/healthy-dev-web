import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PATH from "./constants/paths";
import Login from "./pages/Login/Login";
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
