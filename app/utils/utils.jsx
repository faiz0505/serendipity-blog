export const truncatedContent = (content, length) => {
  return (
    content.split(" ").slice(0, length).join(" ") +
    (content.split(" ").length > length ? "..." : "")
  );
};
