import { fetchBlogByQuery } from "@/app/actions/blog.actions";
import BlogContainer from "@/app/components/sections/BlogContainer";
import React from "react";

const page = async ({ params }) => {
  const blogs = await fetchBlogByQuery(params.query);
  return (
    <section>
      <BlogContainer blogs={blogs} />
    </section>
  );
};

export default page;
