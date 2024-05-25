import React from "react";
import { Select, SelectItem } from "@nextui-org/select";
import Link from "next/link";
import { categories } from "../utils/constants";

export default function CustomSelect({ ...props }) {
  return (
    <Select {...props} className="">
      {categories.map((item, i) => {
        return (
          <SelectItem key={i} textValue={item.title}>
            <Link href={`/category/${item.toLowerCase()}`}>{item}</Link>
          </SelectItem>
        );
      })}
    </Select>
  );
}
