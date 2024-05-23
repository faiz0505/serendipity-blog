"use client";
import {
  createNewBlog,
  fetchBlogById,
  updateBlog,
} from "@/app/actions/blog.actions";
import CustomButton from "@/app/components/CustomButton";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/app/utils/constants";
import Categories from "@/app/components/sections/Categories";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [otherCategory, setOtherCategory] = useState("");

  const searchParam = useSearchParams();
  const query = searchParam.get("edit");
  useEffect(() => {
    if (query) {
      fetchBlogById(query).then((res) => {
        setTitle(res.title);
        setContent(res.content);
        categories.includes(res.category)
          ? setSelectedCategory(res.category)
          : setSelectedCategory("Others");
        setOtherCategory(res.category);
      });
    }
  }, []);
  const { user } = useUser();
  const router = useRouter();
  const userId = user?.publicMetadata.userId;
  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    if (selectedValue === "Others") {
      setOtherCategory("");
    }
  };

  const handleOtherCategoryChange = (e) => {
    setOtherCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const category =
      selectedCategory === "Others" ? otherCategory : selectedCategory;
    if (query) {
      const updatePost = await updateBlog(query, {
        title,
        content,
        category,
        updatedAt: new Date().toLocaleDateString(),
      });
      if (!updatePost) {
        alert("update failed!");
        return;
      }
      alert("post updated successfully");
      router.push("/");
      return;
    }
    const newPost = await createNewBlog(title, content, category, userId);
    if (newPost) {
      alert("Post uploaded successfully");
      router.push("/");
      return;
    }
    alert("post upload failed!");
  };

  return (
    <main className="flex justify-center md:items-center pt-5 paddings h-screen bg-gray-100 dark:bg-gray-950">
      <div className="md:w-[50%] w-full">
        <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              className="mt-1 p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
              rows="6"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="mt-1 p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={selectedCategory}
              onChange={handleCategoryChange}
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.slice(1, categories.length).map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {selectedCategory === "Others" && (
              <input
                type="text"
                name="category"
                placeholder="Enter your category"
                className="mt-2 p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
                value={otherCategory}
                onChange={handleOtherCategoryChange}
                required
              />
            )}
          </div>
          <CustomButton
            type="submit"
            text={query ? "Update" : "Sumbit"}
            color="primary"
          />
        </form>
      </div>
    </main>
  );
};

export default CreatePost;
