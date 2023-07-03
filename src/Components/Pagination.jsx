import React from "react";
const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
    const pageNumbers = Math.ceil(totalItems / itemsPerPage);
  
    if (pageNumbers === 1) {
      // Hide pagination if only one page
      return null;
    }
  
    return (
        <div className="">
      <ul className=" flex justify-center gap-10 ">
        {Array.from({ length: pageNumbers }, (_, index) => (
          <li
            key={index}
            className={` ${currentPage === index + 1 ? 'active' : ''}`}
          >
            <button className=" " onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
      </div>
    );
  };
  export default Pagination;