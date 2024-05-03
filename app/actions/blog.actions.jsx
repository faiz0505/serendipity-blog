// "use server";
import Blog from "../components/Blog";
import { data } from "../data";

export const fetchPosts = (category, page, categories) => {
  if (!category) {
    const res = data;
    return res.slice(0, page * 9).map((post) => {
      return (
        <Blog
          key={post.uniqueId}
          title={post.title}
          content={post.content}
          category={post.category}
          date={"03-May-2024"}
        />
      );
    });
  }
  if (category === "Others") {
    const othersCategoryData = data.filter(
      (post) => !categories.includes(post.category)
    );
    return othersCategoryData.slice(0, page * 9).map((post) => {
      return (
        <Blog
          key={post.uniqueId}
          title={post.title}
          content={post.content}
          category={post.category}
          date={"03-May-2024"}
        />
      );
    });
  }
  const res = data.filter((post) => post.category === category);
  return res.slice(0, page * 9).map((post) => {
    return (
      <Blog
        key={post.uniqueId}
        title={post.title}
        content={post.content}
        categoty={post.category}
        date={"03-May-2024"}
      />
    );
  });
};

export const postsCount = (category) => {
  if (category) {
    const res = data.filter((post) => post.category === category);
    return res.length === 0 ? 1 : res.length;
  }
  const res = data;
  return res.length === 0 ? 1 : res.length;
};
