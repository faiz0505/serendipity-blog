import Image from "next/image";
import React from "react";
import CustomButton from "./components/CustomButton";
import Link from "next/link";
import { FaLeftLong } from "react-icons/fa6";

const page = () => {
  return (
    <section className="w-full h-screen paddings">
      <CustomButton
        text={"Go to home"}
        as={Link}
        href={"/"}
        startContent={<FaLeftLong />}
        color={"primary"}
        className="mt-5"
      />
      <div className="grid place-items-center gap-8">
        <Image src={"/404.svg"} height={500} width={500} alt="Not Found" />
        <h1 className="text-xl font-bold">Page Not Found</h1>
      </div>
    </section>
  );
};

export default page;
