"use client";
import { Spinner, Tab, Tabs } from "@nextui-org/react";
import React, { useEffect, useState, useRef } from "react";
import Pagination from "../Pagination";
import { fetchBlogs, totalBlogsCount } from "@/app/actions/blog.actions";
import { categories } from "@/app/utils/constants";
import BlogContainer from "./BlogContainer";
const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const categoriesRef = useRef();

  useEffect(() => {
    totalBlogsCount(
      selectedCategory === "All" ? null : selectedCategory
    ).then((count) => setTotalBlogs(count));
    fetchBlogs(
      selectedCategory !== "All" && selectedCategory,
      currentPage
    ).then((res) => setBlogs(res));
    setTotalPages(Math.ceil(totalBlogs / 3));
    setLoading(false);
  }, [selectedCategory, totalBlogs, currentPage]);
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
        {categories?.map((category) => {
          return <Tab key={category} title={category}></Tab>;
        })}
      </Tabs>
      {loading ? (
        <div className="w-full h-60 flex justify-center  items-center">
          <Spinner />
        </div>
      ) : (
        <BlogContainer blogs={blogs} />
      )}
    
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
