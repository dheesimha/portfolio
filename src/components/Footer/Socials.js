import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn, Mail } from "@mui/icons-material";
import "./Socials.css";

function Socials() {
  return (
    <div className="socials">
      <div className="socialsText">
        <p> Find me on</p>
      </div>
      <div className="github">
        <a href="https://github.com/dheesimha" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
      </div>

      <div className="gmail">
        <a
          href="mailto:dheemanth.simha01@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Mail />
        </a>
      </div>

      <div className="linkedin">
        <a
          href="https://www.linkedin.com/in/dheemanth-narasimha/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
    </div>
  );
}

export default Socials;
