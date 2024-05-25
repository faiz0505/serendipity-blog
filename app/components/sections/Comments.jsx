"use client";
import React, { useState } from "react";
import CustomButton from "../CustomButton";
import { useUser } from "@clerk/clerk-react";
import { usePathname } from "next/navigation";
import { addNewComment } from "@/app/actions/comment.acctions";
import toast from "react-hot-toast";
const Comments = ({ postId, comments }) => {
  const [loading, setLoading] = useState(false);
  const { isSignedIn, user } = useUser();
  const userId = user?.username;
  const path = usePathname();

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!isSignedIn) {
      toast.error("please sign in to continue");
      return;
    }
    const formData = new FormData(e.target);
    try {
      let comment = formData.get("comment");
      setLoading(true);
      const newComment = await addNewComment(postId, comment, userId, path);
      if (!newComment) {
        toast.error("comment faile");
        return;
      }
      setLoading(false);
      toast.success("your comment has been added");
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <form className="mb-4" onSubmit={handleCommentSubmit}>
        <textarea
          rows="4"
          required
          name="comment"
          placeholder="Leave a comment..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        ></textarea>
        <CustomButton
          text={"Submit"}
          isLoading={loading}
          type="submit"
          color="primary"
          radius="sm"
          className="px-8"
        />
      </form>

      {comments.map((comment) => (
        <div key={comment._id} className="mb-4 border p-2 flex justify-between">
          <div>
            <p className="font-semibold">{comment.user}</p>
            <p className="text-sm">{comment.comment}</p>
          </div>
          <p className="text-xs">{comment.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
