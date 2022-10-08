import React from "react";
import "./App.css";
import { useState } from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import JobCard from "./componentes/JobCard";
import allJobs from "./data/data.json";
import FilterBar from "./componentes/FilterBar";

function App() {
  const jobsData = allJobs.jobs;
  //console.log(allJobs.jobs);

  //Function for FilterBar
  const [filterTags, setFilterTags] = useState([]);

  const addFilterTag = (filterTag) => {
    if (!filterTags.includes(filterTag)) {
      setFilterTags([...filterTags, filterTag]);
    }
  };

  const deleteFilterTag = (filterTag) => {
    const newFilterTag = filterTags.filter((id) => id !== filterTag);
    setFilterTags(newFilterTag);
  };

  const clearAll = () => {
    setFilterTags([]);
  };

  return (
    <>
      <Header></Header>
      <div className="job-page">
        {filterTags.length > 0 && (
          <FilterBar
            tags={filterTags}
            removeFilterTag={deleteFilterTag}
            clearAll={clearAll}
          />
        )}
        {jobsData.map((job, i) => {
          /*Destructuración ES6 */
          const {
            logo,
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
              logo={logo}
              company={company}
              position={position}
              postedAt={postedAt}
              contract={contract}
              location={location}
              languages={languages}
              tools={tools}
              role={role}
              level={level}
              setTags={addFilterTag}
            />
          );
        })}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
