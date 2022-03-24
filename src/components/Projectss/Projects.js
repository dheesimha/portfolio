import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="project-section">
        <h1>Projects developed</h1>
      </div>

      <div className="project-content">
        <div className="project1">
          <div className="project1-image">
            <img
              src="https://img.icons8.com/color/144/000000/bitcoin--v1.png"
              alt="bitcoin"
            />
          </div>
          <div className="project1-content">
            <h1>DeCrypt</h1>
            <h2>Project Description</h2>
            <h2>Key features</h2>
            <h2>Tech stack </h2>
            <h2>View project</h2>
          </div>
        </div>

        <div className="project2">
          <div className="project2-image">
            <img
              className="project2-image"
              src="/developer-image.png"
              alt="dev"
            />
          </div>
          <div className="project2-content">
            <h1>Name of the project</h1>
            <h2>Project Description</h2>
            <h2>Key features</h2>
            <h2>Tech stack </h2>
            <h2>View project</h2>
          </div>
        </div>

        <div className="project1">
          <div className="project1-image">
            <img src="/developer-image.png" alt="dev" />
          </div>
          <div className="project1-content">
            <h1>Name of the project</h1>
            <h2>Project Description</h2>
            <h2>Key features</h2>
            <h2>Tech stack </h2>
            <h2>View project</h2>
          </div>
        </div>

        <div className="project2">
          <div className="project2-image">
            <img
              className="project2-image"
              src="/developer-image.png"
              alt="dev"
            />
          </div>
          <div className="project2-content">
            <h1>Name of the project</h1>
            <h2>Project Description</h2>
            <h2>Key features</h2>
            <h2>Tech stack </h2>
            <h2>View project</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
