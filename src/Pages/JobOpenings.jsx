import Searchbox from "../Components/Searchbox";
import React from "react";

const JobOpenings = () => {
  return (
    <div className="bg-gray-100 h-screen w-screen pl-32 flex">
      <div className="mt-6 font-medium text-2xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500 hover:to-orange-500">
        <a href="/jobs">Job Openings</a>
      </div>
      <div className="ml-auto mt-6 mr-24">
        <Searchbox />
      </div>
    </div>
  );
};

export default JobOpenings;
