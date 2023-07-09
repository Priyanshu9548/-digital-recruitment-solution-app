import React from "react";
import { useState } from "react";
import Search from "../Components/Search";
import persons from "../Assets/person.json";
import Pagination from "../Components/Pagination";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Navbar2 from "../Components/Navbar/Navbar2";

const JobOpenings = () => {
  const people = persons;
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const filteredPeople = people.filter((person) => {
    const { name, jobTitle, location } = person;
    const { city, state, country } = location;
    const searchFields = [name, jobTitle, city, state, country];
    return searchFields.some((field) =>
      field?.toLowerCase()?.includes(searchTerm.toLowerCase())
    );
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPeople = filteredPeople.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>

<div className="navbar-wrapper fixed z-50 w-full">
        <Navbar2 />
      </div>
    <div className="flex flex-col min-h-screen  ">
      <div className="flex-grow bg-gray-100 w-screen pl-32 ">
        <div className="flex w-full my-6">
          <div className="mt-6 font-medium md:text-2xl text-xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500 hover:to-orange-500">
            <a href="/jobs">Job Openings</a>
          </div>
          <div className="ml-auto mt-6 mr-32">
            <Search onSearchChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {currentPeople.map((person) => (
            <Card user={person} key={person.id} />
          ))}
        </div>
        <div className="flex justify-center mb-6">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredPeople.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
      <div className="mt-auto w-screen">
        <Footer />
      </div>
    </div></>
  );
};

export default JobOpenings;
