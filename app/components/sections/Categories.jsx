"use client";
import React, { useEffect } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export default function App() {
  const [selected, setSelected] = React.useState("All");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const categories = ["All", "education", "technology", "food"];

  useEffect(() => {
    const query = searchParams.get("category");
    if (!query) {
      setSelected("All");
      return;
    }
    setSelected(query);
  }, [searchParams]);
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <Tabs
      aria-label="Options"
      variant="underlined"
      selectedKey={selected}
      onSelectionChange={(e) => {
        if (e === "All") {
          router.replace(pathname, { scroll: false });
          return;
        }
        router.push(`${pathname}?${createQueryString("category", e)}`, {
          scroll: false,
        });
      }}
      classNames={{
        base: "w-full block paddings snap-start py-6",
      }}
    >
      {categories.map((category, i) => {
        return <Tab key={category} title={category} className="w-full"></Tab>;
      })}
    </Tabs>
  );
}
