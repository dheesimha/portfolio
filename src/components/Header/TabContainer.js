import React from "react";
import IndividualTab from "./IndividualTab";
import "./TabContainer.css";

function TabContainer() {

  return (
    <div className="tabContainer">
      <IndividualTab
        name="_home"
        key="tab-1"
        id="tab-1"

      />
      <IndividualTab
        name="_about me"
        key="tab-2"
        id="tab-2"

      />
      <IndividualTab
        name="_projects"
        key="tab-3"
        id="tab-3"

      />
      <IndividualTab
        name="_resume"
        key="tab-4"
        id="tab-4"

      />
      <IndividualTab
        name="_contact"
        key="tab-5"
        id="tab-5"

      />
    </div>
  );
}

export default TabContainer;
