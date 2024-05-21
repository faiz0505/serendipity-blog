"use server";

import { Blog } from "@/lib/database/Modals";
import { connectToDatabase } from "@/lib/database/connectToDatabase";
import { revalidatePath } from "next/cache";

export const addNewComment = async (postId, comment, user, path) => {
  try {
    await connectToDatabase();

    const newComment = {
      user: user,
      comment: comment,
      date: new Date().toLocaleDateString(),
    };

    const updatedBlog = await Blog.findByIdAndUpdate(
      postId,
      { $push: { comments: newComment } },
      { new: true, useFindAndModify: false }
    );
    revalidatePath(path);
    return JSON.parse(JSON.stringify(updatedBlog));
  } catch (error) {
    throw new Error(error);
  }
};
