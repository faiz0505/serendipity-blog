import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <main className="h-fit w-full flex justify-center py-5">
      <SignUp />
    </main>
  );
};

export default page;
