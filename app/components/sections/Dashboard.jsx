import { Divider } from "@nextui-org/divider";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsFileEarmarkPost } from "react-icons/bs";
const Dashboard = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="mt-3 flex flex-col gap-2">
          <p className="text-lg font-semibold flex items-center">
            <span>
              <BsFileEarmarkPost className="mr-1" />
            </span>
            Posts : <span className="font-bold">38</span>
          </p>
          <p className="text-lg font-semibold flex items-center">
            <span>
              <AiFillEye className="mr-1" />
            </span>
            Views : <span className="font-bold">383</span>
          </p>
        </div>
        <Divider className=" bg-black mt-2" />
      </div>
    </div>
  );
};

export default Dashboard;
