import React from "react";
// Hooks
import { ThemeProvider } from "@material-ui/core";
import "./App.scss";
import { theme } from "styles/theme";
// Components
import TipList from "components/TipList/TipList";
import TipsLayout from "components/TipsLayout/TipsLayout";

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <Switch>
          <TipsLayout sectionTitle="Fitness Tips">
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