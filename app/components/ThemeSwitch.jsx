// app/components/ThemeSwitcher.tsx
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import CustomButton from "./CustomButton";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("system");

  useEffect(() => {
    setMounted(true);
  }, []);
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <CustomButton
      isIconOnly
      handleClick={handleClick}
      size="sm"
      radius="full"
      color="none"
    >
      {theme !== "light" ? (
        <MdLightMode className="text-xl" />
      ) : (
        <MdDarkMode className="text-xl" />
      )}
    </CustomButton>
  );
}
