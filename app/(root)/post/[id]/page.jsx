import { fetchBlogById } from "@/app/actions/blog.actions";
import BlogViewCounter from "@/app/components/BlogViewCounter";
import CustomButton from "@/app/components/CustomButton";

import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const data = await fetchBlogById(params.id);
  const { title, content, createAt, category } = data;
  const comments = [
    {
      user: "John Doe",
      content: "Great post! Thanks for sharing.",
    },
    {
      user: "Jane Smith",
      content: "I found this really helpful. Can't wait to read more from you!",
    },
    {
      user: "Alice Johnson",
      content: "Interesting insights. Keep up the good work!",
    },
    {
      user: "Bob Brown",
      content: "I have a question about the third paragraph...",
    },
  ];

  return (
    <main className="md:flex h-[89vh] md:overflow-hidden paddings md:justify-between bg-gray-100 dark:bg-gray-950 pt-5">
      <div className="max-w-3xl overflow-y-scroll scrollbar-hide">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="mb-4">
          <span className="mr-2 text-sm text-gray-600">{category}</span>
        </div>
        <p className="text-gray-700 dark:text-gray-200 mb-4">{content}</p>
        <div className="flex md:items-center md:justify-between text-gray-500 text-sm mb-4 flex-col md:flex-row gap-y-2">
          <div>
            {`Published on ${createAt.split("T")[0]} by`}
            <span className="font-bold ml-2 underline">{"Guest User"}</span>
          </div>
          <div className="underline">
            <span className="font-bold">{234}</span> Views
          </div>
        </div>
        <hr className="border-t my-6" />
        <div>
          <BlogViewCounter blogId={params.id} />
          <h2 className="text-xl font-semibold mb-4">Comments</h2>
          <form className="mb-4">
            <textarea
              rows="4"
              placeholder="Leave a comment..."
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            ></textarea>
            <CustomButton
              text={"Submit"}
              type="submit"
              color="primary"
              radius="sm"
              className="px-8"
            />
          </form>

          {comments.map((comment, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{comment.user}</p>
              <p className="text-sm">{comment.content}</p>
            </div>
          ))}
        </div>
        {/* More options can be added here */}
      </div>
      <figure className="md:flex md:items-end hidden">
        <Image src={"/bg_blog.svg"} alt="background blog image" height={600} width={350} className="" />
      </figure>
    </main>
  );
};

export default page;
