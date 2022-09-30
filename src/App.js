import React from "react";
import "./App.css";
import Header from "./componentes/Header";
import JobCard from "./componentes/JobCard";
import allJobs from "./data/data.json";

function App() {
  const jobsData = allJobs.jobs;
  console.log(allJobs.jobs);
  return (
    <>
      <Header></Header>
      <div className="job-page">
        {jobsData.map((job, i) => {
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
          } = job;
          return (
            <JobCard
              key={i}
              company={company}
              position={position}
              postedAt={postedAt}
              contract={contract}
              location={location}
              languages={languages}
              tools={tools}
              role={role}
              level={level}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
