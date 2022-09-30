import React from "react";
import "./App.css";
import Header from "./componentes/Header";
import JobCard from "./componentes/JobCard";

function App() {
  return (
    <>
      <Header></Header>
      <div className="job-page">
        <JobCard></JobCard>
      </div>
    </>
  );
}

export default App;
