import React from "react";
import "./style.css";
import FrontendMentor from "../../assets/logo/favicon-32x32.png";

export default function Footer() {
  return (
    <div className="jobs-footer">
      <p>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt">
          <img src={FrontendMentor} alt="logo" /> Frontend Mentor.
        </a>
      </p>
      <p>
        It was developed by <b>Melanie Rodas</b>
      </p>
    </div>
  );
}
