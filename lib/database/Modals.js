import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: String,
  email: String,
  username: String,
  name: String,
  profilePic: String,
  totalViews: Number,
  createdAt: String,
  updatedAt: String,
});
export const User =
  mongoose.models.users || mongoose.model("users", userSchema);

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  createAt: String,
  updatedAt: String,
  views: Number,
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
      comment: String,
      date: String,
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});
export const Blog =
  mongoose.models.blogs || mongoose.model("blogs", blogSchema);
