import React from "react";

import Tip from "../Tip/Tip.jsx";

const TipList = ({ tipStates }) => {
  return (
    <div className="grid-container">
      {tipStates.map((tipState, index) => {
        return (
          <div key={tipState.id} className={`card card-${index}`}>
            <Tip tipState={tipState} />;
          </div>
        );
      })}
    </div>
  );
};

export default TipList;
