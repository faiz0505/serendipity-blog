import Hero from "@/app/components/sections/Hero";
import Link from "next/link";
import React from "react";
import Categories from "../components/sections/Categories";
import Blogs from "../components/sections/Blogs";

const page = () => {
  return (
    <main className="h-[89vh] overflow-y-scroll scrollbar-hide snap-y snap-mandatory ">
      <Hero />
      <Categories />
      <Blogs />
    </main>
  );
};

export default page;
