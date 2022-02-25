import React from "react";
import "./Intro.css";
function Intro() {
  return (
    <div className="introBox">
      <div className="intro">
        <h3>Hello! I am</h3>

        <h1>
          <pre>&nbsp; &nbsp;&nbsp;&nbsp; Dheemanth Narasimha</pre>
        </h1>
        <h2>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; Full stack Web Developer</h2>

        <div className="hero-image">
          {/* <img
            src="/developer-image.png"
            alt="An animated developer illustration"
          /> */}
          <img src="/business.png" alt="An animated developer illustration" />
        </div>

        <div className="brief-intro">
          <h2>
            <img
              className="motion"
              src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-graduation-cap-education-xnimrodx-lineal-gradient-xnimrodx-2.png"
              alt="hat"
            />
            Currently pursuing third year of engineering
          </h2>
          <h2>&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;in Computer Science</h2>

          <br />
          <h2>
            <img
              className="motion"
              src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-working-virus-xnimrodx-lineal-gradient-xnimrodx.png"
              alt="programmer working"
            />
            Interning at <u>Brane Enterprises</u> as the Platform
          </h2>
          <h2>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;QA Engineer</h2>
          <br />
          <h2>
            <img
              className="motion"
              src="https://img.icons8.com/color/64/000000/india.png"
              alt="india flag"
            />
            &nbsp;From Bengaluru,India
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Intro;
