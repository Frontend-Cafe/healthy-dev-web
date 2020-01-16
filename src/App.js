import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Hooks
import { ThemeProvider } from "@material-ui/core";
import TipsLayout from "components/TipsLayout/TipsLayout";
// Data
import { ROUTES } from "lib/routes";
import tipStates from "lib/mockData";
// Style
import "./App.scss";
import { theme } from "styles/theme";
// Components
import TipList from "components/TipList/TipList";

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <Switch>
          <TipsLayout>
            <Route exact path={ROUTES.dashboard}>
              <TipList tipStates={tipStates} />
            </Route>
          </TipsLayout>
        </Switch>
      </Router>
    </div>
  </ThemeProvider>
);

export default App;
