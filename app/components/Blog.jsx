"use client";
import Link from "next/link";
import React from "react";
import { truncatedContent } from "../utils/utils";
import { FaEye } from "react-icons/fa6";
import CustomPopover from "./CustomPopover";
import { useUser } from "@clerk/clerk-react";
const Blog = ({ id, title, content, category, date, userId, views }) => {
  const { user } = useUser();
  return (
    <div className="rounded-lg shadow-md p-3 dark:bg-[#18181b] bg-white dark:border dark:border-white h-60 relative">
      {user && user.publicMetadata.userId === userId && (
        <div className="absolute right-2">
          <CustomPopover blogId={id} />
        </div>
      )}

      <Link
        href={`post/${id}`}
        className="flex flex-col justify-between h-full"
      >
        <div>
          <h2 className="text-2xl font-bold mb-4 text-emerald-700 dark:text-gray-100 ">
            {truncatedContent(title, 5)}
          </h2>
          <p className="dark:text-gray-200 text-gray-900 mb-4">
            {truncatedContent(content, 15)}
          </p>
        </div>

        <div className="flex justify-between text-sm">
          <p className="text-gray-500">{category}</p>
          <p className="text-gray-500">{date}</p>
          <div className="flex items-center gap-2">
            <FaEye className="mt-0.5" />
            <span className="font-bold text-xs">{views}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
