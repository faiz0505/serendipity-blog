"use client";
// CustomPagination.jsx
import React from "react";
import { Pagination } from "@nextui-org/react";

const CustomPagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  categoriesRef,
}) => {
  console.log(totalPages);
  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <Pagination
        total={totalPages}
        initialPage={currentPage}
        onChange={handleChangePage}
        page={currentPage}
      />
    </div>
  );
};

export default CustomPagination;
