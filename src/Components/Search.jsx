import React from "react";
import SearchBox from "./Searchbox";

const Search = ({ onSearchChange }) => {
  return (
    <div className="search-area flex flex-wrap items-center ml-4 mt-1 ">
      <SearchBox  searchChange={onSearchChange} />
    </div>
  );
};

export default Search;