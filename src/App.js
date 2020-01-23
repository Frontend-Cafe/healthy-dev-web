import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PATH from "./constants/paths";
import Login from "./pages/Login/Login";
import loginMaterial from "./pages/Login/LoginMaterial";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path={PATH.home} />
        <Route exact component={Login} path={PATH.login} />
        <Route exact component={loginMaterial} path="/loginm" />
      </Router>
    </div>
  );
};

export default App;
