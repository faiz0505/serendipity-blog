"use client";
import BlogViewCounter from "@/app/components/BlogViewCounter";
import CustomButton from "@/app/components/CustomButton";
import { Divider } from "@nextui-org/divider";
import React, { useEffect, useState } from "react";
import { useId } from "react";
const page = () => {
  const [id, setId] = useState();

  const newID = useId();

  return (
    <section className="paddings w-full">
      <BlogViewCounter blogId={"dfdhfe63"} />;
      {/* <div className="flex justify-center"> */}
      <h1 className="text-3xl font-bold pb-2">Dashboard</h1>
      {/* </div> */}
      <Divider />
      {/* <CustomButton text={"Click to add session"} handleClick={handleCount} /> */}
    </section>
  );
};

export default page;
