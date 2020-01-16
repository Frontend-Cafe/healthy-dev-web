import React from "react";

//import logo from "./logo.svg";

import "./App.css";
import { TipsLayout } from "./components/TipsLayout/TipsLayout";

function App() {
  return (
    <div className="App">
      {/*
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.{" "}
        </p>
        <a className="App-link" href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
          Learn React
        </a>
      </header>
      */}
      <TipsLayout sectionTitle="Fitness Tips">CONTENT</TipsLayout>
    </div>
  );
}

export default App;
