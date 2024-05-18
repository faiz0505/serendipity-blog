"use server";

import { connectToDatabase } from "@/lib/database/connectToDatabase";
import { Blog } from "@/lib/database/Modals";
export const fetchBlogs = async (category, page) => {
  let postsPerPage = 3;
  try {
    await connectToDatabase();

    const blogs = await Blog.find(category ? { category } : {}, null, {
      // sort: { createdAt: -1 },
      skip: (page - 1) * postsPerPage,
      limit: postsPerPage,
    });

    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.log(error);
  }
};

export const totalBlogsCount = async (category) => {
  try {
    await connectToDatabase();

    // Construct query object with category filter if provided
    const query = category ? { category } : {};

    const count = await Blog.countDocuments(query);
    return count;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const fetchBlogById = async (id) => {
  try {
    await connectToDatabase();
    const res = await Blog.findById(id);
    return JSON.parse(JSON.stringify(res));
  } catch (error) {
    console.log(error);
  }
};

export const increamentBLogView = async () => {};
