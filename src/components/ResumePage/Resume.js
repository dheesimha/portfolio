import "./Resume.css";
import React from "react";
// import resume from "../../assets/files/dheemanth_an_resume_latest.pdf";

function Resume() {
  return (
    <div className="resume-section">
      <h1 className="resumeTitle">Resume of Dheemanth A.N.</h1>

      {/* <iframe
        className="resume"
        title="resume"
        src={resume}
        width="900px"
        height="800px"
      ></iframe> */}

      <iframe
        title="resume"
        src="https://onedrive.live.com/embed?cid=14937615CB048571&resid=14937615CB048571%21244824&authkey=ADom_BgXEgnmF84&em=2"
        width="850"
        height="800"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}

export default Resume;
