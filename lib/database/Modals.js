import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: String,
  email: String,
  username: String,
  name: String,
  profilePic: String,
  createdAt: String,
  updatedAt: String,
});
export const User =
  mongoose.models.users || mongoose.model("users", userSchema);

const postScheme = new mongoose.Schema({
  title: String,
  content: String,
  createAt: String,
  updatedAt: String,
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
      comment: String,
      date: String,
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});
export const Post =
  mongoose.models.posts || mongoose.model("posts", postScheme);
