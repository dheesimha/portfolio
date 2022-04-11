import React from "react";
import "./Intro.css";
function Intro() {
  return (
    <div className="introBox">
      <div className="intro">
        <h3>Hello! I am</h3>

        <h1>
          <pre> Dheemanth A.N.</pre>
        </h1>
        <h2>
          <pre> Full stack Web Developer</pre>
        </h2>

        <div className="hero-image">
          <img src="/business.png" alt="An animated developer illustration" />
        </div>

        <div className="brief-intro">
          <img
            className="motion"
            src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-graduation-cap-education-xnimrodx-lineal-gradient-xnimrodx-2.png"
            alt="hat"
          />
          <h2>
            Currently pursuing third year of engineering in Computer Science
          </h2>
          {/* <h2 class="cs">in Computer Science</h2> */}

          <br />
          <br />

          <img
            className="motion"
            src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-working-virus-xnimrodx-lineal-gradient-xnimrodx.png"
            alt="programmer working"
          />
          <h2>
            Interning at <u>Brane Enterprises</u> as the Platform QA Engineer
          </h2>
          {/* <h2 class="qa">QA Engineer</h2> */}
          <br />
          <br />

          <img
            className="motion"
            src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-workout-hobbies-and-free-time-xnimrodx-lineal-gradient-xnimrodx.png"
            alt="passion icon"
          />
          <h2>
            Passionate about fitness, enthusiastic about motorcycles and touring
            .A curious soul about History and mankind.
          </h2>
          <br />
          <br />
          <img
            className="motion"
            src="https://img.icons8.com/color/64/000000/india.png"
            alt="india flag"
          />
          <h2>From Bengaluru,India</h2>
        </div>
      </div>
    </div>
  );
}

export default Intro;
