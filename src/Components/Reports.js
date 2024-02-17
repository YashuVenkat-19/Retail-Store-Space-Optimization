import React from "react";
import Navbar from "./Navbar";
import Overview from "./Overview";

const Reports = () => {
  return (
    <>
      <Navbar />
      <div className="bg-teal-100 h-100 p-6 rounded">
        <Overview />
      </div>
    </>
  );
};

export default Reports;
