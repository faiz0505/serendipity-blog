import { categories } from "@/app/utils/constants";
import Link from "next/link";
import React from "react";
import CustomButton from "../CustomButton";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-fit w-full flex justify-between items-center paddings py-3 bg-gray-200 dark:bg-gray-900 mt-5">
      <div>
        <Image
          src={"/logo.svg"}
          height={200}
          width={200}
          alt="Serendipity's Logo"
        />
      </div>
      <div>
        <p className="text-xs">
          Copyright &copy; 2024 Designed by{" "}
          <span className="font-bold">Faiz Ali</span>
        </p>
      </div>
      <div className="flex gap-2">
        <CustomButton
          as={Link}
          href={"https://www.linkedin.com/in/faiz-ali-041343217/"}
          isIconOnly={true}
          size="sm"
          radius={"sm"}
          variant="flat"
          text={<FaLinkedin className="text-xl" />}
        />
        <CustomButton
          as={Link}
          href={"https://githun.com/faiz0505"}
          isIconOnly={true}
          size="sm"
          radius={"sm"}
          variant="flat"
          text={<FaGithub className="text-xl" />}
        />
        <CustomButton
          as={Link}
          href={
            "https://www.instagram.com/sayyad_faiz_ali_?igsh=MXhnNTUxeGFheWx6OA=="
          }
          isIconOnly={true}
          size="sm"
          radius={"sm"}
          variant="flat"
          text={<FaInstagram className="text-xl" />}
        />
      </div>
    </footer>
  );
};

export default Footer;
