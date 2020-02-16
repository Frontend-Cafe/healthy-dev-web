import React from "react";
// Hooks
import { ThemeProvider } from "@material-ui/core";
// Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Tip data from mocky API: "http://www.mocky.io/v2/5e2d10a43000005c00e77c8b"
import tipStates from "lib/mockData";
// Style
import "./App.scss";
import { theme } from "styles/theme";
// Components
import TipList from "components/TipList/TipList";
import TipsLayout from "components/TipsLayout/TipsLayout";
import Profile from "components/Profile/index";

import EditProfile from "./pages/EditProfile/EditProfile";

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <TipsLayout sectionTitle="Home">
              <TipList tipStates={tipStates} />
            </TipsLayout>
          </Route>

          <Route path="/comida">
            <TipsLayout sectionTitle="Comida">
              <TipList tipStates={tipStates} />
            </TipsLayout>
          </Route>

          <Route path="/salud">
            <TipsLayout sectionTitle="Salud">
              <TipList tipStates={tipStates} />
            </TipsLayout>
          </Route>

          <Route path="/profile">
            <TipsLayout isSearchBarVisible={false} sectionTitle="Perfil">
              <Profile tipStates={tipStates} />
            </TipsLayout>
          </Route>
          <Route path="/edit-profile">
            <EditProfile />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  </Router>
);

export default App;
