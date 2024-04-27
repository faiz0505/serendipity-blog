import { Card, CardBody, CardFooter } from "@nextui-org/card";
import React from "react";

const Blogs = () => {
  const blogs = [1, 2, 3, 4, , 5, 6, 7, 8];
  return (
    <section className="min-h-screen w-full paddings scrollbar-hide">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {blogs.map(() => {
          return (
            <Card>
              <CardBody>
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                  eveniet numquam minus eum. Vero, beatae. Vel ex obcaecati
                  optio aliquid!
                </p>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
