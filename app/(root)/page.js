import Hero from "@/app/components/sections/Hero";
import React from "react";
import Categories from "../components/Categories";

import Posts from "../components/sections/posts";

const page = () => {
  return (
    <main>
      <Hero />
      <Categories />
    </main>
  );
};

export default page;
