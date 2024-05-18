import React from "react";
import BlogCard from "../Blog";

const BlogContainer = ({ blogs }) => {
  if (!blogs.length > 0) {
    return <div>Post Not Found</div>;
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
          date={blog.createAt?.split("T")[0]}
        />
      ))}
    </div>
  );
};

export default BlogContainer;
