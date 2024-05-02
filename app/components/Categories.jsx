"use client";
import { Tab, Tabs } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { fetchPosts } from "../actions/blog.actions";
import Pagination from "./Pagination";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const categories = [
    "All",
    "Education",
    "Technology",
    "Science",
    "Art",
    "Busness",
    "Politics",
    "Others",
  ];
  useEffect(() => {
    const filterPosts = fetchPosts(
      selectedCategory === "All" ? null : selectedCategory
    );
    setPosts(filterPosts);
  }, [selectedCategory]);
  // useEffect(() => {
  //   console.log(currentPage);
  // }, [currentPage]);
  return (
    <div className="w-full paddings h-auto">
      <Tabs
        classNames={{
          base:
            "w-full block sticky top-16 z-50 mb-5 bg-white dark:bg-black overflow-x-scroll scrollbar-hide",
        }}
        aria-label="categories"
        variant="underlined"
        onSelectionChange={(category) => setSelectedCategory(category)}
        selectedKey={selectedCategory}
      >
        {categories.map((category) => {
          return (
            <Tab key={category} title={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full mb-5">
                {!posts || posts.length > 0 ? (
                  posts
                ) : (
                  <div>Posts Not Found</div>
                )}
              </div>
            </Tab>
          );
        })}
      </Tabs>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Categories;
