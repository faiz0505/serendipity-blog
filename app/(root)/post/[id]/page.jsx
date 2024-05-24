import { fetchBlogById } from "@/app/actions/blog.actions";
import { fetchUserById } from "@/app/actions/user.actions";
import BlogViewCounter from "@/app/components/BlogViewCounter";
import Comments from "@/app/components/sections/Comments";
import Image from "next/image";
import React from "react";
export const generateMetadata = async ({ params }) => {
  const data = await fetchBlogById(params.id);
  const userData = await fetchUserById(data.user);

  return {
    title: data.title,
    description: data.content.substring(0, 150),
    openGraph: {
      title: data.title,
      description: data.content.substring(0, 150),
      type: "article",
      publishedTime: data.createAt,
      authors: [userData?.username],
    },
  };
};
const page = async ({ params }) => {
  const data = await fetchBlogById(params.id);
  const { title, content, createAt, category, views, user, comments } = data;
  const userData = await fetchUserById(user);

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
            <span className="font-bold ml-2 underline">
              {userData?.username}
            </span>
          </div>
          <div className="underline">
            <span className="font-bold">{views}</span> Views
          </div>
        </div>
        <hr className="border-t my-6" />
        <BlogViewCounter blogId={params.id} />
        <Comments postId={params.id} comments={comments} />
      </div>
      <figure className="md:flex md:items-end hidden">
        <Image
          src={"/bg_blog.svg"}
          alt="background blog image"
          height={600}
          width={350}
          className=""
        />
      </figure>
    </main>
  );
};

export default page;
