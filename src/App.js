import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { ROUTES } from "lib/routes";
import tipStates from "lib/mockData";
import "./App.scss";
import { theme } from "styles/theme";
import TipList from "components/TipList/TipList";

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.dashboard}>
            <TipList tipStates={tipStates} />
          </Route>
        </Switch>
      </Router>
    </div>
  </ThemeProvider>
);

export default App;
