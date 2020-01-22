import React from "react";
//CSS
import "./TipList.scss";

import Tip from "../Tip/Tip.jsx";

const TipList = ({ tipStates }) => (
  <div className="grid-container">
    {tipStates.map(({ avatar, media, title, id }, index) => (
      <div key={id} className={`card card-${index}`}>
        <Tip avatar={avatar} media={media} title={title} />
      </div>
    ))}
  </div>
);

export default TipList;
