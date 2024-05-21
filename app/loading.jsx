import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="h-screen w-full grid place-items-center">
      <Image
        src="/loading.svg"
        height={100}
        width={100}
        alt="loading..."
        className="pt-1 pl-2"
      />
    </div>
  );
};

export default loading;
