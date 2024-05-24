import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import Search from "../Search";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="w-full h-[89vh] bg-emerald-700 dark:bg-zinc-900 flex flex-col md:flex-row-reverse md:justify-between gap-3 paddings justify-center snap-start">
      <figure className="w-full md:w-80 h-72 md:border relative md:rounded-full overflow-hidden self-center light:bg-slate-50 dark:bg-gray-950">
        <Image
          src={"/heroImage.png"}
          fill
          priority
          sizes="(min-width: 800px) 50vw 100vw"
          alt="hero image"
          className=" object-contain"
        />
      </figure>
      <aside className="w-full md:w-1/2 self-center flex flex-col gap-3">
        <div className="my-3 ">
          <Search />
        </div>
        <h1 className="text-2xl md:text-3xl text-gray-100 ">
          Spark Something Unexpected: Explore and Share on Serendipity
        </h1>
        <h3 className="text-gray-100 text-lg md:text-xl">
          Unleash the power of serendipitous discovery!
        </h3>
        <p className="text-xs font-extralight text-gray-100">
          Serendipity is your gateway to explore a world of ideas, thoughts, and
          blogs. Dive into unexpected connections, share your passions, and
          ignite conversations that spark creativity.
        </p>

        <SignedOut>
          <CustomButton
            text={"Join Now"}
            className=" self-start"
            size="lg"
            as={Link}
            href={"/sign-up"}
            color="secondary"
          />
        </SignedOut>
      </aside>
    </section>
  );
};

export default Hero;
