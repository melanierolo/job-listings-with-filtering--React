import React from "react";
import "./style.css";
import ButtonTag from "../ButtonTag";

export default function JobCard() {
  return (
    <>
      <div className="job-card">
        <div className="job-logo">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
              alt="company logo"
            />
          </figure>
        </div>
        <div className="job-description">
          <h3 className="job-company-name">Photosnap</h3>
          <h2 className="job-position">Senior Frontend Developer</h2>
          <p className="job-details">1d ago • Full Time • USA only </p>
        </div>
        <div className="job-tags">
          <span>Frontend</span>
          <span>Senior</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <ButtonTag></ButtonTag>
        </div>
      </div>
    </>
  );
}
