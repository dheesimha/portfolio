import "./About.css";
import React from "react";
import resume from "../../assets/files/dheemanth_an_resume_latest.pdf";

function About() {
  return (
    <div className="about">
      <h1 className="resumeTitle">Resume of Dheemanth A.N.</h1>

      <iframe
        className="resume"
        title="resume"
        src={resume}
        width="900px"
        height="800px"
      ></iframe>
    </div>
  );
}

export default About;
