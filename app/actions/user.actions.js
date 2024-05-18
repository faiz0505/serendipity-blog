"use server";

import { connectToDatabase } from "@/lib/database/connectToDatabase";
import { User } from "@/lib/database/Modals";
import { Blog } from "@/lib/database/Modals";
import { revalidatePath } from "next/cache";
export const createUser = async (user) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    // ErrorHandler(error);
    throw new Error(error);
  }
};
export async function updateUser(clerkId, user) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });
    revalidatePath("/", "layout");
    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    // ErrorHandler(error);
    throw new Error(error);
  }
}

export async function deleteUser(clerkId) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete blogs by the user
    await Blog.deleteMany({ user: userToDelete._id });

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    throw new Error(error);
  }
}

export const fetchUserById = async (userId) => {
  try {
    const userData = await User.findById(userId);
    return JSON.parse(JSON.stringify(userData));
  } catch (error) {
    // ErrorHandler(error);
  }
};
