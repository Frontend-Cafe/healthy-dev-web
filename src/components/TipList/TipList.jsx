import React from "react";
// Styles
//import "components/TipList/TipList.scss";
// Components
import Tip from "components/Tip/Tip";

const TipList = ({ tipStates }) => (
  <div>
    {tipStates.map(({ avatar, media, title, id }, index) => (
      <div key={id} className={`card card-${index}`}>
        <Tip avatar={avatar} media={media} title={title} />
      </div>
    ))}
  </div>
);

export default TipList;
