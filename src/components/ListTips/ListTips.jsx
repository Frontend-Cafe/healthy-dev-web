import React from "react";
// import "./ListTips.scss";

import Tip from "../../components/Tip/Tip.jsx";

const ListTips = props => {
  let counter = 1;
  return (
    <div className="root container">
      {props.tipState.map(tip => {
        counter++;
        return (
          <div key={tip.id} className={`card-${counter}`}>
            <Tip tipState={tip} />;
          </div>
        );
      })}
    </div>
  );
};

export default ListTips;
