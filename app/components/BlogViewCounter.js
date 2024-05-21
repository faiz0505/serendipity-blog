"use client";
import { useEffect } from "react";
import { incrementViews } from "../actions/blog.actions";

const BlogViewCounter = ({ blogId }) => {
  useEffect(() => {
    const updateViews = async () => {
      const viewedBlogs =
        JSON.parse(sessionStorage.getItem("viewedBlogs")) || [];

      if (!viewedBlogs.includes(blogId)) {
        await incrementViews(blogId);

        sessionStorage.setItem(
          "viewedBlogs",
          JSON.stringify([...viewedBlogs, blogId])
        );
      }
    };
    setTimeout(() => {
      updateViews();
    }, 5000);
  }, [blogId]);

  return null;
};

export default BlogViewCounter;
