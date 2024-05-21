"use server";

import { connectToDatabase } from "@/lib/database/connectToDatabase";
import { Blog } from "@/lib/database/Modals";
import { revalidatePath } from "next/cache";

export const fetchBlogs = async (category, page) => {
  let postsPerPage = 3;
  try {
    await connectToDatabase();

    const blogs = await Blog.find(category ? { category } : {}, null, {
      skip: (page - 1) * postsPerPage,
      limit: postsPerPage,
    });

    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.log(error);
  }
};

export const createNewBlog = async (title, content, category, userId) => {
  try {
    await connectToDatabase();
    const newBlog = await Blog.create({
      title: title,
      content: content,
      category: category,
      user: userId,
      createAt: new Date().toLocaleDateString(),
      updatedAt: "",
      views: [],
      comments: [],
    });
    if (!newBlog) {
      throw new Error("post uploaded failed");
    }
    revalidatePath("/");
    return JSON.parse(JSON.stringify(newBlog));
  } catch (error) {
    throw new Error(error);
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

export const fetchBlogsByUser = async (user) => {
  try {
    await connectToDatabase();
    const res = await Blog.find({ user: user });
    return JSON.parse(JSON.stringify(res));
  } catch (error) {
    throw new Error(error);
  }
};

export const incrementViews = async (blogId) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      { $inc: { views: 1 } },
      { new: true }
    );
    return updatedBlog;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
