"use server";

import { connectToDatabase } from "@/lib/database/connectToDatabase";
import { Blog } from "@/lib/database/Modals";
import { revalidatePath } from "next/cache";
import { categories } from "../utils/constants";

export const fetchBlogs = async (category, page) => {
  let postsPerPage = 6;
  try {
    await connectToDatabase();

    let query = {};
    if (category && category !== "All") {
      if (category === "Others") {
        query = {
          category: {
            $nin: categories.filter((cat) => cat !== "Others" && cat !== "All"),
          },
        };
      } else {
        query = { category };
      }
    }

    const blogs = await Blog.find(query, null, {
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
      views: 0,
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
    throw new Error();
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
    return;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deleteBlogById = async (blogId, path) => {
  try {
    await connectToDatabase();
    const res = await Blog.findByIdAndDelete(blogId);
    revalidatePath(path);
    revalidatePath("/");
    return JSON.parse(JSON.stringify(res));
  } catch (error) {
    throw new Error(error);
  }
};

export const updateBlog = async (blogId, data) => {
  try {
    await connectToDatabase();
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, data, {
      new: true,
    });
    revalidatePath("/");
    return JSON.parse(JSON.stringify(updatedBlog));
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchBlogByQuery = async (query) => {
  try {
    await connectToDatabase();
    const res = await Blog.find({ $text: { $search: query } });
    return JSON.parse(JSON.stringify(res));
  } catch (error) {
    throw new Error(error);
  }
};
