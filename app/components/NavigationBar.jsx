"use client";
import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import CustomButton from "./CustomButton";
import Link from "next/link";
import CustomSelect from "./CustomSelect";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "./ThemeSwitch";
export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    {
      title: "Categories",
      type: "dropdown",
      items: [
        { title: "blog1", href: "/category/blog1" },
        { title: "blog2", href: "/category/blog2" },
        { title: "blog3", href: "/category/blog3" },
        { title: "blog4", href: "/category/blog4" },
      ],
    },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>Serendipity</NavbarBrand>
      <NavbarContent className="hidden md:flex">
        {navItems.map((item, i) => {
          return item.type === "dropdown" ? (
            <CustomSelect
              key={i}
              items={item.items}
              label={item.title}
              size="sm"
              variant={"underlined"}
              className=" w-28"
            />
          ) : (
            <NavbarItem key={i}>
              <Link href={item.href}>{item.title}</Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <SignedIn>
          <UserButton
            userProfileMode="navigation"
            userProfileUrl="/user-profile"
          />
          <CustomButton
            text={"Dashboard"}
            variant="bordered"
            color="primary"
            size="sm"
            as={Link}
            href="/dashboard"
            className=""
          />
        </SignedIn>
        <SignedOut>
          <CustomButton
            text={"Sign Up"}
            color="primary"
            size="sm"
            as={Link}
            href="/sign-up"
            className="hidden md:flex"
          />
          <CustomButton
            text={"Sign in"}
            color="primary"
            variant="bordered"
            size="sm"
            as={Link}
            href="/sign-in"
          />
        </SignedOut>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu className="items-center">
        {navItems.map((item, i) => {
          return item.type === "dropdown" ? (
            <CustomSelect
              key={i}
              items={item.items}
              label={item.title}
              size="sm"
              variant={"underlined"}
              className="w-28"
            />
          ) : (
            <NavbarMenuItem key={i} className="mt-3">
              <Link href={item.href}>{item.title}</Link>
            </NavbarMenuItem>
          );
        })}
        <NavbarMenuItem>
          <SignedOut>
            <CustomButton
              text={"Sign up"}
              color="primary"
              as={Link}
              href="/sign-up"
              className="mt-3 w-28"
            />
          </SignedOut>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
