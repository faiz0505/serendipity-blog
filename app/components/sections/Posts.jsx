import React from "react";

const Posts = ({ posts, currentPage }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full mt-10">
      {!posts || posts.length > 0 ? (
        posts.slice((currentPage - 1) * 9, currentPage * 9)
      ) : (
        <div className="text-3xl">Posts Not Found</div>
      )}
    </div>
  );
};

export default Posts;
