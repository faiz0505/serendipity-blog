export const truncatedContent = (content, length) => {
  return (
    content.split(" ").slice(0, length).join(" ") +
    (content.split(" ").length > length ? "..." : "")
  );
};

// export const ErrorHandler = (error) => {
//   // Check if error is empty object
//   if (Object.keys(error).length === 0 && error.constructor === Object) {
//     // If error is empty, return a custom message
//     throw new Error("An empty error object was received.");
//   } else {
//     // If error is not empty, log the error and throw it
//     console.log(error, typeof error);
//     throw new Error(typeof error === "string" ? error : JSON.stringify(error));
//   }
// };

export const countTotalViews = (posts) => {
  return posts.reduce((totalViews, post) => {
    return totalViews + (post.views || 0); // Ensures views is a number, defaults to 0 if undefined
  }, 0);
};
