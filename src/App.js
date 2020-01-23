import React from "react";
import "./App.sass";
//components
import { ThemeProvider } from "@material-ui/core";

import { TipsLayout } from "./components/TipsLayout/TipsLayout";
import { theme } from "./styles/theme";
import { TipsEdit } from "./pages/TipsEdit/TipsEdit";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TipsLayout sectionTitle="Fitness Tips">
          <TipsEdit />
        </TipsLayout>
      </div>
    </ThemeProvider>
  );
}

export default App;
