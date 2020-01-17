import React from "react";

import Tip from "../Tip/Tip.jsx";

const TipList = props => {
  let counter = 0;
  const tipStates = props.tipStates;
  return (
    <div className="grid-container">
      {tipStates.map(tipState => {
        counter++;
        return (
          <div key={tipState.id} className={`card card-${counter}`}>
            <Tip tipState={tipState} />;
          </div>
        );
      })}
    </div>
  );
};

export default TipList;
