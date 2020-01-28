import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Hooks
import { ThemeProvider } from "@material-ui/core";
// Data
import { ROUTES } from "lib/routes";
// Tip data from mocky API, uncomment if offline
// import tipStates from "lib/mockData";
// Style
import "./App.scss";
import { theme } from "styles/theme";
// Components
import TipList from "components/TipList/TipList";
import TipsLayout from "components/TipsLayout/TipsLayout";
import Register from "pages/Register/Register";

const App = () => {
  const [tipStates, setTipStates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const handleError = err => {
        console.log("Fetch Error", err);
      };
      const endpoint = "http://www.mocky.io/v2/5e2d10a43000005c00e77c8b";
      const data = await fetch(endpoint).catch(handleError);
      const tipStates = await data.json();

      setTipStates(tipStates);
      localStorage.setItem("tipStates", JSON.stringify(tipStates));
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Register />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;

// <TipsLayout sectionTitle="Fitness Tips">
// <Route exact path={ROUTES.dashboard}>
//   <TipList tipStates={tipStates} />
// </Route>
// </TipsLayout>
