"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import CustomButton from "./CustomButton";
import { FaEllipsis, FaSlack, FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import { deleteBlogById } from "../actions/blog.actions";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
const CustomPopover = ({ blogId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const path = usePathname();

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const deleteBlog = await deleteBlogById(blogId, path);
      if (!deleteBlog) {
        toast.error("Blog Delete Failed! please try again");
        return;
      }
      toast.success("Your blog has been deleted");
    } catch (error) {
      toast.error("Error deleting a blog! please try again");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button isIconOnly size="sm" variant="flat">
          <FaEllipsis />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2 py-2">
          <Button
            color="primary"
            startContent={<FaEdit />}
            as={Link}
            href={`/create-post?edit=${blogId}`}
          >
            Edit this post
          </Button>
          <Button
            color="danger"
            startContent={<FaTrashCan />}
            onPress={handleDelete}
            isLoading={isLoading}
          >
            Delete this post
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CustomPopover;
