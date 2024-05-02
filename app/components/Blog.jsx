import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import React from "react";

const Blog = ({ title, content, categoty }) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardBody>{content}</CardBody>
      <CardFooter>{categoty}</CardFooter>
    </Card>
  );
};

export default Blog;
