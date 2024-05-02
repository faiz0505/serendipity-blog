"use client";
import React from "react";
import { Pagination } from "@nextui-org/react";

export default function CustomPagination({ currentPage, setCurrentPage }) {
  return (
    <Pagination total={8} initialPage={currentPage} onChange={setCurrentPage} />
  );
}
