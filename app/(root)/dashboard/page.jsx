import { Divider } from "@nextui-org/divider";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsFileEarmarkPost } from "react-icons/bs";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { currentUser } from "@clerk/nextjs/server";
import { Spinner } from "@nextui-org/spinner";
import { fetchBlogsByUser } from "@/app/actions/blog.actions";
import BlogContainer from "@/app/components/sections/BlogContainer";
import Image from "next/image";
import { countTotalViews } from "@/app/utils/utils";
const Dashboard = async () => {
  const user = await currentUser();
  const blogs = await fetchBlogsByUser(user.publicMetadata.userId);
  if (!blogs) {
    <Spinner />;
  }
  const views = countTotalViews(blogs)
  console.log(views);
  return (
    <section className="paddings">
      <Card className="">
        <CardHeader className="flex-col items-start">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="mt-3 flex flex-col gap-2">
            <p className="text-lg font-semibold flex items-center">
              <span>
                <BsFileEarmarkPost className="mr-1" />
              </span>
              Posts :
              {blogs ? (
                <span className="font-bold ml-2"> 373</span>
              ) : (
                <Image
                  src="/loading.svg"
                  height={40}
                  width={40}
                  alt="loading..."
                  className="pt-1 pl-2"
                />
              )}
            </p>
            <p className="text-lg font-semibold flex items-center">
              <span>
                <AiFillEye className="mr-1" />
              </span>
              Views :
              {blogs ? (
                <span className="font-bold ml-2">{blogs?.views?.length}</span>
              ) : (
                <Image
                  src="/loading.svg"
                  height={40}
                  width={40}
                  alt="loading..."
                  className="pt-1 pl-2"
                />
              )}
            </p>
          </div>
        </CardHeader>
        <Divider className=" mt-2" />
        <CardBody>
          <h1 className="text-xl font-bold">Blogs</h1>
          <BlogContainer blogs={blogs} />
        </CardBody>
      </Card>
    </section>
  );
};

export default Dashboard;
