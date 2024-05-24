import React from "react";
import BlogCard from "../Blog";
import Image from "next/image";

const BlogContainer = ({ blogs }) => {
  if (!blogs.length > 0) {
    return (
      <div className="w-full h-[80vh] flex flex-col gap-3 items-center justify-center">
        <Image
          src={"/web_search.svg"}
          height={200}
          width={200}
          alt="Nothing is Here"
        />
        <h3 className="text-2xl font-bold">Post Not Availble</h3>
      </div>
    );
  }
  return (
    <div className="paddings w-full grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 mt-10">
      {blogs.map((blog) => (
        <BlogCard
          key={blog._id}
          id={blog._id}
          title={blog.title}
          content={blog.content}
          category={blog.category}
          date={
            !blog.updatedAt
              ? blog.createAt?.split("T")[0]
              : blog.updatedAt?.split("T")[0]
          }
          userId={blog.user}
          views={blog.views}
        />
      ))}
    </div>
  );
};

export default BlogContainer;
