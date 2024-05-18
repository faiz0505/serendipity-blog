import Hero from "@/app/components/sections/Hero";
import React from "react";
import Categories from "../components/sections/Categories";
import Footer from "../components/sections/Footer";

const page = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <Footer />
    </main>
  );
};

export default page;
