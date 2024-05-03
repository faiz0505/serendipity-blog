"use client";
import { Tab, Tabs } from "@nextui-org/react";
import React, { useEffect, useState, useRef } from "react";
import { fetchPosts, postsCount } from "@/app/actions/blog.actions";
import Pagination from "../Pagination";
import Posts from "./Posts";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const categoriesRef = useRef();
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
      selectedCategory === "All" ? null : selectedCategory,
      currentPage,
      categories
    );

    setPosts(filterPosts);
  }, [selectedCategory, currentPage]);

  useEffect(() => {
    setTotalPages(
      Math.ceil(
        postsCount(selectedCategory === "All" ? null : selectedCategory) / 9
      )
    );
  }, [selectedCategory]);

  return (
    <div className="w-full paddings h-auto" ref={categoriesRef}>
      <Tabs
        classNames={{
          base:
            "w-full block sticky top-16 z-50 mb-5 bg-white dark:bg-black overflow-x-scroll scrollbar-hide",
        }}
        aria-label="categories"
        variant="underlined"
        onSelectionChange={(category) => {
          setSelectedCategory(category);
          setCurrentPage(1);
        }}
        selectedKey={selectedCategory}
      >
        {categories.map((category) => {
          return (
            <Tab key={category} title={category}>
              <Posts posts={posts} currentPage={currentPage} />
            </Tab>
          );
        })}
      </Tabs>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        categoriesRef={categoriesRef}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Categories;
