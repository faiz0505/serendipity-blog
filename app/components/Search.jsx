"use client";
import { Input } from "@nextui-org/react";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
const Search = () => {
  return (
    <form action="">
      <Input
        type="text"
        placeholder="search"
        startContent={<FaMagnifyingGlass />}
      />
    </form>
  );
};

export default Search;
