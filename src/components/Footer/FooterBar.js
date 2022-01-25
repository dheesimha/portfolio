import React from "react";
import DateTime from "./DateTime";
import "./FooterBar.css";
import Socials from "./Socials";
function FooterBar() {
  return (
    <div className="foobar">
      <Socials />
      <DateTime />
    </div>
  );
}

export default FooterBar;
