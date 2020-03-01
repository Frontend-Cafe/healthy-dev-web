import React from "react";
// Hooks
import { ThemeProvider } from "@material-ui/core";
// Tip data from mocky API: "http://www.mocky.io/v2/5e2d10a43000005c00e77c8b"
import tipStates from "lib/mockData";
// Style
//import "./App.scss";
import { theme } from "styles/theme";
// Components
import TipList from "components/TipList/TipList";
import TipsLayout from "components/TipsLayout/TipsLayout";

const App = () => (
  //<ThemeProvider theme={theme}>
  <TipsLayout sectionTitle="Fitness Tips">
    <TipList tipStates={tipStates} />
  </TipsLayout>
  //</ThemeProvider>
);

export default App;
