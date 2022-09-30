import React from "react";
import "./style.css";
import ButtonTag from "../ButtonTag";

export default function JobCard(props) {
  console.log(props);
  /*Destructuración ES6 */
  const { company, position, postedAt, contract, location } = props;

  return (
    <>
      <div className="job-card">
        <div className="job-logo">
          <figure>
            <img alt="company logo" />
          </figure>
        </div>
        <div className="job-description">
          <h3 className="job-company-name">{company}</h3>
          <h2 className="job-position">{position}</h2>
          <p className="job-details">
            {postedAt} • {contract} • {location}
          </p>
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
