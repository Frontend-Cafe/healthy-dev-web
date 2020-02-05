import React, { useEffect, useState } from "react";
// Hooks
import { ThemeProvider } from "@material-ui/core";
// Tip data from mocky API, uncomment if offline
// import tipStates from "lib/mockData";
// Style
import "./App.scss";
import { theme } from "styles/theme";
// Components
import TipList from "components/TipList/TipList";
import TipsLayout from "components/TipsLayout/TipsLayout";

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
        <TipsLayout sectionTitle="Fitness Tips">
          <TipList tipStates={tipStates} />
        </TipsLayout>
      </div>
    </ThemeProvider>
  );
};

export default App;
