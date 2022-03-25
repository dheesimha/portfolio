import React from "react";
import Dots from "./Dots";
import TabContainer from "./TabContainer";
import "./TopHeader.css";

function TopHeader() {
  return (
    <div className="topHeader">
      <div className="topHead">
        <Dots />
        <h3>dheemanth_a.n.</h3>
      </div>
      <TabContainer />
    </div>
  );
}

export default TopHeader;
