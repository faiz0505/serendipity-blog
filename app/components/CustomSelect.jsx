import React from "react";
import { Select, SelectItem } from "@nextui-org/select";
import Link from "next/link";

export default function CustomSelect({ items, ...props }) {
  return (
    <Select {...props}>
      {items.map((item, i) => {
        return (
          <SelectItem key={i} textValue={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </SelectItem>
        );
      })}
    </Select>
  );
}
