"use client";
import { Input } from "@nextui-org/react";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const Search = () => {
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get("search");
    router.push(`/query/${query.toLowerCase()}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <Input
        type="text"
        name="search"
        placeholder="search"
        startContent={<FaMagnifyingGlass />}
      />
    </form>
  );
};

export default Search;
