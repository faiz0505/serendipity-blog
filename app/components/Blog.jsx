import Link from "next/link";
import React from "react";
import { truncatedContent } from "../utils/utils";
import { FaEye, FaEllipsis } from "react-icons/fa6";
import CustomPopover from "./CustomPopover";

const Blog = ({ id, title, content, category, date, views }) => {
  return (
    <div className=" rounded-lg shadow-md p-3 dark:bg-[#18181b] bg-white dark:border dark:border-white">
      <div className="flex justify-end">
        <CustomPopover blogId={id} />
      </div>
      <div>
        <Link
          href={`post/${id}`}
          className="h-40 flex flex-col justify-between"
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
    </div>
  );
};

export default Blog;
