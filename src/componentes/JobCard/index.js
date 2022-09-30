import React from "react";
import "./style.css";
import ButtonTag from "../ButtonTag";

export default function JobCard(props) {
  console.log(props);
  /*Destructuración ES6 */
  const {
    company,
    position,
    postedAt,
    contract,
    location,
    languages,
    tools,
    role,
    level,
  } = props;

  let listTags = languages.concat(tools, role, level);

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
          {listTags.map((tag, i) => (
            <ButtonTag key={i} tagName={tag} />
          ))}
        </div>
      </div>
    </>
  );
}
