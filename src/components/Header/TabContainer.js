import React from "react";
import IndividualTab from "./IndividualTab";
import "./TabContainer.css";

function TabContainer() {
  return (
    <div className="tabContainer">
      <IndividualTab />
      <IndividualTab />
      <IndividualTab />
      <IndividualTab />
    </div>
  );
}

export default TabContainer;
