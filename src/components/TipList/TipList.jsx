import React from "react";
//CSS
import "components/TipList/TipList.scss";

import Tip from "components/Tip/Tip";

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
