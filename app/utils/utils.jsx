export const truncatedContent = (content, length) => {
  return (
    content.split(" ").slice(0, length).join(" ") +
    (content.split(" ").length > length ? "..." : "")
  );
};


export const countTotalViews = (posts) => {
  return posts.reduce((totalViews, post) => {
    return totalViews + (post.views || 0); // Ensures views is a number, defaults to 0 if undefined
  }, 0);
};
