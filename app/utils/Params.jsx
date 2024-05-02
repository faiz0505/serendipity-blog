"use client";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const SetUrlParams = () => {
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
};

export const getParams = () => {
  const pathname = usePathname();
  console.log("asjhd");
  console.log(pathname);
};