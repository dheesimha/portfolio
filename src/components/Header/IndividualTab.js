import React, { useState } from "react";
import "./IndividualTab.css";

function IndividualTab(props) {
  const [isActive, setIsActive] = useState(false);
  const { name, id } = props;

  const colorChange = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      className="{isActive ? demo : singleTab}"
      id={id}
      onClick={colorChange}
    >
      <h2>{name}</h2>
    </div>
  );
}

export default IndividualTab;
