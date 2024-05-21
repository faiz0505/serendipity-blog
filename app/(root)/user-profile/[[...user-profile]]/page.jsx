"use client";
import React from "react";
import { UserProfile } from "@clerk/nextjs";
import { MdDashboard } from "react-icons/md";
import Dashboard from "@/app/components/sections/Dashboard";
const page = () => {
  return (
    <section className="w-full flex justify-center">
      <UserProfile>
        <UserProfile.Link
          label="Dashboard"
          labelIcon={<MdDashboard />}
          url="/dashboard"
        />
      </UserProfile>
    </section>
  );
};

export default page;
