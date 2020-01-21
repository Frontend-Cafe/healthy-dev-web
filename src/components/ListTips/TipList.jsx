import React from "react";
//CSS
import "./TipList.scss";

import Tip from "../Tip/Tip.jsx";

const TipList = ({ tipStates }) => (
  <div className="grid-container">
    {tipStates.map((tipState, index) => (
      <div key={tipState.id} className={`card card-${index}`}>
        <Tip tipState={tipState} />
      </div>
    ))}
  </div>
);

export default TipList;
