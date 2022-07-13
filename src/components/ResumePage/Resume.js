import "./Resume.css";
import React from "react";
import resume from "../../assets/files/dheemanth_an_resume_latest.pdf";

function Resume() {
  return (
    <div className="resume-section">
      <h1 className="resumeTitle">Resume of Dheemanth A.N.</h1>

      <iframe
        className="resume"
        title="resume"
        src={resume}
        width="900px"
        height="800px"
      ></iframe>

      <button className="resume-mobile">
        <a
          href="https://pdfhost.io/v/VRZnuJV1s_Dheemanth_AN_resume"
          target="_blank"
          rel="noreferrer"
        >
          Click to view/download my resume
        </a>
      </button>
    </div>
  );
}

export default Resume;
