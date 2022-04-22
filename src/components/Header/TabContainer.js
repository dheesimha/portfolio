import React, { useState } from "react";
import "./TabContainer.css";
import { Link } from "react-router-dom";

function TabContainer() {
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);
  const [tab5, setTab5] = useState(false);

  const tab1ClickHandler = () => {
    setTab1(true);
    setTab2(false);
    setTab3(false);
    setTab4(false);
    setTab5(false);
  };

  const tab2ClickHandler = () => {
    setTab1(false);
    setTab2(true);
    setTab3(false);
    setTab4(false);
    setTab5(false);
  };

  const tab3ClickHandler = () => {
    setTab1(false);
    setTab2(false);
    setTab3(true);
    setTab4(false);
    setTab5(false);
  };

  const tab4ClickHandler = () => {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(true);
    setTab5(false);
  };

  const tab5ClickHandler = () => {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(false);
    setTab5(true);
  };
  return (
    <div className="tabContainer">
      <Link to="/">
        <div
          className={tab1 ? "active singleTab" : "singleTab"}
          onClick={tab1ClickHandler}
        >
          <h2 className="h2-heading">_home</h2>
        </div>
      </Link>

      <Link to="/about">
        <div
          className={tab2 ? "active singleTab" : "singleTab"}
          onClick={tab2ClickHandler}
        >
          <h2 className="h2-heading">_about</h2>
        </div>
      </Link>

      <Link to="/projects">
        <div
          className={tab3 ? "active singleTab" : "singleTab"}
          onClick={tab3ClickHandler}
        >
          <h2 className="h2-heading">_projects</h2>
        </div>
      </Link>

      <Link to="/resume">
        <div
          className={tab4 ? "active singleTab" : "singleTab"}
          onClick={tab4ClickHandler}
        >
          <h2 className="h2-heading">_resume</h2>
        </div>
      </Link>

      <Link to="/contact">
        <div
          className={tab5 ? "active singleTab" : "singleTab"}
          onClick={tab5ClickHandler}
        >
          <h2 className="h2-heading">_contact</h2>
        </div>
      </Link>
    </div>
  );
}

export default TabContainer;
