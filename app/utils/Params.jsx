"use client";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const SetUrlParams = (name, value) => {
  const searchParams = useSearchParams();
  const createQueryString = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    return params.toString();
  }, [searchParams]);
  return createQueryString;
};

export const getParams = () => {
  const pathname = usePathname();
  console.log("asjhd");
  console.log(pathname);
};
