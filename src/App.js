import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Route exact path="/" />
      </Router>
    </div>
  );
}

export default App;
